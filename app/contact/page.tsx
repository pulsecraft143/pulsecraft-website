import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/shared/ContactForm';
import { CanadaSection } from '@/components/home/CanadaSection';
import { SITE_CONFIG } from '@/lib/config';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  Lock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us — Let’s Build Something Remarkable',
  description:
    'Start your digital product engineering engagement with PulseCraft Technologies Inc. Reach our executive software architects and Canadian headquarters directly.',
};

export default function ContactPage() {
  return (
    <div className="bg-dark-void text-white pt-24">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-dark-border relative overflow-hidden text-center">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-red/10 border border-brand-red/25 text-[#FF2A2A] font-semibold uppercase tracking-wider mb-4 inline-block">
            Initiate An Engineering Project
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-semibold tracking-tight text-[#FFFFFF] max-w-3xl mx-auto leading-[1.18] sm:leading-[1.22]">
            Let’s Build Something{' '}
            <span className="text-[#FF2A2A]">
              Remarkable.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Tell us about your digital product requirements. You will speak directly with principal product strategists and senior engineers — no sales middlemen.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Channels */}
      <section className="py-16 sm:py-24">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm isLight={false} />
            </div>

            {/* Right Column: Direct Channels & Guarantee */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Channels Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#111116] border border-dark-border space-y-5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF2A2A] font-semibold block">
                  Direct Inquiries & Corporate Channels
                </span>

                <div className="space-y-4 text-sm">
                  {/* General Inquiries */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-[#FF2A2A] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-zinc-500 uppercase">General Inquiries</span>
                      <a href={`mailto:${SITE_CONFIG.contact.general}`} className="text-white hover:text-[#FF2A2A] font-medium transition-colors">
                        {SITE_CONFIG.contact.general}
                      </a>
                    </div>
                  </div>

                  {/* Project Inquiries */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-[#FF2A2A] shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-zinc-500 uppercase">Project Proposals</span>
                      <a href={`mailto:${SITE_CONFIG.contact.projects}`} className="text-white hover:text-[#FF2A2A] font-medium transition-colors">
                        {SITE_CONFIG.contact.projects}
                      </a>
                    </div>
                  </div>

                  {/* Telephone */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-[#FF2A2A] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-zinc-500 uppercase">Corporate Line</span>
                      <span className="text-white font-medium">
                        {SITE_CONFIG.contact.phone}
                      </span>
                    </div>
                  </div>

                  {/* Headquarters Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-[#FF2A2A] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-zinc-500 uppercase">Registered Canadian Office</span>
                      <span className="text-zinc-300 font-mono text-xs block leading-snug">
                        {SITE_CONFIG.headquarters.address}
                      </span>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-[#FF2A2A] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-zinc-500 uppercase">Operating Hours</span>
                      <span className="text-zinc-300 text-xs">
                        {SITE_CONFIG.headquarters.officeHours} ({SITE_CONFIG.headquarters.timezone})
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NDA & Governance Security Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#111116] border border-dark-border space-y-3 text-xs text-zinc-400">
                <div className="flex items-center gap-2 text-white font-semibold font-display text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#FF2A2A]" />
                  <span>The PulseCraft Engagement Standard</span>
                </div>
                <p className="leading-relaxed font-normal">
                  We sign mutual non-disclosure agreements (NDAs) before discussing sensitive intellectual property. All code, architecture documents, and data models remain 100% your property.
                </p>
                <div className="pt-1 flex items-center gap-2 font-mono text-[11px] text-zinc-500">
                  <Lock className="w-3.5 h-3.5 text-[#FF2A2A]" />
                  <span>Encrypted communication & zero data sharing.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Location & Interactive Real Google Map */}
      <CanadaSection />
    </div>
  );
}
