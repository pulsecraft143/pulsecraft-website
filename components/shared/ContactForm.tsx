'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECT_TYPES = [
  'Mobile App (iOS / Android)',
  'Web Platform / SaaS',
  'AI / LLM Custom Integration',
  'Backend & Cloud Architecture',
  'UI/UX Design & Prototyping',
  'Full-Stack Product Engineering',
  'Legacy Modernization',
  'Other Custom Project',
];

const BUDGET_RANGES = [
  '$15,000 - $30,000',
  '$30,000 - $60,000',
  '$60,000 - $120,000',
  '$120,000+',
  'Undisclosed / Discussion Required',
];

const TIMELINE_OPTIONS = [
  'Immediate (< 1 Month)',
  '1 - 3 Months',
  '3 - 6 Months',
  'Flexible / Ongoing',
];

export const ContactForm: React.FC<{ isLight?: boolean }> = ({ isLight = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: PROJECT_TYPES[0],
    budgetRange: BUDGET_RANGES[1],
    timeline: TIMELINE_OPTIONS[1],
    details: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      setErrorMsg('Please fill out your Name, Email, and Project Details.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: PROJECT_TYPES[0],
          budgetRange: BUDGET_RANGES[1],
          timeline: TIMELINE_OPTIONS[1],
          details: '',
        });
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 lg:p-10 border transition-all duration-300 ${
        isLight
          ? 'bg-white border-slate-200 shadow-xl'
          : 'bg-[#111115] border-zinc-800 shadow-2xl'
      }`}
    >
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3
              className={`text-2xl font-display font-bold ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              Inquiry Received Successfully
            </h3>
            <p className="mt-3 text-sm text-zinc-400 max-w-md leading-relaxed">
              Thank you for reaching out to PulseCraft Technologies Inc. Our executive engineering team will review your project requirements and respond within 24 business hours.
            </p>
            <Button
              className="mt-8"
              variant="outline"
              onClick={() => setSuccess(false)}
            >
              Send Another Inquiry
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  className={`block text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                    isLight ? 'text-slate-700' : 'text-zinc-300'
                  }`}
                >
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Liam Henderson"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      : 'bg-zinc-900 border-zinc-700 text-white placeholder-zinc-500'
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                    isLight ? 'text-slate-700' : 'text-zinc-300'
                  }`}
                >
                  Corporate Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="liam@enterprise.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      : 'bg-zinc-900 border-zinc-700 text-white placeholder-zinc-500'
                  }`}
                />
              </div>
            </div>

            {/* Row 2: Company & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  className={`block text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                    isLight ? 'text-slate-700' : 'text-zinc-300'
                  }`}
                >
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Apex Global"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      : 'bg-zinc-900 border-zinc-700 text-white placeholder-zinc-500'
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                    isLight ? 'text-slate-700' : 'text-zinc-300'
                  }`}
                >
                  Phone / WhatsApp (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      : 'bg-zinc-900 border-zinc-700 text-white placeholder-zinc-500'
                  }`}
                />
              </div>
            </div>

            {/* Row 3: Project Type & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  className={`block text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                    isLight ? 'text-slate-700' : 'text-zinc-300'
                  }`}
                >
                  Project Discipline
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900'
                      : 'bg-zinc-900 border-zinc-700 text-white'
                  }`}
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className={`block text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                    isLight ? 'text-slate-700' : 'text-zinc-300'
                  }`}
                >
                  Anticipated Budget Range
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red ${
                    isLight
                      ? 'bg-slate-50 border-slate-300 text-slate-900'
                      : 'bg-zinc-900 border-zinc-700 text-white'
                  }`}
                >
                  {BUDGET_RANGES.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Project Details */}
            <div>
              <label
                className={`block text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                  isLight ? 'text-slate-700' : 'text-zinc-300'
                }`}
              >
                Project Goals & Overview *
              </label>
              <textarea
                name="details"
                required
                rows={4}
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us about the digital product you want to build, key features, target audience, or existing tech stack..."
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red ${
                  isLight
                    ? 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    : 'bg-zinc-900 border-zinc-700 text-white placeholder-zinc-500'
                }`}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              variant="glow"
              className="w-full text-base font-semibold"
              isLoading={loading}
              rightIcon={<Send className="w-4 h-4" />}
            >
              Submit Project Inquiry
            </Button>

            <p className="text-center text-xs text-zinc-500 font-mono">
              🔒 Protected by 256-bit Canadian PIPEDA & SOC 2 data privacy protocols.
            </p>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
