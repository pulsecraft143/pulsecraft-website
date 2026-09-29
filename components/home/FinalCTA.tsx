'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const FinalCTA: React.FC = () => {
  return (
    <section className="bg-dark-void text-white py-24 sm:py-32 border-b border-dark-border relative overflow-hidden text-center">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[240px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-brand-red/10 border border-brand-red/25 text-[#FF2A2A] font-semibold mb-6 inline-block">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] inline-block mr-1.5" />
          Ready to Build
        </span>

        {/* Heading in Pure White + Pure Red (No Gradient Text) */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-[#FFFFFF] max-w-3xl mx-auto leading-[1.18] sm:leading-[1.22]">
          Have an Idea?{' '}
          <br />
          <span className="text-[#FF2A2A] font-semibold inline-block mt-1">
            Give It a Pulse.
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed font-normal">
          Whether you are designing a high-throughput AI architecture, engineering a native mobile app, or modernizing an enterprise web platform — we are ready to build.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/contact"
            size="lg"
            variant="glow"
            className="w-full sm:w-auto px-7 py-3 rounded-[9px]"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Get in Touch
          </Button>
          <Button
            href="/about"
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-7 py-3 rounded-[9px]"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-500">
          <span>🇨🇦 Canadian Headquartered</span>
          <span>•</span>
          <span>Global Delivery</span>
          <span>•</span>
          <span>Strict IP & NDA Protection</span>
        </div>
      </motion.div>
    </section>
  );
};
