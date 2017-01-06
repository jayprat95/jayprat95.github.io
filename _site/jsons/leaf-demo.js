


var map = L.map('map').setView([37.8, -96], 4);

var map2 = L.map('map2').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.light'
}).addTo(map);



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.light'
}).addTo(map2);





geojsonLayer = L.geoJson(markers_set, {
    pointToLayer: function(feature, latlng) {
        return new L.Marker(latlng, {radius: 10, fillOpacity: 0.85});
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.job);
    }
});



geojsonLayer.addTo(map2); 

var circle = L.circle([39.96747516, -107.6325288], 200000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.25
}).addTo(map2);


var circle2 = L.circle([40.79943475, -74.004542], 200000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.25
}).addTo(map2);


var circle3 = L.circle([37.65233208, -122.26460822], 200000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.25
}).addTo(map2);


var circle4 = L.circle([32.1426734,  -81.63463372], 200000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.25
}).addTo(map2);


var circle5 = L.circle([47.17862603, -122.38435781], 200000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.25
}).addTo(map2);


var circle6 = L.circle([41.87077146, -87.85595905], 200000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.25
}).addTo(map2);

var circle7 = L.circle([31.68470858, -96.92237867], 200000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.25
}).addTo(map2);

var circle8 = L.circle([33.84987207, -117.72747561], 200000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.25
}).addTo(map2);







// control that shows state info on hover
var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML = '<h4>Density of Developer Jobs</h4>' +  (props ?
    '<b>' + props.name + '</b><br />' + props.density + ' jobs'
    : 'Hover over a state');
};

info.addTo(map);
//new L.geoJson(geoJsonFeatures).addTo(map);

// get color depending on population density value
function getColor(d) {
  return d > 1000 ? '#800026' :
         d > 500  ? '#BD0026' :
         d > 200  ? '#E31A1C' :
         d > 100  ? '#FC4E2A' :
         d > 50   ? '#FD8D3C' :
         d > 20   ? '#FEB24C' :
         d > 10   ? '#FED976' :
                    '#FFEDA0';
}

function style(feature) {
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: getColor(feature.properties.density)
  };
}

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera) {
    layer.bringToFront();
  }

  info.update(layer.feature.properties);
}

var geojson;

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature
  });
}

geojson = L.geoJson(stackData_all, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map);

map.attributionControl.addAttribution('Job data &copy; <a href="http://census.gov/">StackOverflow Jobs</a>');


var legend = L.control({position: 'bottomright'});

maps = [stackData_all, c, csharp, cplus, j, objc, perl, python, r, ruby, rails]
names = ["All", "C", "C#", "C++", "Java", "Objective-C", "Perl", "Python", "R", "Ruby", "Ruby-On-Rails"]

legend.onAdd = function (map) {

  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    labels = [],
    from, to;

  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];

    labels.push(
      '<i style="background:' + getColor(from + 1) + '"></i> ' +
      from + (to ? '&ndash;' + to : '+'));
  }

  div.innerHTML = labels.join('<br>');
  return div;
};

legend.addTo(map);

new Dragdealer('just-a-slider', {
  animationCallback: function(x, y) {
    $('#just-a-slider .value').text(names[Math.round(x * 10)]);
    map.removeLayer(geojson);
    geojson = L.geoJson(maps[Math.round(x * 10)], {
        style: style,
        onEachFeature: onEachFeature
      }).addTo(map);
  }
});





