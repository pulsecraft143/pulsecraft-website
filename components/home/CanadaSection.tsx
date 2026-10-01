'use client';

import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GoogleMapEmbed } from '@/components/shared/GoogleMapEmbed';
import { SITE_CONFIG } from '@/lib/config';
import { Button } from '@/components/ui/Button';
import { Navigation, ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const CanadaSection: React.FC = () => {
  return (
    <section
      className="bg-dark-void text-white py-20 sm:py-28 border-b border-dark-border relative overflow-hidden"
      id="location"
    >
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            badge="Global Reach // Canadian Roots"
            title="Canadian Innovation."
            titleHighlight="Built for the World."
            subtitle="Based in Canada, PulseCraft Technologies Inc. creates intelligent digital products for ambitious businesses around the world."
            theme="dark"
            align="center"
          />
        </motion.div>

        {/* 2-Column Section: Editorial Canadian Identity (Left) + Real Google Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-12 items-stretch">
          {/* Left Column: High-Res Toronto Skyline + Editorial Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 rounded-2xl bg-[#111116] border border-dark-border overflow-hidden flex flex-col justify-between shadow-xl"
          >
            {/* Real High-Resolution Toronto Skyline Image Container with Smooth Reveal */}
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] bg-zinc-950 overflow-hidden group">
              <Image
                src="/images/toronto-skyline-dusk.jpg"
                alt="PulseCraft Technologies Inc. Canadian Headquarters — Oshawa, Ontario"
                fill
                priority
                className="object-cover object-center brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-black/30 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium bg-black/85 backdrop-blur-md text-white border border-zinc-700 flex items-center gap-1.5 shadow-md">
                  <span role="img" aria-label="Canada">🇨🇦</span>
                  <span className="tracking-wide">Oshawa, Ontario</span>
                </span>
              </div>
            </div>

            {/* Editorial Corporate Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-sans tracking-wider uppercase text-[#FF2A2A] font-semibold">
                    🇨🇦 Canada
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs font-sans text-zinc-400 font-medium">
                    Federally Registered
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-2 leading-snug">
                  Canadian Innovation.
                  <br />
                  <span className="text-zinc-400 font-normal">Built for the World.</span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  Based in Canada, PulseCraft Technologies Inc. creates intelligent digital products for ambitious businesses around the world.
                </p>

                {/* Clean Information Block */}
                <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800/80 space-y-2 text-xs font-sans text-zinc-300">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
                    <span className="font-semibold text-white tracking-wider text-xs">
                      {SITE_CONFIG.legalName}
                    </span>
                    <span className="text-[#FF2A2A] text-xs font-medium">🇨🇦 Canada</span>
                  </div>
                  <div className="flex items-start gap-2 pt-1 text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-[#FF2A2A] shrink-0 mt-0.5" />
                    <span className="font-sans leading-relaxed">{SITE_CONFIG.headquarters.address}</span>
                  </div>
                </div>
              </div>

              {/* Get Directions CTA */}
              <div className="mt-6 pt-5 border-t border-zinc-800/60">
                <a
                  href={SITE_CONFIG.headquarters.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <Button
                    size="md"
                    variant="primary"
                    className="w-full rounded-[9px]"
                    leftIcon={<Navigation className="w-4 h-4" />}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real Interactive Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <GoogleMapEmbed className="h-full min-h-[400px] lg:min-h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
