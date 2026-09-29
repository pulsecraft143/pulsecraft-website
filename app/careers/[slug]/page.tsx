'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CAREER_JOBS } from '@/data/careers';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  MapPin,
  Briefcase,
  Calendar,
  CheckCircle2,
  Send,
  Upload,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  FileCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function JobDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const job = CAREER_JOBS.find((j) => j.slug === params.slug);
  if (!job) notFound();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedinUrl: '',
    portfolioUrl: '',
    message: '',
    resumeFileName: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSimulateResume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resumeFileName: e.target.files![0].name }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMsg('Please complete all required fields (*)');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          positionId: job.id,
          positionTitle: job.title,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
      } else {
        setErrorMsg(data.error || 'Application submission failed. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-dark-void text-white pt-28">
      {/* Breadcrumb & Job Header */}
      <section className="py-16 sm:py-24 border-b border-dark-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-6">
            <Link href="/" className="hover:text-zinc-300">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/careers" className="hover:text-zinc-300">Careers</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-red font-medium">{job.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-red/10 border border-brand-red/30 text-brand-red font-semibold">
              {job.department}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
              {job.employmentType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white max-w-4xl tracking-tight leading-[1.15]">
            {job.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-mono text-zinc-400">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-red" />
              {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-brand-red" />
              {job.experience}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-red" />
              Posted {job.postedDate}
            </span>
          </div>
        </div>
      </section>

      {/* Main Job Body & Application Form */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Job Description */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  Role Overview
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {job.overview}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="p-8 rounded-3xl bg-[#121217] border border-dark-border">
                <h3 className="text-xl font-display font-bold text-white mb-5">
                  Core Responsibilities
                </h3>
                <div className="space-y-3">
                  {job.responsibilities.map((r) => (
                    <div key={r} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="p-8 rounded-3xl bg-[#121217] border border-dark-border">
                <h3 className="text-xl font-display font-bold text-white mb-5">
                  Qualifications & Requirements
                </h3>
                <div className="space-y-3">
                  {job.requirements.map((req) => (
                    <div key={req} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Perks & Benefits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.benefits.map((b) => (
                    <span key={b} className="px-3 py-1.5 rounded-xl text-xs font-mono bg-zinc-900 text-zinc-200 border border-zinc-800">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#14141A] border border-dark-border rounded-3xl p-6 sm:p-8 shadow-2xl">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-red font-semibold block mb-1">
                  Apply for Position
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-6">
                  Submit Your Application
                </h3>

                <AnimatePresence mode="wait">
                  {success ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-10 text-center flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 flex items-center justify-center mb-5">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold font-display text-white">
                        Application Received!
                      </h4>
                      <p className="mt-2 text-xs text-zinc-400 max-w-xs leading-relaxed">
                        Thank you for applying to PulseCraft. Our talent engineering team will review your credentials and contact you within 48 business hours.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-6"
                        onClick={() => setSuccess(false)}
                      >
                        Submit Another
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                      {errorMsg && (
                        <div className="p-3 rounded-xl bg-red-950/40 border border-red-800 text-red-300 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      <div>
                        <label className="block text-zinc-400 font-mono uppercase mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Marc Dubois"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-red"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-zinc-400 font-mono uppercase mb-1.5">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="marc@dev.ca"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-red"
                          />
                        </div>
                        <div>
                          <label className="block text-zinc-400 font-mono uppercase mb-1.5">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (416) 000-0000"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-red"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-zinc-400 font-mono uppercase mb-1.5">
                          Your Current Location (City, Country) *
                        </label>
                        <input
                          type="text"
                          required
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="Toronto, ON / Remote"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-red"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-zinc-400 font-mono uppercase mb-1.5">
                            LinkedIn URL
                          </label>
                          <input
                            type="url"
                            name="linkedinUrl"
                            value={formData.linkedinUrl}
                            onChange={handleChange}
                            placeholder="linkedin.com/in/username"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-red"
                          />
                        </div>
                        <div>
                          <label className="block text-zinc-400 font-mono uppercase mb-1.5">
                            Portfolio / GitHub
                          </label>
                          <input
                            type="url"
                            name="portfolioUrl"
                            value={formData.portfolioUrl}
                            onChange={handleChange}
                            placeholder="github.com/username"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-red"
                          />
                        </div>
                      </div>

                      {/* Resume Upload / Attach */}
                      <div>
                        <label className="block text-zinc-400 font-mono uppercase mb-1.5">
                          Resume / CV (PDF or DOCX)
                        </label>
                        <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-zinc-700 hover:border-brand-red bg-zinc-900/50 cursor-pointer text-zinc-400 hover:text-white transition-colors">
                          <Upload className="w-4 h-4 text-brand-red" />
                          <span className="text-xs truncate">
                            {formData.resumeFileName || 'Upload or drag resume file'}
                          </span>
                          <input
                            type="file"
                            accept=".pdf,.docx,.doc"
                            className="hidden"
                            onChange={handleSimulateResume}
                          />
                        </label>
                      </div>

                      <div>
                        <label className="block text-zinc-400 font-mono uppercase mb-1.5">
                          Cover Note / Why PulseCraft?
                        </label>
                        <textarea
                          rows={3}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about a technical challenge you recently conquered..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-red"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="md"
                        variant="glow"
                        className="w-full mt-2"
                        isLoading={loading}
                        rightIcon={<Send className="w-4 h-4" />}
                      >
                        Submit Application
                      </Button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
