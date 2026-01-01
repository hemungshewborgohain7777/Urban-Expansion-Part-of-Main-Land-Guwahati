Urban Expansion Analysis of Guwahati (Kamrup Metropolitan) using NDBI (2018–2024)

1.Project Overview / Problem Statement
Guwahati, the largest urban center in Northeast India, has experienced rapid and often unplanned urban expansion over the last decade. This growth has led to increasing pressure on land resources, infrastructure, and the surrounding natural environment.
Understanding the spatial and temporal pattern of urban expansion is essential for sustainable urban planning and policy-making. This project analyzes urban growth in the mainland area of Guwahati (Kamrup Metropolitan district) using multi-temporal satellite data and the Normalized Difference Built-up Index (NDBI).

2.Objective
The objectives of this study are:
	To map built-up area expansion in Guwahati for 2018, 2020, and 2024
	To quantify changes in built-up area (km² and percentage)
	To visualize urban growth trends using GIS and remote sensing techniques
	To demonstrate the integration of Google Earth Engine and ArcGIS for urban studies

3.Study Area
Guwahati City (Mainland Area), Kamrup Metropolitan District, Assam, India
	Located on the south bank of the Brahmaputra River
	Rapidly expanding urban core with mixed residential, commercial, and peri-urban land use
	Study area boundary includes the municipal limits and surrounding urban influence zone
📍 The final map (Urban Expansion Ghy.jpg) shows the study area boundary with built-up/settlement areas highlighted in red for 3 years.


4.Data Sources
	Satellite Imagery (Landsat)
	Landsat 8 (2018, 2020)
	Landsat 9 (2024)
	Source: USGS via Google Earth Engine
	code.earthengine.google.com
	Administrative Boundary (Kamrup Metro / Guwahati)
	Source: GADM / State GIS portal
	https://gadm.org/

5.Tools & Methods
Tools Used
	Google Earth Engine (GEE) – NDBI calculation and image processing
	ArcGIS (10.8) – Map layout, spatial analysis, and area calculation

Methodology
	Selected cloud-free Landsat imagery for 2018, 2020, and 2024
	Computed Normalized Difference Built-up Index (NDBI) in GEE:
"NDBI"=(SWIRⓜ-NIR)/(SWIRⓜ+NIR) 

  Applied thresholding to extract built-up areas
	Exported classified built-up layers to ArcGIS
	Calculated:
	Built-up area (km²)
	Percentage of total study area
	Created a final comparative map showing:
	Study area boundary
	Built-up areas (red)
	Temporal change representation
  
6.Key Outputs (Map Images)
	 Built-up area map using NDBI (2018)
	 Built-up area map using NDBI (2020)
	 Built-up area map using NDBI (2024)
	 Final ArcGIS map showing:
	Guwahati boundary
	Settlement expansion in red
	Area statistics (km² and %)

7.Results & Interpretation
	A consistent increase in built-up area was observed between 2018 and 2024
	Urban expansion is concentrated along:
	Major road corridors
	Peripheral zones of Guwahati
	The percentage of built-up land shows a clear upward trend, indicating rapid urbanization
	Expansion patterns suggest outward sprawl rather than compact growth, raising sustainability concerns.

8.What I Learned
	Practical application of NDBI for urban studies
	Handling and processing multi-temporal satellite data in Google Earth Engine
	Integration of cloud-based analysis (GEE) with desktop GIS (ArcGIS)
	Quantifying spatial change using area statistics
	Presenting urban growth results through professional GIS cartography

 9.Future Improvements
	Use higher-resolution data (Sentinel-2)
	Apply machine learning classification for improved accuracy
	Include population density and road network analysis
	Perform urban growth prediction using CA-Markov or SLEUTH models
	Validate results using ground truth or high-resolution imagery
