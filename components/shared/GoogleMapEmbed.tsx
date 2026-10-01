'use client';

import React from 'react';
import { SITE_CONFIG } from '@/lib/config';
import { MapPin, Navigation, ExternalLink, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface GoogleMapEmbedProps {
  apiKey?: string;
  lat?: number;
  lng?: number;
  address?: string;
  className?: string;
}

export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  apiKey = SITE_CONFIG.headquarters.googleMapsApiKey,
  lat = SITE_CONFIG.headquarters.coordinates.lat,
  lng = SITE_CONFIG.headquarters.coordinates.lng,
  address = SITE_CONFIG.headquarters.address,
  className = '',
}) => {
  // If an official API key is provided, we can use the official Embed API URL;
  // otherwise, we use the standard interactive Google Maps location view for Toronto HQ.
  const mapEmbedUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
        address
      )}&center=${lat},${lng}&zoom=14`
    : `https://maps.google.com/maps?q=${encodeURIComponent(
        address
      )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden border border-zinc-800 bg-[#0B0B0E] shadow-2xl ${className}`}>
      {/* Map iframe */}
      <iframe
        title="PulseCraft Technologies Inc. Canadian Headquarters"
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        className="w-full h-full min-h-[340px] sm:min-h-[420px] border-0 filter contrast-[1.05] brightness-[0.92]"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Floating Info Pill overlay on top of map */}
      <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800 text-xs backdrop-blur-md text-white shadow-xl">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
          <span className="font-display font-bold text-white">
            {SITE_CONFIG.shortName} Canada HQ
          </span>
        </div>
        <p className="text-xs font-sans text-zinc-300 truncate">
          {address}
        </p>
        <div className="mt-2 pt-2 border-t border-zinc-800 flex items-center justify-between text-xs font-sans text-zinc-400">
          <span>GPS: {lat}° N, {Math.abs(lng)}° W</span>
          <a
            href={SITE_CONFIG.headquarters.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-red hover:underline flex items-center gap-1"
          >
            Directions <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
