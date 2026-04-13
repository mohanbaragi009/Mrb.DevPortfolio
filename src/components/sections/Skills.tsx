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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column: Title and Key Focus */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-white/[0.03] text-muted-foreground/60 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase border-white/[0.05] w-fit">
              TECH STACK
            </Badge>
            <div className="space-y-0">
              <h2 className="text-8xl md:text-9xl font-headline font-bold tracking-tight leading-[0.8] text-white">
                Technical
              </h2>
              <h2 className="text-8xl md:text-9xl font-headline font-bold tracking-tight leading-[0.8] text-white/10 outline-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                Expertise
              </h2>
            </div>
            <p className="text-muted-foreground/60 text-xl leading-relaxed max-w-md font-light">
              Engineering high-performance solutions with a modern stack optimized for scalability and seamless user experience.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[3.5rem] space-y-8 relative group overflow-hidden mt-16 lg:mt-0"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all duration-700" />
            <div className="flex items-center gap-5 text-primary">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Cpu size={28} />
              </div>
              <h3 className="text-2xl font-bold font-headline tracking-tight text-white">Key Focus</h3>
            </div>
            <p className="text-muted-foreground/80 leading-relaxed text-lg font-light">
              Deeply invested in <span className="text-white font-medium">Backend Architecture</span>, <span className="text-white font-medium">Large-scale Data Systems</span>, and creating refined developer experiences through GenAI.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Skill Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:mt-12">
          {resumeData.skills.map((skillGroup, idx) => {
            const Icon = iconMap[skillGroup.category] || Code;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="bg-[#111111]/80 backdrop-blur-md p-10 rounded-[3.5rem] border border-white/5 flex flex-col justify-between group hover:border-primary/30 transition-all duration-700 hover:-translate-y-2 shadow-2xl"
              >
                <div>
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] group-hover:scale-110 transition-transform duration-500">
                      <Icon size={30} />
                    </div>
                    <h3 className="text-2xl font-headline font-bold tracking-tight text-white">{skillGroup.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5 mb-16">
                    {skillGroup.items.map((skill, sIdx) => (
                      <Badge 
                        key={sIdx} 
                        variant="secondary" 
                        className="bg-white/[0.03] hover:bg-white/[0.08] text-muted-foreground/80 hover:text-white px-4 py-2 rounded-xl text-[10px] font-bold tracking-wider border-white/[0.05] transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/40">PROFICIENCY</span>
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
