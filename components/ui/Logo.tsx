'use client';

import React, { useState, useId } from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'icon' | 'horizontal';
  theme?: 'dark' | 'light' | 'mono-dark' | 'mono-light' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isLink?: boolean;
  renderMode?: 'svg' | 'image';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'dark',
  size = 'md',
  className = '',
  isLink = true,
  renderMode = 'svg',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const idPrefix = useId().replace(/:/g, '');

  const sizeMap = {
    sm: { width: 38, height: 21, brand: 'text-[16px]', sub: 'text-[8px]', gap: 'gap-2.5' },
    md: { width: 46, height: 25, brand: 'text-[19px]', sub: 'text-[9px]', gap: 'gap-3' },
    lg: { width: 58, height: 32, brand: 'text-[24px]', sub: 'text-[10.5px]', gap: 'gap-3.5' },
    xl: { width: 78, height: 43, brand: 'text-[30px]', sub: 'text-[12px]', gap: 'gap-4' },
  };

  const currentSize = sizeMap[size];
  const isLight = theme === 'light' || theme === 'mono-light';
  const isMono = theme === 'mono-dark' || theme === 'mono-light';

  // Strict Brand Color System
  const symbolColor = isMono
    ? isLight
      ? '#000000'
      : '#FFFFFF'
    : '#FF1E24';

  const pulseTextColor = isMono
    ? isLight
      ? '#000000'
      : '#FFFFFF'
    : isLight
    ? '#000000'
    : '#FFFFFF';

  const craftTextColor = isMono
    ? isLight
      ? '#000000'
      : '#FFFFFF'
    : '#FF2A2A';

  const subTextColor = isLight ? 'text-zinc-500' : 'text-zinc-400';

  // Unique Gradient IDs per component instance
  const redGradId = `pcRedGrad_${idPrefix}`;
  const leftFoldId = `pcLeftFold_${idPrefix}`;
  const rightFoldId = `pcRightFold_${idPrefix}`;
  const troughFoldId = `pcTroughFold_${idPrefix}`;

  // Authentic Brand Icon Mark: Code Syntax Chevrons (< >) embracing Living Telemetry Pulse Waveform
  const IconMark = renderMode === 'image' ? (
    <img
      src="/images/logo/pulsecraft-symbol.png"
      alt="PulseCraft Symbol"
      width={currentSize.width}
      height={currentSize.height}
      className="shrink-0 select-none object-contain transition-transform duration-300 ease-out"
      style={{
        width: currentSize.width,
        height: currentSize.height,
        transform: isHovered ? 'scale(1.05)' : 'none',
        filter: isHovered ? 'drop-shadow(0 0 8px rgba(255, 30, 36, 0.6))' : 'none',
      }}
    />
  ) : (
    <svg
      width={currentSize.width}
      height={currentSize.height}
      viewBox="0 0 102 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 select-none overflow-visible"
      aria-hidden="true"
    >
      <defs>
        {/* Vibrant primary pulse red gradient */}
        <linearGradient id={redGradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={isMono ? symbolColor : '#FF262C'} />
          <stop offset="50%" stopColor={isMono ? symbolColor : '#FF001E'} />
          <stop offset="100%" stopColor={isMono ? symbolColor : '#FF262C'} />
        </linearGradient>

        {/* Left Chevron Ribbon Fold Shadow */}
        <linearGradient id={leftFoldId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isMono ? symbolColor : '#7B0005'} />
          <stop offset="45%" stopColor={isMono ? symbolColor : '#B8000A'} />
          <stop offset="100%" stopColor={isMono ? symbolColor : '#FF2024'} />
        </linearGradient>

        {/* Right Chevron Ribbon Fold Shadow */}
        <linearGradient id={rightFoldId} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isMono ? symbolColor : '#7B0005'} />
          <stop offset="45%" stopColor={isMono ? symbolColor : '#B8000A'} />
          <stop offset="100%" stopColor={isMono ? symbolColor : '#FF2024'} />
        </linearGradient>

        {/* Trough Recovery Fold Shadow */}
        <linearGradient id={troughFoldId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={isMono ? symbolColor : '#800007'} />
          <stop offset="40%" stopColor={isMono ? symbolColor : '#C2000F'} />
          <stop offset="100%" stopColor={isMono ? symbolColor : '#FF2024'} />
        </linearGradient>
      </defs>

      {/* Left Chevron (<) with interactive micro-motion */}
      <g
        className="transition-transform duration-300 ease-out"
        style={{
          transform: isHovered ? 'translateX(-2px)' : 'none',
        }}
      >
        {/* Lower arm folding under with shadow */}
        <path
          d="M26 44 L10 28"
          stroke={isMono ? symbolColor : `url(#${leftFoldId})`}
          strokeWidth="5.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Upper arm in front */}
        <path
          d="M26 12 L10 28"
          stroke={isMono ? symbolColor : `url(#${redGradId})`}
          strokeWidth="5.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Central Telemetry Pulse Waveform */}
      <g
        className="transition-all duration-300 ease-out"
        style={{
          filter: isHovered && !isMono ? 'drop-shadow(0 0 6px rgba(255, 30, 36, 0.7))' : 'none',
        }}
      >
        {/* Recovery ascending from trough to right terminal */}
        <path
          d="M55.5 44 L63.5 28 H77"
          stroke={isMono ? symbolColor : `url(#${troughFoldId})`}
          strokeWidth="5.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Left horizontal lead-in, sharp peak, plunge to trough */}
        <path
          d="M24 28 H40 L47.5 8 L55.5 44"
          stroke={isMono ? symbolColor : `url(#${redGradId})`}
          strokeWidth="5.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Right Chevron (>) with interactive micro-motion */}
      <g
        className="transition-transform duration-300 ease-out"
        style={{
          transform: isHovered ? 'translateX(2px)' : 'none',
        }}
      >
        {/* Lower arm folding under with shadow */}
        <path
          d="M76 44 L92 28"
          stroke={isMono ? symbolColor : `url(#${rightFoldId})`}
          strokeWidth="5.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Upper arm in front */}
        <path
          d="M76 12 L92 28"
          stroke={isMono ? symbolColor : `url(#${redGradId})`}
          strokeWidth="5.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  // Custom Engineered Wordmark: PULSECRAFT + TECHNOLOGIES INC.
  const BrandText = (
    <div className="flex flex-col leading-none select-none text-left whitespace-nowrap">
      <div className={`font-sans font-bold ${currentSize.brand} tracking-[-0.025em] flex items-center`}>
        <span style={{ color: pulseTextColor }}>
          PULSE
        </span>
        <span style={{ color: craftTextColor }}>
          CRAFT
        </span>
      </div>
      {variant !== 'icon' && (
        <span
          className={`font-sans font-medium tracking-[0.14em] uppercase mt-1 ${currentSize.sub} ${subTextColor}`}
        >
          Technologies Inc.
        </span>
      )}
    </div>
  );

  const content = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group inline-flex items-center ${currentSize.gap} select-none ${className}`}
    >
      {IconMark}
      {variant !== 'icon' && BrandText}
    </div>
  );

  if (isLink) {
    return (
      <Link href="/" aria-label="PulseCraft Technologies Inc. Home">
        {content}
      </Link>
    );
  }

  return content;
};
