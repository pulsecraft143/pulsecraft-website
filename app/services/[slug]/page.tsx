import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FinalCTA } from '@/components/home/FinalCTA';
import {
  Smartphone,
  Globe,
  Server,
  Cpu,
  Layout,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Zap,
  Layers,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Smartphone,
  Globe,
  Server,
  Cpu,
  Layout,
  Cloud,
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} — PulseCraft Technologies`,
    description: service.description,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = ICON_MAP[service.iconName] || Globe;

  return (
    <div className="bg-dark-void text-white pt-28">
      {/* Breadcrumb & Hero */}
      <section className="py-16 sm:py-24 border-b border-dark-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-sans font-medium text-zinc-400 mb-6">
            <Link href="/" className="hover:text-zinc-300">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-zinc-300">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-red font-medium">{service.title}</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-brand-red">
              <Icon className="w-8 h-8" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-sans font-medium bg-brand-red/10 border border-brand-red/30 text-brand-red">
              PulseCraft Core Capability
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-semibold text-white max-w-4xl tracking-tight leading-[1.1]">
            {service.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-sans text-zinc-300 max-w-3xl leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Details & Deliverables */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                  Engineering Overview
                </h2>
                <p className="text-base text-zinc-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="p-8 rounded-3xl bg-[#121217] border border-dark-border">
                <h3 className="text-xl font-display font-bold text-white mb-6">
                  What We Deliver
                </h3>
                <div className="space-y-4">
                  {service.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-3 text-sm text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Features & SLAs */}
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-6">
                  Performance & Security Benchmarks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((f) => (
                    <div key={f} className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-start gap-3">
                      <Zap className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Tech Stack Card */}
                <div className="p-6 rounded-3xl bg-[#14141A] border border-dark-border">
                  <h4 className="text-xs font-sans uppercase tracking-wider text-zinc-400 font-semibold mb-4">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((t) => (
                      <Badge key={t} size="md" variant="default">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-zinc-800">
                    <Button href="/contact" size="lg" variant="glow" className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Inquire About This Service
                    </Button>
                  </div>
                </div>

                {/* Canadian Standards Card */}
                <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-xs font-sans text-zinc-400 space-y-2.5">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <ShieldCheck className="w-4 h-4 text-brand-red" />
                    <span>Canadian Security & PIPEDA Compliance</span>
                  </div>
                  <p className="text-zinc-500">
                    All intellectual property and source code are assigned 100% to your company upon completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
