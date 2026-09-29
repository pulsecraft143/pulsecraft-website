'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TECH_STACK, TECH_CATEGORIES } from '@/data/techStack';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Sparkles, Terminal, Code2 } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredTech =
    activeCategory === 'All'
      ? TECH_STACK
      : TECH_STACK.filter((t) => t.category === activeCategory);

  return (
    <section className="bg-dark-void text-white py-24 sm:py-32 border-b border-dark-border relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technology Ecosystem"
          title="Built With"
          titleHighlight="Modern Technology."
          subtitle="We select battle-tested, high-throughput, and forward-compatible technologies that allow our clients to build once, scale infinitely, and iterate fast."
          theme="dark"
          align="center"
        />

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(255, 42, 42,0.4)] border border-red-500/50'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl bg-[#131318] border border-dark-border hover:border-zinc-700/80 transition-all duration-200 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-brand-red group-hover:border-brand-red/40 group-hover:bg-brand-red/10 transition-colors">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-white text-base">
                      {tech.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900/90 px-2 py-0.5 rounded border border-zinc-800">
                    {tech.category}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{tech.popularity || 'Enterprise Stack'}</span>
                <span className="text-brand-red group-hover:underline">Explore →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Explorer CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white group"
          >
            <span>Explore our full interactive technology matrix</span>
            <ArrowRight className="w-4 h-4 text-brand-red transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
