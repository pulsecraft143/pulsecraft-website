import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-void text-white flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10">
        <div className="inline-flex mb-6">
          <Logo variant="icon" size="lg" isLink={false} />
        </div>

        <span className="text-xs font-sans uppercase tracking-wider text-brand-red font-semibold block mb-2">
          Page Not Found
        </span>

        <h1 className="text-6xl sm:text-8xl font-display font-semibold text-white tracking-tight">
          4<span className="text-brand-red">0</span>4
        </h1>

        <p className="mt-4 text-sm text-zinc-400 leading-relaxed font-normal">
          The page you are looking for does not exist or has been relocated.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
          <Button href="/contact" variant="outline" size="md">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
