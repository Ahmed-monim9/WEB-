// Inicializar el mapa de Google
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 55.7558, lng: 37.6173 },
      zoom: 12
    });
  
    // Aquí puedes agregar los marcadores de tus recursos
    const resources = [
      { name: "Biblioteca Central", lat: 55.7558, lng: 37.6173 },
      { name: "Café de Intercambio Lingüístico", lat: 55.7608, lng: 37.6203 },
      { name: "Centro Cultural Ruso", lat: 55.7508, lng: 37.6103 }
    ];
  
    resources.forEach(resource => {
      new google.maps.Marker({
        position: { lat: resource.lat, lng: resource.lng },
        map: map,
        title: resource.name
      });
    });
  }
  