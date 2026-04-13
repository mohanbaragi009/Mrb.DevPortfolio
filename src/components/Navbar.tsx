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
          "fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl",
          "px-8 py-4 rounded-full border border-white/40",
          "bg-white/40 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]",
          isScrolled ? "top-4 py-3 bg-white/60" : "top-8"
        )}
      >
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-headline font-bold tracking-tighter cursor-pointer flex items-center group ml-4 text-zinc-950"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Mohan<span className="text-primary group-hover:animate-pulse">.</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold tracking-[0.3em] text-zinc-600 hover:text-black transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block mr-2">
            <Button className="btn-gradient rounded-full px-10 py-6 font-bold tracking-[0.2em] text-[10px] uppercase shadow-xl shadow-primary/20">
              Let's Talk
            </Button>
          </div>

          <button className="md:hidden text-zinc-950 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] md:hidden bg-white/95 flex flex-col items-center justify-center p-8 gap-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-headline font-bold tracking-widest text-zinc-900 hover:text-primary transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <Button className="btn-gradient rounded-full px-12 py-9 text-xl font-bold w-full max-w-xs mt-6" onClick={() => setIsOpen(false)}>
              Let's Talk
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
