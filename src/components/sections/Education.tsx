"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck, MoreHorizontal, ExternalLink } from 'lucide-react';
import { resumeData } from '@/lib/resume-data';

export const Education: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-headline font-bold mb-10 flex items-center gap-4">
            <GraduationCap className="text-primary" />
            Education
          </h2>
          <div className="space-y-12">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l border-primary/20">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
                <h3 className="text-xl font-headline font-bold">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-4">{edu.dates} | {edu.location}</p>
                <ul className="space-y-2">
                  {edu.details?.map((detail, dIdx) => (
                    <li key={dIdx} className="text-sm text-muted-foreground">• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-8 flex items-center gap-4">
              <ShieldCheck className="text-primary" />
              Certifications
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {resumeData.certifications.map((cert, idx) => (
                <a 
                  key={idx} 
                  href={typeof cert === 'string' ? '#' : cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass group px-4 py-3 rounded-xl border-white/5 text-sm font-medium flex items-center justify-between hover:border-primary/50 transition-all"
                >
                  <span>{typeof cert === 'string' ? cert : cert.name}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-headline font-bold mb-8 flex items-center gap-4">
              <Award className="text-primary" />
              Awards & Achievements
            </h2>
            <div className="flex flex-wrap gap-4">
              {resumeData.awards.map((award, idx) => (
                <div key={idx} className="glass px-4 py-3 rounded-xl border-white/5 text-sm font-medium flex items-center gap-2">
                  <span className="text-primary">🏆</span>
                  {award}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-headline font-bold mb-8 flex items-center gap-4">
              <MoreHorizontal className="text-primary" />
              Additional
            </h2>
            <ul className="space-y-4">
              {resumeData.extra.map((line, idx) => (
                <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                  <span className="text-primary shrink-0">•</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
