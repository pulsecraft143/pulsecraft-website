import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';
import { FileText, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — Engagement Terms & Governance',
  description:
    'Terms of Service and Master Services Agreement guidelines for PulseCraft Technologies Inc., registered in Canada.',
};

export default function TermsPage() {
  return (
    <div className="bg-dark-void text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans font-medium text-zinc-400 mb-8">
          <Link href="/" className="hover:text-zinc-300">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-red font-medium">Terms of Service</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-brand-red/10 border border-brand-red/30 text-brand-red">
            <FileText className="w-6 h-6" />
          </div>
          <span className="text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold">
            Corporate Agreement
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-semibold text-white tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-xs font-sans text-zinc-400 mb-12">
          Effective Date: August 2026 | Jurisdiction: Ontario, Canada
        </p>

        <div className="space-y-10 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website of <strong>{SITE_CONFIG.legalName}</strong> (&quot;PulseCraft&quot;) or initiating contact for software engineering services, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">
              2. Intellectual Property & Source Code Ownership
            </h2>
            <p>
              Under our standard Master Services Agreement (MSA), upon full payment of agreed project milestones, <strong>100% of custom source code, design assets, database schemas, and intellectual property</strong> created specifically for the client are assigned exclusively to the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">
              3. Non-Disclosure & Confidentiality
            </h2>
            <p>
              PulseCraft executes bilateral non-disclosure agreements prior to reviewing proprietary business models or technical architecture documents. All proprietary data disclosed by prospective or existing clients remains strictly confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-white mb-3">
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms and any legal agreements shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
