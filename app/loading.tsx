import React from 'react';
import { Logo } from '@/components/ui/Logo';

export default function Loading() {
  return (
    <div className="min-h-screen bg-dark-void text-white flex flex-col items-center justify-center p-6 relative">
      <div className="relative mb-6 flex items-center justify-center p-3">
        <Logo variant="icon" size="xl" isLink={false} />
        <div className="absolute inset-0 rounded-2xl border border-brand-red/30 animate-pulse pointer-events-none" />
      </div>
      <div className="flex items-center gap-2 text-xs font-sans font-medium text-zinc-400">
        <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
        <span>Loading PulseCraft...</span>
      </div>
    </div>
  );
}
