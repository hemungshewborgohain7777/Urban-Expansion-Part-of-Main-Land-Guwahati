**Make sure to Add AOi or Geometry Poly and the Satellite you want to use from Dataset**

// Urban Growth Detection - Kamrup Metro (Assam) - Sentinel-2 Harmonized

// Add layer with red outline and transparent fill
Map.addLayer(geometry, {
  color: 'FF0000',      // Outline color (red, fully opaque)
  width: 2,             // Outline width in pixels (optional, default ~1)
  fillColor: '00000000' // Transparent fill (invisible interior)
}, 'Outlined Layer');

// STEP 1: Define ROI
var roi = geometry; // Draw on map and rename as geometry
Map.centerObject(roi, 10);

// STEP 2: Cloud mask function
function maskS2clouds(image) {
  var qa = image.select('QA60');
  var cloudBit = 1 << 10;
  var cirrusBit = 1 << 11;
  var mask = qa.bitwiseAnd(cloudBit).eq(0)
             .and(qa.bitwiseAnd(cirrusBit).eq(0));
  return image.updateMask(mask).divide(10000);
}

// STEP 3: Function to get composite + indices
function getComposite(year) {
  var start = ee.Date.fromYMD(year, 1, 1);
  var end = ee.Date.fromYMD(year, 12, 31);

  var collection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
    .filterBounds(roi)
    .filterDate(start, end)
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
    .map(maskS2clouds);

  // If collection is empty → return a null image to avoid errors
  var size = collection.size();
  print('Image count for ' + year + ':', size);

  var composite = ee.Algorithms.If(
    size.gt(0),
    collection.median().clip(roi),
    ee.Image.constant(0).clip(roi).rename(['B2','B3','B4','B8','B11']) // placeholder
  );

  composite = ee.Image(composite);

  // Calculate indices (only if valid image)
  var ndbi = composite.normalizedDifference(['B11', 'B8']).rename('NDBI');
  var ndvi = composite.normalizedDifference(['B8', 'B4']).rename('NDVI');
  var mndwi = composite.normalizedDifference(['B3', 'B11']).rename('MNDWI');

  return composite.addBands([ndbi, ndvi, mndwi]).set('year', year);
}

// STEP 4: Built-up classification (threshold-based)
function classifyBuiltUp(image) {
  var built = image.select('NDBI').gt(0.0)
    .and(image.select('NDVI').lt(0.3))
    .and(image.select('MNDWI').lt(0.0));
  return built.rename('BuiltUp').set('year', image.get('year'));
}

// STEP 5: Choose years
// NOTE: Sentinel-2 data is only available after mid-2016
var years = [2018, 2020, 2024];

var builtCollection = ee.ImageCollection(
  years.map(function(y){
    var img = getComposite(y);
    return classifyBuiltUp(img);
  })
);

// STEP 6: Visualization
var visParams = {min:0, max:1, palette:['white','red']};

years.forEach(function(y){
  var img = builtCollection.filter(ee.Filter.eq('year', y)).first();
  Map.addLayer(img, visParams, 'Built-up ' + y);
});

// STEP 7: Area calculation
var pixelArea = ee.Image.pixelArea().divide(1e6);

var areaStats = years.map(function(y){
  var img = builtCollection.filter(ee.Filter.eq('year', y)).first();
  var area = img.multiply(pixelArea).reduceRegion({
    reducer: ee.Reducer.sum(),
    geometry: roi,
    scale: 10,
    maxPixels: 1e13
  });
  return [y, area.get('BuiltUp')];
});

print('Built-up area (km²) per year:', areaStats);

// STEP 8: Optional Export
// var lastYear = years[years.length - 1];
// var lastImg = builtCollection.filter(ee.Filter.eq('year', lastYear)).first();

// Export.image.toDrive({
//   image: lastImg.unmask(0).toByte(),
//   description: 'Kamrup_BuiltUp_' + lastYear,
//   folder: 'GEE_exports',
//   region: roi,
//   scale: 10,
//   crs: 'EPSG:4326',
//   maxPixels: 1e13
// });
