import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CAREER_JOBS, CAREER_BENEFITS } from '@/data/careers';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FinalCTA } from '@/components/home/FinalCTA';
import {
  DollarSign,
  Globe,
  HeartHandshake,
  Laptop,
  GraduationCap,
  Palmtree,
  MapPin,
  Briefcase,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers — Build What’s Next With Us',
  description:
    'Join PulseCraft Technologies Inc. We are hiring world-class mobile engineers, full-stack architects, AI researchers, and UI/UX product designers across Canada and worldwide.',
};

const BENEFIT_ICONS: Record<string, React.ElementType> = {
  DollarSign,
  Globe,
  HeartHandshake,
  Laptop,
  GraduationCap,
  Palmtree,
};

const FAQS = [
  {
    q: 'Can I work remotely from outside of Canada?',
    a: 'Yes. While our headquarters and leadership are in Oshawa, Ontario, Canada, we offer fully remote arrangements for top engineering talent across compatible time zones.',
  },
  {
    q: 'What is the interview and evaluation process?',
    a: 'Our interview lifecycle is respectful, fast, and transparent: 1) Initial 30-min intro call, 2) Technical architecture discussion & code walkthrough, 3) Culture & leadership interview, 4) Fast offer decision within 48 hours.',
  },
  {
    q: 'What equipment and developer tools do you provide?',
    a: 'All full-time team members receive their choice of top-tier hardware (Apple MacBook Pro M3/M4 Max), 4K monitors, ergonomic setup allowances, and full software subscriptions.',
  },
  {
    q: 'How does PulseCraft support professional learning?',
    a: 'We offer an annual continuing education budget per engineer for global tech conferences (React Summit, WWDC, Google I/O), books, and specialized certifications.',
  },
];

export default function CareersPage() {
  return (
    <div className="bg-dark-void text-white pt-24">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-dark-border relative overflow-hidden text-center">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-sans bg-brand-red/10 border border-brand-red/25 text-[#FF2A2A] font-semibold uppercase tracking-wider mb-4 inline-block">
            Join Our Global Engineering Team
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-semibold tracking-tight text-[#FFFFFF] max-w-3xl mx-auto leading-[1.18] sm:leading-[1.22]">
            Build What’s Next{' '}
            <span className="text-[#FF2A2A]">
              With Us.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            We are looking for ambitious product builders, software engineers, AI architects, and designers who take immense pride in crafting exceptional software.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <Button href="#openings" size="md" variant="glow" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View Open Positions ({CAREER_JOBS.length})
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 sm:py-24 border-b border-dark-border">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Join PulseCraft"
            title="Engineered for"
            titleHighlight="Builders."
            subtitle="We provide the autonomy, compensation, and tools you need to do the best work of your career."
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {CAREER_BENEFITS.map((ben) => {
              const Icon = BENEFIT_ICONS[ben.iconName] || Globe;

              return (
                <div
                  key={ben.title}
                  className="p-6 rounded-2xl bg-[#111116] border border-dark-border hover:border-zinc-700 transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#FF2A2A] inline-flex mb-4 group-hover:bg-brand-red/10 group-hover:border-brand-red/30 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-display font-semibold text-white mb-1.5">
                    {ben.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {ben.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section className="py-16 sm:py-24 border-b border-dark-border" id="openings">
        <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Open Opportunities"
            title="Current Open"
            titleHighlight="Roles."
            subtitle="Explore our active engineering and design openings. Every role is central to our mission."
            theme="dark"
            align="center"
          />

          <div className="space-y-3.5 max-w-3xl mx-auto mt-10">
            {CAREER_JOBS.map((job) => (
              <div
                key={job.id}
                className="p-5 sm:p-6 rounded-2xl bg-[#111116] border border-dark-border hover:border-brand-red/40 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded text-xs font-sans bg-brand-red/10 border border-brand-red/30 text-[#FF2A2A] font-medium">
                      {job.department}
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-sans bg-zinc-900 border border-zinc-800 text-zinc-400">
                      {job.employmentType}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-semibold text-white group-hover:text-red-400 transition-colors">
                    {job.title}
                  </h3>

                  <div className="mt-1.5 flex flex-wrap items-center gap-3.5 text-xs font-sans font-medium text-zinc-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#FF2A2A]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3 text-[#FF2A2A]" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <Button href={`/careers/${job.slug}`} size="sm" variant="primary" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    View & Apply
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career FAQs */}
      <section className="py-16 sm:py-24 border-b border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Career"
            titleHighlight="FAQs."
            subtitle="Common questions regarding our engineering culture, remote flexibility, and evaluation."
            theme="dark"
            align="center"
          />

          <div className="space-y-3 mt-10">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl bg-[#111116] border border-dark-border">
                <h4 className="text-sm font-display font-semibold text-white mb-1.5 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#FF2A2A] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed pl-6 font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
