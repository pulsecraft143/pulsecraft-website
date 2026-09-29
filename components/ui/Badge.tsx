'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'red' | 'outline' | 'subtle' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-medium',
  };

  const variantStyles = {
    default: 'bg-zinc-800/80 text-zinc-300 border border-zinc-700/60',
    red: 'bg-brand-red/10 text-red-400 border border-brand-red/30',
    outline: 'border border-zinc-700/80 text-zinc-400 bg-transparent',
    subtle: 'bg-slate-100 text-slate-700 border border-slate-200',
    dark: 'bg-zinc-900 text-zinc-300 border border-zinc-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md font-mono tracking-wide',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
