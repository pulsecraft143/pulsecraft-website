'use client';

import React, { useState, useEffect } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Sparkles, Brain, Code2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ETHOS_ITEMS = [
  {
    tag: '01. IDEA',
    title: 'BUILD BOLD',
    concept: 'Human Ambition',
    desc: 'Challenge conventional paradigms and engineer software with audacious market impact.',
    icon: Sparkles,
  },
  {
    tag: '02. INTELLIGENCE',
    title: 'THINK DEEP',
    concept: 'Cognitive Systems',
    desc: 'Architect resilient distributed logic with contextual AI models and mathematical precision.',
    icon: Brain,
  },
  {
    tag: '03. CRAFT',
    title: 'CRAFT BETTER',
    concept: 'Engineering Rigor',
    desc: 'Execute with 60fps native performance, pixel-perfect design polish, and zero technical debt.',
    icon: Code2,
  },
];

export const EthosSection: React.FC<{ theme?: 'light' | 'dark' }> = ({
  theme = 'light',
}) => {
  const [activePillar, setActivePillar] = useState(0);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });
  const isLight = theme === 'light';

  // Smooth sequential activation on scroll
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % ETHOS_ITEMS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className={`py-20 sm:py-28 border-b relative overflow-hidden ${
        isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-[#0E0E12] border-dark-border text-white'
      }`}
      id="ethos"
    >
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            badge="Guiding Ethos"
            title="Build Bold. Think Deep."
            titleHighlight="Craft Better."
            subtitle="The foundational standard uniting human ambition, contextual intelligence, and engineering craftsmanship."
            theme={isLight ? 'light' : 'dark'}
            align="center"
          />
        </motion.div>

        {/* 3 Pillars Grid — Zero Horizontal Line */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            {ETHOS_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activePillar === idx;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActivePillar(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? isLight
                        ? 'bg-slate-50 border-[#FF2A2A]/40 shadow-md scale-[1.015] -translate-y-0.5'
                        : 'bg-[#14141A] border-[#FF2A2A]/50 shadow-[0_4px_24px_rgba(255, 42, 42,0.12)] scale-[1.015] -translate-y-0.5'
                      : isLight
                      ? 'bg-slate-50/50 border-slate-200 hover:border-slate-300 opacity-75'
                      : 'bg-[#101014] border-zinc-800/80 hover:border-zinc-700 opacity-65'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF2A2A] font-semibold">
                        {item.tag}
                      </span>
                      <div
                        className={`p-2 rounded-xl border transition-all duration-200 ${
                          isActive
                            ? 'bg-[#FF2A2A] text-white border-[#FF2A2A] shadow-[0_0_12px_rgba(255, 42, 42,0.4)]'
                            : isLight
                            ? 'bg-white border-slate-200 text-slate-600'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3
                      className={`text-xl font-display font-semibold tracking-tight mb-1 ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-2.5">
                      {item.concept}
                    </span>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed font-normal ${
                        isLight ? 'text-slate-600' : 'text-zinc-400'
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-zinc-800/30 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>PulseCraft Rigor</span>
                    <span className={isActive ? 'text-[#FF2A2A] font-semibold' : ''}>
                      →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
