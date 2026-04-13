"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { resumeData } from '@/lib/resume-data';

export const ImpactStrip: React.FC = () => {
  // Taking first 3 measurable achievements for the strip
  const top3 = resumeData.achievements.slice(0, 3);

  return (
    <div className="w-full bg-primary/5 border-y border-white/5 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {top3.map((impact, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Zap className="text-primary" size={20} />
            </div>
            <div>
              <div className="text-2xl font-headline font-bold text-primary mb-1">
                {impact.measurableItem}
              </div>
              <p className="text-sm text-muted-foreground leading-tight">
                {impact.context}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
