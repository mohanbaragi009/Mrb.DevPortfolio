"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { resumeData } from '@/lib/resume-data';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "glass border-b" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-headline font-bold tracking-tighter cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            MB<span className="text-primary">.</span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              <a href={resumeData.basics.links[1]} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href={resumeData.basics.links[0]} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={resumeData.basics.links[3]} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </nav>

          <Button variant="outline" size="sm" className="hidden md:flex gap-2" onClick={() => window.print()}>
            <Download size={16} /> Resume
          </Button>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
          style={{ scaleX }}
        />
      </header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        className="fixed inset-0 z-40 md:hidden glass p-8 pt-24"
      >
        <nav className="flex flex-col gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-headline font-medium hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 mt-4">
            <a href={resumeData.basics.links[1]} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href={resumeData.basics.links[0]} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={resumeData.basics.links[3]} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
          </div>
          <Button className="w-full mt-8" onClick={() => window.print()}>
            <Download size={18} className="mr-2" /> Download Resume
          </Button>
        </nav>
      </motion.div>
    </>
  );
};
