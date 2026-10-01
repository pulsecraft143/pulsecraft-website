'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { MAIN_NAV_ITEMS } from '@/data/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Immediately activate dark backdrop as soon as user scrolls off top (scrollY > 4)
      setScrolled(window.scrollY > 4);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out h-[72px] sm:h-[76px] flex items-center ${
          scrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between whitespace-nowrap">
          {/* Logo on the Left: Flat Pure Red #FF2A2A + Pure White #FFFFFF */}
          <div className="shrink-0 flex items-center">
            <Logo variant="full" theme="dark" size="md" />
          </div>

          {/* Desktop Text-Based Navigation — Minimal 2px Pure Red Underline */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-2 text-sm font-medium tracking-tight transition-colors duration-200 select-none ${
                    isActive
                      ? 'text-[#FFFFFF]'
                      : 'text-zinc-400 hover:text-[#FFFFFF]'
                  }`}
                >
                  <span>{item.name}</span>

                  {/* Active Underline (2px Pure Red #FF2A2A, Zero Box/Pill/Container) */}
                  {isActive ? (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF2A2A] rounded-full shadow-[0_0_8px_rgba(255, 42, 42,0.6)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF2A2A] scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right-Side CTA: Get in Touch (Pure Red #FF2A2A, 9px radius) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Button
              href="/contact"
              size="sm"
              variant="primary"
              className="text-xs px-4 py-2 rounded-[9px]"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              href="/contact"
              size="sm"
              variant="primary"
              className="text-xs px-3 py-1.5 rounded-[8px]"
            >
              Touch
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-dark-void/98 backdrop-blur-2xl flex flex-col pt-24 pb-8 px-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-3 my-auto">
              <span className="text-xs font-sans uppercase tracking-wider text-zinc-400 mb-1">
                Navigation
              </span>
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2.5 text-lg font-medium transition-colors ${
                      isActive
                        ? 'text-[#FF2A2A] font-semibold'
                        : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-600" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-zinc-800/80 flex flex-col gap-3 mt-6">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                className="w-full rounded-xl"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs font-sans text-zinc-400">
                <span role="img" aria-label="Canada">🇨🇦</span>
                <span>PULSECRAFT TECHNOLOGIES INC.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
