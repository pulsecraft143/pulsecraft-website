'use client';

import React, { useRef, useEffect } from 'react';

interface Particle3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  isRed: boolean;
  isInner: boolean;
  pulsePhase: number;
  speedMultiplier: number;
  codeToken?: string; // Programming syntax token
}

interface SynapticPulse {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
}

interface Shockwave {
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
}

// Programming tokens that orbit inside the 3D intelligence sphere
const CODE_TOKENS = [
  '</>', '{ }', '=>', 'fn()', 'async', '0x1F', '0101', '//', 'λ', 'git', 'await', 'npm', 'const', 'true'
];

export const PulseIntelligenceVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);



  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Smooth Spring Mouse Tracking
    let targetRotX = 0.1;
    let targetRotY = 0;
    let currentRotX = 0.1;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = nx * 0.85;
      targetRotX = -ny * 0.7;
    };

    const handleMouseLeave = () => {
      targetRotX = 0.1;
      targetRotY = 0;
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    // -----------------------------------------------------------------
    // Dual-Layer 3D Point Cloud with Embedded Programming Syntax Glyphs
    // -----------------------------------------------------------------
    const particles: Particle3D[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    // Outer Constellation Sphere (100 nodes, 14 of which are glowing code tokens)
    const outerCount = 100;
    const outerRadius = 142;
    for (let i = 0; i < outerCount; i++) {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / outerCount);
      const x = outerRadius * Math.sin(phi) * Math.cos(theta);
      const y = outerRadius * Math.sin(phi) * Math.sin(theta);
      const z = outerRadius * Math.cos(phi);

      const hasCode = i % 7 === 0;
      const codeToken = hasCode ? CODE_TOKENS[(i / 7) % CODE_TOKENS.length] : undefined;

      particles.push({
        x, y, z,
        baseX: x, baseY: y, baseZ: z,
        size: hasCode ? 2.8 : (Math.random() * 1.6 + 1.2),
        isRed: i % 3 === 0,
        isInner: false,
        pulsePhase: Math.random() * Math.PI * 2,
        speedMultiplier: Math.random() * 0.5 + 0.8,
        codeToken,
      });
    }

    // Inner Dense Intelligence Core (36 nodes)
    const innerCount = 36;
    const innerRadius = 62;
    for (let i = 0; i < innerCount; i++) {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / innerCount);
      const r = innerRadius * (0.6 + Math.random() * 0.5);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      particles.push({
        x, y, z,
        baseX: x, baseY: y, baseZ: z,
        size: Math.random() * 2.2 + 1.5,
        isRed: Math.random() < 0.7,
        isInner: true,
        pulsePhase: Math.random() * Math.PI * 2,
        speedMultiplier: Math.random() * 0.8 + 1.2,
      });
    }

    // Synaptic Pulses
    const synapticPulses: SynapticPulse[] = [
      { fromIndex: 6, toIndex: 20, progress: 0.1, speed: 0.018, color: '#FF2A2A' },
      { fromIndex: 25, toIndex: 40, progress: 0.45, speed: 0.022, color: '#FFFFFF' },
      { fromIndex: 50, toIndex: 68, progress: 0.8, speed: 0.015, color: '#FF4D4D' },
      { fromIndex: 82, toIndex: 94, progress: 0.3, speed: 0.025, color: '#FF2A2A' },
    ];

    // Shockwaves
    const shockwaves: Shockwave[] = [];
    let time = 0;
    let lastBeatTime = 0;

    // 3D Matrix Math Helper
    const rotate3D = (
      x: number, y: number, z: number,
      angleX: number, angleY: number, angleZ: number
    ) => {
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;

      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);
      const x3 = x2 * cosZ - y1 * sinZ;
      const y3 = x2 * sinZ + y1 * cosZ;

      return { x: x3, y: y3, z: z2 };
    };

    const project = (
      p: { x: number; y: number; z: number },
      cx: number, cy: number, fov = 350
    ) => {
      const scale = fov / (fov + p.z);
      return {
        x: cx + p.x * scale,
        y: cy + p.y * scale,
        scale,
        depth: p.z,
      };
    };

    const render = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      time += 0.016;

      // Spring Interpolation
      currentRotX += (targetRotX - currentRotX) * 0.04;
      currentRotY += (targetRotY - currentRotY) * 0.04;

      const baseSpin = time * 0.22;
      const rotX = currentRotX + Math.sin(time * 0.4) * 0.05;
      const rotY = baseSpin + currentRotY;
      const rotZ = Math.cos(time * 0.3) * 0.03;

      // Desktop: cx at 0.66 ensures generous clean breathing room from the left syntax steps
      // Mobile: cx at 0.50
      const isMobile = w < 640;
      const cx = isMobile ? w * 0.5 : w * 0.66;
      const cy = h * 0.48;

      // ----------------------------------------------------
      // Heartbeat Cycle (every 2.5s)
      // ----------------------------------------------------
      const beatPeriod = 2.5;
      const beatProgress = (time % beatPeriod) / beatPeriod;
      let heartScale = 1;

      if (beatProgress < 0.16) {
        heartScale = 1 + Math.sin((beatProgress / 0.16) * Math.PI) * 0.08;
      } else if (beatProgress >= 0.18 && beatProgress < 0.32) {
        heartScale = 1 + Math.sin(((beatProgress - 0.18) / 0.14) * Math.PI) * 0.05;
      }

      if (time - lastBeatTime > beatPeriod) {
        lastBeatTime = time;
        shockwaves.push({
          radius: 16,
          maxRadius: 215,
          alpha: 0.55,
          speed: 2.1,
        });
      }

      // ----------------------------------------------------
      // 1. Ambient Nebula Core Glow
      // ----------------------------------------------------
      const coreAura = ctx.createRadialGradient(cx, cy, 0, cx, cy, 225);
      coreAura.addColorStop(0, 'rgba(255, 42, 42, 0.30)');
      coreAura.addColorStop(0.22, 'rgba(255, 42, 42, 0.13)');
      coreAura.addColorStop(0.6, 'rgba(123, 0, 5, 0.04)');
      coreAura.addColorStop(1, 'rgba(11, 11, 13, 0)');

      ctx.fillStyle = coreAura;
      ctx.beginPath();
      ctx.arc(cx, cy, 225, 0, Math.PI * 2);
      ctx.fill();

      // ----------------------------------------------------
      // 2. Heartbeat Shockwaves (Expanding 3D Ripples)
      // ----------------------------------------------------
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += sw.speed;
        sw.alpha = Math.max(0, (1 - sw.radius / sw.maxRadius) * 0.55);

        if (sw.radius >= sw.maxRadius || sw.alpha <= 0.01) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(cx, cy, sw.radius, sw.radius * 0.74, 0.16, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 42, 42, ${sw.alpha})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
        ctx.restore();
      }

      // ----------------------------------------------------
      // 3. 3D Geodesic Latitude Rings
      // ----------------------------------------------------
      const latitudeAngles = [-0.55, 0, 0.55];
      latitudeAngles.forEach((latAngle, latIdx) => {
        const latR = Math.cos(latAngle) * outerRadius * heartScale;
        const latY = Math.sin(latAngle) * outerRadius * heartScale;
        const segs = 48;

        ctx.save();
        ctx.beginPath();
        for (let s = 0; s <= segs; s++) {
          const theta = (s / segs) * Math.PI * 2;
          const p3d = rotate3D(
            Math.cos(theta) * latR,
            latY,
            Math.sin(theta) * latR,
            rotX, rotY, rotZ
          );
          const p2d = project(p3d, cx, cy);
          if (s === 0) ctx.moveTo(p2d.x, p2d.y);
          else ctx.lineTo(p2d.x, p2d.y);
        }

        const isEquator = latIdx === 1;
        ctx.strokeStyle = isEquator ? 'rgba(255, 42, 42, 0.28)' : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = isEquator ? 1.1 : 0.75;
        if (!isEquator) ctx.setLineDash([3, 7]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      });

      // ----------------------------------------------------
      // 4. Counter-Rotating Aerospace Telemetry Rings
      // ----------------------------------------------------
      const ringR1 = 170;
      const ringR2 = 154;

      // Ring 1: Primary Gimbal Ring with Photon Spark
      ctx.save();
      ctx.beginPath();
      const segs1 = 64;
      for (let s = 0; s <= segs1; s++) {
        const angle = (s / segs1) * Math.PI * 2;
        const p3d = rotate3D(
          Math.cos(angle) * ringR1,
          Math.sin(angle) * (ringR1 * 0.22),
          Math.sin(angle) * ringR1,
          rotX + 0.35,
          rotY * 0.85,
          rotZ
        );
        const p2d = project(p3d, cx, cy);
        if (s === 0) ctx.moveTo(p2d.x, p2d.y);
        else ctx.lineTo(p2d.x, p2d.y);
      }
      ctx.strokeStyle = 'rgba(255, 42, 42, 0.32)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      const sparkAngle = (time * 1.5) % (Math.PI * 2);
      const spark3D = rotate3D(
        Math.cos(sparkAngle) * ringR1,
        Math.sin(sparkAngle) * (ringR1 * 0.22),
        Math.sin(sparkAngle) * ringR1,
        rotX + 0.35,
        rotY * 0.85,
        rotZ
      );
      const spark2D = project(spark3D, cx, cy);
      const sparkNormZ = (spark3D.z + ringR1) / (2 * ringR1);

      ctx.beginPath();
      ctx.arc(spark2D.x, spark2D.y, 4 * spark2D.scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + sparkNormZ * 0.5})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(spark2D.x, spark2D.y, 12 * spark2D.scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 42, 42, ${0.3 + sparkNormZ * 0.5})`;
      ctx.fill();
      ctx.restore();

      // Ring 2: Polar Gyro Ring (Dashed)
      ctx.save();
      ctx.beginPath();
      const segs2 = 56;
      for (let s = 0; s <= segs2; s++) {
        const angle = (s / segs2) * Math.PI * 2;
        const p3d = rotate3D(
          Math.cos(angle) * ringR2,
          Math.sin(angle) * ringR2,
          Math.cos(angle) * (ringR2 * 0.25),
          rotX - 0.4,
          -rotY * 0.7,
          rotZ + 0.15
        );
        const p2d = project(p3d, cx, cy);
        if (s === 0) ctx.moveTo(p2d.x, p2d.y);
        else ctx.lineTo(p2d.x, p2d.y);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 9]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Precision Degree Micro-Ticks on Equator (32 points)
      for (let k = 0; k < 32; k++) {
        const angle = (k / 32) * Math.PI * 2;
        const inR = 118;
        const outR = k % 4 === 0 ? 126 : 122;
        const p3d1 = rotate3D(Math.cos(angle) * inR, 0, Math.sin(angle) * inR, rotX, rotY, rotZ);
        const p3d2 = rotate3D(Math.cos(angle) * outR, 0, Math.sin(angle) * outR, rotX, rotY, rotZ);
        const p2d1 = project(p3d1, cx, cy);
        const p2d2 = project(p3d2, cx, cy);

        const tickDepth = (p3d1.z + 135) / 270;
        const tickAlpha = Math.max(0.04, tickDepth * 0.28);
        ctx.beginPath();
        ctx.moveTo(p2d1.x, p2d1.y);
        ctx.lineTo(p2d2.x, p2d2.y);
        ctx.strokeStyle = k % 4 === 0 ? `rgba(255, 42, 42, ${tickAlpha * 1.8})` : `rgba(255, 255, 255, ${tickAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // ----------------------------------------------------
      // 5. Update and Project 3D Particle Cloud
      // ----------------------------------------------------
      interface ProjectedParticle {
        index: number;
        x: number;
        y: number;
        z: number;
        screenX: number;
        screenY: number;
        scale: number;
        size: number;
        isRed: boolean;
        isInner: boolean;
        alpha: number;
        codeToken?: string;
      }

      const projected: ProjectedParticle[] = [];

      particles.forEach((pt, idx) => {
        const pulse = Math.sin(time * 3 * pt.speedMultiplier + pt.pulsePhase) * (pt.isInner ? 4 : 6);
        const len = Math.sqrt(pt.baseX * pt.baseX + pt.baseY * pt.baseY + pt.baseZ * pt.baseZ);
        const baseRadius = pt.isInner ? innerRadius : outerRadius;
        const r = (baseRadius + pulse) * heartScale;

        const nx = pt.baseX / len;
        const ny = pt.baseY / len;
        const nz = pt.baseZ / len;

        const rotated = rotate3D(nx * r, ny * r, nz * r, rotX, rotY, rotZ);
        const proj = project(rotated, cx, cy);

        const depthFactor = (rotated.z + outerRadius) / (2 * outerRadius);
        const alpha = Math.max(0.15, Math.min(1, depthFactor * 1.2));

        projected.push({
          index: idx,
          x: rotated.x,
          y: rotated.y,
          z: rotated.z,
          screenX: proj.x,
          screenY: proj.y,
          scale: proj.scale,
          size: pt.size * proj.scale,
          isRed: pt.isRed,
          isInner: pt.isInner,
          alpha,
          codeToken: pt.codeToken,
        });
      });

      projected.sort((a, b) => a.z - b.z);

      // ----------------------------------------------------
      // 6. Rich 3D Neural Filaments (Mesh Synapses)
      // ----------------------------------------------------
      const maxDistOuter = 76;
      const maxDistInner = 48;

      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const maxDist = p1.isInner && p2.isInner ? maxDistInner : maxDistOuter;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < maxDist) {
            const connectAlpha = (1 - dist3D / maxDist) * ((p1.alpha + p2.alpha) * 0.5) * 0.42;
            ctx.beginPath();
            ctx.moveTo(p1.screenX, p1.screenY);
            ctx.lineTo(p2.screenX, p2.screenY);

            if (p1.isRed || p2.isRed) {
              ctx.strokeStyle = `rgba(255, 42, 42, ${connectAlpha * 2.0})`;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${connectAlpha * 1.2})`;
            }
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Synaptic Pulses
      synapticPulses.forEach((sp) => {
        sp.progress += sp.speed;
        if (sp.progress > 1) {
          sp.progress = 0;
          sp.fromIndex = Math.floor(Math.random() * projected.length);
          sp.toIndex = Math.floor(Math.random() * projected.length);
        }

        const pA = projected[sp.fromIndex % projected.length];
        const pB = projected[sp.toIndex % projected.length];
        if (!pA || !pB) return;

        const pulseX = pA.screenX + (pB.screenX - pA.screenX) * sp.progress;
        const pulseY = pA.screenY + (pB.screenY - pA.screenY) * sp.progress;
        const pulseAlpha = Math.sin(sp.progress * Math.PI) * 0.85;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = sp.color;
        ctx.globalAlpha = pulseAlpha;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 7, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 42, 42, 0.45)';
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // ----------------------------------------------------
      // 7. Dynamic ECG Heartbeat Waveform ("The Pulse")
      // ----------------------------------------------------
      ctx.save();
      // Wave spans strictly within sphere radius to protect left-side text
      const waveSpan = 135;
      const waveStartX = cx - waveSpan;
      const waveEndX = cx + waveSpan;
      const waveWidth = waveEndX - waveStartX;
      const waveY = cy;

      const waveSpeed = 1.35;
      const pulseCycle = ((time * waveSpeed) % 2.5) / 1.6;
      const pulseHeadX = waveStartX + Math.min(1, pulseCycle) * waveWidth;

      ctx.beginPath();
      const wavePointsCount = 110;

      for (let i = 0; i <= wavePointsCount; i++) {
        const progress = i / wavePointsCount;
        const x = waveStartX + progress * waveWidth;
        const envelope = Math.sin(progress * Math.PI);
        const distFromHead = Math.abs(x - pulseHeadX);
        let deflection = 0;
        const baseline = Math.sin(x * 0.06 + time * 3.5) * 2;

        if (distFromHead < 54) {
          const u = (x - pulseHeadX) / 54;
          if (u > -0.18 && u < 0.18) {
            deflection = -Math.cos(u * Math.PI * 2.7) * 34;
          } else if (u >= 0.18 && u < 0.42) {
            deflection = Math.sin((u - 0.18) * Math.PI * 4.1) * 13;
          } else if (u <= -0.18 && u > -0.42) {
            deflection = Math.sin((u + 0.18) * Math.PI * 4.1) * 9.5;
          } else if (u > 0.42 && u < 0.8) {
            deflection = -Math.sin((u - 0.42) * Math.PI * 2.6) * 11;
          }
        }

        const y = waveY + (deflection + baseline) * envelope;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      const waveGradGlow = ctx.createLinearGradient(waveStartX, 0, waveEndX, 0);
      waveGradGlow.addColorStop(0, 'rgba(255, 42, 42, 0)');
      waveGradGlow.addColorStop(0.2, 'rgba(255, 42, 42, 0.45)');
      waveGradGlow.addColorStop(0.5, 'rgba(255, 42, 42, 0.65)');
      waveGradGlow.addColorStop(0.8, 'rgba(255, 42, 42, 0.45)');
      waveGradGlow.addColorStop(1, 'rgba(255, 42, 42, 0)');

      ctx.strokeStyle = waveGradGlow;
      ctx.lineWidth = 3.4;
      ctx.stroke();

      const waveGradCore = ctx.createLinearGradient(waveStartX, 0, waveEndX, 0);
      waveGradCore.addColorStop(0, 'rgba(255, 255, 255, 0)');
      waveGradCore.addColorStop(0.22, 'rgba(255, 255, 255, 0.9)');
      waveGradCore.addColorStop(0.78, 'rgba(255, 255, 255, 0.9)');
      waveGradCore.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.strokeStyle = waveGradCore;
      ctx.lineWidth = 1.4;
      ctx.stroke();

      if (pulseCycle <= 1.02) {
        ctx.beginPath();
        ctx.arc(pulseHeadX, waveY, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pulseHeadX, waveY, 14, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 42, 42, 0.5)';
        ctx.fill();
      }
      ctx.restore();

      // ----------------------------------------------------
      // 8. Render Particles & Floating 3D Programming Glyphs
      // ----------------------------------------------------
      projected.forEach((pt) => {
        const isForeground = pt.z > 15;
        const distToPulse = Math.hypot(pt.screenX - pulseHeadX, pt.screenY - waveY);
        let pulseGlow = 0;
        if (pulseCycle <= 1.02 && distToPulse < 48) {
          pulseGlow = (1 - distToPulse / 48) * 0.75;
        }

        // IF PARTICLE HAS A PROGRAMMING SYNTAX TOKEN (e.g. `</>`, `{ }`, `=>`, `fn()`)
        if (pt.codeToken) {
          const fontSize = Math.max(9, Math.round(11 * pt.scale));
          ctx.save();
          ctx.font = `600 ${fontSize}px "Fira Code", "Courier New", monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Glowing background aura for code token
          if (isForeground) {
            ctx.shadowColor = pt.isRed ? '#FF2A2A' : '#FFFFFF';
            ctx.shadowBlur = 10;
          }

          ctx.fillStyle = pt.isRed
            ? `rgba(255, 60, 60, ${Math.min(1, pt.alpha + pulseGlow)})`
            : `rgba(255, 255, 255, ${Math.min(1, pt.alpha * 0.95 + pulseGlow)})`;

          ctx.fillText(pt.codeToken, pt.screenX, pt.screenY);
          ctx.restore();
          return;
        }

        // Standard Particle Node
        if (isForeground || pulseGlow > 0) {
          ctx.beginPath();
          ctx.arc(pt.screenX, pt.screenY, pt.size * (pt.isRed ? 3.6 : 2.4) * (1 + pulseGlow * 0.5), 0, Math.PI * 2);
          ctx.fillStyle = pt.isRed
            ? `rgba(255, 42, 42, ${(pt.alpha + pulseGlow) * 0.4})`
            : `rgba(255, 255, 255, ${(pt.alpha + pulseGlow) * 0.22})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(pt.screenX, pt.screenY, pt.size * (1 + pulseGlow * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = pt.isRed
          ? `rgba(255, 42, 42, ${Math.min(1, pt.alpha + pulseGlow)})`
          : `rgba(255, 255, 255, ${Math.min(1, pt.alpha + pulseGlow)})`;
        ctx.fill();

        if (pt.isRed && isForeground) {
          ctx.beginPath();
          ctx.arc(pt.screenX, pt.screenY, pt.size * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        }
      });

      // ----------------------------------------------------
      // 9. Luminous Singularity Core
      // ----------------------------------------------------
      const nucleusR = 6.5 * heartScale;
      ctx.beginPath();
      ctx.arc(cx, cy, nucleusR, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = '#FF2A2A';
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(cx, cy, 15 * heartScale, 0, Math.PI * 2);
      ctx.strokeStyle = '#FF2A2A';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 28 * heartScale, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 42, 42, 0.32)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[470px] sm:h-[530px] lg:h-[580px] flex items-center justify-center select-none"
    >
      {/* 3D HTML5 Canvas Visualization with 3D Rotating Code Tokens */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair"
      />

      {/* 3 Steps: Developer Syntax Touch & ZERO Shape/Box */}
      <div className="hidden sm:flex absolute top-1/2 left-0 sm:left-1 -translate-y-1/2 flex-col gap-6 select-none z-10">
        <div className="relative flex flex-col gap-6">
          {/* Subtle vertical thread */}
          <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent pointer-events-none" />

          {/* Step 1: Ideas (Code Comment syntax) */}
          <div className="relative flex items-center gap-2.5 font-mono">
            <span className="text-zinc-600 text-xs">//</span>
            <span className="text-xs tracking-wider text-zinc-400 font-medium">
              01.IDEAS
            </span>
          </div>

          {/* Step 2: Intelligence (Active arrow function syntax) */}
          <div className="relative flex items-center gap-2.5 font-mono">
            <span className="text-[#FF2A2A] font-bold text-xs">=&gt;</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-wider text-white drop-shadow-[0_0_8px_rgba(255,42,42,0.5)]">
                02.INTELLIGENCE
              </span>
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2A2A] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF2A2A] shadow-[0_0_8px_rgba(255,42,42,0.9)]" />
              </span>
            </div>
          </div>

          {/* Step 3: Impact (Code Comment syntax) */}
          <div className="relative flex items-center gap-2.5 font-mono">
            <span className="text-zinc-600 text-xs">//</span>
            <span className="text-xs tracking-wider text-zinc-400 font-medium">
              03.IMPACT
            </span>
          </div>
        </div>
      </div>

      {/* Mobile 3 Steps (Floating, no shape) */}
      <div className="sm:hidden absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[10px] font-mono tracking-wider select-none z-10">
        <span className="text-zinc-500">// 01.IDEAS</span>
        <span className="w-1 h-1 rounded-full bg-zinc-700" />
        <span className="text-white font-bold flex items-center gap-1">
          <span className="text-[#FF2A2A]">=&gt;</span> 02.INTELLIGENCE
        </span>
        <span className="w-1 h-1 rounded-full bg-zinc-700" />
        <span className="text-zinc-500">// 03.IMPACT</span>
      </div>
    </div>
  );
};
