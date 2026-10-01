'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  theme = 'dark',
  className = '',
}) => {
  const isLight = theme === 'light';

  return (
    <div
      className={cn(
        'max-w-2xl mb-8 md:mb-12',
        align === 'center' && 'mx-auto text-center',
        align === 'left' && 'text-left',
        align === 'right' && 'ml-auto text-right',
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-1.5 mb-3.5">
          <span
            className={cn(
              'px-3 py-1 rounded-full text-xs font-sans font-semibold tracking-wide uppercase border',
              isLight
                ? 'bg-slate-100 text-slate-700 border-slate-200'
                : 'bg-brand-red/10 text-[#FF2A2A] border-brand-red/25'
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] inline-block mr-1.5" />
            {badge}
          </span>
        </div>
      )}

      {/* Heading in Pure White/Black with Pure Red #FF2A2A Highlight (Zero Gradient Text) */}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-display font-medium tracking-tight leading-[1.28] sm:leading-[1.32] lg:leading-[1.34]',
          isLight ? 'text-slate-900' : 'text-[#FFFFFF]'
        )}
      >
        <span>{title}</span>{' '}
        {titleHighlight && (
          <span className="text-[#FF2A2A] font-semibold inline-block">
            {titleHighlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg font-normal leading-relaxed max-w-xl',
            align === 'center' && 'mx-auto',
            isLight ? 'text-slate-600' : 'text-zinc-400'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
