// Create map object
var mymap = L.map('mapid').setView([39.7498, -104.9533], 22);

// Create tile layer
L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
    {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoiam5hYnJhaGEiLCJhIjoiY2t6enI0cWUzMGQyZjNqcGFuazZnOHFmMiJ9.vRgz3x8lUf0qPpapXjJLzA'
    }).addTo(mymap); 

// Add variable with relative path to geojson data
var gjData = '../Leaflet/DenverZoo/DenverZooTrees/trees.geojson'

// Create point style variable
var pointStyle = {
    radius: 3,
    fillColor: "purple",
    color: "purple",
    weight: 1,
    opacity: 0.5,
    fillOpacity: 0.5,
    };

function onEachOfMyFeatures(feature, layer) {
        // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.SPECIES_CO) {
        layer.bindPopup(feature.properties.SPECIES_CO);
    }
}

// Load geojson
let xhr = new XMLHttpRequest();
xhr.open('GET', gjData);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'json';
xhr.onload = function() {
    if (xhr.status !== 200) return
    	treeLayer = L.geoJSON(xhr.response, {
                            onEachFeature: onEachOfMyFeatures,
                            pointToLayer: function (feature, latlng) {
                                return L.circleMarker(latlng, {
                                    radius: 5,
                                    fillcolor: "purple",
                                    color: "purple",
                                    weight: 1, 
                                    opacity: 1,
                                    fillOpacity: feature.properties.STEMS / 10
                                });
                           }
                           }
                      )
           treeLayer.addTo(mymap);
};
xhr.send();
