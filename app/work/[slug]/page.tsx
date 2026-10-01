import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CASE_STUDIES } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FinalCTA } from '@/components/home/FinalCTA';
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Quote,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';

export async function generateStaticParams() {
  return CASE_STUDIES.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = CASE_STUDIES.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Case Study Not Found' };

  return {
    title: `${project.title} — PulseCraft Case Study`,
    description: project.summary,
  };
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = CASE_STUDIES.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="bg-dark-void text-white pt-28">
      {/* Breadcrumb & Hero */}
      <section className="py-16 sm:py-24 border-b border-dark-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-sans font-medium text-zinc-400 mb-6">
            <Link href="/" className="hover:text-zinc-300">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/work" className="hover:text-zinc-300">Our Work</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-red font-medium">{project.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-sans font-medium bg-brand-red/10 border border-brand-red/30 text-brand-red">
              {project.category} Case Study
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-sans font-medium bg-zinc-900 border border-zinc-800 text-zinc-300">
              {project.industry}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-semibold text-white max-w-5xl tracking-tight leading-[1.15]">
            {project.title}
          </h1>
          <p className="mt-4 text-base sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-zinc-800/80">
            <div>
              <span className="text-xs font-sans text-zinc-400 block uppercase tracking-wider mb-1">Client</span>
              <span className="text-sm sm:text-base font-semibold text-white">{project.client}</span>
            </div>
            <div>
              <span className="text-xs font-sans text-zinc-400 block uppercase tracking-wider mb-1">Platform</span>
              <span className="text-sm sm:text-base font-semibold text-white">{project.platform}</span>
            </div>
            <div>
              <span className="text-xs font-sans text-zinc-400 block uppercase tracking-wider mb-1">Timeline</span>
              <span className="text-sm sm:text-base font-semibold text-white">{project.timeline}</span>
            </div>
            <div>
              <span className="text-xs font-sans text-zinc-400 block uppercase tracking-wider mb-1">Primary Impact</span>
              <span className="text-sm sm:text-base font-bold text-brand-red font-display">{project.results[0]?.metric}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-16 relative z-20">
        <div className="relative h-80 sm:h-[480px] w-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Case Study Core Body */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Challenge, Strategy, Design & Development */}
            <div className="lg:col-span-8 space-y-16">
              {/* Challenge */}
              <div>
                <span className="text-xs font-sans uppercase tracking-wider text-brand-red font-semibold block mb-2">
                  The Problem & Challenge
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-4">
                  Technical Bottlenecks & Strategic Imperative
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Strategy */}
              <div>
                <span className="text-xs font-sans uppercase tracking-wider text-brand-red font-semibold block mb-2">
                  The Engineering Strategy
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-4">
                  Architecture & Implementation Strategy
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  {project.strategy}
                </p>
              </div>

              {/* Design Highlights */}
              <div className="p-8 rounded-3xl bg-[#121217] border border-dark-border">
                <span className="text-xs font-sans uppercase tracking-wider text-brand-red font-semibold block mb-2">
                  Design System & UX
                </span>
                <h3 className="text-xl font-display font-semibold text-white mb-6">
                  Tactile Interactions & User-Centric Workflows
                </h3>
                <div className="space-y-3">
                  {project.designHighlights.map((dh) => (
                    <div key={dh} className="flex items-start gap-3 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{dh}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Highlights */}
              <div className="p-8 rounded-3xl bg-[#121217] border border-dark-border">
                <span className="text-xs font-sans uppercase tracking-wider text-brand-red font-semibold block mb-2">
                  Full-Stack Architecture
                </span>
                <h3 className="text-xl font-display font-semibold text-white mb-6">
                  Code Performance & Scalability Highlights
                </h3>
                <div className="space-y-3">
                  {project.developmentHighlights.map((dev) => (
                    <div key={dev} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Zap className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{dev}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              {project.testimonial && (
                <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 relative">
                  <Quote className="w-8 h-8 text-brand-red/30 mb-3" />
                  <p className="text-base sm:text-lg italic text-zinc-200 leading-relaxed">
                    &quot;{project.testimonial.quote}&quot;
                  </p>
                  <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-sans font-medium">
                    <span className="text-white font-semibold">{project.testimonial.author}</span>
                    <span className="text-zinc-400">{project.testimonial.role}, {project.testimonial.company}</span>
                  </div>
                </div>
              )}

              {/* Gallery */}
              {project.galleryImages.length > 0 && (
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-6">
                    Project Gallery & Interfaces
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.galleryImages.map((img, i) => (
                      <div key={i} className="relative h-56 rounded-2xl overflow-hidden border border-zinc-800">
                        <Image
                          src={img}
                          alt={`${project.title} screenshot ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Results & Technologies */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Results Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#14141A] border border-dark-border">
                  <span className="text-xs font-sans uppercase tracking-wider text-brand-red font-semibold block mb-4">
                    Results & Measurable Impact
                  </span>
                  <div className="space-y-4">
                    {project.results.map((res) => (
                      <div key={res.label} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                        <span className="text-2xl font-bold font-display text-white block">
                          {res.metric}
                        </span>
                        <span className="text-xs text-zinc-400 font-sans mt-0.5 block">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#14141A] border border-dark-border">
                  <span className="text-xs font-sans uppercase tracking-wider text-zinc-400 block mb-4">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((t) => (
                      <Badge key={t} size="md" variant="default">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-zinc-800">
                    <Button href="/contact" size="lg" variant="glow" className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Build Something Similar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
