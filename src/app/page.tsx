"use client";

import React, { useState } from 'react';
import { SplashScreen } from '@/components/SplashScreen';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ImpactStrip } from '@/components/sections/ImpactStrip';
import { Experience } from '@/components/sections/Experience';
import { ImpactHighlights } from '@/components/sections/ImpactHighlights';
import { Achievements } from '@/components/sections/Achievements';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '@/lib/resume-data';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="relative">
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatedBackground />
          <Navbar />
          
          <div className="relative z-10">
            <Hero />
            <ImpactStrip />
            <Experience />
            <ImpactHighlights />
            <Achievements />
            <Projects />
            <Skills />
            <Education />

            <footer className="py-20 px-6 text-center border-t border-white/5 bg-background/50 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="text-2xl font-headline font-bold mb-6 tracking-tighter">
                  MB<span className="text-primary">.</span>
                </div>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Designed and engineered with passion. <br />
                  © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </motion.div>
      )}
    </main>
  );
}
