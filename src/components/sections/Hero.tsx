
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/lib/resume-data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.377 4.344a1.359 1.359 0 0 0-.415.958c0 .376.15.714.4 1.003l1.813 1.81a1.37 1.37 0 0 0 1.972 0c.563-.56.563-1.471 0-2.028l-2.677-2.673L12.65.439C12.873.22 13.16.111 13.483.111c.352 0 .662.141.9.397L20.897 7.02c.44.458.44 1.191 0 1.648l-6.33 6.328c-.458.441-1.212.441-1.67 0l-1.26-1.259a1.336 1.336 0 0 0-1.886 0c-.515.515-.515 1.353 0 1.868l1.26 1.26a3.99 3.99 0 0 0 5.648 0l6.33-6.329c1.556-1.556 1.556-4.084 0-5.64L14.39.366c-.226-.235-.55-.366-.908-.366zm-9.152 7.358c-.356 0-.687.143-.93.415L.397 10.77c-.528.528-.528 1.385 0 1.913l6.33 6.329c.456.457 1.21.457 1.668 0l1.26-1.26c.518-.518.518-1.356 0-1.874a1.326 1.326 0 0 0-1.884 0l-1.26 1.26-6.33-6.328 3.003-3.003 2.678 2.673c.515.515 1.353.515 1.868 0 .515-.515.515-1.353 0-1.868L6.442 8.358a1.343 1.343 0 0 0-.96-.414z" />
  </svg>
);

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
            Software & MERN Stack Developer specializing in <span className="text-white font-medium">Data Science</span>. <br />
            Eager to learn, impact, and implement new technologies in the real world from day one.
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

            <div className="flex flex-wrap items-center gap-4">
              <SocialIcon href="https://github.com/mohanbaragi009" icon={<Github size={22} />} />
              <SocialIcon href="https://linkedin.com/in/mohan-baragi" icon={<Linkedin size={22} />} />
              <SocialIcon href="https://leetcode.com/mohanbaragi009" icon={<LeetCodeIcon />} />
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
            <div className="absolute bottom-10 left-10 right-10 p-10 glass rounded-[3rem] translate-y-4 group-hover:translate-y-0 transition-all duration-700">
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">CURRENT FOCUS</p>
                <h4 className="text-2xl font-headline font-bold tracking-tight text-white leading-tight">
                  Generative AI <br /> 
                  <span className="text-white/60 font-light">Integration</span>
                </h4>
              </div>
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
