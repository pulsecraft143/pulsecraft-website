'use client';

import React, { useState, useEffect } from 'react';
import { ContactSubmission, CareerApplication, NewsletterSubscription } from '@/types';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheck,
  Mail,
  Briefcase,
  Users,
  Clock,
  CheckCircle2,
  RefreshCw,
  Search,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'contacts' | 'applications' | 'subscribers'>('contacts');
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/data');
      if (res.ok) {
        const data = await res.json();
        setContacts(data.contacts || []);
        setApplications(data.applications || []);
        setSubscribers(data.subscribers || []);
      }
    } catch (err) {
      console.error('Failed to fetch admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-dark-void text-white pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-dark-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-mono text-brand-red font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              PULSECRAFT CMS & INQUIRY CONSOLE
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Admin Submissions Dashboard
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              Live review of incoming project leads, career applications, and newsletter subscriptions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchData}
              isLoading={loading}
              leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
            >
              Refresh Data
            </Button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
          <div
            onClick={() => setActiveTab('contacts')}
            className={`p-6 rounded-3xl border cursor-pointer transition-all duration-200 ${
              activeTab === 'contacts'
                ? 'bg-zinc-900 border-brand-red/50 shadow-[0_0_20px_rgba(255, 42, 42,0.15)]'
                : 'bg-[#121217] border-dark-border hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-500 uppercase">Project Inquiries</span>
              <Mail className="w-4 h-4 text-brand-red" />
            </div>
            <span className="text-3xl font-bold font-display text-white">{contacts.length}</span>
            <span className="text-xs text-zinc-400 block mt-1">Direct client RFPs</span>
          </div>

          <div
            onClick={() => setActiveTab('applications')}
            className={`p-6 rounded-3xl border cursor-pointer transition-all duration-200 ${
              activeTab === 'applications'
                ? 'bg-zinc-900 border-brand-red/50 shadow-[0_0_20px_rgba(255, 42, 42,0.15)]'
                : 'bg-[#121217] border-dark-border hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-500 uppercase">Job Applications</span>
              <Briefcase className="w-4 h-4 text-brand-red" />
            </div>
            <span className="text-3xl font-bold font-display text-white">{applications.length}</span>
            <span className="text-xs text-zinc-400 block mt-1">Engineering applicants</span>
          </div>

          <div
            onClick={() => setActiveTab('subscribers')}
            className={`p-6 rounded-3xl border cursor-pointer transition-all duration-200 ${
              activeTab === 'subscribers'
                ? 'bg-zinc-900 border-brand-red/50 shadow-[0_0_20px_rgba(255, 42, 42,0.15)]'
                : 'bg-[#121217] border-dark-border hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-zinc-500 uppercase">Subscribers</span>
              <Users className="w-4 h-4 text-brand-red" />
            </div>
            <span className="text-3xl font-bold font-display text-white">{subscribers.length}</span>
            <span className="text-xs text-zinc-400 block mt-1">Insights subscribers</span>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#121217] border border-dark-border rounded-3xl p-6 sm:p-8">
          {/* Tab Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-800">
            <h2 className="text-xl font-display font-bold text-white capitalize">
              {activeTab === 'contacts' && 'Project Inquiries & Requests'}
              {activeTab === 'applications' && 'Career Candidates & Resumes'}
              {activeTab === 'subscribers' && 'Newsletter Mailing List'}
            </h2>
            <span className="text-xs font-mono text-zinc-500">
              Storage: Local Persistent Database (JSON / SQLite)
            </span>
          </div>

          {/* CONTACTS TAB */}
          {activeTab === 'contacts' && (
            <div className="space-y-4">
              {contacts.map((req) => (
                <div
                  key={req.id}
                  className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all text-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                      <span className="text-base font-bold text-white font-display">{req.name}</span>
                      {req.company && (
                        <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">
                          {req.company}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded bg-brand-red/10 text-brand-red font-mono font-semibold">
                        {req.projectType}
                      </span>
                    </div>
                    <span className="font-mono text-zinc-500">{new Date(req.submittedAt).toLocaleString()}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 text-zinc-400 font-mono">
                    <div>Email: <a href={`mailto:${req.email}`} className="text-white underline">{req.email}</a></div>
                    <div>Phone: <span className="text-zinc-200">{req.phone || 'N/A'}</span></div>
                    <div>Budget: <span className="text-brand-red font-bold">{req.budgetRange}</span></div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-950 text-zinc-300 font-sans leading-relaxed">
                    <strong className="text-zinc-400 font-mono text-[11px] block mb-1">PROJECT DETAILS:</strong>
                    {req.details}
                  </div>
                </div>
              ))}
              {contacts.length === 0 && <p className="text-zinc-500 py-8 text-center font-mono">No contact submissions yet.</p>}
            </div>
          )}

          {/* APPLICATIONS TAB */}
          {activeTab === 'applications' && (
            <div className="space-y-4">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all text-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                      <span className="text-base font-bold text-white font-display">{app.fullName}</span>
                      <span className="px-2.5 py-0.5 rounded bg-brand-red/10 text-brand-red font-mono font-semibold">
                        {app.positionTitle}
                      </span>
                    </div>
                    <span className="font-mono text-zinc-500">{new Date(app.submittedAt).toLocaleString()}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3 text-zinc-400 font-mono">
                    <div>Email: <a href={`mailto:${app.email}`} className="text-white underline">{app.email}</a></div>
                    <div>Phone: <span className="text-zinc-200">{app.phone}</span></div>
                    <div>Location: <span className="text-zinc-200">{app.location}</span></div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-3 text-xs font-mono">
                    {app.linkedinUrl && (
                      <a href={app.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        ↗ LinkedIn Profile
                      </a>
                    )}
                    {app.portfolioUrl && (
                      <a href={app.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                        ↗ Portfolio / GitHub
                      </a>
                    )}
                    {app.resumeFileName && (
                      <span className="text-zinc-400">
                        📄 Resume Attached: <strong>{app.resumeFileName}</strong>
                      </span>
                    )}
                  </div>

                  {app.message && (
                    <div className="p-3 rounded-xl bg-zinc-950 text-zinc-300 font-sans leading-relaxed">
                      <strong className="text-zinc-400 font-mono text-[11px] block mb-1">CANDIDATE NOTE:</strong>
                      {app.message}
                    </div>
                  )}
                </div>
              ))}
              {applications.length === 0 && <p className="text-zinc-500 py-8 text-center font-mono">No job applications yet.</p>}
            </div>
          )}

          {/* SUBSCRIBERS TAB */}
          {activeTab === 'subscribers' && (
            <div className="space-y-2">
              <div className="grid grid-cols-2 p-3 bg-zinc-950 text-xs font-mono text-zinc-500 rounded-xl">
                <span>SUBSCRIBER EMAIL</span>
                <span className="text-right">DATE SUBSCRIBED</span>
              </div>
              {subscribers.map((sub) => (
                <div
                  key={sub.id}
                  className="grid grid-cols-2 p-3.5 bg-zinc-900/60 rounded-xl text-xs font-mono border border-zinc-800"
                >
                  <span className="text-white font-medium">{sub.email}</span>
                  <span className="text-zinc-400 text-right">{new Date(sub.subscribedAt).toLocaleString()}</span>
                </div>
              ))}
              {subscribers.length === 0 && <p className="text-zinc-500 py-8 text-center font-mono">No subscribers yet.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
