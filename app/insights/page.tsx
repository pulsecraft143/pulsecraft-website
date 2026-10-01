'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { INSIGHTS, INSIGHT_CATEGORIES } from '@/data/insights';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FinalCTA } from '@/components/home/FinalCTA';
import { Search, Clock, ArrowRight } from 'lucide-react';

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = INSIGHTS.filter((art) => {
    const matchesCat = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-dark-void text-white pt-24">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-dark-border relative overflow-hidden text-center">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-sans bg-brand-red/10 border border-brand-red/25 text-[#FF2A2A] font-semibold uppercase tracking-wider mb-4 inline-block">
            Engineering Thought Leadership
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-semibold tracking-tight text-[#FFFFFF] max-w-3xl mx-auto leading-[1.18] sm:leading-[1.22]">
            PulseCraft{' '}
            <span className="text-[#FF2A2A]">
              Insights.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Practical engineering insights, architectural patterns, and product essays written by our founders and lead engineers.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto mt-8 relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by topic, keyword, or tag..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF2A2A]"
            />
          </div>
        </div>
      </section>

      {/* Categories & Articles Grid */}
      <section className="py-16 sm:py-24">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {INSIGHT_CATEGORIES.map((cat) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/insights/${article.slug}`}
                className="group flex flex-col rounded-2xl bg-[#111116] border border-dark-border overflow-hidden hover:border-zinc-700 transition-all duration-200"
              >
                <div className="relative h-48 w-full bg-zinc-950 overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-sans bg-black/85 backdrop-blur-md text-white border border-zinc-700 font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-sans font-medium mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                      <span>•</span>
                      <span>{article.publishedAt}</span>
                    </div>

                    <h3 className="text-base font-display font-semibold text-white group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-xs text-zinc-400 line-clamp-2 leading-relaxed font-normal">
                      {article.excerpt}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {article.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-xs font-sans font-medium bg-zinc-900 text-zinc-400 border border-zinc-800">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-zinc-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5 rounded-full overflow-hidden bg-zinc-800">
                        <Image
                          src={article.author.avatar}
                          alt={article.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs text-zinc-300 font-normal">
                        {article.author.name}
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-[#FF2A2A] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Read Essay →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12 text-zinc-400 font-sans text-xs">
              No articles match your search criteria.
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
