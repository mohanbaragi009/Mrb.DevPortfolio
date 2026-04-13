"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/lib/resume-data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Hero: React.FC = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-tech');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-6 overflow-hidden">
      {/* Background Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || "https://picsum.photos/seed/tech/1200/800"}
          alt="Tech Background"
          fill
          className="object-cover opacity-10 saturate-0"
          priority
          data-ai-hint="technology abstract"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
        >
          {resumeData.basics.title}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-7xl md:text-[10rem] font-headline font-bold mb-12 tracking-tighter leading-[0.8] text-white"
        >
          {resumeData.basics.name.split(' ')[0]} <br />
          <span className="text-white/30">
            {resumeData.basics.name.split(' ')[1]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          {resumeData.basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            size="lg"
            className="btn-gradient px-12 h-16 text-lg font-bold rounded-full group"
            asChild
          >
            <a href="#projects">
              View Work
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-12 h-16 text-lg font-bold rounded-full border-white/10 hover:bg-white/5 transition-all"
            onClick={() => window.print()}
          >
            Get Resume
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-muted-foreground hover:text-white transition-colors z-10"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};