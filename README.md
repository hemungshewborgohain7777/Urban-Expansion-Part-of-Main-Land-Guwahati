# 🏙️ Urban Expansion Analysis of Guwahati (Kamrup Metropolitan) using NDBI (2018–2024)

---

## 1️⃣ Project Overview / Problem Statement
Guwahati, the largest urban center in Northeast India, has experienced rapid and often unplanned urban expansion over the last decade. This growth has led to increasing pressure on land resources, infrastructure, and the surrounding natural environment.

Understanding the spatial and temporal pattern of urban expansion is essential for sustainable urban planning and policy-making. This project analyzes urban growth in the mainland area of Guwahati (Kamrup Metropolitan District) using multi-temporal satellite data and the **Normalized Difference Built-up Index (NDBI)**.

---

## 2️⃣ Objective
The objectives of this study are:
- To map built-up area expansion in Guwahati for **2018, 2020, and 2024**
- To quantify changes in built-up area (**km² and percentage**)
- To visualize urban growth trends using GIS and remote sensing techniques
- To demonstrate the integration of **Google Earth Engine and ArcGIS** for urban studies

---

## 3️⃣ Study Area
**Guwahati City (Mainland Area), Kamrup Metropolitan District, Assam, India**

- Located on the south bank of the Brahmaputra River
- Rapidly expanding urban core with mixed residential, commercial, and peri-urban land use
- Study area boundary includes the municipal limits and surrounding urban influence zone

📍 *The final map (`Urban_Expansion_Ghy.jpg`) shows the study area boundary with built-up/settlement areas highlighted in red for all three years.*

---

## 4️⃣ Data Sources
### Satellite Imagery
- **Landsat 8** (2018, 2020)
- **Landsat 9** (2024)  
- Source: USGS via **Google Earth Engine**  
  🔗 https://code.earthengine.google.com/

### Administrative Boundary
- **Kamrup Metropolitan / Guwahati Boundary**  
- Source: GADM / State GIS Portal  
  🔗 https://gadm.org/

---

## 5️⃣ Tools & Methods

### Tools Used
- **Google Earth Engine (GEE)** – NDBI computation and satellite image processing
- **ArcGIS 10.8** – Map layout, spatial analysis, and area calculation

### Methodology
- Selected cloud-free Landsat imagery for **2018, 2020, and 2024**
- Computed **Normalized Difference Built-up Index (NDBI)** in GEE:

```text
NDBI = (SWIR - NIR) / (SWIR + NIR)
