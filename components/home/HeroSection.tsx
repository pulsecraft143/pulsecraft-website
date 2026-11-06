'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { PulseCraftHQVisual } from '@/components/home/PulseCraftHQVisual';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.85, 0.2]);

  const transitionConfig = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-dark-void text-white flex items-center overflow-hidden pt-24 sm:pt-28 pb-16 lg:py-0"
    >
      {/* ======================================================== */}
      {/* RIGHT-ALIGNED FULL-HEIGHT BUILDING PHOTO (TOP TO BOTTOM) */}
      {/* ======================================================== */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] xl:w-[56%] h-full pointer-events-none select-none z-0">
        <PulseCraftHQVisual />
      </div>

      {/* Layer 1: Clean Ambient Radial Lighting behind Left Headline */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-gradient-to-tr from-[#FF2A2A]/15 via-[#FF2A2A]/05 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Layer 2: Hero Left Content (Max width for perfect editorial readability) */}
      <motion.div
        style={prefersReducedMotion ? {} : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
      >
        <div className="max-w-xl lg:max-w-2xl text-left">
          {/* 1. Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionConfig, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-display font-bold tracking-[-0.03em] leading-[1.12] sm:leading-[1.14] text-[#FFFFFF]"
          >
            Ideas Have a{' '}
            <span className="text-[#FF2A2A] font-extrabold drop-shadow-[0_0_24px_rgba(255,42,42,0.35)]">
              Pulse.
            </span>
            <br />
            <span className="inline-block mt-2">
              Intelligence Gives Them{' '}
              <span className="text-[#FFFFFF] font-extrabold">
                Life.
              </span>
            </span>
          </motion.h1>

          {/* 2. Short Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionConfig, delay: 0.28 }}
            className="mt-6 text-base sm:text-lg text-zinc-300 max-w-lg leading-relaxed font-normal"
          >
            {SITE_CONFIG.heroSubtext}
          </motion.p>

          {/* 3. Minimal CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionConfig, delay: 0.38 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
          >
            <Button
              href="/contact"
              size="md"
              variant="glow"
              className="text-sm px-6 py-3 rounded-[9px]"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get in Touch
            </Button>
            <Button
              href="/services"
              size="md"
              variant="outline"
              className="text-sm px-6 py-3 rounded-[9px]"
            >
              Explore Our Capabilities
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
