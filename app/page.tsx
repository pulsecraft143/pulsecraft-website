import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustSection } from '@/components/home/TrustSection';
import { AboutPreview } from '@/components/home/AboutPreview';
import { TechMarqueeSection } from '@/components/home/TechMarqueeSection';
import { ProcessVisualSection } from '@/components/home/ProcessVisualSection';
import { EthosSection } from '@/components/home/EthosSection';
import { LeadershipSection } from '@/components/home/LeadershipSection';
import { CanadaSection } from '@/components/home/CanadaSection';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 01. Hero Section — Dark */}
      <HeroSection />

      {/* 02. Introduction & Live Metrics (Engineering Systems That Matter) — Light */}
      <TrustSection />

      {/* 03. Product Builders / Core Disciplines — Light */}
      <AboutPreview />

      {/* 04. Technology in Motion (Continuous Horizontal Infinite Marquee) — Dark */}
      <TechMarqueeSection theme="dark" />

      {/* 05. Wide Horizontal Technology Process Visual (From Thought to Technology) — Dark */}
      <ProcessVisualSection theme="dark" />

      {/* 06. Company Ethos (BUILD BOLD → THINK DEEP → CRAFT BETTER) — Light */}
      <EthosSection theme="light" />

      {/* 07. Executive Leadership Team — Dark */}
      <LeadershipSection theme="dark" />

      {/* 08. Canadian Innovation & Real Google Maps — Dark */}
      <CanadaSection />

      {/* 09. Final CTA (Have an Idea? Give It a Pulse.) — Dark */}
      <FinalCTA />
    </>
  );
}
