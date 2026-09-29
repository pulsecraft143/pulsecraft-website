'use client';

import React, { useRef, useEffect } from 'react';

export const HeroAiBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let isVisible = true;
    let time = 0;

    // Responsive Canvas Resize with devicePixelRatio
    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();
    window.addEventListener('resize', updateSize, { passive: true });

    // Subtle Mouse Position tracking (Desktop only, clamped to 5px max displacement)
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const rect = container.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = relX * 10; // Max ~5px displacement
      targetMouseY = relY * 10;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // IntersectionObserver to pause loop when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const isMobile = window.innerWidth < 768;

    // Edge-Biased Node Distribution (Leaving center headline clean & calm)
    const nodeCount = isMobile ? 16 : 28;
    const nodes = Array.from({ length: nodeCount }, () => {
      // Bias X toward left (0.05-0.35) or right (0.65-0.95)
      const isLeft = Math.random() < 0.45;
      const x = isLeft
        ? Math.random() * 0.38 + 0.02
        : Math.random() * 0.42 + 0.56;
      const y = Math.random() * 0.9 + 0.05;

      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.00015,
        vy: (Math.random() - 0.5) * 0.00015,
        radius: Math.random() * 1.5 + 1.5, // 1.5 - 3px
        baseOpacity: Math.random() * 0.16 + 0.12, // 0.12 - 0.28
        isRed: Math.random() < 0.2,
        depthLayer: Math.random() < 0.4 ? 1 : 2, // 1: Background, 2: Middle
      };
    });

    // Slow Digital Data Particles
    const particleCount = isMobile ? 12 : 24;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      vy: -(Math.random() * 0.00025 + 0.0001),
      size: Math.random() * 1.2 + 0.6,
      alpha: Math.random() * 0.2 + 0.08,
      phase: Math.random() * Math.PI * 2,
    }));

    // Multi-Path Asynchronous Red Pulse Signals (Signature PulseCraft moment)
    const pulses = [
      { from: 1, to: 6, progress: 0.1, speed: 0.0022, active: true, trail: [] as { x: number; y: number; a: number }[] },
      { from: 12, to: 18, progress: 0.55, speed: 0.0018, active: true, trail: [] as { x: number; y: number; a: number }[] },
      { from: 20, to: 24, progress: 0.85, speed: 0.0025, active: true, trail: [] as { x: number; y: number; a: number }[] },
    ];

    // Horizontal Technical Signal Lines (Code-like bus)
    const horizontalBuses = [
      { yRatio: 0.22, speed: 0.0008, offset: 0.1, isRed: false },
      { yRatio: 0.78, speed: 0.0012, offset: 0.6, isRed: true },
      { yRatio: 0.91, speed: 0.0006, offset: 0.35, isRed: false },
    ];

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const w = container.offsetWidth;
      const h = container.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      if (!prefersReducedMotion) {
        time += 0.01;
        mouseX += (targetMouseX - mouseX) * 0.03;
        mouseY += (targetMouseY - mouseY) * 0.03;
      }

      // 1. Subtle Background Waveform (Sine signal flow)
      ctx.save();
      ctx.beginPath();
      const waveY = h * 0.72 + mouseY * 0.4;
      for (let x = 0; x <= w; x += 12) {
        const s1 = Math.sin(x * 0.0035 + time * 0.6) * 18;
        const s2 = Math.cos(x * 0.007 - time * 0.4) * 8;
        const y = waveY + s1 + s2;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(255, 42, 42, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Second harmonic line
      ctx.beginPath();
      for (let x = 0; x <= w; x += 14) {
        const s1 = Math.sin(x * 0.0045 - time * 0.5) * 12;
        const y = waveY + 10 + s1;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();

      // 2. Horizontal Data Signal Bus Lines (with moving micro-segments)
      horizontalBuses.forEach((bus) => {
        const py = bus.yRatio * h;
        ctx.beginPath();
        ctx.moveTo(w * 0.04, py);
        ctx.lineTo(w * 0.96, py);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 0.75;
        ctx.setLineDash([4, 12]);
        ctx.stroke();
        ctx.setLineDash([]); // reset

        // Moving data dot along the bus
        if (!prefersReducedMotion) {
          bus.offset = (bus.offset + bus.speed) % 1;
          const dotX = w * (0.04 + bus.offset * 0.92);
          ctx.beginPath();
          ctx.arc(dotX, py, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = bus.isRed ? '#FF2A2A' : 'rgba(255, 255, 255, 0.4)';
          ctx.fill();
        }
      });

      // 3. Compute and Update Nodes
      const computedNodes = nodes.map((node) => {
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0.01) node.x = 0.99;
          if (node.x > 0.99) node.x = 0.01;
          if (node.y < 0.02) node.y = 0.98;
          if (node.y > 0.98) node.y = 0.02;
        }

        const layerFactor = node.depthLayer === 1 ? 0.5 : 1;
        const px = node.x * w + mouseX * layerFactor;
        const py = node.y * h + mouseY * layerFactor;
        return { ...node, px, py };
      });

      // 4. Connect Nearest Nodes with Thin Low-Opacity Technical Lines
      const maxDistance = isMobile ? 130 : 180;
      for (let i = 0; i < computedNodes.length; i++) {
        for (let j = i + 1; j < computedNodes.length; j++) {
          const dx = computedNodes[i].px - computedNodes[j].px;
          const dy = computedNodes[i].py - computedNodes[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.09;
            ctx.beginPath();
            ctx.moveTo(computedNodes[i].px, computedNodes[i].py);
            ctx.lineTo(computedNodes[j].px, computedNodes[j].py);

            if (computedNodes[i].isRed || computedNodes[j].isRed) {
              ctx.strokeStyle = `rgba(255, 42, 42, ${lineAlpha * 1.4})`;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            }
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 5. Draw Traveling Pure Red Light Pulses along Network Lines with Trails
      if (!prefersReducedMotion) {
        pulses.forEach((pulse) => {
          pulse.progress += pulse.speed;
          if (pulse.progress > 1) {
            pulse.progress = 0;
            pulse.from = Math.floor(Math.random() * computedNodes.length);
            pulse.to = Math.floor(Math.random() * computedNodes.length);
            pulse.trail = [];
          }

          const n1 = computedNodes[pulse.from % computedNodes.length];
          const n2 = computedNodes[pulse.to % computedNodes.length];
          if (!n1 || !n2) return;

          const px = n1.px + (n2.px - n1.px) * pulse.progress;
          const py = n1.py + (n2.py - n1.py) * pulse.progress;

          // Record trail
          pulse.trail.push({ x: px, y: py, a: 0.25 });
          if (pulse.trail.length > 8) pulse.trail.shift();

          // Render Trail
          pulse.trail.forEach((pt, idx) => {
            const trailAlpha = (idx / pulse.trail.length) * 0.2;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 1.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 42, 42, ${trailAlpha})`;
            ctx.fill();
          });

          // Head Red Signal Pulse
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = '#FF2A2A';
          ctx.fill();

          // Soft glow
          ctx.beginPath();
          ctx.arc(px, py, 5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 42, 42, 0.18)';
          ctx.fill();
        });
      }

      // 6. Draw Nodes with Pure Red / Pure White Centers
      computedNodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.px, node.py, node.radius, 0, Math.PI * 2);
        if (node.isRed) {
          ctx.fillStyle = `rgba(255, 42, 42, ${node.baseOpacity * 1.5})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${node.baseOpacity})`;
        }
        ctx.fill();

        // Core dot for red nodes
        if (node.isRed) {
          ctx.beginPath();
          ctx.arc(node.px, node.py, 1, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        }
      });

      // 7. Draw Subtle Upward Drifting Data Particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.y += p.vy;
          if (p.y < 0) p.y = 1;
        }

        const px = p.x * w;
        const py = p.y * h;
        const currentAlpha = p.alpha * (0.6 + Math.sin(time + p.phase) * 0.4);

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 0.5})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none"
    >
      <canvas ref={canvasRef} className="w-full h-full block opacity-90" />
    </div>
  );
};
