"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { resumeData } from '@/lib/resume-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <Badge variant="secondary" className="bg-white/[0.03] text-muted-foreground/60 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase border-white/[0.05] mb-6">
          PORTFOLIO
        </Badge>
        <h2 className="text-6xl md:text-7xl font-headline font-bold tracking-tight">
          Featured <span className="text-white/20">Work</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {resumeData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="group relative flex flex-col bg-[#0d0d0d] rounded-[3.5rem] overflow-hidden border border-white/[0.05] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2"
          >
            {/* Project Image Wrapper */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
              
              {project.isLive && (
                <Badge className="absolute top-6 right-6 bg-primary text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full border-none shadow-xl shadow-primary/20">
                  LIVE PROJECT
                </Badge>
              )}
            </div>

            {/* Project Content */}
            <div className="p-10 flex-grow flex flex-col">
              <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground/70 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.stack.split(', ').map((tag, tIdx) => (
                  <Badge 
                    key={tIdx} 
                    variant="outline" 
                    className="border-primary/20 bg-primary/5 text-primary text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-auto">
                {project.links.map((link, lIdx) => (
                  <Button
                    key={lIdx}
                    asChild
                    variant={link.type === 'launch' ? 'default' : 'ghost'}
                    className={link.type === 'launch' 
                      ? "btn-gradient rounded-full h-14 px-8 font-bold text-xs tracking-widest group/btn shadow-xl shadow-primary/20" 
                      : "h-14 px-4 text-muted-foreground hover:text-white transition-colors text-xs font-bold tracking-widest gap-2"
                    }
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.type === 'launch' ? (
                        <>
                          <ArrowUpRight size={16} className="mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          LAUNCH
                        </>
                      ) : (
                        <>
                          <Github size={16} />
                          CODE
                        </>
                      )}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
