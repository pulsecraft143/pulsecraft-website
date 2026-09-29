'use client';

import React, { useState, useRef, useEffect } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Sparkles, Brain, Palette, Code2, Rocket, RefreshCw } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface ProcessNode {
  num: string;
  label: string;
  tagline: string;
  detail: string;
  icon: React.ElementType;
}

const PROCESS_NODES: ProcessNode[] = [
  {
    num: '01',
    label: 'IDEA',
    tagline: 'Discovery & Opportunity Mapping',
    detail: 'Understand the problem, market constraints, user friction, and product thesis.',
    icon: Sparkles,
  },
  {
    num: '02',
    label: 'INTELLIGENCE',
    tagline: 'System & Cognitive Architecture',
    detail: 'Architect data schemas, contextual AI embeddings, and enterprise scalability roadmaps.',
    icon: Brain,
  },
  {
    num: '03',
    label: 'DESIGN',
    tagline: 'Figma Tokens & Interaction Flows',
    detail: 'Craft atomic design systems and accessible WCAG 2.1 AA click-through prototypes.',
    icon: Palette,
  },
  {
    num: '04',
    label: 'ENGINEERING',
    tagline: 'Native Mobile & Next.js Code',
    detail: 'Write strictly-typed Kotlin, Swift, TypeScript, and distributed backend microservices.',
    icon: Code2,
  },
  {
    num: '05',
    label: 'LAUNCH',
    tagline: 'Production Cutover & CDN Routing',
    detail: 'Execute penetration tests, app store approvals, and zero-downtime production cutovers.',
    icon: Rocket,
  },
  {
    num: '06',
    label: 'EVOLUTION',
    tagline: 'Continuous AI & Scale Operations',
    detail: 'Monitor live production telemetry, optimize latency, and scale features continuously.',
    icon: RefreshCw,
  },
];

export const ProcessVisualSection: React.FC<{ theme?: 'dark' | 'light' }> = ({
  theme = 'dark',
}) => {
  const [activeNode, setActiveNode] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });

  // Auto-progress stages softly when in view
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % PROCESS_NODES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isInView]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      const w = (canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1));
      const h = (canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1));
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);

      const displayW = canvas.offsetWidth;
      const displayH = canvas.offsetHeight;

      ctx.clearRect(0, 0, displayW, displayH);

      time += 0.015;

      const centerY = displayH * 0.45;
      const startX = 50;
      const endX = displayW - 50;
      const stepWidth = (endX - startX) / (PROCESS_NODES.length - 1);

      // 1. Flowing Waveform Lines
      ctx.beginPath();
      for (let x = 0; x <= displayW; x += 10) {
        const y = centerY + Math.sin(x * 0.015 + time) * 14;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      for (let x = 0; x <= displayW; x += 10) {
        const y = centerY + Math.cos(x * 0.02 - time * 1.2) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(255, 42, 42, 0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 2. Main Horizontal Signal Axis
      ctx.beginPath();
      ctx.moveTo(startX, centerY);
      ctx.lineTo(endX, centerY);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 3. Traveling Pure Red Pulse Wave
      const pulseProgress = (time * 0.35) % 1;
      const pulseX = startX + pulseProgress * (endX - startX);

      const gradient = ctx.createRadialGradient(pulseX, centerY, 0, pulseX, centerY, 60);
      gradient.addColorStop(0, 'rgba(255, 42, 42, 0.85)');
      gradient.addColorStop(0.5, 'rgba(255, 42, 42, 0.2)');
      gradient.addColorStop(1, 'rgba(255, 42, 42, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(pulseX, centerY, 60, 0, Math.PI * 2);
      ctx.fill();

      // Center Pulse Light
      ctx.beginPath();
      ctx.arc(pulseX, centerY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      // 4. Subtle Vertical Calipers for each node
      for (let i = 0; i < PROCESS_NODES.length; i++) {
        const nodeX = startX + i * stepWidth;
        const isActive = activeNode === i;

        ctx.beginPath();
        ctx.moveTo(nodeX, centerY - 25);
        ctx.lineTo(nodeX, centerY + 25);
        ctx.strokeStyle = isActive ? 'rgba(255, 42, 42, 0.6)' : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [activeNode]);

  const current = PROCESS_NODES[activeNode];
  const Icon = current.icon;

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 bg-dark-void text-white border-b border-dark-border relative overflow-hidden"
      id="process"
    >
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            badge="Product Architecture"
            title="From Thought to"
            titleHighlight="Technology."
            subtitle="A continuous digital stream transforming human intent into resilient, intelligent production software."
            theme="dark"
            align="center"
          />
        </motion.div>

        {/* Wide Horizontal Cinematic Technology Visual (21:9 container) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 rounded-3xl bg-[#0F0F14] border border-dark-border overflow-hidden shadow-2xl relative"
        >
          {/* HTML5 Canvas Background Network */}
          <div className="relative w-full h-[260px] sm:h-[300px] md:h-[340px]">
            <canvas ref={canvasRef} className="w-full h-full block" />

            {/* Overlay Interactive 6 Nodes */}
            <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-12 pointer-events-auto">
              {PROCESS_NODES.map((node, idx) => {
                const isActive = activeNode === idx;
                const NodeIcon = node.icon;

                return (
                  <button
                    key={node.num}
                    onClick={() => setActiveNode(idx)}
                    onMouseEnter={() => setActiveNode(idx)}
                    className="group flex flex-col items-center text-center focus:outline-none z-20 cursor-pointer"
                  >
                    {/* Node Circle */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-250 ${
                        isActive
                          ? 'bg-[#FF2A2A] text-white scale-110 shadow-[0_0_25px_rgba(255, 42, 42,0.7)] border border-white/30'
                          : 'bg-[#15151C] text-zinc-400 border border-zinc-800 group-hover:border-zinc-600 group-hover:text-white'
                      }`}
                    >
                      <NodeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Integrated Node Label */}
                    <span className="mt-3 text-[10px] font-mono text-zinc-500">
                      {node.num}
                    </span>
                    <span
                      className={`mt-0.5 text-xs sm:text-sm font-display font-semibold tracking-wider transition-colors ${
                        isActive ? 'text-[#FF2A2A]' : 'text-zinc-300 group-hover:text-white'
                      }`}
                    >
                      {node.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Active Stage Description Panel (30% Text Ratio) */}
          <div className="p-6 sm:p-8 bg-[#121217] border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-brand-red/10 border border-brand-red/25 text-[#FF2A2A]">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF2A2A] font-semibold">
                    STAGE {current.num}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-sm sm:text-base font-display font-semibold text-white">
                    {current.tagline}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal max-w-2xl">
                  {current.detail}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
              {PROCESS_NODES.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeNode === i ? 'w-5 bg-[#FF2A2A]' : 'bg-zinc-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
