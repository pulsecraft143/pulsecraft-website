'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('pulsecraft_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-5 left-5 right-5 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-zinc-900/95 border border-zinc-800 rounded-2xl p-5 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red shrink-0 mt-0.5">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-display font-semibold text-white">
                Privacy & Data Security (PIPEDA Compliant)
              </h4>
              <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                PulseCraft Technologies Inc. uses necessary cookies and analytics to ensure optimal performance, security, and user experience.
              </p>
              <div className="mt-3.5 flex items-center gap-2.5">
                <Button size="sm" variant="primary" onClick={handleAccept} leftIcon={<Check className="w-3.5 h-3.5" />}>
                  Accept All
                </Button>
                <Button size="sm" variant="outline" onClick={handleDecline}>
                  Essential Only
                </Button>
                <Link
                  href="/privacy"
                  className="text-xs text-zinc-500 hover:text-zinc-300 ml-auto underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
