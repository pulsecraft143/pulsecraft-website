import React from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { LeadershipSection } from '@/components/home/LeadershipSection';
import { EthosSection } from '@/components/home/EthosSection';
import { FinalCTA } from '@/components/home/FinalCTA';
import { SITE_CONFIG } from '@/lib/config';
import {
  Target,
  Eye,
  Globe2,
  ArrowRight,
  ShieldCheck,
  Building2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Engineering Digital Products with Purpose',
  description:
    'Learn about PulseCraft Technologies Inc., our Canadian roots, engineering leadership, mission, and relentless commitment to building world-class software.',
};

export default function AboutPage() {
  return (
    <div className="bg-dark-void text-white pt-24">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 border-b border-dark-border overflow-hidden">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="px-3 py-1 rounded-full text-xs font-sans bg-brand-red/10 border border-brand-red/25 text-[#FF2A2A] font-semibold uppercase tracking-wider mb-4 inline-block">
            Our Purpose & Identity
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-semibold tracking-tight text-[#FFFFFF] max-w-3xl mx-auto leading-[1.18] sm:leading-[1.22]">
            We Turn Ambitious Ideas Into{' '}
            <span className="text-[#FF2A2A]">
              Powerful Products.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            PulseCraft Technologies Inc. was founded on a simple conviction: that modern software should be impeccably designed, strictly engineered, and built to stand the test of time.
          </p>
        </div>
      </section>

      {/* Story Section — Light */}
      <section className="bg-white text-slate-900 py-16 sm:py-24 border-b border-slate-200">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-sans uppercase tracking-wider text-[#FF2A2A] font-semibold block mb-2">
                The PulseCraft Story
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-slate-900 mb-5 leading-tight">
                Born in Canada. Engineering for the Global Frontier.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                PulseCraft Technologies Inc. was established in Oshawa, Ontario, Canada, bringing together visionary software architects, mobile engineers, and product strategists who prioritize performance, security, and intuitive design.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                We believe that software engineering is a craft. Every line of Kotlin, Swift, TypeScript, or Python we write is measured against strict performance benchmarks and zero-trust security postures.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-xs font-sans font-medium text-slate-700">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[#FF2A2A] font-bold block text-sm font-display">100%</span>
                  Canadian Governance
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[#FF2A2A] font-bold block text-sm font-display">Direct</span>
                  Architect Collaboration
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl bg-slate-900 text-white p-7 sm:p-8 shadow-xl border border-slate-800">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-xl bg-brand-red/20 text-[#FF2A2A] border border-brand-red/30">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base text-white">Global Perspective</h3>
                    <p className="text-xs text-slate-400 font-sans">Operating across multiple time zones</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  While headquartered in Canada, our digital products serve users across North America, Europe, and Asia. We engineer systems with multi-currency support, localization, and global low-latency CDN routing from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section — Dark */}
      <section className="bg-dark-void text-white py-16 sm:py-24 border-b border-dark-border">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Foundational Pillars"
            title="Our Mission &"
            titleHighlight="Vision."
            subtitle="The core north stars that dictate our architectural choices and long-term client engagements."
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
            {/* Mission */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#111116] border border-dark-border flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#FF2A2A] inline-flex mb-5">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs font-sans uppercase tracking-wider text-[#FF2A2A] font-semibold block mb-2">
                  Our Mission
                </span>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  To eliminate friction between visionary ideas and market-defining software.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  We empower founders, scale-ups, and enterprises by building scalable digital systems with speed, uncompromising security, and bespoke aesthetic polish.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#111116] border border-dark-border flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#FF2A2A] inline-flex mb-5">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="text-xs font-sans uppercase tracking-wider text-[#FF2A2A] font-semibold block mb-2">
                  Our Vision
                </span>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  To be the benchmark in global digital product engineering.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  We aspire to be recognized globally as the technology partner of choice for ambitious ventures demanding software that performs flawlessly under massive scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section — Dark */}
      <LeadershipSection theme="dark" />

      {/* Ethos Section — Light */}
      <EthosSection theme="light" />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
