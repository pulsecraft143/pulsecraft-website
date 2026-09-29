'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { FOOTER_LINKS } from '@/data/navigation';
import { SITE_CONFIG } from '@/lib/config';
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Send,
  CheckCircle2,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setStatusMsg('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubscribed(true);
        setStatusMsg(data.message || 'Subscribed successfully!');
      } else {
        setStatusMsg(data.error || 'Subscription failed. Please try again.');
      }
    } catch {
      setStatusMsg('Subscription failed. Please check connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#070709] border-t border-dark-border text-zinc-400 relative overflow-hidden">
      {/* Top Red Ambient Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#FF2A2A]/60 to-transparent" />

      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Upper Row: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-dark-border/70">
          {/* Brand Info */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <Logo variant="full" theme="dark" size="lg" />
              <p className="mt-4 text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed font-normal">
                {SITE_CONFIG.heroSubtext}
              </p>

              {/* Canadian Registration Subtle Badge */}
              <div className="mt-5 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300">
                <span className="text-sm" role="img" aria-label="Canada">🇨🇦</span>
                <div className="flex flex-col">
                  <span className="font-semibold text-white text-xs">Canadian Technology Company</span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {SITE_CONFIG.headquarters.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#FF2A2A]/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#FF2A2A]/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#FF2A2A]/50 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#FF2A2A]/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF2A2A] font-semibold">
                Intelligence Briefings
              </span>
              <h3 className="text-lg sm:text-xl font-display font-semibold text-white mt-1">
                Stay Ahead of Digital Technology
              </h3>
              <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed font-normal">
                Receive our monthly technical briefs on AI architectures, native mobile performance, and scalable cloud engineering.
              </p>
            </div>

            <div className="mt-5">
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-3.5 py-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{statusMsg || 'Subscribed successfully.'}</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate email"
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#FF2A2A]"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-2.5 rounded-xl bg-[#FF2A2A] hover:bg-[#E62020] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm shrink-0 disabled:opacity-50"
                  >
                    {loading ? 'Subscribing...' : 'Subscribe'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Links Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-dark-border/60 text-xs">
          {/* Services Column */}
          <div>
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs mb-3">
              Services
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-zinc-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs mb-3">
              Solutions
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-zinc-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-zinc-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiries & Contact */}
          <div>
            <h4 className="font-display font-semibold text-white uppercase tracking-wider text-xs mb-3">
              Direct Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF2A2A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-zinc-500 font-mono text-[10px]">General</span>
                  <a href={`mailto:${SITE_CONFIG.contact.general}`} className="text-zinc-300 hover:text-white transition-colors">
                    {SITE_CONFIG.contact.general}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF2A2A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-zinc-500 font-mono text-[10px]">New Projects</span>
                  <a href={`mailto:${SITE_CONFIG.contact.projects}`} className="text-zinc-300 hover:text-white transition-colors">
                    {SITE_CONFIG.contact.projects}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF2A2A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-zinc-500 font-mono text-[10px]">Headquarters</span>
                  <span className="text-zinc-300">
                    Toronto, Ontario, Canada
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-normal">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {SITE_CONFIG.legalName} All rights reserved.</span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="hidden sm:inline font-mono">🇨🇦 Canada</span>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/admin" className="hover:text-zinc-300 transition-colors font-mono text-[11px]">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
