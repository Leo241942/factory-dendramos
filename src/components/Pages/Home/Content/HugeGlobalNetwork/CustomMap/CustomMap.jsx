import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Иконка для маркеров с красной окружностью
const customIcon = new L.Icon({
  iconUrl:
    "data:image/svg+xml;base64," +
    btoa(
      `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="red" stroke="white" stroke-width="4"/>
        <circle cx="25" cy="25" r="12" fill="white"/>
      </svg>`
    ),
  iconSize: [50, 50], // Размер маркера
  iconAnchor: [25, 50], // Точка привязки
});

// Данные для маркеров
const markers = [
  { id: 1, position: [40.7128, -74.006], label: "New York" },
  { id: 2, position: [48.8566, 2.3522], label: "Paris" },
  { id: 3, position: [51.5074, -0.1278], label: "London" },
  { id: 4, position: [35.6895, 139.6917], label: "Tokyo" },
  { id: 5, position: [55.7558, 37.6173], label: "Moscow" },
];

const CustomMap = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Центр карты
      zoom={2} // Масштаб
      style={{ height: "600px", width: "100%" }} // Размер карты
    >
      {/* Используем слой CartoDB Positron для светлого фона с контурными странами */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://carto.com/attributions'>CartoDB</a> & <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
      />
      {/* Маркеры */}
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={customIcon}>
          <Popup>
            <strong>{marker.label}</strong>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CustomMap;
