'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CASE_STUDIES } from '@/data/projects';
import { CaseStudy } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2, Star } from 'lucide-react';

const CATEGORIES = ['All', 'Mobile', 'Web', 'AI', 'SaaS'] as const;

export const PortfolioSection: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<CaseStudy | null>(null);

  const filteredProjects =
    selectedCat === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.category === selectedCat);

  return (
    <section className="bg-[#101014] text-white py-24 sm:py-32 border-b border-dark-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Engineering"
          title="Work We’re"
          titleHighlight="Proud Of."
          subtitle="Explore flagship digital products, mobile ecosystems, AI engines, and enterprise web applications engineered by PulseCraft."
          theme="dark"
          align="center"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCat === cat
                  ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(255, 42, 42,0.4)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#16161D] border border-dark-border/90 overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Project Image */}
              <div className="relative h-56 w-full overflow-hidden bg-zinc-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16161D] via-transparent to-black/30" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/70 backdrop-blur-md text-white border border-zinc-700">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-brand-red/90 text-white font-bold">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights / Metric */}
                  {project.results?.[0] && (
                    <div className="mt-4 p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                      <span className="text-xs text-zinc-400">Impact Result:</span>
                      <span className="text-xs font-mono font-bold text-brand-red">
                        {project.results[0].metric} — {project.results[0].label}
                      </span>
                    </div>
                  )}

                  {/* Tech stack pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((t) => (
                      <Badge key={t} size="sm" variant="default" className="text-[10px] py-0.5 px-2">
                        {t}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge size="sm" variant="red" className="text-[10px] py-0.5 px-1.5">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white"
                  >
                    Quick Preview
                  </button>

                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-red hover:text-red-400 group/link"
                  >
                    <span>Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <Button href="/work" size="lg" variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
            View All Case Studies & Results
          </Button>
        </div>
      </div>

      {/* Case Study Quick Preview Modal */}
      {activeModalProject && (
        <Modal
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
          title={activeModalProject.title}
          maxWidth="4xl"
        >
          <div className="space-y-6 text-zinc-300 text-sm">
            <div className="relative h-64 w-full rounded-xl overflow-hidden">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono">
              <div>
                <span className="text-zinc-500 block">CLIENT</span>
                <span className="text-white font-bold">{activeModalProject.client}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">CATEGORY</span>
                <span className="text-white font-bold">{activeModalProject.category}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">PLATFORM</span>
                <span className="text-white font-bold">{activeModalProject.platform}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">TIMELINE</span>
                <span className="text-white font-bold">{activeModalProject.timeline}</span>
              </div>
            </div>

            <div>
              <h4 className="text-base font-bold text-white mb-1.5 font-display">The Challenge</h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {activeModalProject.challenge}
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-white mb-1.5 font-display">The Engineering Strategy</h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {activeModalProject.strategy}
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-white mb-2 font-display">Key Results & Outcomes</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeModalProject.results.map((r) => (
                  <div key={r.label} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                    <span className="text-lg font-bold font-mono text-brand-red block">{r.metric}</span>
                    <span className="text-[11px] text-zinc-400">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <Button variant="outline" size="sm" onClick={() => setActiveModalProject(null)}>
                Close Preview
              </Button>
              <Button
                href={`/work/${activeModalProject.slug}`}
                variant="primary"
                size="sm"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Read Full In-Depth Case Study
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
