import React from 'react';
import type { Metadata } from 'next';
import { PortfolioSection } from '@/components/home/PortfolioSection';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies — Proven Engineering Impact',
  description:
    'Browse our portfolio of high-impact digital products, native mobile applications, enterprise AI systems, and SaaS platforms engineered by PulseCraft Technologies Inc.',
};

export default function WorkPage() {
  return (
    <div className="bg-dark-void text-white pt-24">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 border-b border-dark-border relative overflow-hidden text-center">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-red/10 border border-brand-red/25 text-[#FF2A2A] font-semibold uppercase tracking-wider mb-4 inline-block">
            Engineering Portfolio & Case Studies
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-semibold tracking-tight text-[#FFFFFF] max-w-3xl mx-auto leading-[1.18] sm:leading-[1.22]">
            Products Built to{' '}
            <span className="text-[#FF2A2A]">
              Transform Markets.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Every project represents a commitment to architectural rigor, frictionless user experience, and measurable business growth.
          </p>
        </div>
      </section>

      {/* Portfolio Showcase Grid with Filtering */}
      <PortfolioSection />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
