'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      href,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    // Restrained 9px-11px rounded border radius (Apple/Google restraint)
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-[9px] select-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#FF2A2A]/40 active:scale-[0.98]';

    const sizeStyles = {
      sm: 'text-xs px-4 py-2 gap-1.5 font-medium tracking-wide',
      md: 'text-sm px-5 py-2.5 gap-2 font-medium tracking-wide',
      lg: 'text-base px-6 py-3 gap-2.5 font-medium tracking-wide',
    };

    const variantStyles = {
      primary:
        'bg-[#FF2A2A] text-[#FFFFFF] hover:bg-[#E62020] shadow-sm hover:shadow-[0_0_15px_rgba(255, 42, 42,0.3)] border border-[#FF2A2A]/40',
      glow:
        'bg-[#FF2A2A] text-[#FFFFFF] hover:bg-[#E62020] shadow-[0_0_15px_rgba(255, 42, 42,0.3)] hover:shadow-[0_0_22px_rgba(255, 42, 42,0.5)] border border-[#FF2A2A]/60 relative overflow-hidden',
      secondary:
        'bg-zinc-900 text-[#FFFFFF] hover:bg-zinc-800 hover:text-[#FFFFFF] border border-zinc-800 shadow-sm',
      outline:
        'border border-zinc-700/80 text-zinc-300 hover:text-[#FFFFFF] hover:border-zinc-500 bg-transparent hover:bg-zinc-900/40',
      ghost:
        'text-zinc-400 hover:text-[#FFFFFF] hover:bg-zinc-800/60 border border-transparent',
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={cn(combinedClassName, 'group')}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(combinedClassName, 'group')}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
