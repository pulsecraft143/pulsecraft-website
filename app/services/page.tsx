import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FinalCTA } from '@/components/home/FinalCTA';
import {
  Smartphone,
  Globe,
  Server,
  Cpu,
  Layout,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering Services — Mobile, Web, AI, Backend & Cloud Architecture',
  description:
    'Explore PulseCraft’s full suite of software engineering services: Native iOS & Android development, Next.js web applications, scalable distributed backend systems, custom AI integrations, and Cloud DevOps.',
};

const ICON_MAP: Record<string, React.ElementType> = {
  Smartphone,
  Globe,
  Server,
  Cpu,
  Layout,
  Cloud,
};

export default function ServicesPage() {
  return (
    <div className="bg-dark-void text-white pt-24">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 border-b border-dark-border relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-sans bg-brand-red/10 border border-brand-red/25 text-[#FF2A2A] font-semibold uppercase tracking-wider mb-4 inline-block">
            Full-Stack Engineering Disciplines
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-semibold tracking-tight text-[#FFFFFF] max-w-3xl mx-auto leading-[1.18] sm:leading-[1.22]">
            Engineering Excellence Across the{' '}
            <span className="text-[#FF2A2A]">
              Modern Stack.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            From consumer mobile applications with millions of daily users to mission-critical distributed cloud backends and custom AI architectures.
          </p>
        </div>
      </section>

      {/* Detailed Services Deep Dive */}
      <section className="py-16 sm:py-24">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.iconName] || Globe;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-dark-border last:border-b-0"
              >
                {/* Text Description */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#FF2A2A] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-xs font-sans uppercase tracking-wider text-[#FF2A2A] font-semibold block mb-1">
                    Capability 0{index + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-xs font-sans text-zinc-300 mb-3 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                      Key Deliverables & Capabilities
                    </span>
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF2A2A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="mb-6">
                    <span className="text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold block mb-1.5">
                      Technologies & Frameworks
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-md text-xs font-sans font-medium bg-zinc-900 border border-zinc-800 text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button href={`/services/${service.slug}`} size="md" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Explore Technical Specs
                    </Button>
                    <Button href="/contact" size="md" variant="outline">
                      Get in Touch
                    </Button>
                  </div>
                </div>

                {/* Visual Technical Card */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="rounded-2xl bg-[#111116] border border-dark-border p-6 sm:p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                      <span className="text-xs font-sans uppercase tracking-wider text-[#FF2A2A] font-semibold">
                        Architecture Performance Metrics
                      </span>
                      <span className="text-xs font-sans text-zinc-400 font-medium">Service SLA</span>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                      {service.metrics?.map((m) => (
                        <div key={m.label} className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                          <span className="text-xl font-semibold font-display text-[#FF2A2A] block mb-0.5">
                            {m.value}
                          </span>
                          <span className="text-xs font-sans text-zinc-400">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Feature Highlights */}
                    <div className="space-y-2.5 pt-5 border-t border-zinc-800">
                      <span className="text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                        Engineering Highlights
                      </span>
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-zinc-300">
                          <Zap className="w-3 h-3 text-[#FF2A2A] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
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
