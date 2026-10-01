'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { INSIGHTS } from '@/data/insights';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Clock, User, ArrowUpRight } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  return (
    <section className="bg-white text-slate-900 py-24 sm:py-32 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            badge="Engineering Insights"
            title="Perspectives from the"
            titleHighlight="Frontlines."
            subtitle="In-depth technical analyses, architecture breakdowns, and product essays written by our engineering leadership."
            theme="light"
            align="left"
            className="mb-0"
          />

          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-hover group shrink-0"
          >
            <span>View all technical articles</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="group flex flex-col rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Cover Image */}
              <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-sans bg-white/90 backdrop-blur-md text-slate-900 font-medium shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-sans font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.publishedAt}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-brand-red transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-200">
                      <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-700">
                      {article.author.name}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-brand-red inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
