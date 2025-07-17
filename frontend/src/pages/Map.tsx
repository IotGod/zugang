import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.1657, 10.4515], 6); // Mitte Deutschland
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Beispielmarker (Hardcoded)
    L.marker([52.52, 13.405]).addTo(map).bindPopup('Berlin<br>4 Mitarbeiter');
    L.marker([48.1351, 11.5820]).addTo(map).bindPopup('München<br>2 Mitarbeiter');
  }, []);

  return (
    <div>
      <h2>Standorte (Live)</h2>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default MapView;
