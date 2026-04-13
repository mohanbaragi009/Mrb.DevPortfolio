"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Layers, Monitor, Terminal, Database, Code } from 'lucide-react';

const iconMap: Record<string, any> = {
  "MERN Stack": Layers,
  "Frontend & UI": Monitor,
  "Core Programming": Terminal,
  "Backend & DevOps": Database
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column: Title and Key Focus */}
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-white/5 text-muted-foreground px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border-white/5">
              TECH STACK
            </Badge>
            <h2 className="text-6xl md:text-7xl font-headline font-bold tracking-tight">
              Technical <br />
              <span className="text-white/30">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
              Equipped with a comprehensive set of technologies to build modern, scalable, and user-friendly web applications.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[3rem] space-y-6"
          >
            <div className="flex items-center gap-4 text-primary">
              <Code size={24} />
              <h3 className="text-xl font-bold font-headline">Key Focus</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Deeply interested in Backend Architecture, Database Optimization, and building seamless Developer Experiences.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Skill Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.skills.map((skillGroup, idx) => {
            const Icon = iconMap[skillGroup.category] || Code;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-10 rounded-[3rem] flex flex-col justify-between group hover:border-primary/30 transition-all duration-500"
              >
                <div>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-headline font-bold">{skillGroup.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5 mb-12">
                    {skillGroup.items.map((skill, sIdx) => (
                      <Badge 
                        key={sIdx} 
                        variant="secondary" 
                        className="bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white px-4 py-2 rounded-xl text-xs font-medium border-white/5 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/60">Proficiency</span>
                    <span className="text-sm font-bold text-primary">{skillGroup.proficiency}%</span>
                  </div>
                  <Progress value={skillGroup.proficiency} className="h-2 bg-white/5 [&>div]:bg-primary" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
