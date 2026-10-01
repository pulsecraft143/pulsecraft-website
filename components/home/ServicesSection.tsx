'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Smartphone, Globe, Cpu, Server, Cloud, Layout, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CapabilityItem {
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  slug: string;
  icon: React.ElementType;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    number: '01',
    name: 'Mobile',
    category: 'Native & Cross-Platform',
    tagline: 'Native 60/120fps mobile engineering for iOS and Android.',
    description:
      'Engineered with Kotlin, Jetpack Compose, Swift, and Flutter. Featuring offline-first synchronization, sub-300ms launch times, and biometric hardware encryption.',
    technologies: ['Kotlin', 'Swift', 'Jetpack Compose', 'Flutter'],
    slug: 'mobile-app-development',
    icon: Smartphone,
  },
  {
    number: '02',
    name: 'Web',
    category: 'Next.js & Edge Platforms',
    tagline: 'Ultra-fast, accessible web platforms delivering 95+ Core Web Vitals.',
    description:
      'Server-side rendered (SSR) and edge-deployed web architectures in Next.js and TypeScript. Built for responsive fluidity and WCAG 2.1 AA compliance.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    slug: 'web-development',
    icon: Globe,
  },
  {
    number: '03',
    name: 'AI',
    category: 'Intelligent Systems & RAG',
    tagline: 'Custom RAG search pipelines and fine-tuned domain LLMs.',
    description:
      'Production-grade AI architectures combining contextual vector embeddings, autonomous agent orchestration, and real-time streaming inference.',
    technologies: ['OpenAI', 'LLMs', 'Vector Search', 'LangChain'],
    slug: 'artificial-intelligence',
    icon: Cpu,
  },
  {
    number: '04',
    name: 'Backend',
    category: 'Distributed Microservices',
    tagline: 'High-throughput microservices engineered for 99.99% availability.',
    description:
      'Fault-tolerant distributed backends built with Node.js/NestJS, Spring Boot, PostgreSQL, and Redis caching handling millions of concurrent requests.',
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis'],
    slug: 'backend-development',
    icon: Server,
  },
  {
    number: '05',
    name: 'Cloud',
    category: 'DevOps & Multi-Region',
    tagline: 'Zero-downtime CI/CD container orchestration and cloud resilience.',
    description:
      'Automated GitOps deployment pipelines, multi-region Docker and Kubernetes clusters, and 24/7 telemetry monitoring across AWS and Google Cloud.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    slug: 'cloud-devops',
    icon: Cloud,
  },
  {
    number: '06',
    name: 'Product Design',
    category: 'UI/UX Design Systems',
    tagline: 'Atomic tokens, tactile micro-interactions, and Figma systems.',
    description:
      'Human-centered design architectures mapped 1:1 with code tokens. Ensuring seamless engineering handoff and pixel-perfect production fidelity.',
    technologies: ['Figma', 'Design Systems', 'Atomic Tokens'],
    slug: 'ui-ux-design',
    icon: Layout,
  },
];

export const ServicesSection: React.FC<{ theme?: 'dark' | 'light' }> = ({
  theme = 'dark',
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const isLight = theme === 'light';

  const activeCapability = CAPABILITIES[activeIdx];
  const ActiveIcon = activeCapability.icon;

  return (
    <section
      className={`py-20 sm:py-28 border-b relative overflow-hidden ${
        isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-dark-void border-dark-border text-white'
      }`}
      id="services"
    >
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Capability Map"
          title="What We"
          titleHighlight="Build."
          subtitle="A unified horizontal spectrum of engineering disciplines — from native mobile apps and custom AI pipelines to distributed cloud backends."
          theme={isLight ? 'light' : 'dark'}
          align="center"
        />

        {/* Desktop Single Horizontal Axis Stepper */}
        <div className="mt-12 relative hidden md:block">
          {/* Subtle Horizontal Connecting Axis */}
          <div
            className={`absolute top-7 left-12 right-12 h-[1px] ${
              isLight ? 'bg-slate-200' : 'bg-zinc-800'
            }`}
          />

          {/* Traveling Active Red Pulse Line */}
          <div
            className="absolute top-7 left-12 h-[1px] bg-brand-red transition-all duration-400 shadow-[0_0_10px_rgba(255, 42, 42,0.8)]"
            style={{ width: `${(activeIdx / (CAPABILITIES.length - 1)) * 82}%` }}
          />

          {/* 6 Horizontal Nodes */}
          <div className="relative z-10 grid grid-cols-6 gap-2">
            {CAPABILITIES.map((item, idx) => {
              const isActive = activeIdx === idx;
              const Icon = item.icon;

              return (
                <button
                  key={item.number}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="group flex flex-col items-center text-center focus:outline-none transition-all py-2"
                >
                  {/* Circle Indicator */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-250 ${
                      isActive
                        ? 'bg-brand-red text-white scale-110 shadow-[0_0_20px_rgba(255, 42, 42,0.5)] border border-white/20'
                        : isLight
                        ? 'bg-slate-100 text-slate-500 border border-slate-200 group-hover:border-slate-300 group-hover:text-slate-800'
                        : 'bg-[#121217] text-zinc-400 border border-zinc-800 group-hover:border-zinc-700 group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Number & Name */}
                  <span className="mt-3 text-xs font-sans font-medium text-zinc-400">
                    {item.number}
                  </span>
                  <span
                    className={`mt-0.5 text-sm font-display font-semibold transition-colors ${
                      isActive
                        ? 'text-brand-red'
                        : isLight
                        ? 'text-slate-800 group-hover:text-slate-900'
                        : 'text-zinc-300 group-hover:text-white'
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Horizontal Scroll Stepper */}
        <div className="mt-6 flex md:hidden items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {CAPABILITIES.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={item.number}
                onClick={() => setActiveIdx(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-sans font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-brand-red text-white shadow-md'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border border-slate-200'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                }`}
              >
                {item.number} {item.name}
              </button>
            );
          })}
        </div>

        {/* Active Capability Showcase Panel */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCapability.number}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                isLight
                  ? 'bg-slate-50 border-slate-200 shadow-sm'
                  : 'bg-[#121217] border-zinc-800 shadow-xl'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-zinc-800/40">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-brand-red/10 border border-brand-red/25 text-brand-red">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-sans uppercase tracking-wider text-brand-red font-semibold">
                      Discipline {activeCapability.number}
                    </span>
                    <h3
                      className={`text-xl sm:text-2xl font-display font-semibold ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      {activeCapability.name} Engineering
                    </h3>
                  </div>
                </div>

                <span
                  className={`text-xs font-sans font-medium px-3 py-1 rounded-lg border ${
                    isLight
                      ? 'bg-white border-slate-200 text-slate-700'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-300'
                  }`}
                >
                  {activeCapability.category}
                </span>
              </div>

              <div className="pt-5 space-y-2.5">
                <p className="text-sm sm:text-base font-medium text-brand-red leading-relaxed">
                  {activeCapability.tagline}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-zinc-400'
                  }`}
                >
                  {activeCapability.description}
                </p>
              </div>

              {/* Technologies Highlights & Specs Link */}
              <div className="mt-6 pt-5 border-t border-zinc-800/40 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-sans text-zinc-400 mr-1.5 uppercase tracking-wide">
                    Core Stack:
                  </span>
                  {activeCapability.technologies.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-0.5 rounded-md text-xs font-sans font-medium ${
                        isLight
                          ? 'bg-white border border-slate-200 text-slate-800'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-300'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/services/${activeCapability.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-brand-red hover:underline"
                >
                  <span>Technical Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
