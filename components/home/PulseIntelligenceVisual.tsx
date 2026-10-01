'use client';

import React, { useRef, useEffect } from 'react';

export const PulseIntelligenceVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 500);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 500);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    let mouseX = width / (2 * window.devicePixelRatio);
    let mouseY = height / (2 * window.devicePixelRatio);
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Geometric Nodes for Neural Graph
    const nodesCount = 28;
    const nodes = Array.from({ length: nodesCount }, (_, i) => {
      const angle = (i / nodesCount) * Math.PI * 2;
      const radius = 60 + Math.random() * 110;
      return {
        baseRadius: radius,
        angle,
        speed: (Math.random() - 0.5) * 0.004,
        size: Math.random() * 2 + 1.5,
        pulseOffset: Math.random() * Math.PI * 2,
        isRed: i % 4 === 0,
      };
    });

    let time = 0;

    const render = () => {
      const displayW = canvas.offsetWidth;
      const displayH = canvas.offsetHeight;

      if (canvas.width !== displayW * window.devicePixelRatio || canvas.height !== displayH * window.devicePixelRatio) {
        width = canvas.width = displayW * window.devicePixelRatio;
        height = canvas.height = displayH * window.devicePixelRatio;
      }

      ctx.save();
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.clearRect(0, 0, displayW, displayH);

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const centerX = displayW / 2 + (mouseX - displayW / 2) * 0.06;
      const centerY = displayH / 2 + (mouseY - displayH / 2) * 0.06;

      time += 0.015;

      // 1. Central Core Radial Glow
      const coreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        180
      );
      coreGradient.addColorStop(0, 'rgba(255, 42, 42, 0.16)');
      coreGradient.addColorStop(0.35, 'rgba(255, 42, 42, 0.04)');
      coreGradient.addColorStop(1, 'rgba(11, 11, 14, 0)');

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 180, 0, Math.PI * 2);
      ctx.fill();

      // 2. Concentric Mathematical Orbit Rings
      const ringRadii = [45, 90, 140, 185];
      ringRadii.forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r + Math.sin(time + idx) * 2, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 1 ? 'rgba(255, 42, 42, 0.25)' : 'rgba(255, 255, 255, 0.07)';
        ctx.lineWidth = 1;
        ctx.setLineDash(idx % 2 === 0 ? [3, 6] : [1, 0]);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // 3. Flowing Sinusoidal Waveform Ribbon
      ctx.beginPath();
      for (let x = -40; x <= displayW + 40; x += 6) {
        const distFromCenter = Math.abs(x - centerX) / (displayW / 2);
        const amplitude = Math.max(0, 1 - distFromCenter) * 32;
        const waveY = centerY + Math.sin(x * 0.02 + time * 1.5) * amplitude;
        if (x === -40) ctx.moveTo(x, waveY);
        else ctx.lineTo(x, waveY);
      }
      ctx.strokeStyle = 'rgba(255, 42, 42, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Secondary Harmonized Wave
      ctx.beginPath();
      for (let x = -40; x <= displayW + 40; x += 6) {
        const distFromCenter = Math.abs(x - centerX) / (displayW / 2);
        const amplitude = Math.max(0, 1 - distFromCenter) * 20;
        const waveY = centerY + Math.cos(x * 0.025 - time * 1.2) * amplitude;
        if (x === -40) ctx.moveTo(x, waveY);
        else ctx.lineTo(x, waveY);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 4. Calculate Node Positions
      const computedPositions = nodes.map((node) => {
        node.angle += node.speed;
        const r = node.baseRadius + Math.sin(time * 2 + node.pulseOffset) * 6;
        const x = centerX + Math.cos(node.angle) * r;
        const y = centerY + Math.sin(node.angle) * (r * 0.78); // Elliptical depth
        return { ...node, x, y };
      });

      // 5. Connect Near Nodes with Neural Mesh Lines
      for (let i = 0; i < computedPositions.length; i++) {
        for (let j = i + 1; j < computedPositions.length; j++) {
          const dx = computedPositions[i].x - computedPositions[j].x;
          const dy = computedPositions[i].y - computedPositions[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const alpha = (1 - dist / 85) * 0.22;
            ctx.beginPath();
            ctx.moveTo(computedPositions[i].x, computedPositions[i].y);
            ctx.lineTo(computedPositions[j].x, computedPositions[j].y);
            ctx.strokeStyle = computedPositions[i].isRed || computedPositions[j].isRed
              ? `rgba(255, 42, 42, ${alpha * 1.6})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 6. Draw Nodes & Central Core
      computedPositions.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.isRed ? '#E53935' : 'rgba(255, 255, 255, 0.85)';
        ctx.fill();

        if (node.isRed) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 42, 42, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Central Pulse Center Hub
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 12 + Math.sin(time * 3) * 2, 0, Math.PI * 2);
      ctx.strokeStyle = '#E53935';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] flex items-center justify-center select-none"
    >
      {/* HTML5 Canvas Visualization */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />

      {/* Floating System Badges */}
      <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-zinc-950/85 border border-zinc-800 text-xs font-sans font-medium text-zinc-300 backdrop-blur-md shadow-sm">
        <span className="text-brand-red mr-1.5 font-bold">●</span>
        <span>Intelligence Architecture</span>
      </div>

      <div className="absolute bottom-6 right-6 px-3.5 py-1.5 rounded-full bg-zinc-950/85 border border-zinc-800 text-xs font-sans font-medium text-zinc-300 backdrop-blur-md shadow-sm">
        <span>99.99% Enterprise Uptime</span>
      </div>

      {/* Narrative Concept Points */}
      <div className="absolute top-1/2 -left-2 sm:left-4 -translate-y-1/2 flex flex-col gap-6 text-xs font-sans font-medium text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span className="tracking-wide">Ideas</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
          <span className="text-white font-semibold tracking-wide">Intelligence</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span className="tracking-wide">Impact</span>
        </div>
      </div>
    </div>
  );
};
