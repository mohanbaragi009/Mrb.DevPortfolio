
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, ChevronRight, Binary } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/lib/resume-data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Hero: React.FC = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-tech');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || "https://picsum.photos/seed/tech/1200/800"}
          alt="Tech Background"
          fill
          className="object-cover opacity-20"
          priority
          data-ai-hint="technology data"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border-primary/30 text-xs font-bold uppercase tracking-widest text-primary"
        >
          <Binary size={14} />
          {resumeData.basics.title}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-9xl font-headline font-bold mb-8 tracking-tighter leading-[0.85]"
        >
          {resumeData.basics.name.split(' ')[0]} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary bg-[length:200%_auto] animate-gradient-x">
            {resumeData.basics.name.split(' ')[1]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed glass p-6 rounded-3xl border-white/5"
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
            className="group px-8 h-16 text-lg font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            asChild
          >
            <a href="#experience">
              Explore My Journey
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 h-16 text-lg font-bold rounded-full glass border-white/10 hover:bg-white/10 transition-all"
            onClick={() => window.print()}
          >
            <FileText className="mr-2" size={20} />
            Get Resume
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-muted-foreground hover:text-primary transition-colors z-10"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};
