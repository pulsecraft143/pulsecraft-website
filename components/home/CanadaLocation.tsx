'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CanadaMap } from '@/components/shared/CanadaMap';

export const CanadaLocation: React.FC = () => {
  return (
    <section className="bg-dark-void text-white py-24 sm:py-32 border-b border-dark-border relative overflow-hidden" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Global Headquarters"
          title="Canadian Innovation."
          titleHighlight="Worldwide Scale."
          subtitle="Headquartered in Oshawa, Ontario, PulseCraft Technologies Inc. operates under robust Canadian corporate governance while engineering systems for global clients."
          theme="dark"
          align="center"
        />

        <CanadaMap theme="dark" className="mt-12" />
      </div>
    </section>
  );
};
