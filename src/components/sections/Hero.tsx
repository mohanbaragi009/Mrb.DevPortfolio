"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/lib/resume-data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Hero: React.FC = () => {
  const classicCarImage = PlaceHolderImages.find(img => img.id === 'hero-classic-car');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2 mb-10 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-bold uppercase tracking-[0.3em] text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            CSE — DATA SCIENCE (2022-2026)
          </motion.div>

          <div className="mb-10 space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-8xl md:text-[13rem] font-headline font-bold tracking-tighter leading-[0.8] text-white"
            >
              Mohan
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-8xl md:text-[13rem] font-headline font-bold tracking-tighter leading-[0.8] text-white/5 outline-text"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
            >
              Baragi
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground/80 mb-14 max-w-xl leading-relaxed font-light"
          >
            MERN Stack Developer specializing in <span className="text-white font-medium">Data Science</span>. <br />
            Architecting high-performance digital systems with precision and aesthetic depth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-8"
          >
            <Button
              size="lg"
              className="btn-gradient px-12 h-20 text-sm font-bold rounded-full group shadow-2xl shadow-primary/30"
              asChild
            >
              <a href="#projects">
                EXPLORE WORK
                <ChevronRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={18} />
              </a>
            </Button>

            <div className="flex items-center gap-6">
              <SocialIcon href="https://github.com/mohanbaragi009" icon={<Github size={22} />} />
              <SocialIcon href="https://linkedin.com/in/mohan-baragi" icon={<Linkedin size={22} />} />
              <SocialIcon href="https://www.instagram.com/_mohanreddy_009/" icon={<Instagram size={22} />} />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5 w-full max-w-[550px] mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full -z-10 animate-float" />
          <div className="relative aspect-[4/5] w-full rounded-[5rem] overflow-hidden border border-white/[0.08] group bg-[#0a0a0a]">
            <Image
              src={classicCarImage?.imageUrl || "https://picsum.photos/seed/classic-car/800/800"}
              alt="Mohan Baragi Portfolio"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] grayscale-[0.3] contrast-[1.1]"
              priority
              data-ai-hint="vintage car"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
            
            {/* Overlay Info Card */}
            <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-[2.5rem] translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              <p className="text-[10px] font-bold tracking-[0.3em] text-primary mb-2 uppercase">Current Focus</p>
              <h4 className="text-xl font-headline font-bold">Generative AI Integration</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)' }}
    whileTap={{ scale: 0.95 }}
    className="w-16 h-16 rounded-full border border-white/[0.05] flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-500 bg-white/[0.02]"
  >
    {icon}
  </motion.a>
);