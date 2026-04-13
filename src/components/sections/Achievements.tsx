"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, TrendingUp, Users } from 'lucide-react';
import { resumeData } from '@/lib/resume-data';

const iconMap = [Trophy, TrendingUp, Users, Award];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-primary/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 tracking-tight">
            Key <span className="text-primary">Benchmarks</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Measurable impact and industry recognition earned through consistent high-performance delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.achievements.map((item, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/40 transition-all text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-primary" size={32} />
                </div>
                <div className="text-3xl font-headline font-bold mb-3 tracking-tighter">
                  {item.measurableItem}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.context}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
