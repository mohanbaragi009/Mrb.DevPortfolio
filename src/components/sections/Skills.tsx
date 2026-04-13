"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 tracking-tight">
          Technical <span className="text-primary">Stack</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {resumeData.skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-headline font-bold mb-6 text-primary flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary/30" />
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary) / 0.15)' }}
                  className="px-4 py-2 rounded-xl glass border-white/5 text-sm font-medium transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
