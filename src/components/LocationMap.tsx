
import React from 'react';

interface LocationMapProps {
  address: string;
  coordinates: [number, number]; // [longitude, latitude]
  className?: string;
}

const LocationMap = ({ address, coordinates, className }: LocationMapProps) => {
  // Convert coordinates to Google Maps embed URL
  const [longitude, latitude] = coordinates;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1spt-BR!2sbr!4v1640995200000!5m2!1spt-BR!2sbr&q=${encodeURIComponent(address)}`;

  return (
    <div className={`relative ${className}`}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full rounded-lg"
        title={`Mapa de ${address}`}
      />
    </div>
  );
};

export default LocationMap;
