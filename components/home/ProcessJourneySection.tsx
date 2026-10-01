'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Search, Compass, Palette, Cpu, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JOURNEY_STEPS = [
  {
    num: '01',
    title: 'Discover',
    tagline: 'Understand the vision, users, and market opportunity.',
    description:
      'We deconstruct your concept, interview stakeholders, identify core user needs, map technical constraints, and uncover unique market differentiators.',
    icon: Search,
    deliverable: 'Product Opportunity Assessment & Scope Matrix',
  },
  {
    num: '02',
    title: 'Define',
    tagline: 'Architect the roadmap, system schemas, and technical blueprint.',
    description:
      'We design data schemas, API contracts, cloud infrastructure blueprints, security protocols, and agile capacity roadmaps before writing code.',
    icon: Compass,
    deliverable: 'Technical Architecture Blueprint & PRD',
  },
  {
    num: '03',
    title: 'Design',
    tagline: 'Craft intuitive interfaces and tactile design systems in Figma.',
    description:
      'We build production design systems, responsive layouts, interactive click-through prototypes, and accessible WCAG 2.1 AA flows.',
    icon: Palette,
    deliverable: 'Figma Design System & Clickable Prototype',
  },
  {
    num: '04',
    title: 'Engineer',
    tagline: 'Build modular, strictly-typed, and resilient cloud & mobile code.',
    description:
      'We implement test-driven engineering across Kotlin, Swift, Next.js, and Node.js with continuous integration and weekly live staging demos.',
    icon: Cpu,
    deliverable: 'Production Repository & Automated CI/CD',
  },
  {
    num: '05',
    title: 'Launch',
    tagline: 'Execute security audits, store approvals, and zero-downtime cutover.',
    description:
      'We handle penetration testing, load benchmarking, Apple & Google Play Store release submissions, and live production telemetry cutovers.',
    icon: Rocket,
    deliverable: 'Live Production Release & Telemetry Hub',
  },
  {
    num: '06',
    title: 'Evolve',
    tagline: 'Scale continuously with AI automation and 24/7 priority SLA.',
    description:
      'We monitor production telemetry, optimize cloud spend, deploy feature updates, and serve as your long-term technical engineering co-founder.',
    icon: TrendingUp,
    deliverable: 'Continuous Growth SLA & Feature Scaling',
  },
];

export const ProcessJourneySection: React.FC<{ theme?: 'light' | 'dark' }> = ({
  theme = 'dark',
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const isLight = theme === 'light';

  const current = JOURNEY_STEPS[activeStep];
  const Icon = current.icon;

  return (
    <section
      className={`py-24 sm:py-32 border-b relative overflow-hidden ${
        isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-dark-void border-dark-border text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Product Lifecycle"
          title="From Idea to"
          titleHighlight="Impact."
          subtitle="A disciplined 6-stage engineering journey transforming visionary concepts into scalable, resilient digital products."
          theme={isLight ? 'light' : 'dark'}
          align="center"
        />

        {/* Horizontal Progress Stepper (Desktop) */}
        <div className="mt-14 relative hidden lg:block">
          {/* Background Connector Bar */}
          <div
            className={`absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] ${
              isLight ? 'bg-slate-200' : 'bg-zinc-800'
            }`}
          />

          {/* Active Red Progress Line */}
          <div
            className="absolute top-1/2 left-8 -translate-y-1/2 h-[2px] bg-brand-red transition-all duration-500 shadow-[0_0_12px_rgba(255, 42, 42,0.8)]"
            style={{ width: `${(activeStep / (JOURNEY_STEPS.length - 1)) * 88}%` }}
          />

          {/* 6 Step Nodes */}
          <div className="relative z-10 grid grid-cols-6 gap-2">
            {JOURNEY_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className="group flex flex-col items-center text-center focus:outline-none"
                >
                  {/* Step Circle Pin */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-sans font-semibold text-xs transition-all duration-300 ${
                      isActive
                        ? 'bg-brand-red text-white scale-110 shadow-[0_0_25px_rgba(255, 42, 42,0.5)] border-2 border-white/20'
                        : isPast
                        ? isLight
                          ? 'bg-slate-900 text-white'
                          : 'bg-zinc-800 text-zinc-300'
                        : isLight
                        ? 'bg-white text-slate-400 border border-slate-300 group-hover:border-slate-400'
                        : 'bg-[#14141A] text-zinc-500 border border-zinc-800 group-hover:border-zinc-700'
                    }`}
                  >
                    {step.num}
                  </div>

                  {/* Step Title Label */}
                  <span
                    className={`mt-4 text-sm font-display font-bold tracking-wide transition-colors ${
                      isActive
                        ? 'text-brand-red'
                        : isLight
                        ? 'text-slate-800 group-hover:text-slate-900'
                        : 'text-zinc-400 group-hover:text-white'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Horizontal Scroll Stepper */}
        <div className="mt-8 flex lg:hidden items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {JOURNEY_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-sans font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-brand-red text-white shadow-md'
                    : isLight
                    ? 'bg-slate-100 text-slate-600 border border-slate-200'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                }`}
              >
                {step.num} {step.title}
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="mt-10 lg:mt-16 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className={`p-8 sm:p-10 rounded-3xl border ${
                isLight
                  ? 'bg-slate-50 border-slate-200 shadow-md'
                  : 'bg-[#121217] border-zinc-800 shadow-2xl'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/40">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-brand-red/10 border border-brand-red/30 text-brand-red">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-sans uppercase tracking-wider text-brand-red font-semibold">
                      Phase {current.num}
                    </span>
                    <h3
                      className={`text-2xl sm:text-3xl font-display font-bold ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      {current.title}
                    </h3>
                  </div>
                </div>

                <span
                  className={`text-xs font-sans font-medium px-3 py-1.5 rounded-lg border ${
                    isLight
                      ? 'bg-white border-slate-200 text-slate-700'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-300'
                  }`}
                >
                  Output: {current.deliverable}
                </span>
              </div>

              <div className="pt-6 space-y-3">
                <p className="text-base sm:text-lg font-medium text-brand-red leading-relaxed">
                  {current.tagline}
                </p>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-zinc-400'
                  }`}
                >
                  {current.description}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-zinc-800/40 flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className={`text-xs font-sans font-medium px-3.5 py-1.5 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                    isLight ? 'hover:bg-slate-200 text-slate-700' : 'hover:bg-zinc-800 text-zinc-400'
                  }`}
                >
                  ← Previous Phase
                </button>

                <div className="flex items-center gap-1.5">
                  {JOURNEY_STEPS.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeStep === i ? 'w-6 bg-brand-red' : isLight ? 'bg-slate-300' : 'bg-zinc-700'
                      }`}
                    />
                  ))}
                </div>

                <button
                  disabled={activeStep === JOURNEY_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(JOURNEY_STEPS.length - 1, prev + 1))}
                  className={`text-xs font-sans font-medium px-3.5 py-1.5 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                    isLight ? 'hover:bg-slate-200 text-slate-700' : 'hover:bg-zinc-800 text-zinc-400'
                  }`}
                >
                  Next Phase →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
