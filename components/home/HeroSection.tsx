'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { PulseIntelligenceVisual } from '@/components/home/PulseIntelligenceVisual';
import { HeroAiBackground } from '@/components/home/HeroAiBackground';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Subtle Parallax & Cinematic Exit
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.85, 0.2]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  const transitionConfig = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[86vh] lg:min-h-[90vh] bg-dark-void text-white flex items-center justify-center pt-24 pb-16 lg:py-20 overflow-hidden"
    >
      {/* Layer 2: Subtle Intelligent AI Network Canvas Background with Parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <HeroAiBackground />
      </motion.div>

      {/* Layer 3: Subtle Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[280px] bg-brand-red/10 rounded-full blur-[160px] pointer-events-none z-[1]" />

      {/* Layer 4: Hero Content with Staggered Entrance & Exit Parallax */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Brand Eyebrow, Heading, Subtext & CTA */}
          <div className="lg:col-span-7 text-left">
            {/* 1. Minimal Eyebrow Badge (Entrance: 100ms) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionConfig, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 select-none"
            >
              {/* Subtle 5.5px Pulsing Pure Red Dot */}
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2A2A] opacity-60"
                  style={{ animationDuration: '2.5s' }}
                />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF2A2A] shadow-[0_0_8px_rgba(255, 42, 42,0.9)]" />
              </span>

              {/* Eyebrow Label Text */}
              <span className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.1em] text-zinc-300 uppercase flex items-center gap-1.5">
                <span className="text-xs" role="img" aria-label="Canada">
                  🇨🇦
                </span>
                <span>CANADA</span>
                <span className="text-zinc-500">·</span>
                <span className="text-zinc-200">AI</span>
                <span className="text-zinc-500">·</span>
                <span>SOFTWARE</span>
                <span className="text-zinc-500">·</span>
                <span>ENGINEERING</span>
              </span>
            </motion.div>

            {/* 2. Hero Headline (Entrance: 200ms) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionConfig, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-display font-medium tracking-tight leading-[1.18] sm:leading-[1.22] text-[#FFFFFF]"
            >
              Ideas Have a{' '}
              <span className="text-[#FF2A2A] font-semibold">
                Pulse.
              </span>
              <br />
              <span className="inline-block mt-1">
                Intelligence Gives Them{' '}
                <span className="text-[#FFFFFF] font-semibold">
                  Life.
                </span>
              </span>
            </motion.h1>

            {/* 3. Short Supporting Paragraph (Entrance: 320ms) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionConfig, delay: 0.32 }}
              className="mt-5 text-base sm:text-lg text-zinc-400 max-w-lg leading-relaxed font-normal"
            >
              {SITE_CONFIG.heroSubtext}
            </motion.p>

            {/* 4. Minimal CTAs (Entrance: 420ms) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionConfig, delay: 0.42 }}
              className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <Button
                href="/contact"
                size="md"
                variant="glow"
                className="text-sm px-5 py-2.5 rounded-[9px]"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Get in Touch
              </Button>
              <Button
                href="/services"
                size="md"
                variant="outline"
                className="text-sm px-5 py-2.5 rounded-[9px]"
              >
                Explore Our Capabilities
              </Button>
            </motion.div>

            {/* 5. Trust Metadata (Entrance: 520ms) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...transitionConfig, delay: 0.52 }}
              className="mt-8 pt-5 border-t border-zinc-800/60 flex flex-wrap items-center gap-5 text-xs text-zinc-400 font-sans font-medium"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A]" />
                <span>Intelligent Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A]" />
                <span>Modern Cloud & Mobile</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A]" />
                <span>Canadian Governance</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Abstract Pulse Intelligence Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transitionConfig, delay: 0.28 }}
            className="lg:col-span-5 relative"
          >
            <PulseIntelligenceVisual />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
