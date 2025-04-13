let map;
const markers = [];
const resources = [
  { name: "Biblioteca Central", type: "biblioteca", lat: 55.7558, lng: 37.6173 },
  { name: "Café de Intercambio Lingüístico", type: "cafe", lat: 55.7608, lng: 37.6203 },
  { name: "Centro Cultural Ruso", type: "centro", lat: 55.7508, lng: 37.6103 },
];

// Inicializar el mapa
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.7558, lng: 37.6173 }, // Moscú
    zoom: 12,
  });

  // Agregar marcadores iniciales
  resources.forEach(resource => addMarker(resource));
}

// Agregar un marcador al mapa
function addMarker(resource) {
  const marker = new google.maps.Marker({
    position: { lat: resource.lat, lng: resource.lng },
    map: map,
    title: resource.name,
  });

  markers.push({ marker, type: resource.type });
}

// Filtrar marcadores
function filterMarkers(type) {
  markers.forEach(({ marker, type: markerType }) => {
    if (type === "todos" || markerType === type) {
      marker.setMap(map);
    } else {
      marker.setMap(null);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const filterSelect = document.getElementById("filter-select");
  filterSelect.addEventListener("change", (e) => {
    const selectedType = e.target.value;
    filterMarkers(selectedType);
  });
});
