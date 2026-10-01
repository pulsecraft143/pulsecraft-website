'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Check, X, Lock } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('pulsecraft_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pulsecraft_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('pulsecraft_cookie_consent', 'essential_only');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          role="region"
          aria-label="Privacy and Cookie Consent"
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[460px] z-50 bg-[#0C0C10]/95 sm:bg-[#0C0C10]/90 border border-white/[0.08] rounded-2xl p-4 sm:p-5 shadow-[0_24px_64px_rgba(0,0,0,0.9),0_0_1px_1px_rgba(255,255,255,0.06)] backdrop-blur-2xl relative overflow-hidden"
        >
          {/* Subtle Top Red Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF2A2A]/70 to-transparent pointer-events-none" />

          {/* Header Row: Shield + Compliance Badge + Close Button */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/25 text-[#FF2A2A] shrink-0 shadow-[0_0_12px_rgba(255,42,42,0.2)]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.12em] text-[#FF2A2A] uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] animate-pulse" />
                  <span>PIPEDA & GDPR Compliant</span>
                </span>
                <h4 className="text-sm font-display font-semibold text-white mt-0.5 leading-snug">
                  Privacy & Data Governance
                </h4>
              </div>
            </div>

            {/* Quick Dismiss Button */}
            <button
              onClick={handleDecline}
              aria-label="Dismiss cookie notice"
              className="p-1.5 -mr-1 -mt-1 rounded-lg text-zinc-500 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Explanatory Body Copy */}
          <p className="mt-2.5 text-xs text-zinc-400 font-sans leading-relaxed">
            PulseCraft Technologies Inc. uses necessary cookies and privacy-first analytics to ensure platform security, high performance, and an optimal browsing experience.
          </p>

          {/* Action Area: Mobile-First Responsive Layout */}
          <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex flex-col gap-2.5">
            {/* Buttons: 2 Equal Columns on Mobile, Flex on Desktop */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-2.5">
              <button
                type="button"
                onClick={handleAccept}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#FF2A2A] hover:bg-[#E62020] text-white text-xs font-semibold shadow-[0_0_16px_rgba(255,42,42,0.35)] transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] select-none"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Accept All</span>
              </button>

              <button
                type="button"
                onClick={handleDecline}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 text-xs font-medium transition-all flex items-center justify-center active:scale-[0.98] select-none"
              >
                <span>Essential Only</span>
              </button>
            </div>

            {/* Micro Metadata Row */}
            <div className="flex items-center justify-between text-[11px] font-sans text-zinc-500 pt-0.5">
              <span className="inline-flex items-center gap-1.5 text-zinc-400">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>Zero ad trackers</span>
              </span>

              <Link
                href="/privacy"
                className="text-zinc-400 hover:text-white transition-colors underline underline-offset-2"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
