"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function FitBounds({ bounds }) {
  const map = useMap();
  useEffect(() => {
    if (bounds) map.fitBounds(bounds);
  }, [map, bounds]);
  return null;
}

export default function DeliveryMap({ courierPos, customerPos }) {
  const bounds = [courierPos, customerPos];

  return (
    <div style={{ height: "320px", width: "100%", borderRadius: "8px", overflow: "hidden" }}>
      <MapContainer bounds={bounds} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={courierPos} icon={icon}>
          <Popup>Courier</Popup>
        </Marker>
        <Marker position={customerPos} icon={icon}>
          <Popup>Delivery Address</Popup>
        </Marker>
        <FitBounds bounds={bounds} />
      </MapContainer>
    </div>
  );
}