'use client';

import React from 'react';
import Image from 'next/image';
import { LEADERSHIP } from '@/data/leadership';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export const LeadershipSection: React.FC<{ theme?: 'light' | 'dark' }> = ({
  theme = 'dark',
}) => {
  const isLight = theme === 'light';

  return (
    <section
      className={`py-20 sm:py-28 border-b relative overflow-hidden ${
        isLight ? 'bg-[#FAFAFA] border-slate-200 text-slate-900' : 'bg-dark-void border-dark-border text-white'
      }`}
      id="leadership"
    >
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            badge="Executive Leadership"
            title="Leadership at"
            titleHighlight="PulseCraft."
            subtitle="Led by technical founders dedicated to engineering rigor, thoughtful product design, and sustainable global scale."
            theme={isLight ? 'light' : 'dark'}
            align="center"
          />
        </motion.div>

        {/* Large Editorial Portrait Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto mt-12">
          {LEADERSHIP.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 group hover:-translate-y-1 ${
                isLight
                  ? 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                  : 'bg-[#111116] border-dark-border shadow-xl hover:border-zinc-700'
              }`}
            >
              {/* Portrait Frame Anchored at Top with Full Headroom */}
              <div className="relative h-80 sm:h-96 w-full bg-zinc-950 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={`${leader.name} — ${leader.role}`}
                  fill
                  priority
                  className="object-cover object-top origin-top scale-100 group-hover:scale-[1.04] filter grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t pointer-events-none ${
                    isLight
                      ? 'from-white via-transparent to-transparent'
                      : 'from-[#111116] via-black/20 to-transparent'
                  }`}
                />

                <div className="absolute top-3.5 right-3.5 flex items-center gap-2 z-10">
                  {leader.linkedinUrl && (
                    <a
                      href={leader.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/75 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#FF2A2A] transition-colors"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {leader.githubUrl && (
                    <a
                      href={leader.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/75 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#FF2A2A] transition-colors"
                      aria-label={`${leader.name} GitHub`}
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {leader.twitterUrl && (
                    <a
                      href={leader.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/75 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#FF2A2A] transition-colors"
                      aria-label={`${leader.name} Twitter`}
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Editorial Details */}
              <div className="p-6 sm:p-8">
                <span className="text-xs font-sans uppercase tracking-wider text-[#FF2A2A] font-semibold block mb-1">
                  {leader.role}
                </span>
                <h3
                  className={`text-xl sm:text-2xl font-display font-semibold tracking-tight ${
                    isLight ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  {leader.name}
                </h3>
                <p
                  className={`mt-2.5 text-xs sm:text-sm leading-relaxed font-normal ${
                    isLight ? 'text-slate-600' : 'text-zinc-400'
                  }`}
                >
                  {leader.bio}
                </p>

                {/* Focus Areas */}
                <div className="mt-5 pt-4 border-t border-zinc-800/50 flex flex-wrap gap-1.5">
                  {leader.expertise.map((exp) => (
                    <span
                      key={exp}
                      className={`px-3 py-1 rounded-full text-xs font-sans font-medium ${
                        isLight
                          ? 'bg-slate-100 text-slate-700 border border-slate-200'
                          : 'bg-zinc-900/90 text-zinc-300 border border-zinc-800'
                      }`}
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
