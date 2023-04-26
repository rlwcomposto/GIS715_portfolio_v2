// Create map object
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

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
// Add a marker
var marker = L.marker([51.5, -0.07]).addTo(mymap); 

// Add a circle around the marker
var circle = L.circle([51.501, -0.07], {
    color: 'magenta',
    fillColor: 'magenta',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

// Add triangle
var polygon = L.polygon([
    [51.509, -0.08],
    [51.505, -0.06],
    [51.51, -0.047]], {
    color: 'blue'
}).addTo(mymap);
