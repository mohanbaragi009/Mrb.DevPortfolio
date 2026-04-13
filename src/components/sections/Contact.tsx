
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/lib/resume-data';

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.377 4.344a1.359 1.359 0 0 0-.415.958c0 .376.15.714.4 1.003l1.813 1.81a1.37 1.37 0 0 0 1.972 0c.563-.56.563-1.471 0-2.028l-2.677-2.673L12.65.439C12.873.22 13.16.111 13.483.111c.352 0 .662.141.9.397L20.897 7.02c.44.458.44 1.191 0 1.648l-6.33 6.328c-.458.441-1.212.441-1.67 0l-1.26-1.259a1.336 1.336 0 0 0-1.886 0c-.515.515-.515 1.353 0 1.868l1.26 1.26a3.99 3.99 0 0 0 5.648 0l6.33-6.329c1.556-1.556 1.556-4.084 0-5.64L14.39.366c-.226-.235-.55-.366-.908-.366zm-9.152 7.358c-.356 0-.687.143-.93.415L.397 10.77c-.528.528-.528 1.385 0 1.913l6.33 6.329c.456.457 1.21.457 1.668 0l1.26-1.26c.518-.518.518-1.356 0-1.874a1.326 1.326 0 0 0-1.884 0l-1.26 1.26-6.33-6.328 3.003-3.003 2.678 2.673c.515.515 1.353.515 1.868 0 .515-.515.515-1.353 0-1.868L6.442 8.358a1.343 1.343 0 0 0-.96-.414z" />
  </svg>
);

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="bg-[#0a0a0a] rounded-[4rem] overflow-hidden border border-white/[0.05] shadow-2xl flex flex-col lg:flex-row min-h-[700px]">
        {/* Left Panel: Info */}
        <div className="lg:w-2/5 bg-[#111111] p-12 md:p-16 flex flex-col">
          <div className="mb-12">
            <Badge variant="outline" className="border-white/10 text-muted-foreground text-[10px] tracking-[0.2em] font-bold uppercase mb-8 py-1 px-4 rounded-full">
              GET IN TOUCH
            </Badge>
            <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tight mb-8">
              Let's <span className="text-muted-foreground/40">Connect</span>
            </h2>
          </div>

          <p className="text-muted-foreground text-lg mb-16 leading-relaxed font-light">
            Have a vision for a project or just want to chat tech? Reach out through the form or find me on my socials.
          </p>

          <div className="space-y-10 mb-20">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground/40 tracking-[0.2em] uppercase mb-1">EMAIL</p>
                <p className="text-lg font-bold tracking-tight">{resumeData.basics.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground/40 tracking-[0.2em] uppercase mb-1">LOCATION</p>
                <p className="text-lg font-bold tracking-tight">{resumeData.basics.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <p className="text-[10px] font-bold text-muted-foreground/40 tracking-[0.2em] uppercase mb-8">SOCIAL ECOSYSTEM</p>
            <div className="flex flex-wrap gap-4">
              <SocialItem href="https://github.com/mohanbaragi009" icon={<Github size={20} />} />
              <SocialItem href="https://linkedin.com/in/mohan-baragi" icon={<Linkedin size={20} />} />
              <SocialItem href="https://leetcode.com/mohanbaragi009" icon={<LeetCodeIcon />} />
              <SocialItem href="https://www.instagram.com/_mohanreddy_009/" icon={<Instagram size={20} />} />
            </div>
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="lg:w-3/5 p-12 md:p-16 flex flex-col justify-center">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase ml-1">FULL NAME</label>
                <Input placeholder="Your Name" className="h-16 bg-white/[0.02] border-white/5 rounded-2xl px-6 focus:border-primary/50 transition-all placeholder:text-muted-foreground/20" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase ml-1">EMAIL PROTOCOL</label>
                <Input type="email" placeholder="email@example.com" className="h-16 bg-white/[0.02] border-white/5 rounded-2xl px-6 focus:border-primary/50 transition-all placeholder:text-muted-foreground/20" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase ml-1">SUBJECT</label>
              <Input placeholder="How can I help you?" className="h-16 bg-white/[0.02] border-white/5 rounded-2xl px-6 focus:border-primary/50 transition-all placeholder:text-muted-foreground/20" />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase ml-1">YOUR MESSAGE</label>
              <Textarea placeholder="Describe your project vision..." className="min-h-[200px] bg-white/[0.02] border-white/5 rounded-[2rem] p-6 focus:border-primary/50 transition-all resize-none placeholder:text-muted-foreground/20" />
            </div>

            <Button className="btn-gradient rounded-full h-20 px-12 text-sm font-bold tracking-[0.2em] group shadow-2xl shadow-primary/20 w-fit">
              INITIATE CONTACT
              <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

const SocialItem = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)' }}
    className="w-14 h-14 rounded-2xl border border-white/5 flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-500 bg-white/[0.02]"
  >
    {icon}
  </motion.a>
);
