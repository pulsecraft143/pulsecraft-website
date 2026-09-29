import React from 'react';
import type { Metadata } from 'next';
import { SOLUTIONS } from '@/data/solutions';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FinalCTA } from '@/components/home/FinalCTA';
import {
  Rocket,
  Layers,
  Building2,
  ShieldCheck,
  Activity,
  Brain,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industry Solutions — Startups, SaaS, Enterprise, FinTech & Healthcare',
  description:
    'Tailored software solutions and engineering playbooks designed for venture-backed startups, high-MRR SaaS platforms, banking systems, digital healthcare, and global enterprises.',
};

const ICON_MAP: Record<string, React.ElementType> = {
  Rocket,
  Layers,
  Building2,
  ShieldCheck,
  Activity,
  Brain,
};

export default function SolutionsPage() {
  return (
    <div className="bg-dark-void text-white pt-24">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-dark-border relative overflow-hidden text-center">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-red/10 border border-brand-red/25 text-[#FF2A2A] font-semibold uppercase tracking-wider mb-4 inline-block">
            Tailored Industry Architectures
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-semibold tracking-tight text-[#FFFFFF] max-w-3xl mx-auto leading-[1.18] sm:leading-[1.22]">
            Solutions Built for{' '}
            <span className="text-[#FF2A2A]">
              Modern Businesses.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            We adapt our engineering methodologies to match the strict security requirements, regulatory frameworks, and market speeds of your industry.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 sm:py-24">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SOLUTIONS.map((sol, idx) => {
            const Icon = ICON_MAP[sol.iconName] || Rocket;

            return (
              <div
                key={sol.id}
                id={sol.id}
                className="p-6 sm:p-10 rounded-2xl bg-[#111116] border border-dark-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-zinc-700 transition-all duration-200"
              >
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/25 text-xs font-mono text-[#FF2A2A] font-semibold mb-3">
                    <Icon className="w-3.5 h-3.5" />
                    {sol.tag}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-1.5">
                    {sol.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-mono text-[#FF2A2A] mb-3">
                    {sol.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 font-normal">
                    {sol.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {sol.keyBenefits.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF2A2A] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <Button href="/contact" size="md" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Discuss a {sol.title} Project
                  </Button>
                </div>

                <div className="lg:col-span-5 bg-zinc-950 p-5 sm:p-6 rounded-xl border border-zinc-800">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
                    Target Profile
                  </span>
                  <p className="text-xs text-zinc-300 mb-4 font-mono">
                    {sol.targetAudience}
                  </p>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                    Featured Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.featuredTech.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-zinc-900 text-zinc-200 border border-zinc-700">
                        {t}
                      </span>
                    ))}
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
