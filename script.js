mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JpZWdpdGUiLCJhIjoiN09DU0VUMCJ9.xog8FYRRF4rbv6Y0bFMvDA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/griegite/cinxa7dta002pb1mavrbqmvm7',
    zoom:11.0,
    minZoom:9,
    maxZoom:20,
      
  });

map.setCenter([-76.531485,38.986766])

map.on("load",function(){
  map.addSource("redLine",{
    "type":"geojson",
    "data":{

      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [-76.541748046875,38.98800163479981],
              [-76.53646945953369,38.98900234196788],
              [-76.53355121612549,38.98903569862982],
              [-76.533465385437,38.98946933380469],
              [-76.5333366394043,38.98932756875134],
              [-76.53341174125671,38.98899400279994],
              [-76.53226375579834,38.98894396777166],
              [-76.53096556663513,38.98916912512044],
              [-76.52883052825928,38.99002805213255],
              [-76.5271782875061,38.990186493840746],
              [-76.52612686157227,38.99014479868878]
              ]
             }
            }
           ]
          }
        });
    map.addLayer({
    "id":"redLine",
    "type":"line",
    "source":"redLine",
    "layout":{
      "line-join":"round",
      "line-cap":"round"
    },
    "paint":{
      "line-color":"#FF0000",
      "line-width":3
    }
    
  });
  
  
  
  });
  
  
  
  
  


