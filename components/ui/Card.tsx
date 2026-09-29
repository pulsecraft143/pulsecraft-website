'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'light' | 'glass' | 'interactive';
  hoverEffect?: boolean;
  glowOnHover?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'dark',
  hoverEffect = true,
  glowOnHover = true,
  children,
  className,
  ...props
}) => {
  const variantStyles = {
    dark: 'bg-dark-surface/90 border border-dark-border text-white',
    light: 'bg-white border border-light-border text-slate-900 shadow-sm',
    glass: 'bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 text-white',
    interactive:
      'bg-dark-card/80 border border-dark-border/80 hover:border-zinc-700/80 text-white',
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden',
        variantStyles[variant],
        hoverEffect && 'hover:-translate-y-1',
        glowOnHover &&
          'hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-brand-red/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
