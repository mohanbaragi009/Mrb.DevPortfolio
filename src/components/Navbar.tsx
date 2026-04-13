"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl",
          "px-8 py-4 rounded-[2.5rem] border border-white/5",
          "bg-[#111111]/80 backdrop-blur-md shadow-2xl"
        )}
      >
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-headline font-bold tracking-tighter cursor-pointer flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Mohan<span className="text-primary">.</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button className="btn-gradient rounded-full px-8 py-6 font-bold tracking-wide text-xs">
              Let's Talk
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-8 gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-headline font-bold tracking-widest hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="btn-gradient rounded-full px-12 py-8 text-xl font-bold w-full max-w-xs mt-4" onClick={() => setIsOpen(false)}>
              Let's Talk
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};