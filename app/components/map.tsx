"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map() {
  // Координаты для ул. Партизана Германа, 10
  const position: [number, number] = [59.8415, 30.1774]; 

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "100%", width: "100%" }} // Важно: 100%
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>Наш офис здесь!</Popup>
      </Marker>
    </MapContainer>
  );
}