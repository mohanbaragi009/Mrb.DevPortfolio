
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { resumeData } from '@/lib/resume-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 tracking-tight">
          Major <span className="text-primary">Projects</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="glass h-full border-white/10 hover:border-primary/50 transition-all duration-500 flex flex-col overflow-hidden group hover:-translate-y-2">
              <div className="h-40 bg-gradient-to-br from-primary/20 via-background to-background p-8 flex items-center justify-center relative overflow-hidden">
                <Code2 size={48} className="text-primary/40 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-headline font-bold tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.split(', ').map((tag, tIdx) => (
                    <Badge key={tIdx} variant="secondary" className="bg-white/5 text-[10px] uppercase font-bold tracking-wider border border-white/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto flex gap-4">
                {project.links.map((link, lIdx) => (
                  <a 
                    key={lIdx} 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.includes('github') ? (
                      <><Github size={18} /> Source</>
                    ) : (
                      <><ExternalLink size={18} /> Live Demo</>
                    )}
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
