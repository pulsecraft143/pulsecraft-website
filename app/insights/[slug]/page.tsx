import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { INSIGHTS } from '@/data/insights';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FinalCTA } from '@/components/home/FinalCTA';
import {
  ChevronRight,
  Clock,
  Calendar,
  Share2,
  Linkedin,
  Twitter,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

export async function generateStaticParams() {
  return INSIGHTS.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = INSIGHTS.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} — PulseCraft Insights`,
    description: article.excerpt,
  };
}

export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = INSIGHTS.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const relatedArticles = INSIGHTS.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="bg-dark-void text-white pt-28">
      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-dark-border relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6">
            <Link href="/" className="hover:text-zinc-300">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights" className="hover:text-zinc-300">Insights</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-red font-medium">{article.category}</span>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-red/10 border border-brand-red/30 text-brand-red font-semibold mb-4 inline-block">
            {article.category}
          </span>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          {/* Author Meta */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-800 border border-zinc-700">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="block text-sm font-semibold text-white">
                  {article.author.name}
                </span>
                <span className="block text-xs font-mono text-zinc-400">
                  {article.author.role} • PulseCraft
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brand-red" />
                {article.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-red" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12 relative z-20">
        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Article Markdown/Prose Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-zinc-300 text-base sm:text-lg leading-relaxed space-y-6">
        <p className="text-xl font-medium text-white leading-relaxed border-l-2 border-brand-red pl-4 italic">
          {article.excerpt}
        </p>

        <div className="prose prose-invert prose-red max-w-none text-zinc-300 space-y-6 whitespace-pre-line text-sm sm:text-base">
          {article.content}
        </div>

        {/* Tags */}
        <div className="pt-8 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800">
                #{t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-500">Share Essay:</span>
            <button className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-brand-red transition-colors">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-brand-red transition-colors">
              <Linkedin className="w-4 h-4" />
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-800">
        <h3 className="text-xl font-display font-bold text-white mb-6">
          Related Technical Essays
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedArticles.map((rel) => (
            <Link
              key={rel.id}
              href={`/insights/${rel.slug}`}
              className="p-6 rounded-2xl bg-[#121217] border border-dark-border hover:border-zinc-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[11px] font-mono text-brand-red block mb-1">
                  {rel.category}
                </span>
                <h4 className="text-base font-display font-bold text-white group-hover:text-red-400 transition-colors">
                  {rel.title}
                </h4>
              </div>
              <span className="mt-4 text-xs font-mono text-zinc-500 inline-flex items-center gap-1 group-hover:text-zinc-300">
                Read Article →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
