'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Compass, Layout, Code2, Cpu, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const DISCIPLINES = [
  { name: 'Strategy', desc: 'Product vision & scope matrix', icon: Compass },
  { name: 'Design', desc: 'Atomic design & Figma tokens', icon: Layout },
  { name: 'Engineering', desc: 'Kotlin, Swift & Next.js code', icon: Code2 },
  { name: 'Intelligence', desc: 'Contextual AI & RAG models', icon: Cpu },
  { name: 'Product', desc: 'Continuous scaling & DevOps', icon: Rocket },
];

export const AboutPreview: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="bg-white text-slate-900 py-20 sm:py-28 border-b border-slate-200 relative" id="about">
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial 2-Column Split Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 border-b border-slate-200"
        >
          <div className="lg:col-span-7">
            <span className="px-3 py-1 rounded-full text-xs font-sans uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 mb-3.5 inline-block font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] inline-block mr-1.5" />
              About PulseCraft
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-display font-medium tracking-tight text-slate-900 leading-[1.26] sm:leading-[1.3]">
              More Than Developers.{' '}
              <br />
              <span className="text-[#FF2A2A] font-semibold inline-block mt-1">
                We Are Product Builders.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              PulseCraft Technologies Inc. bridges the divide between human ambition and software engineering. We craft digital products that stand the test of time.
            </p>
            <div className="flex items-center gap-3">
              <Button href="/about" size="md" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Read Our Story
              </Button>
              <Button href="/contact" size="md" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                Get in Touch
              </Button>
            </div>
          </div>
        </motion.div>

        {/* 5 Core Disciplines Staggered Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {DISCIPLINES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  variants={cardVariants}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all group hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-sans font-medium text-slate-400">
                      0{idx + 1}
                    </span>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-[#FF2A2A]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-base font-display font-semibold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
