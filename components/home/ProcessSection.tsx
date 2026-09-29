'use client';

import React from 'react';
import Link from 'next/link';
import { PROCESS_STEPS } from '@/data/process';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import {
  Search,
  Compass,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  Compass,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
};

export const ProcessSection: React.FC = () => {
  return (
    <section className="bg-white text-slate-900 py-24 sm:py-32 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Methodology"
          title="From Idea to"
          titleHighlight="Impact."
          subtitle="Our systematic 6-phase engineering lifecycle ensures technical predictability, transparent velocity, and exceptional product outcomes."
          theme="light"
          align="center"
        />

        {/* 6 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = ICON_MAP[step.iconName] || Code2;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Step Number Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-slate-300 group-hover:text-brand-red transition-colors">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 text-brand-red shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-1">
                    {step.phase}
                  </span>
                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Key Activities */}
                  <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
                      Key Activities
                    </span>
                    {step.activities.slice(0, 3).map((act) => (
                      <div key={act} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Output: {step.deliverables[0]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process CTA */}
        <div className="mt-16 text-center">
          <Button href="/process" size="lg" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Explore Full Interactive Process & Deliverables
          </Button>
        </div>
      </div>
    </section>
  );
};
