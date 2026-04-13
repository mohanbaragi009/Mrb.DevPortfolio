"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/lib/resume-data';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-primary/20 text-xs font-bold uppercase tracking-widest text-primary"
        >
          {resumeData.basics.title}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-8xl font-headline font-bold mb-8 tracking-tighter leading-[0.9]"
        >
          {resumeData.basics.name.split(' ')[0]} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-x">
            {resumeData.basics.name.split(' ')[1]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {resumeData.basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="group px-8 h-14 text-base font-bold rounded-full"
            asChild
          >
            <a href="#experience">
              View Experience
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 h-14 text-base font-bold rounded-full border-white/10 hover:bg-white/5"
            onClick={() => window.print()}
          >
            <FileText className="mr-2" size={20} />
            Download Resume
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-muted-foreground hover:text-primary transition-colors"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};
