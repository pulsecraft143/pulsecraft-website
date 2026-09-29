'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SOLUTIONS } from '@/data/solutions';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Rocket,
  Layers,
  Building2,
  ShieldCheck,
  Activity,
  Brain,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Rocket,
  Layers,
  Building2,
  ShieldCheck,
  Activity,
  Brain,
};

export const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SOLUTIONS[0].id);

  const selectedSolution = SOLUTIONS.find((s) => s.id === activeTab) || SOLUTIONS[0];
  const Icon = ICON_MAP[selectedSolution.iconName] || Rocket;

  return (
    <section className="bg-[#F8F9FA] text-slate-900 py-24 sm:py-32 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-hero-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Industry Expertise"
          title="Solutions Built for"
          titleHighlight="Modern Businesses."
          subtitle="Whether launching an AI-first venture, architecting a high-MRR SaaS, or modernizing an enterprise core, we bring battle-tested playbooks."
          theme="light"
          align="center"
        />

        {/* Interactive Industry Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-12">
          {SOLUTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Dynamic Solution Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Overview & Key Benefits */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-mono text-brand-red font-semibold mb-4">
                <Icon className="w-3.5 h-3.5" />
                {selectedSolution.tag}
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                {selectedSolution.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-red">
                {selectedSolution.subtitle}
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedSolution.description}
              </p>

              {/* Benefits Checklist */}
              <div className="mt-6 space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Engineering Value Delivered:
                </h4>
                {selectedSolution.keyBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Button href="/contact" size="md" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Discuss Your Solution
                </Button>
                <Button href="/solutions" size="md" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                  View All Solutions
                </Button>
              </div>
            </div>

            {/* Right: Technical Spec Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-inner border border-slate-800">
              <span className="text-[11px] font-mono text-brand-red uppercase tracking-wider block mb-2 font-semibold">
                Architecture Profile
              </span>
              <h4 className="text-lg font-bold font-display text-white mb-2">
                Target Demographics & Stack
              </h4>
              <p className="text-xs text-slate-400 mb-6">
                <strong>Ideal for:</strong> {selectedSolution.targetAudience}
              </p>

              <div className="border-t border-slate-800 pt-5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Recommended Core Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedSolution.featuredTech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Compliance: PIPEDA / SOC2</span>
                <span className="text-green-400">● Production Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
