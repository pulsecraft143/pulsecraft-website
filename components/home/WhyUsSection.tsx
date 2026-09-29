'use client';

import React from 'react';
import { WHY_PILLARS } from '@/data/whyUs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  Lightbulb,
  Cpu,
  MessageSquareShare,
  Zap,
  ShieldCheck,
  Handshake,
  CheckCircle2,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Lightbulb,
  Cpu,
  MessageSquareShare,
  Zap,
  ShieldCheck,
  Handshake,
};

export const WhyUsSection: React.FC = () => {
  return (
    <section className="bg-dark-void text-white py-24 sm:py-32 border-b border-dark-border relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Why PulseCraft"
          title="Engineering With"
          titleHighlight="Purpose."
          subtitle="Why visionary companies and fast-moving startups choose PulseCraft Technologies Inc. as their primary digital product engineering partner."
          theme="dark"
          align="center"
        />

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {WHY_PILLARS.map((pillar) => {
            const Icon = ICON_MAP[pillar.iconName] || Cpu;

            return (
              <div
                key={pillar.title}
                className="rounded-3xl bg-[#121217] border border-dark-border p-8 flex flex-col justify-between hover:border-brand-red/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255, 42, 42,0.1)]"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-brand-red inline-flex mb-6 group-hover:border-brand-red/40 group-hover:bg-brand-red/10 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs font-mono text-zinc-400">
                    {pillar.tagline}
                  </p>
                  <p className="mt-3.5 text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-zinc-800/80 space-y-2">
                    {pillar.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-500">
                  Standard: Strict Excellence
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
