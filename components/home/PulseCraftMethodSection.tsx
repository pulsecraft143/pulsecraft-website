'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Ear, Brain, Palette, Code2, Rocket, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MethodStage {
  num: string;
  name: string;
  concept: string;
  shortDesc: string;
  detail: string;
  icon: React.ElementType;
}

const METHOD_STAGES: MethodStage[] = [
  {
    num: '01',
    name: 'LISTEN',
    concept: 'IDEA',
    shortDesc: 'Understand the problem, people, goals, and opportunity.',
    detail:
      'We deconstruct your core thesis, interview key users, uncover market friction, and define strict success metrics before defining features.',
    icon: Ear,
  },
  {
    num: '02',
    name: 'THINK',
    concept: 'INTELLIGENCE',
    shortDesc: 'Turn insights into a clear product and technology strategy.',
    detail:
      'We architect database schemas, API contracts, AI inference pipelines, and agile development roadmaps designed for long-term scalability.',
    icon: Brain,
  },
  {
    num: '03',
    name: 'DESIGN',
    concept: 'DESIGN',
    shortDesc: 'Create intuitive experiences built around real human needs.',
    detail:
      'We craft atomic Figma design systems, tactile interactive prototypes, and accessible WCAG 2.1 AA flows with 1:1 engineering code synchronization.',
    icon: Palette,
  },
  {
    num: '04',
    name: 'ENGINEER',
    concept: 'ENGINEERING',
    shortDesc: 'Build secure, scalable, high-performance technology.',
    detail:
      'We write strictly-typed, modular code across Kotlin, Swift, Next.js, and Node.js with continuous integration and weekly staging releases.',
    icon: Code2,
  },
  {
    num: '05',
    name: 'LAUNCH',
    concept: 'PRODUCT',
    shortDesc: 'Test, refine, deploy, and bring the product to life.',
    detail:
      'We conduct automated penetration testing, store approvals, multi-region CDN deployments, and live production telemetry cutovers.',
    icon: Rocket,
  },
  {
    num: '06',
    name: 'EVOLVE',
    concept: 'EVOLUTION',
    shortDesc: 'Improve, scale, and continuously move the product forward.',
    detail:
      'We monitor production metrics, integrate domain AI models, optimize cloud latency, and partner with you as an enduring technical co-founder.',
    icon: RefreshCw,
  },
];

export const PulseCraftMethodSection: React.FC<{ theme?: 'dark' | 'light' }> = ({
  theme = 'dark',
}) => {
  const [activeStage, setActiveStage] = useState(0);
  const isLight = theme === 'light';

  const current = METHOD_STAGES[activeStage];
  const Icon = current.icon;

  return (
    <section
      className={`py-20 sm:py-28 border-b relative overflow-hidden ${
        isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-dark-void border-dark-border text-white'
      }`}
      id="method"
    >
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Product Methodology"
          title="The PulseCraft"
          titleHighlight="Method."
          subtitle="A disciplined 6-stage engineering journey transforming visionary human ideas into enduring digital products."
          theme={isLight ? 'light' : 'dark'}
          align="center"
        />

        {/* Visual Concept Metaphor Chain */}
        <div className="mt-2 mb-10 flex items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono text-zinc-500 overflow-x-auto pb-2 select-none">
          <span>IDEA</span>
          <span className="text-brand-red">→</span>
          <span>INTELLIGENCE</span>
          <span className="text-brand-red">→</span>
          <span>DESIGN</span>
          <span className="text-brand-red">→</span>
          <span>ENGINEERING</span>
          <span className="text-brand-red">→</span>
          <span>PRODUCT</span>
          <span className="text-brand-red">→</span>
          <span className="text-white font-bold">EVOLUTION</span>
        </div>

        {/* Desktop Single Horizontal Line Stepper */}
        <div className="mt-10 relative hidden lg:block">
          {/* Subtle Horizontal Connecting Axis */}
          <div
            className={`absolute top-7 left-12 right-12 h-[1px] ${
              isLight ? 'bg-slate-200' : 'bg-zinc-800'
            }`}
          />

          {/* Traveling Red Pulse Line */}
          <div
            className="absolute top-7 left-12 h-[1px] bg-brand-red transition-all duration-400 shadow-[0_0_12px_rgba(255, 42, 42,0.8)]"
            style={{ width: `${(activeStage / (METHOD_STAGES.length - 1)) * 82}%` }}
          />

          {/* 6 Stage Nodes in 1 Line */}
          <div className="relative z-10 grid grid-cols-6 gap-2">
            {METHOD_STAGES.map((stage, idx) => {
              const isActive = activeStage === idx;
              const StageIcon = stage.icon;

              return (
                <button
                  key={stage.num}
                  onClick={() => setActiveStage(idx)}
                  onMouseEnter={() => setActiveStage(idx)}
                  className="group flex flex-col items-center text-center focus:outline-none py-2"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-all duration-250 ${
                      isActive
                        ? 'bg-brand-red text-white scale-110 shadow-[0_0_20px_rgba(255, 42, 42,0.5)] border border-white/20'
                        : isLight
                        ? 'bg-slate-100 text-slate-500 border border-slate-200 group-hover:border-slate-300 group-hover:text-slate-800'
                        : 'bg-[#121217] text-zinc-400 border border-zinc-800 group-hover:border-zinc-700 group-hover:text-white'
                    }`}
                  >
                    <StageIcon className="w-5 h-5" />
                  </div>

                  <span className="mt-3 text-[10px] font-mono text-zinc-500">
                    {stage.num}
                  </span>
                  <span
                    className={`mt-0.5 text-xs sm:text-sm font-display font-bold tracking-wider transition-colors ${
                      isActive
                        ? 'text-brand-red'
                        : isLight
                        ? 'text-slate-800 group-hover:text-slate-900'
                        : 'text-zinc-400 group-hover:text-white'
                    }`}
                  >
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Horizontal Carousel Stepper */}
        <div className="mt-6 flex lg:hidden items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {METHOD_STAGES.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.num}
                onClick={() => setActiveStage(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-brand-red text-white shadow-md'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border border-slate-200'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                }`}
              >
                {stage.num} {stage.name}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="mt-8 lg:mt-12 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.num}
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
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-brand-red font-semibold">
                      Phase {current.num} // {current.concept}
                    </span>
                    <h3
                      className={`text-xl sm:text-2xl font-display font-bold tracking-tight ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      {current.name}
                    </h3>
                  </div>
                </div>

                <span
                  className={`text-xs font-mono px-3 py-1 rounded-lg border ${
                    isLight
                      ? 'bg-white border-slate-200 text-slate-700'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-300'
                  }`}
                >
                  Standard: 100% Client Code Ownership
                </span>
              </div>

              <div className="pt-5 space-y-2.5">
                <p className="text-sm sm:text-base font-medium text-brand-red leading-relaxed">
                  {current.shortDesc}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-zinc-400'
                  }`}
                >
                  {current.detail}
                </p>
              </div>

              {/* Navigation Steppers */}
              <div className="mt-6 pt-5 border-t border-zinc-800/40 flex items-center justify-between">
                <button
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                  className={`text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                    isLight ? 'hover:bg-slate-200 text-slate-700' : 'hover:bg-zinc-800 text-zinc-400'
                  }`}
                >
                  ← Previous
                </button>

                <div className="flex items-center gap-1.5">
                  {METHOD_STAGES.map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        activeStage === i ? 'w-5 bg-brand-red' : isLight ? 'bg-slate-300' : 'bg-zinc-700'
                      }`}
                    />
                  ))}
                </div>

                <button
                  disabled={activeStage === METHOD_STAGES.length - 1}
                  onClick={() => setActiveStage((prev) => Math.min(METHOD_STAGES.length - 1, prev + 1))}
                  className={`text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                    isLight ? 'hover:bg-slate-200 text-slate-700' : 'hover:bg-zinc-800 text-zinc-400'
                  }`}
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
