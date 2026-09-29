import React from 'react';
import type { Metadata } from 'next';
import { PROCESS_STEPS } from '@/data/process';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FinalCTA } from '@/components/home/FinalCTA';
import {
  Search,
  Compass,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  CheckCircle2,
  FileCode,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Process — From Idea to Impact (6-Step Lifecycle)',
  description:
    'Discover PulseCraft’s disciplined 6-phase engineering process: Discover, Strategy, Design, Develop, Launch, and Scale. Engineered for high agility and zero ambiguity.',
};

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  Compass,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
};

export default function ProcessPage() {
  return (
    <div className="bg-dark-void text-white pt-24">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-dark-border relative overflow-hidden text-center">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-red/10 border border-brand-red/25 text-[#FF2A2A] font-semibold uppercase tracking-wider mb-4 inline-block">
            Engineering Methodology
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-semibold tracking-tight text-[#FFFFFF] max-w-3xl mx-auto leading-[1.18] sm:leading-[1.22]">
            From Idea to{' '}
            <span className="text-[#FF2A2A]">
              Impact.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            A battle-tested 6-step product delivery framework designed to eliminate guesswork, accelerate sprint velocity, and deliver category-defining software.
          </p>
        </div>
      </section>

      {/* 6 Step Detailed Timeline */}
      <section className="py-16 sm:py-24">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {PROCESS_STEPS.map((step) => {
            const Icon = ICON_MAP[step.iconName] || Code2;

            return (
              <div
                key={step.number}
                className="p-6 sm:p-10 rounded-2xl bg-[#111116] border border-dark-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-zinc-700 transition-all duration-200 relative overflow-hidden"
              >
                <div className="lg:col-span-7 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-[#FF2A2A]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-brand-red/10 border border-brand-red/25 text-[#FF2A2A] font-semibold uppercase">
                      {step.phase}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-2">
                    {step.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 font-normal">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block mb-1">
                      Core Sprint Activities
                    </span>
                    {step.activities.map((act) => (
                      <div key={act} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF2A2A] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-zinc-950 p-5 sm:p-6 rounded-xl border border-zinc-800 relative z-10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF2A2A] block mb-2.5 font-semibold">
                    Verified Deliverables
                  </span>
                  <div className="space-y-2">
                    {step.deliverables.map((del) => (
                      <div key={del} className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 flex items-center gap-2">
                        <FileCode className="w-3.5 h-3.5 text-[#FF2A2A] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>Quality Gate: Passed</span>
                    <span className="text-emerald-400">● Verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
