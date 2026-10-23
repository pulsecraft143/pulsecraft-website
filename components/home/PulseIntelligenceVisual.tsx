'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Sparkles,
  TrendingUp,
  Shield,
  Activity,
  Cpu,
  Globe,
  Terminal,
  Zap,
  ArrowUpRight,
  Search,
  CheckCircle2,
  Lock,
  Layers,
  Code2,
  Play,
  Server,
  Database,
  Wifi,
} from 'lucide-react';

export const PulseIntelligenceVisual: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [liveMetric, setLiveMetric] = useState(142850);
  const [liveReqs, setLiveReqs] = useState(4820);
  const [activeCodeLine, setActiveCodeLine] = useState(0);

  // Live telemetry counter ticker & code cursor animation
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveReqs((prev) => prev + Math.floor(Math.random() * 18 - 8));
      setActiveCodeLine((prev) => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 12, y: y * 12 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className="relative w-full max-w-[640px] mx-auto select-none py-6 px-2 sm:px-4"
      style={{ perspective: 1200 }}
    >
      {/* Ambient Red Glow Halo behind device cluster */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] h-[280px] sm:h-[340px] bg-gradient-to-tr from-[#FF2A2A]/20 via-[#FF2A2A]/08 to-transparent rounded-full blur-[110px] pointer-events-none" />

      {/* ======================================================== */}
      {/* 1. MAIN MACBOOK PRO MOCKUP (Centerpiece Device) */}
      {/* ======================================================== */}
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                y: [0, -5, 0],
                rotateX: -mousePos.y * 0.5,
                rotateY: mousePos.x * 0.5,
              }
        }
        transition={{
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotateX: { type: 'spring', stiffness: 220, damping: 28 },
          rotateY: { type: 'spring', stiffness: 220, damping: 28 },
        }}
        className="relative z-10 mx-auto w-[94%] sm:w-[90%] lg:w-[92%]"
      >
        {/* Aluminum Screen Lid Frame (Apple Space Black Finish) */}
        <div className="relative rounded-t-[18px] sm:rounded-t-[22px] bg-[#16161B] p-2 sm:p-2.5 pb-0 border border-zinc-700/60 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.95)]">
          {/* Inner Display Bezel with 16:10 Ratio */}
          <div className="relative rounded-t-[12px] sm:rounded-t-[14px] bg-[#0A0A0E] border border-black overflow-hidden aspect-[16/10] flex flex-col justify-between">
            {/* Top FaceTime Camera Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 sm:w-20 h-3 bg-[#16161B] rounded-b-md z-30 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#050508] border border-zinc-700/80" />
            </div>

            {/* macOS Window Chrome & App Header */}
            <div className="relative z-20 px-3 py-1.5 sm:py-2 bg-[#121218] border-b border-white/[0.07] flex items-center justify-between">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A2A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D26A]" />
              </div>

              {/* Window Title & Live App Indicator */}
              <div className="flex items-center gap-2 px-3 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] animate-pulse" />
                <span className="font-semibold text-white">PulseCraft Cloud Platform</span>
                <span className="text-zinc-600 hidden sm:inline">|</span>
                <span className="text-zinc-400 font-normal hidden sm:inline">v2.4.0</span>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
                <span className="hidden sm:inline">Production</span>
              </div>
            </div>

            {/* Main Screen Software Interface */}
            <div className="flex-1 p-2.5 sm:p-3.5 grid grid-cols-12 gap-2 sm:gap-3 bg-[#0A0A0D] overflow-hidden">
              {/* Left IDE / Service Topology Panel */}
              <div className="col-span-4 bg-white/[0.02] border border-white/[0.05] rounded-lg p-2 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/[0.05]">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">Pipelines</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#FF2A2A]/15 border border-[#FF2A2A]/30 text-[#FF2A2A] text-[10px] font-medium">
                      <Cpu className="w-3 h-3 shrink-0" />
                      <span className="truncate">Neural Engine</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded text-zinc-400 hover:text-white text-[10px]">
                      <Server className="w-3 h-3 shrink-0" />
                      <span className="truncate">API Gateway</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded text-zinc-400 hover:text-white text-[10px]">
                      <Database className="w-3 h-3 shrink-0" />
                      <span className="truncate">Global Vector DB</span>
                    </div>
                  </div>
                </div>

                {/* Code Snippet Stream */}
                <div className="pt-2 border-t border-white/[0.05] text-[8px] sm:text-[9px] font-mono text-zinc-500 space-y-0.5">
                  <div className={activeCodeLine === 0 ? 'text-[#FF2A2A] font-semibold' : 'text-zinc-500'}>
                    &gt; await AI.route()
                  </div>
                  <div className={activeCodeLine === 1 ? 'text-white font-semibold' : 'text-zinc-600'}>
                    &gt; cache: hit (0.4ms)
                  </div>
                  <div className={activeCodeLine === 2 ? 'text-emerald-400 font-semibold' : 'text-zinc-600'}>
                    &gt; status: 200 OK
                  </div>
                </div>
              </div>

              {/* Right Live Analytics & Waveform Telemetry */}
              <div className="col-span-8 flex flex-col justify-between space-y-2 text-left">
                {/* 3 Metric Mini Cards */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2">
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-md p-1.5">
                    <span className="text-[8px] sm:text-[9px] font-mono text-zinc-400 block">Live Load</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono leading-tight">
                      {liveReqs.toLocaleString()} <span className="text-[8px] text-[#FF2A2A]">/s</span>
                    </span>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-md p-1.5">
                    <span className="text-[8px] sm:text-[9px] font-mono text-zinc-400 block">AI Latency</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400 font-mono leading-tight">11.4 ms</span>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-md p-1.5">
                    <span className="text-[8px] sm:text-[9px] font-mono text-zinc-400 block">Uptime</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono leading-tight">99.99%</span>
                  </div>
                </div>

                {/* Animated Real-time Live Signal Waveform */}
                <div className="flex-1 bg-white/[0.02] border border-white/[0.05] rounded-lg p-2 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1 text-[#FF2A2A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] animate-ping" />
                      Live Stream: Toronto Edge
                    </span>
                    <span className="text-zinc-500">60 FPS Native</span>
                  </div>

                  {/* SVG Waveform Visualization */}
                  <div className="relative h-11 sm:h-14 w-full flex items-center">
                    <svg className="w-full h-full" viewBox="0 0 300 50" fill="none" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="macWaveGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FF2A2A" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#FF2A2A" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 35 Q 35 15, 75 30 T 150 10 T 225 38 T 300 15 L 300 50 L 0 50 Z"
                        fill="url(#macWaveGrad)"
                      />
                      <motion.path
                        animate={
                          prefersReducedMotion
                            ? {}
                            : {
                                d: [
                                  'M0 35 Q 35 15, 75 30 T 150 10 T 225 38 T 300 15',
                                  'M0 28 Q 35 38, 75 15 T 150 30 T 225 12 T 300 28',
                                  'M0 35 Q 35 15, 75 30 T 150 10 T 225 38 T 300 15',
                                ],
                              }
                        }
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                        stroke="#FF2A2A"
                        strokeWidth="1.8"
                        fill="none"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-[8px] font-mono text-zinc-500">
                    <span>MULTI-REGION SYNC</span>
                    <span className="text-emerald-400">100% HEALTHY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MacBook Keyboard Base / Hinge with CNC Opening Lip */}
        <div className="relative h-3.5 sm:h-4 bg-gradient-to-b from-[#24242C] to-[#141418] rounded-b-[14px] sm:rounded-b-[18px] border-t border-zinc-600/80 shadow-[0_12px_28px_rgba(0,0,0,0.85)]">
          {/* Center Opening Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1.5 bg-[#0C0C10] rounded-b-md" />
        </div>
      </motion.div>

      {/* ======================================================== */}
      {/* 2. ANDROID PHONE MOCKUP (Left Foreground Complement) */}
      {/* ======================================================== */}
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                y: [0, 6, 0],
                rotateX: mousePos.y * 0.4,
                rotateY: mousePos.x * 0.4,
              }
        }
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
          rotateX: { type: 'spring', stiffness: 200, damping: 25 },
          rotateY: { type: 'spring', stiffness: 200, damping: 25 },
        }}
        className="hidden sm:block absolute -bottom-4 -left-1 sm:left-1 w-[138px] sm:w-[162px] z-20"
      >
        {/* Android Matte Frame with Slim Bezel */}
        <div className="rounded-[24px] sm:rounded-[28px] p-1.5 sm:p-2 bg-[#1A1A22] border border-zinc-700/80 shadow-[0_20px_45px_rgba(0,0,0,0.9)]">
          {/* Inner Screen */}
          <div className="rounded-[18px] sm:rounded-[22px] bg-[#09090D] border border-black overflow-hidden p-2.5 flex flex-col justify-between aspect-[9/19]">
            {/* Center Punch-Hole Camera */}
            <div className="w-2.5 h-2.5 bg-black rounded-full mx-auto border border-zinc-800 mb-1" />

            {/* Android Screen UI: Neural Copilot Mobile */}
            <div className="space-y-2 text-left">
              <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A]" />
                  <span className="text-[8px] font-mono text-white font-bold">Neural Copilot</span>
                </div>
                <span className="text-[8px] font-mono text-zinc-500">Android</span>
              </div>

              {/* Chat / Query Card */}
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-2 space-y-1">
                <span className="text-[7.5px] font-mono text-[#FF2A2A] uppercase block font-semibold">User Query</span>
                <p className="text-[8.5px] text-zinc-200 font-sans leading-tight">
                  Deploy RAG pipeline with Canadian residency.
                </p>
              </div>

              {/* Response Card */}
              <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-lg p-2">
                <div className="flex items-center gap-1 text-[8px] font-mono text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-2.5 h-2.5 shrink-0" />
                  <span>Deployed (11.8ms)</span>
                </div>
                <div className="text-[7.5px] text-zinc-400 font-sans mt-0.5">TLS 1.3 · Zero Downtime</div>
              </div>
            </div>

            {/* Android Bottom Navigation Bar */}
            <div className="flex justify-around pt-1 text-zinc-600">
              <div className="w-2 h-2 border-b border-l border-zinc-500 rotate-45" />
              <div className="w-2 h-2 rounded-full border border-zinc-500" />
              <div className="w-2 h-2 border border-zinc-500" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ======================================================== */}
      {/* 3. IPHONE 15 PRO MOCKUP (Right Foreground Complement) */}
      {/* ======================================================== */}
      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                y: [0, -7, 0],
                rotateX: -mousePos.y * 0.4,
                rotateY: -mousePos.x * 0.4,
              }
        }
        transition={{
          y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
          rotateX: { type: 'spring', stiffness: 200, damping: 25 },
          rotateY: { type: 'spring', stiffness: 200, damping: 25 },
        }}
        className="absolute -bottom-6 right-0 sm:right-1 w-[142px] sm:w-[168px] z-20"
      >
        {/* iPhone Titanium Chassis with Precision Bevel */}
        <div className="rounded-[28px] sm:rounded-[32px] p-1.5 sm:p-2 bg-[#1C1C24] border border-zinc-600/80 shadow-[0_24px_50px_rgba(0,0,0,0.95)]">
          {/* Inner Display */}
          <div className="rounded-[22px] sm:rounded-[26px] bg-[#0A0A0E] border border-black overflow-hidden p-2.5 flex flex-col justify-between aspect-[9/19]">
            {/* Dynamic Island Notch */}
            <div className="w-12 sm:w-14 h-3 bg-black rounded-full mx-auto flex items-center justify-end px-1.5 gap-1 mb-1">
              <span className="w-1 h-1 rounded-full bg-[#FF2A2A] animate-ping" />
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            </div>

            {/* iOS Screen UI: Fintech & Wealth Intelligence */}
            <div className="space-y-2 text-left">
              <div>
                <span className="text-[7.5px] font-mono text-zinc-500 uppercase block tracking-wider">
                  PulseCraft Mobile
                </span>
                <span className="text-[13px] sm:text-sm font-bold text-white font-display block leading-tight">
                  $142,850.00
                </span>
                <span className="text-[8px] font-mono text-emerald-400 flex items-center gap-0.5 mt-0.5">
                  <ArrowUpRight className="w-2.5 h-2.5" /> +24.8% This Month
                </span>
              </div>

              {/* Dynamic Sparkline Bars */}
              <div className="h-10 bg-white/[0.03] rounded-lg p-1.5 flex items-end justify-between gap-1">
                {[35, 60, 45, 80, 55, 95, 75, 100].map((val, i) => (
                  <motion.div
                    key={i}
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                            height: [`${val}%`, `${Math.min(100, val + 15)}%`, `${val}%`],
                          }
                    }
                    transition={{ duration: 2.2 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                    className={`flex-1 rounded-t-sm ${
                      i === 7 ? 'bg-[#FF2A2A]' : 'bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    style={{ height: `${val}%` }}
                  />
                ))}
              </div>

              {/* Instant Sync Action Badge */}
              <div className="p-1.5 rounded-lg bg-[#FF2A2A]/15 border border-[#FF2A2A]/30 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-[#FF2A2A]" />
                  <span className="text-[8.5px] font-semibold text-white">Instant Native Sync</span>
                </div>
                <span className="text-[7.5px] font-mono text-[#FF2A2A]">60 FPS</span>
              </div>
            </div>

            {/* iOS Home Indicator Bar */}
            <div className="w-10 h-1 bg-zinc-600 rounded-full mx-auto mt-1" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
