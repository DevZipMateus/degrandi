
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface LocationMapProps {
  address: string;
  coordinates: [number, number]; // [longitude, latitude]
  className?: string;
}

const LocationMap = ({ address, coordinates, className }: LocationMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Note: Replace 'YOUR_MAPBOX_TOKEN' with your actual Mapbox public token
    // Get your token from https://mapbox.com/ -> Account -> Tokens
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbTNkdjJzOWMwNWsyMmpwc2dnNGNpbzBnIn0.ZdJaGKnhXZbNj9GH_TbOEA';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: coordinates,
      zoom: 15,
    });

    // Add a marker at the location
    new mapboxgl.Marker({
      color: '#0066cc'
    })
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<div class="text-sm font-medium">${address}</div>`)
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [coordinates, address]);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-lg" />
    </div>
  );
};

export default LocationMap;
