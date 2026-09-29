'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/lib/config';
import { MapPin, Navigation, ExternalLink, Shield, Compass, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface CanadaMapProps {
  theme?: 'dark' | 'light';
  className?: string;
}

export const CanadaMap: React.FC<CanadaMapProps> = ({
  theme = 'dark',
  className = '',
}) => {
  const [selectedHub, setSelectedHub] = useState<'toronto' | 'vancouver' | 'montreal'>('toronto');

  const hubs = {
    toronto: {
      name: 'Toronto Headquarters (Registered Office)',
      region: 'Ontario, Canada',
      address: SITE_CONFIG.headquarters.address,
      coordinates: `${SITE_CONFIG.headquarters.coordinates.lat}° N, ${Math.abs(SITE_CONFIG.headquarters.coordinates.lng)}° W`,
      type: 'Global Corporate HQ & Engineering Hub',
      badge: 'Primary HQ',
      pos: { x: 74, y: 82 }, // Percentage coordinates on Canada SVG map
    },
    vancouver: {
      name: 'Vancouver Tech Studio',
      region: 'British Columbia, Canada',
      address: 'Pacific Centre, Vancouver, BC V7Y 1K8, Canada',
      coordinates: '49.2827° N, 123.1207° W',
      type: 'Pacific Innovation Hub & AI Labs',
      badge: 'Engineering Hub',
      pos: { x: 18, y: 68 },
    },
    montreal: {
      name: 'Montreal AI Research Pod',
      region: 'Quebec, Canada',
      address: 'Place Ville Marie, Montréal, QC H3B 2B6, Canada',
      coordinates: '45.5017° N, 73.5673° W',
      type: 'AI Research & French-Canadian Ops',
      badge: 'AI Center',
      pos: { x: 82, y: 77 },
    },
  };

  const currentHub = hubs[selectedHub];

  return (
    <div className={`relative rounded-3xl overflow-hidden border ${theme === 'dark' ? 'bg-[#0F0F14] border-zinc-800' : 'bg-white border-slate-200'} p-6 sm:p-8 lg:p-10 shadow-2xl ${className}`}>
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-hero-grid opacity-20 pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-xs font-mono text-brand-red font-semibold mb-3">
            <span className="text-base" role="img" aria-label="Canadian Flag">🇨🇦</span>
            CANADIAN CORPORATE JURISDICTION
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {SITE_CONFIG.legalName}
          </h3>
          <p className="mt-1 text-sm text-zinc-400">
            Registered and operating under the federal laws of Canada.
          </p>
        </div>

        {/* Hub Selector Pills */}
        <div className="flex items-center gap-2 bg-zinc-900/90 p-1.5 rounded-2xl border border-zinc-800 shrink-0">
          {(Object.keys(hubs) as Array<keyof typeof hubs>).map((hubKey) => (
            <button
              key={hubKey}
              onClick={() => setSelectedHub(hubKey)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                selectedHub === hubKey
                  ? 'bg-brand-red text-white shadow-[0_0_12px_rgba(255, 42, 42,0.4)]'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {hubKey === 'toronto' ? 'Toronto (HQ)' : hubKey === 'vancouver' ? 'Vancouver' : 'Montreal'}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Map Visual + Details Card */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
        {/* Map Canvas Graphic */}
        <div className="lg:col-span-7 relative h-72 sm:h-96 w-full rounded-2xl bg-zinc-950/90 border border-zinc-800/80 p-4 flex items-center justify-center overflow-hidden">
          {/* Stylized Canada Outline SVG */}
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full object-contain opacity-75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Canada Coastlines & Border Vectors */}
            <path
              d="M90 280 L120 220 L180 180 L220 140 L260 150 L320 100 L390 90 L460 70 L540 60 L620 90 L670 140 L700 200 L730 250 L680 290 L640 280 L620 320 L580 340 L530 380 L480 370 L420 380 L350 390 L260 380 L180 370 L130 350 Z"
              fill="#18181E"
              stroke="#2E2E38"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Lakes / Hudson Bay Inset */}
            <ellipse cx="490" cy="220" rx="60" ry="45" fill="#0C0C10" stroke="#272730" strokeWidth="1.5" />
            <ellipse cx="560" cy="380" rx="35" ry="20" fill="#0C0C10" stroke="#272730" strokeWidth="1.5" />

            {/* Grid Coordinates Lines */}
            <line x1="50" y1="200" x2="750" y2="200" stroke="#202028" strokeWidth="1" strokeDasharray="3 6" />
            <line x1="50" y1="350" x2="750" y2="350" stroke="#202028" strokeWidth="1" strokeDasharray="3 6" />
            <line x1="250" y1="50" x2="250" y2="450" stroke="#202028" strokeWidth="1" strokeDasharray="3 6" />
            <line x1="550" y1="50" x2="550" y2="450" stroke="#202028" strokeWidth="1" strokeDasharray="3 6" />
          </svg>

          {/* Interactive Pins on Map */}
          {/* Vancouver Pin */}
          <div
            onClick={() => setSelectedHub('vancouver')}
            className={`absolute cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
              selectedHub === 'vancouver' ? 'scale-125 z-20' : 'opacity-70 hover:opacity-100'
            }`}
            style={{ left: `${hubs.vancouver.pos.x}%`, top: `${hubs.vancouver.pos.y}%` }}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-6 h-6 rounded-full bg-brand-red/30 animate-ping" />
              <span className="w-3.5 h-3.5 rounded-full bg-brand-red border-2 border-white shadow-lg" />
            </div>
            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-zinc-700">
              Vancouver
            </span>
          </div>

          {/* Toronto HQ Pin (Main) */}
          <div
            onClick={() => setSelectedHub('toronto')}
            className={`absolute cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
              selectedHub === 'toronto' ? 'scale-125 z-20' : 'opacity-80 hover:opacity-100'
            }`}
            style={{ left: `${hubs.toronto.pos.x}%`, top: `${hubs.toronto.pos.y}%` }}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-8 h-8 rounded-full bg-red-500/40 animate-ping" />
              <div className="p-1.5 rounded-full bg-brand-red text-white border-2 border-white shadow-[0_0_15px_rgba(255, 42, 42,0.9)]">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
            <span className="absolute top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-white whitespace-nowrap bg-brand-red/90 px-2 py-0.5 rounded-full border border-red-400/40 shadow-lg">
              ★ Toronto HQ
            </span>
          </div>

          {/* Montreal Pin */}
          <div
            onClick={() => setSelectedHub('montreal')}
            className={`absolute cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
              selectedHub === 'montreal' ? 'scale-125 z-20' : 'opacity-70 hover:opacity-100'
            }`}
            style={{ left: `${hubs.montreal.pos.x}%`, top: `${hubs.montreal.pos.y}%` }}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-6 h-6 rounded-full bg-brand-red/30 animate-ping" />
              <span className="w-3.5 h-3.5 rounded-full bg-brand-red border-2 border-white shadow-lg" />
            </div>
            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-zinc-700">
              Montréal
            </span>
          </div>

          {/* Compass Rose */}
          <div className="absolute top-4 right-4 flex items-center gap-1 text-[11px] font-mono text-zinc-500 bg-zinc-900/80 px-2.5 py-1 rounded-lg border border-zinc-800">
            <Compass className="w-3.5 h-3.5 text-brand-red animate-spin" style={{ animationDuration: '20s' }} />
            <span>GEO-CAD: 43.6487° N</span>
          </div>
        </div>

        {/* Selected Hub Details Card */}
        <div className="lg:col-span-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono text-brand-red font-semibold uppercase tracking-wider">
                {currentHub.badge}
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                {currentHub.region}
              </span>
            </div>
            <h4 className="text-xl font-display font-bold text-white">
              {currentHub.name}
            </h4>
            <p className="mt-2 text-xs font-mono text-zinc-400 bg-zinc-950/70 p-2.5 rounded-xl border border-zinc-800/80">
              {currentHub.address}
            </p>
            <div className="mt-4 space-y-2 text-xs text-zinc-400">
              <div className="flex items-center justify-between py-1.5 border-b border-zinc-800">
                <span className="text-zinc-500">Facility Type:</span>
                <span className="text-zinc-200 font-medium">{currentHub.type}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-zinc-800">
                <span className="text-zinc-500">GPS Coordinates:</span>
                <span className="text-zinc-200 font-mono">{currentHub.coordinates}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-zinc-800">
                <span className="text-zinc-500">Office Hours:</span>
                <span className="text-zinc-200">{SITE_CONFIG.headquarters.officeHours}</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-zinc-500">Timezone:</span>
                <span className="text-zinc-200">{SITE_CONFIG.headquarters.timezone}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-3">
            <a
              href={SITE_CONFIG.headquarters.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                size="sm"
                variant="primary"
                className="w-full"
                leftIcon={<Navigation className="w-4 h-4" />}
                rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Get Directions
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
