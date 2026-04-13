"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { resumeData } from '@/lib/resume-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
          Featured <span className="text-primary">Works</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="glass h-full border-white/5 hover:border-primary/30 transition-all flex flex-col overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 p-8 flex items-center justify-center relative overflow-hidden">
                <Layers size={64} className="text-primary/20 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-headline font-bold tracking-tight">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-3">
                    {project.links.map((link, lIdx) => (
                      <a key={lIdx} href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        {link.includes('github') ? <Github size={20} /> : <ExternalLink size={20} />}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stack.split(', ').map((tag, tIdx) => (
                    <Badge key={tIdx} variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] uppercase font-bold tracking-wider">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
