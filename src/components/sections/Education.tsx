"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, ExternalLink, Award } from 'lucide-react';
import { resumeData } from '@/lib/resume-data';
import { Badge } from '@/components/ui/badge';

export const Education: React.FC = () => {
  return (
    <section id="about" className="py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        {/* Left Column: Academic Path */}
        <div className="space-y-20">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-white/[0.03] text-muted-foreground/60 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase border-white/[0.05]">
              JOURNEY
            </Badge>
            <h2 className="text-7xl md:text-8xl font-headline font-bold tracking-tight leading-[0.9]">
              Academic <br />
              <span className="text-white/10">Path</span>
            </h2>
          </div>

          <div className="space-y-20">
            {resumeData.education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-16 space-y-6 group"
              >
                <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-black/40">
                  {idx === 0 ? <GraduationCap size={24} /> : <Briefcase size={24} />}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-[0.3em]">{edu.dates}</span>
                  <h3 className="text-3xl font-headline font-bold mt-2 group-hover:text-primary transition-colors duration-300">{edu.degree}</h3>
                  <p className="text-primary font-medium text-lg mt-1">{edu.institution}</p>
                  <p className="text-muted-foreground/70 mt-6 leading-relaxed max-w-lg text-lg font-light">
                    {edu.details.join('. ')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications */}
        <div className="space-y-20">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-white/[0.03] text-muted-foreground/60 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase border-white/[0.05]">
              CREDENTIALS
            </Badge>
            <h2 className="text-7xl md:text-8xl font-headline font-bold tracking-tight leading-[0.9]">
              Certifi<span className="text-white/10">cations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {resumeData.certifications.map((cert, idx) => (
              <motion.a
                key={idx}
                href={typeof cert === 'string' ? '#' : cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group flex items-center justify-between p-8 glass rounded-[2.5rem] hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className="flex items-center gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                    <Award size={24} />
                  </div>
                  <span className="text-lg font-bold tracking-tight">
                    {typeof cert === 'string' ? cert : cert.name}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/[0.02] flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                  <ExternalLink size={20} className="text-muted-foreground group-hover:text-white transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};