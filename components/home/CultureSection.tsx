'use client';

import React from 'react';
import { CULTURE_VALUES } from '@/data/culture';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  Sparkles,
  Shield,
  CheckCircle2,
  BookOpen,
  Users,
  Target,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Shield,
  CheckCircle2,
  BookOpen,
  Users,
  Target,
};

export const CultureSection: React.FC = () => {
  return (
    <section className="bg-dark-void text-white py-24 sm:py-32 border-b border-dark-border relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[300px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Company Ethos"
          title="Build Bold. Think Deep."
          titleHighlight="Craft Better."
          subtitle="Our engineering culture is rooted in rigorous curiosity, radical ownership, and an unrelenting passion for software craftsmanship."
          theme="dark"
          align="center"
        />

        {/* 6 Culture Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {CULTURE_VALUES.map((val) => {
            const Icon = ICON_MAP[val.iconName] || Sparkles;

            return (
              <div
                key={val.name}
                className="rounded-3xl bg-[#121216] border border-dark-border p-7 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-brand-red inline-flex mb-5 group-hover:border-brand-red/40 group-hover:bg-brand-red/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                    {val.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-sans text-brand-red font-medium">
                    {val.tagline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 text-xs font-sans text-zinc-400 uppercase tracking-wider">
                  PulseCraft Principle
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
