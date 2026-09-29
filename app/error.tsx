'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('PulseCraft application runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-dark-void text-white flex items-center justify-center p-6 relative overflow-hidden">
      <div className="max-w-md w-full text-center relative z-10">
        <div className="w-16 h-16 rounded-3xl bg-red-500/10 border border-red-500/30 text-brand-red flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold block mb-2">
          SYSTEM FAULT // EXCEPTION CAUGHT
        </span>

        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
          Runtime Exception
        </h1>

        <p className="mt-4 text-xs font-mono text-zinc-400 p-3 rounded-xl bg-zinc-950 border border-zinc-800 leading-relaxed text-left">
          {error.message || 'An unexpected failure occurred while rendering this view.'}
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button variant="primary" size="md" onClick={() => reset()} leftIcon={<RefreshCw className="w-4 h-4" />}>
            Retry Operation
          </Button>
          <Button href="/" variant="outline" size="md" leftIcon={<Home className="w-4 h-4" />}>
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}
