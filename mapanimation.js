// Initialize the map
let map;
function initMap() {
    map = new mapboxgl.Map({
        container: 'map', // ID in the HTML
        style: 'mapbox://styles/mapbox/streets-v11', // Map style
        center: [-71.092761, 42.357575], // Starting position [longitude, latitude]
        zoom: 13 // Starting zoom level
    });
}

// Add buses to the map (mocked data for demonstration purposes)
const busStops = [
    [-71.092761, 42.357575],
    [-71.092562, 42.359155],
    [-71.091942, 42.361145],
    [-71.090782, 42.362975],
    [-71.089172, 42.364845]
];

let marker = null;
let index = 0;

function moveBus() {
    if (!marker) {
        marker = new mapboxgl.Marker()
            .setLngLat(busStops[0])
            .addTo(map);
    } else {
        index = (index + 1) % busStops.length;
        marker.setLngLat(busStops[index]);
    }
}

// Add Mapbox access token
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox access token

// Initialize the map
initMap();
setInterval(moveBus, 1000); // Move the bus every second
