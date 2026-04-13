"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/lib/resume-data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Hero: React.FC = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-tech');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-[0.2em] text-primary"
          >
            CSE — DATA SCIENCE (2022-2026)
          </motion.div>

          <div className="mb-8">
            <h1 className="text-7xl md:text-[11rem] font-headline font-bold tracking-tighter leading-[0.85] text-white">
              Mohan
            </h1>
            <h1 className="text-7xl md:text-[11rem] font-headline font-bold tracking-tighter leading-[0.85] text-white/10">
              Baragi
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed font-medium">
            MERN Stack Developer specializing in Data Science. <br />
            Architecting seamless digital experiences with precision and passion.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Button
              size="lg"
              className="btn-gradient px-10 h-16 text-md font-bold rounded-full group shadow-lg shadow-primary/20"
              asChild
            >
              <a href="#projects">
                Explore Projects
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>

            <div className="flex items-center gap-4">
              <SocialIcon href="https://github.com/mohanbaragi009" icon={<Github size={20} />} />
              <SocialIcon href="https://linkedin.com/in/mohan-baragi" icon={<Linkedin size={20} />} />
              <SocialIcon href="https://www.instagram.com/_mohanreddy_009/" icon={<ExternalLink size={20} />} />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-square md:aspect-[4/5] lg:aspect-square w-full max-w-[600px] mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse" />
          <div className="relative h-full w-full rounded-[4rem] overflow-hidden border border-white/10 group">
            <Image
              src="https://picsum.photos/seed/forest/800/800"
              alt="Portrait of Mohan Baragi"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] contrast-[1.1]"
              priority
              data-ai-hint="forest nature"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
    whileTap={{ scale: 0.95 }}
    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white transition-all bg-white/5"
  >
    {icon}
  </motion.a>
);