import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';
import { ShieldCheck, Lock, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — PIPEDA & Global Data Governance',
  description:
    'Privacy Policy of PulseCraft Technologies Inc. Registered in Canada. Explaining our strict data protection principles under PIPEDA, GDPR, and enterprise security frameworks.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-dark-void text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <Link href="/" className="hover:text-zinc-300">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-red font-medium">Privacy Policy</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-brand-red/10 border border-brand-red/30 text-brand-red">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Canadian Legal Compliance
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-zinc-500 mb-12">
          Effective Date: August 2026 | Governing Law: Canada (PIPEDA) & Province of Ontario
        </p>

        <div className="space-y-10 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">
              1. Corporate Information
            </h2>
            <p>
              This Privacy Policy applies to <strong>{SITE_CONFIG.legalName}</strong> (&quot;PulseCraft&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), a federally registered corporation in Canada with registered headquarters at {SITE_CONFIG.headquarters.address}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">
              2. Commitment to Privacy (PIPEDA & GDPR)
            </h2>
            <p>
              PulseCraft is committed to safeguarding personal and corporate information in full compliance with the Canadian <em>Personal Information Protection and Electronic Documents Act (PIPEDA)</em>, applicable provincial legislation, and international data standards including GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">
              3. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li><strong>Contact & Project Inquiries:</strong> Name, corporate email, phone number, company name, and project scope submitted through our project inquiry portals.</li>
              <li><strong>Career Applications:</strong> Résumés, portfolio links, employment history, and contact details provided by job applicants.</li>
              <li><strong>Technical Telemetry:</strong> Anonymized server logs, browser type, and performance telemetry to guarantee 99.99% site reliability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">
              4. Zero Data Commercialization
            </h2>
            <p>
              We <strong>never sell, lease, or rent</strong> client or applicant data to third-party data brokers or advertisers. All information collected is strictly utilized to deliver engineering proposals, evaluate candidates, and maintain communications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">
              5. Data Security & Storage
            </h2>
            <p>
              We implement enterprise-grade encryption (TLS 1.3 in transit and AES-256 at rest). Access to submitted project information is strictly restricted to authorized principal engineers under non-disclosure obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">
              6. Contact Our Privacy Officer
            </h2>
            <p>
              For any questions regarding our data governance or to request data modification/deletion, please contact:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
              <p>Privacy Officer, {SITE_CONFIG.legalName}</p>
              <p>Email: {SITE_CONFIG.contact.general}</p>
              <p>Address: {SITE_CONFIG.headquarters.address}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
