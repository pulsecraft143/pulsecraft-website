'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TECH_STACK, TECH_CATEGORIES } from '@/data/techStack';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FinalCTA } from '@/components/home/FinalCTA';
import { Search, Code2 } from 'lucide-react';

export default function TechnologiesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTech = TECH_STACK.filter((tech) => {
    const matchesCategory = activeCategory === 'All' || tech.category === activeCategory;
    const matchesSearch =
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-dark-void text-white pt-24">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-dark-border relative overflow-hidden text-center">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-sans bg-brand-red/10 border border-brand-red/25 text-[#FF2A2A] font-semibold uppercase tracking-wider mb-4 inline-block">
            Full-Stack Technology Ecosystem
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-semibold tracking-tight text-[#FFFFFF] max-w-3xl mx-auto leading-[1.18] sm:leading-[1.22]">
            Our Engineering{' '}
            <span className="text-[#FF2A2A]">
              Stack.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            We work with technologies that guarantee high performance, strict type safety, zero lock-in, and forward compatibility.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mt-8 relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies (e.g. Next.js, Kotlin, LLMs)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF2A2A]"
            />
          </div>
        </div>
      </section>

      {/* Interactive Matrix */}
      <section className="py-16 sm:py-24">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-all duration-150 ${
                  activeCategory === cat
                    ? 'bg-[#FF2A2A] text-white shadow-sm'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTech.map((tech) => (
              <div
                key={tech.name}
                className="p-5 rounded-2xl bg-[#111116] border border-dark-border hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-[#FF2A2A]">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-sans text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 font-medium">
                      {tech.category}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-semibold text-white mb-1.5">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 font-normal">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-sans text-zinc-400 font-medium">
                  <span>Status:</span>
                  <span className="text-[#FF2A2A] font-medium">{tech.popularity}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredTech.length === 0 && (
            <div className="text-center py-12 text-zinc-400 font-sans text-xs">
              No technologies match &quot;{searchQuery}&quot;. Try searching for &quot;React&quot;, &quot;Kotlin&quot;, or &quot;OpenAI&quot;.
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
