mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JpZWdpdGUiLCJhIjoiN09DU0VUMCJ9.xog8FYRRF4rbv6Y0bFMvDA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/griegite/cinxa7dta002pb1mavrbqmvm7',
    zoom:12.0,
    minZoom:10,
    maxZoom:18,

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
              [-76.54416203498839,38.98811004542634],
              [-76.54287457466125,38.98858538236717],
              [-76.54249906539917,38.988868915162904],
              [-76.54229521751404,38.988702131302944],
              [-76.54186606407164,38.988009974084676],
              [-76.541748046875,38.98795993836079],
              [-76.53870105743408,38.98856870393207],
              [-76.53743505477905,38.988818880046175],
              [-76.53637290000916,38.98899400279994],
              [-76.5365982055664,38.98969448948228],
              [-76.5365982055664,38.99031157914934],
              [-76.53648018836975,38.99116215338513],
              [-76.53605103492737,38.991137136641726],
              [-76.53546094894408,38.990970358126496],
              [-76.53476357460022,38.99144567585887],
              [-76.53445243835448,38.99144567585887],
              [-76.53437733650208,38.991287236969434],
              [-76.53400182723999,38.99115381447166],
              [-76.5338596701622,38.991080848936775],
              [-76.53339296579361,38.990745206507576],
              [-76.5332105755806,38.99075146072887],
              [-76.53291285037994,38.9908682060918],
              [-76.53275728225708,38.99085986714376],
              [-76.53260439634323,38.99081400291156],
              [-76.53238981962204,38.99066181683729],
              [-76.53214037418365,38.99058885079523],
              [-76.53182119131088,38.99061803722108],
              [-76.53162002563477,38.990565918595046],
              [-76.53149396181107,38.99038246072607],
              [-76.53158247470856,38.99017190054035],
              [-76.53163880109787,38.990148968205084],
              [-76.53217792510986,38.98970282856769],
              [-76.5322744846344,38.98967155699231],
              [-76.53250247240067,38.98968615039588],
              [-76.53263926506041,38.98973826966974],
              [-76.53284847736359,38.98958608128247],
              [-76.53314888477325,38.98947767291663],
              [-76.53339296579361,38.98945265557785],
              [-76.53334468603133,38.98933173831579],
              [-76.53343051671982,38.988966900497346],
              [-76.53286188840865,38.98891686544987],
              [-76.53213769197464,38.98894188297804],
              [-76.53132498264313,38.98906280090608],
              [-76.53070271015167,38.98927127960731],
              [-76.53079926967621,38.98944223168407],
              [-76.5303298830986,38.98996133972827],
              [-76.53012067079544,38.989748693519914],
              [-76.53013408184052,38.98970491333889],
              [-76.52998387813568,38.98956523353269],
              [-76.52892976999283,38.989980102598324],
              [-76.52838796377182,38.99006974735332],
              [-76.52704417705536,38.99016564626783],
              [-76.52655601501463,38.99017607005505],
              [-76.5260973572731,38.99012395110358],
              [-76.52623414993285,38.989748693519914],
              [-76.52645409107208,38.98889393270798],
              [-76.5263494849205,38.988510329378194],
              [-76.52587205171584,38.987724353018876],
              [-76.52527660131454,38.987138513504014],
              [-76.5244424343109,38.98421549800125],
              [-76.52419567108154,38.983823529541155],
              [-76.52287602424622,38.982864448625676],
              [-76.52259707450867,38.982614251467474],
              [-76.52252197265625,38.98227231392133],
              [-76.52188897132874,38.981138070236454],
              [-76.52197480201721,38.979895385340214],
              [-76.52332663536072,38.98001214860784],
              [-76.52435660362244,38.97794374221877],
              [-76.52479648590088,38.9768594727967],
              [-76.52489304542542,38.976409079079346],
              [-76.52466773986816,38.973539837037634],
              [-76.52488231658936,38.972555593513405],
              [-76.5236485004425,38.972171901654455],
              [-76.52291893959045,38.97157133631088],
              [-76.52395963668823,38.97066213741985],
              [-76.52283310890198,38.97159635996856],
              [-76.52225375175476,38.97105417873991],
              [-76.52088046073914,38.970094924860504],
              [-76.519775390625,38.96935253685356],
              [-76.51838064193726,38.968426626300584],
              [-76.51713609695435,38.96757577890522],
              [-76.51521563529967,38.96772592918819],
              [-76.51421785354614,38.96760080397448],
              [-76.51306986808777,38.967000199871975],
              [-76.51166439056396,38.96617436091627],
              [-76.50987267494202,38.96542358987469],
              [-76.50741577148438,38.96388865542792],
              [-76.50521636009216,38.96263732556599],
              [-76.5040361881256,38.96201165234699],
              [-76.50216937065125,38.9616028761930],
              [-76.49949789047241,38.961536137005226],
              [-76.49860739707947,38.96155282180808],
              [-76.49752378463745,38.961285864490854],
              [-76.49600028991698,38.960802001789645],
              [-76.49425148963928,38.96046830144975],
              [-76.49240612983704,38.96586571156232],
              [-76.4916443824768,38.96571555733633],
              [-76.4909040927887,38.96536519623797],
              [-76.48931622505188,38.965031517390486]
              ]
             }
            },
            {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                -76.54175341129303,
                38.98799746515702
              ]
             }
           }
           ]
          }
        });


  map.addSource("greenLine",{
    "type":"geojson",
    "data":"greenLine.geojson"
  })

  map.addSource("stops",{
    "type":"geojson",
    "data":"stops.geojson"
  })




  map.addSource("orangeLine",{
    "type":"geojson",
    "data":"orangeLine.geojson"
  })



  map.addSource("brownLine",{
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
              [-76.54416203498839,38.98811004542634],
              [-76.54433101415634,38.98803082229253],
              [-76.54448121786118,38.98792866601539],
              [-76.54467701911926,38.98765138394864],
              [-76.54444634914398,38.987538802949835],
              [-76.5443605184555,38.987492936565644],
              [-76.54419153928757,38.98731781009816],
              [-76.54405206441879,38.987296961680315],
              [-76.54431492090225,38.98713017411648],
              [-76.54467970132828,38.98680493723669],
              [-76.54481649398804,38.98655683886854],
              [-76.54547363519669,38.98545185238267],
              [-76.5455514192581,38.98528089066865],
              [-76.54557287693022,38.985080739844676],
              [-76.54540657997131,38.98504946622734],
              [-76.54478162527084,38.98483263543365],
              [-76.5435665845871,38.98444067039049],
              [-76.54273509979248,38.98419256373625],
              [-76.5423783659935,38.984075807362764],
              [-76.54194384813309,38.98395488091582],
              [-76.54157906770706,38.98346283324293],
              [-76.54155761003494,38.9832751870432],
              [-76.54169976711273,38.98310839000365],
              [-76.5420350432396,38.982860278680285],
              [-76.54341101646423,38.98204713463542],
              [-76.54491305351257,38.981179770693686],
              [-76.54455900192261,38.980912887343116],
              [-76.53863668441772,38.97871106131604],
              [-76.53531074523926,38.977226458152074],
              [-76.53028964996338,38.97744331224084],
              [-76.52949571609497,38.977209777040834],
              [-76.52872323989868,38.976759385551496],
              [-76.5256118774414,38.97382343009093],
              [-76.52466773986816,38.97390683959635],
              [-76.52492523193358,38.972572275721],
              [-76.52399718761444,38.972322042194655],
              [-76.52348220348358,38.97207180778419],
              [-76.52287602424622,38.97159218935954],
              [-76.5241527557373,38.97044109188908],
              [-76.52463018894196,38.970003169460846],
              [-76.52617514133453,38.96870606904894],
              [-76.5267276763916,38.968205573793306],
              [-76.52773082256317,38.968885412321576],
              [-76.52824580669403,38.96912314572727],
              [-76.52857303619385,38.96916902401198],
              [-76.52892172336578,38.96922324376466],
              [-76.52948498725891,38.969331683145505],
              [-76.52997314929962,38.969427610151726],
              [-76.53064906597137,38.96963197594914],
              [-76.53152346611023,38.96988221897967],
              [-76.52559041976927,38.96915234100279],
              [-76.52331590652466,38.96760080397448],
              [-76.52080535888672,38.969936438186416],
              [-76.52061223983765,38.96988638968937],
              [-76.5183162689209,38.96843496789112],
              [-76.51842892169952,38.96843079709598],
              [-76.51956617832182,38.96729216083561],
              [-76.5199202299118,38.966900098693145],
              [-76.51978611946106,38.9661993864806],
              [-76.51990413665771,38.96593244667172],
              [-76.52053713798523,38.965285947654],
              [-76.52096629142761,38.96482713832023],
              [-76.52162075042723,38.96430576047047],
              [-76.52201771736145,38.964180629215555],
              [-76.51834845542908,38.96843496789112],
              [-76.51676058769226,38.96723376873917],
              [-76.51510834693909,38.96599083984087],
              [-76.51239395141602,38.9635382852944],
              [-76.51153564453125,38.96235368772468],
              [-76.5106451511383,38.96091045406172],
              [-76.50982975959778,38.95900000128345],
              [-76.50921821594238,38.95810732665138],
              [-76.50827407836914,38.957139554532766],
              [-76.50573134422302,38.95559609751284],
              [-76.50274872779846,38.95384402448195],
              [-76.50087118148804,38.95266760828427],
              [-76.49968028068542,38.95214196920342],
              [-76.49662256240845,38.95130761345106],
              [-76.49416565895079,38.950715214904456],
              [-76.49215936660767,38.94995593628807],
              [-76.48958444595337,38.948696016462556],
              [-76.48707389831543,38.947260848716084],
              [-76.48689150810242,38.94707310660013],
              [-76.48633897304535,38.94759461125006],
              [-76.48674666881561,38.94785327613301],
              [-76.48710608482361,38.94934266685251],
              [-76.4872294664383,38.94966390388525],
              [-76.48765861988068,38.94995593628807],
              [-76.48899972438812,38.94835391516061],
              [-76.4917892217636,38.94977654509746],
              [-76.4922022819519,38.95043570119494],
              [-76.49289965629578,38.95142025205111],
              [-76.4934092760086,38.9521377974491],
              [-76.49379551410675,38.95286785071821],
              [-76.49324297904968,38.954052606876054],
              [-76.49258315563202,38.955521009557074],
              [-76.49110794067383,38.95984260907648],
              [-76.48913383483887,38.965648822022615],
              [-76.48756742477417,38.96656642707542]
            ]
          }
      }]
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

  map.addLayer({
  "id":"greenLine",
  "type":"line",
  "source":"greenLine",
  "layout":{
    "line-join":"round",
    "line-cap":"round"
  },
  "paint":{
    "line-color":"green",
    "line-width":3
  }
  });



  map.addLayer({
  "id":"orangeLine",
  "type":"line",
  "source":"orangeLine",
  "layout":{
    "line-join":"round",
    "line-cap":"round"
  },
  "paint":{
    "line-color":"orange",
    "line-width":3,
    "line-opacity":0.7
  }
  });

  map.addLayer({
  "id":"brownLine",
  "type":"line",
  "source":"brownLine",
  "layout":{
    "line-join":"round",
    "line-cap":"round"
  },
  "paint":{
    "line-color":"brown",
    "line-width":3
  }
  });

  map.addLayer({
    "id":"stops",
    "type":"symbol",
    "source":"stops",
    "layout":{
      "icon-image":"bus-15",
      "icon-offset":[0,0.5],
      "icon-size":2
    },
    "paint":{
    }
  });


});


map.on("click", function(e){
  var features = map.queryRenderedFeatures(e.point, {layers: ["stops"] });

  if(!features){
    return;
  }
  var feature = features[0];
  var colorAr = feature.properties.lines.split(",")
  var lineViewer = "<ul id='stopList'>";
  for(var i = 0; i < colorAr.length;i++){
    lineViewer += "<li id='" + colorAr[i] + "'></li>";
  };
  lineViewer = lineViewer + "</ul>"
  console.log(lineViewer);
  console.log(colorAr);
  console.log(feature)
  var popup = new mapboxgl.Popup()
    .setLngLat(feature.geometry.coordinates)
    .setHTML(feature.properties.title + "</br>" + lineViewer)
    .addTo(map);
})

map.on("mousemove",function(e){
  var features = map.queryRenderedFeatures(e.point, {layers: ["stops"]});
  map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
})






//Functions for interactivity of the map to select a specific layer







//Need Day of the Week because some lines don't run every day
var todayDate = new Date();
todayDate = todayDate.getDay();
console.log(todayDate)

function getToday(today){
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  $("#availableLines").text("Available lines for today, " + days[today]);
}

getToday(todayDate);


//Clear All Lines off the map

function clearLines(){
  var mapIds = ["redLine","brownLine","connectors","greenLine","brownPoints","orangeLine","orangePoints"];
  for (var i = 0; i < mapIds.length; i++){
    map.setLayoutProperty(mapIds[i],"visibility","none")
  }
};

function addLines(){
  var mapIds = ["redLine","brownLine","connectors","greenLine","brownPoints"];
  for (var i = 0; i < mapIds.length; i++){
    map.setLayoutProperty(mapIds[i],"visibility","visible")
  }
}

function lineToggle(colorLine, colorPoint){

  var visibilityLine = map.getLayoutProperty(colorLine, "visibility")
  var visibilityPoint = map.getLayoutProperty(colorPoint, "visibility")
  if (visibilityLine === "none" && visibilityPoint == "none"){
    map.setLayoutProperty(colorLine,"visibility","visible");
    map.setLayoutProperty(colorPoint,"visibility","visible");
  } else if(visibilityLine === "none" && visibilityPoint == "visibile"){
    map.setLayoutProperty(colorLine,"visibility","visibile");

  }else{
    map.setLayoutProperty(colorLine,"visibility","none");
    map.setLayoutProperty(colorPoint,"visibility","none");
  }
};




$("#clearMap").on('click',function(){
  clearLines();
  $("#busStops").empty();
})


$("#redLine").on("click",function(){
  lineToggle("redLine","connectors");
  $(".busStop").text("");

})

$("#brownLine").on("click",function(){
  lineToggle("brownLine","brownPoints");
})

$("#greenLine").on("click",function(){
  lineToggle("greenLine","greenPoints");
  busStops("greenPoints", "Green Line","green");
})

$("#orangeLine").on("click",function(){
  lineToggle("orangeLine","orangePoints");
  busStops("orangePoints", "Orange Line", "orange");
})




/*

text properties for icons:

"text-field":"{title}",
"text-font":["Open Sans Semibold", "Arial Unicode MS Bold"],
"text-offset":[0,-2.5],
"text-anchor":"top",
"text-size":12



//Function to list BusStops from GeoJSON on the page itself.

function busStops(colorPoints, colorLine, color){
  $("#busStops").empty();
  var loc = colorPoints + ".geojson"
  $("#busLine").text(colorLine);
  $.getJSON(loc,function(data){
    $.each(data.features, function(key, val){
      console.log(val.properties.title, val.properties["lines"]);
      if(val.properties.lines.includes(color)) {
        $("#busStops").append("<li class='busStop'>" + val.properties.title + "</li>");
      };
    })
  })


}



// Green Line Points addTo Map function

map.addSource("greenPoints",{
  "type":"geojson",
  "data":"greenPoints.geojson"
})

map.addLayer({
  "id":"greenPoints",
  "type":"symbol",
  "source":"greenPoints",
  "layout":{
    "icon-image":"{marker-symbol}-15",
    "icon-offset":[0,1.5],
  },
  "paint":{

  }
});


// Orange Line Points addTo Map function(s)

map.addSource("orangePoints",{
  "type":"geojson",
  "data":"orangePoints.geojson"
})

map.addLayer({
  "id":"orangePoints",
  "type":"symbol",
  "source":"orangePoints",
  "layout":{
    "icon-image":"{marker-symbol}-15",
    "icon-offset":[0,1.5],

  },
  "paint":{

  }
});





// BrownLine Points addTo Map function
map.addSource("brownPoints",{
 "type":"geojson",
 "data":{
   "type":"FeatureCollection",
   "features":[
     {
       "type": "Feature",
       "properties": {
         "title":"Annapolis Mall",
         "marker-symbol":"bus"
       },
       "geometry": {
         "type": "Point",
         "coordinates": [
           -76.54416203498839,38.98811004542634],
       }
     },
     {
       "type": "Feature",
       "properties": {
         "title":"Eastport",
         "marker-symbol":"bus"
       },
       "geometry": {
         "type": "Point",
         "coordinates": [
           -76.48756742477417,38.96656642707542],
       }
     },
   ]
 }
});


map.addLayer({
  "id":"brownPoints",
  "type":"symbol",
  "source":"brownPoints",
  "layout":{
    "icon-image":"{marker-symbol}-15",
  },
  "paint":{

  }
});

// Connectors json that would have points that are shared by multiple Lines..

map.addSource("connectors",{
  "type":"geojson",
  "data":{
    "type":"FeatureCollection",
    "features":[
      {
        "type": "Feature",
        "properties": {
          "title":"Annapolis Mall",
          "marker-symbol":"bus"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -76.54416203498839,38.98811004542634],
        }
      },
      {
        "type": "Feature",
        "properties": {
          "title":"Eastport Plaza",
          "marker-symbol":"bus"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -76.48931622505188,38.965031517390486],
        }
      },
    ]
  }
});

map.addLayer({
 "id":"connectors",
 "type":"symbol",
 "source":"connectors",
 "layout":{
   "icon-image":"{marker-symbol}-15",
   "text-field":"{title}",
   "text-font":["Open Sans Semibold", "Arial Unicode MS Bold"],
   "text-offset":[0,-2.5],
   "text-anchor":"top",
   "text-size":12

 },
 "paint":{

 }
});



descriptors

"description":'<strong>Annapolis Mall</strong></br><ul id="lineList"><li class="lineColor"><li></ul>',


"description":'<strong>Robinwood Turnaround</strong></br><ul id="lineList"><li class="lineColor"><li></ul>',

"description":'<strong>West St. at Church Cir.</strong></br><ul id="lineList"><li class="lineColor"><li></ul>',

"description":'<strong>Eastport Shopping Center</strong></br><ul id="lineList"><li class="lineColor"><li></ul>'

map.on("click", function(e){
  var features = map.queryRenderedFeatures(e.point, {layers: ["stops"] });

  if(!features){
    return;
  }
  var feature = features[0];
  var popup = new mapboxgl.Popup()
    .setLngLat(feature.geometry.coordinates)
    .setHTML(feature.properties.description)
    .addTo(map);
})

map.on("mousemove",function(e){
  var features = map.queryRenderedFeatures(e.point, {layers: ["stops"]});
  map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
})


*/
