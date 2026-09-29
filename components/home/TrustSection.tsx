'use client';

import React from 'react';
import { SITE_CONFIG } from '@/lib/config';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Globe2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const TrustSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="bg-[#FAFAFA] text-slate-900 py-20 sm:py-28 border-b border-slate-200 relative overflow-hidden">
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            badge="Ideas & Intelligence"
            title="Engineering Systems That"
            titleHighlight="Matter."
            subtitle="PulseCraft Technologies Inc. combines human creativity, intelligent technology, and exceptional engineering to transform ambitious ideas into category-defining digital products."
            theme="light"
            align="center"
          />
        </motion.div>

        {/* 4 Clean Staggered Metric Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-10"
        >
          {SITE_CONFIG.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-250 group hover:-translate-y-0.5"
            >
              <span className="text-3xl sm:text-4xl font-display font-semibold text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-800 font-display">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-slate-100 text-[#FF2A2A] border border-slate-200">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                Canadian Engineering // Global Scale
              </h4>
              <p className="text-xs text-slate-500">
                Serving venture-backed teams and global enterprises from our Canadian base.
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FF2A2A] hover:underline group"
          >
            <span>Learn more about our company ethos</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
