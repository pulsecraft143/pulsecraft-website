'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  category: string;
}

const TECHNOLOGIES_ROW_1: TechItem[] = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'React', category: 'UI Platform' },
  { name: 'Kotlin', category: 'Android' },
  { name: 'Swift', category: 'iOS' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'AI & Data' },
];

const TECHNOLOGIES_ROW_2: TechItem[] = [
  { name: 'OpenAI', category: 'Intelligence' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'AWS Cloud', category: 'Infrastructure' },
  { name: 'Docker', category: 'Containers' },
  { name: 'Kubernetes', category: 'Orchestration' },
  { name: 'Redis', category: 'Caching' },
  { name: 'Java', category: 'Enterprise' },
  { name: 'Go', category: 'Microservices' },
];

export const TechMarqueeSection: React.FC<{ theme?: 'light' | 'dark' }> = ({
  theme = 'light',
}) => {
  const isLight = theme === 'light';

  const renderRow = (items: TechItem[], direction: 'left' | 'right') => {
    const duplicated = [...items, ...items, ...items];

    return (
      <div className="relative w-full overflow-hidden py-2">
        <div
          className={`flex items-center gap-3.5 whitespace-nowrap will-change-transform ${
            direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
          } hover:[animation-play-state:paused]`}
          style={{ animationDuration: '38s' }}
        >
          {duplicated.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border select-none transition-all duration-250 hover:scale-[1.04] cursor-default ${
                isLight
                  ? 'bg-white border-slate-200 text-slate-900 shadow-sm hover:border-slate-300'
                  : 'bg-[#111116] border-zinc-800 text-white hover:border-zinc-700'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] shrink-0 shadow-[0_0_6px_rgba(255, 42, 42,0.8)]" />
              <span className="text-xs sm:text-sm font-display font-semibold tracking-wide">
                {tech.name}
              </span>
              <span
                className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                  isLight ? 'bg-slate-100 text-slate-500' : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                }`}
              >
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      className={`py-20 sm:py-28 border-b relative overflow-hidden ${
        isLight ? 'bg-[#FAFAFA] border-slate-200 text-slate-900' : 'bg-dark-void border-dark-border text-white'
      }`}
      id="technologies"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center"
      >
        <SectionHeading
          badge="Modern Ecosystem"
          title="Technology in"
          titleHighlight="Motion."
          subtitle="Battle-tested native mobile frameworks, TypeScript web architectures, and foundational AI primitives."
          theme={isLight ? 'light' : 'dark'}
          align="center"
          className="mb-4"
        />
      </motion.div>

      {/* Marquee with Edge Fade Masks */}
      <div className="relative w-full overflow-hidden">
        <div
          className={`absolute top-0 bottom-0 left-0 w-24 sm:w-44 z-10 pointer-events-none ${
            isLight
              ? 'bg-gradient-to-r from-[#FAFAFA] to-transparent'
              : 'bg-gradient-to-r from-dark-void to-transparent'
          }`}
        />
        <div
          className={`absolute top-0 bottom-0 right-0 w-24 sm:w-44 z-10 pointer-events-none ${
            isLight
              ? 'bg-gradient-to-l from-[#FAFAFA] to-transparent'
              : 'bg-gradient-to-l from-dark-void to-transparent'
          }`}
        />

        {renderRow(TECHNOLOGIES_ROW_1, 'left')}
        {renderRow(TECHNOLOGIES_ROW_2, 'right')}
      </div>
    </section>
  );
};
