"use client";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";

type Location = {
  id: number;
  lat: number;
  lng: number;
  name: string;
};

type ZoomOnClickProps = {
  position: { lat: number; lng: number } | null;
};

export default function MapLocals() {
  const locations: Array<Location> = [
    {
      id: 1,
      lat: -12.253682129591299,
      lng: -76.87761833979762,
      name: "Proyectos e Inversiones Flavi SAC",
    },

    {
      id: 2,
      lat: -12.229621181343669,
      lng: -76.88848403772212,
      name: "Comercializadora de Fierro SAC",
    },

    {
      id: 3,
      lat: -12.222734,
      lng: -76.937506,
      name: "Comercializadora Hanna SAC",
    },

    {
      id: 4,
      lat: -12.464998451097618,
      lng: -76.75328467815554,
      name: "Steel House Valery SAC",
    },
  ];

  const initialCenter = locations[0];
  const arrInitialCenter: [number, number] = [
    initialCenter.lat,
    initialCenter.lng,
  ];

  const ZoomOnClick = ({ position }: ZoomOnClickProps) => {
    const map = useMap();
    useEffect(() => {
      if (position) {
        map.setView([position.lat, position.lng], 15);
      }
    }, [position, map]);
    return null;
  };

  const [zoomPosition, setZoomPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  return (
    <MapContainer
      style={{
        height: "500px",
        width: "100%",
        flexBasis: "50%",
      }}
      center={arrInitialCenter}
      scrollWheelZoom={false}
      zoom={10}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {locations.map(({ id, lat, lng, name }) => {
        return (
          <Marker
            key={id}
            position={[lat, lng]}
            eventHandlers={{
              click: () => {
                setZoomPosition({ lat, lng });
              },
            }}
          >
            <Tooltip sticky>{name}</Tooltip>
          </Marker>
        );
      })}

      {zoomPosition && <ZoomOnClick position={zoomPosition} />}
    </MapContainer>
  );
}
