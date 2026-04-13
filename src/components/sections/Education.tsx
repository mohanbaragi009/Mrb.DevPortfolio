"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, ExternalLink, Award } from 'lucide-react';
import { resumeData } from '@/lib/resume-data';
import { Badge } from '@/components/ui/badge';

export const Education: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Column: Academic Path */}
        <div className="space-y-12">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-white/5 text-muted-foreground px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border-white/5">
              JOURNEY
            </Badge>
            <h2 className="text-6xl md:text-7xl font-headline font-bold tracking-tight">
              Academic <br />
              <span className="text-white/30">Path</span>
            </h2>
          </div>

          <div className="space-y-16">
            {/* Degree Section */}
            <div className="relative pl-12 space-y-4">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">2022 — 2026</span>
                <h3 className="text-2xl font-headline font-bold mt-1">BE in Computer Science & Engineering</h3>
                <p className="text-primary font-medium">Visvesvaraya Technological University (VTU)</p>
                <p className="text-muted-foreground mt-4 leading-relaxed max-w-md text-sm">
                  Specializing in Data Science. Focusing on machine learning algorithms, database management, and high-performance computing architectures.
                </p>
              </div>
            </div>

            {/* Ongoing/Experience Item */}
            <div className="relative pl-12 space-y-4">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                <Briefcase size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">ONGOING</span>
                <h3 className="text-2xl font-headline font-bold mt-1">MERN Stack Development</h3>
                <p className="text-primary font-medium">Freelance & Individual Projects</p>
                <p className="text-muted-foreground mt-4 leading-relaxed max-w-md text-sm">
                  Developing scalable applications using the MERN stack. Implementing clean architectures and responsive user interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Certifications */}
        <div className="space-y-12">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-white/5 text-muted-foreground px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border-white/5">
              CREDENTIALS
            </Badge>
            <h2 className="text-6xl md:text-7xl font-headline font-bold tracking-tight">
              Certifi<span className="text-white/30">cations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {resumeData.certifications.map((cert, idx) => (
              <motion.a
                key={idx}
                href={typeof cert === 'string' ? '#' : cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group flex items-center justify-between p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Award size={20} />
                  </div>
                  <span className="text-sm font-bold tracking-wide">
                    {typeof cert === 'string' ? cert : cert.name}
                  </span>
                </div>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};