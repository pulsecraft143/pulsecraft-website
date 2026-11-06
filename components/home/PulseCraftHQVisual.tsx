'use client';

import React from 'react';
import Image from 'next/image';

export const PulseCraftHQVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-screen">
      {/* High-Resolution Architectural Headquarters Photo */}
      <Image
        src="/images/pulsecraft-hq-building.jpg"
        alt="PulseCraft Technologies Inc. Canadian Corporate Headquarters — Ontario, Canada"
        fill
        priority
        className="object-cover object-center lg:object-right"
        sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 60vw, 900px"
      />

      {/* ======================================================== */}
      {/* SEAMLESS EDGE BLENDS (MATCHING REFERENCE COMPOSITION)   */}
      {/* ======================================================== */}

      {/* Left Edge: Wide Organic Horizontal Dissolve into #0B0B0D */}
      <div className="absolute inset-y-0 left-0 w-2/5 sm:w-1/2 lg:w-3/5 bg-gradient-to-r from-dark-void via-dark-void/75 to-transparent z-10 pointer-events-none" />

      {/* Top Header Fade (Ensures navbar elements float over clean dark void) */}
      <div className="absolute inset-x-0 top-0 h-32 sm:h-36 bg-gradient-to-b from-dark-void via-dark-void/60 to-transparent z-10 pointer-events-none" />

      {/* Bottom Fade (Ensures seamless transition into the bottom edge) */}
      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-dark-void via-dark-void/85 to-transparent z-10 pointer-events-none" />

      {/* Mobile Backdrop Overlay (Keeps hero typography 100% legible on small screens) */}
      <div className="lg:hidden absolute inset-0 bg-dark-void/75 z-10 pointer-events-none" />

      {/* Subtle Ambient Red Glow Highlight Over the Plaza Reflections */}
      <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-[#FF2A2A]/10 rounded-full blur-[120px] pointer-events-none z-10" />
    </div>
  );
};
