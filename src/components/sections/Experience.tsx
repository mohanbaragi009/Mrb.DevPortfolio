"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { resumeData } from '@/lib/resume-data';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 tracking-tight">
          Professional <span className="text-primary">Journey</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary rounded-full" />
      </motion.div>

      <Accordion type="single" collapsible defaultValue="item-0" className="space-y-6">
        {resumeData.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <AccordionItem value={`item-${idx}`} className="border rounded-2xl px-6 py-2 glass overflow-hidden transition-all duration-300 data-[state=open]:border-primary/50">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-4 pr-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-headline font-bold group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium mt-1">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="bg-white/5 text-muted-foreground flex items-center gap-1.5 px-3 py-1">
                      <Calendar size={12} />
                      {exp.dates}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/5 text-muted-foreground flex items-center gap-1.5 px-3 py-1">
                      <MapPin size={12} />
                      {exp.location}
                    </Badge>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-8">
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, bIdx) => {
                    // Simple heuristic for highlighting metrics: words starting with digits
                    const highlightedText = bullet.split(' ').map((word, wIdx) => {
                      const isMetric = /^\d+%?|^\d+(\.\d+)?k?$/.test(word.replace(/[.,]/g, ''));
                      return isMetric ? (
                        <span key={wIdx} className="text-primary font-bold">{word} </span>
                      ) : (
                        word + ' '
                      );
                    });

                    return (
                      <li key={bIdx} className="flex gap-3 text-muted-foreground text-base leading-relaxed">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        <span>{highlightedText}</span>
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </section>
  );
};
