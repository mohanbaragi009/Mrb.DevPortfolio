"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Layers, Monitor, Terminal, Database, Code, Cpu } from 'lucide-react';

const iconMap: Record<string, any> = {
  "MERN Stack": Layers,
  "Frontend & UI": Monitor,
  "Core Programming": Terminal,
  "Backend & DevOps": Database
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-40 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
        
        {/* Left Column: Title and Key Focus */}
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-white/[0.03] text-muted-foreground/60 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase border-white/[0.05]">
              TECH STACK
            </Badge>
            <h2 className="text-7xl md:text-8xl font-headline font-bold tracking-tight leading-[0.9]">
              Technical <br />
              <span className="text-white/20">Expertise</span>
            </h2>
            <p className="text-muted-foreground/70 text-xl leading-relaxed max-w-md font-light">
              Engineering high-performance solutions with a modern stack optimized for scalability and seamless user experience.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[4rem] space-y-8 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all duration-700" />
            <div className="flex items-center gap-5 text-primary">
              <Cpu size={28} />
              <h3 className="text-2xl font-bold font-headline tracking-tight">Key Focus</h3>
            </div>
            <p className="text-muted-foreground/80 leading-relaxed text-lg font-light">
              Deeply invested in <span className="text-white font-medium">Backend Architecture</span>, <span className="text-white font-medium">Large-scale Data Systems</span>, and creating refined developer experiences through GenAI.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Skill Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.skills.map((skillGroup, idx) => {
            const Icon = iconMap[skillGroup.category] || Code;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="glass p-12 rounded-[4rem] flex flex-col justify-between group hover:border-primary/20 transition-all duration-700 hover:-translate-y-2"
              >
                <div>
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 rounded-[1.75rem] bg-white/[0.03] flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-black/40">
                      <Icon size={30} />
                    </div>
                    <h3 className="text-2xl font-headline font-bold tracking-tight">{skillGroup.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-16">
                    {skillGroup.items.map((skill, sIdx) => (
                      <Badge 
                        key={sIdx} 
                        variant="secondary" 
                        className="bg-white/[0.02] hover:bg-white/[0.08] text-muted-foreground/80 hover:text-white px-5 py-2.5 rounded-2xl text-[11px] font-bold tracking-wider border-white/[0.05] transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/40">Proficiency</span>
                    <span className="text-sm font-bold text-primary tabular-nums">{skillGroup.proficiency}%</span>
                  </div>
                  <Progress value={skillGroup.proficiency} className="h-2 bg-white/[0.03] [&>div]:bg-primary overflow-hidden rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};