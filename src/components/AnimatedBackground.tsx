"use client";

import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden bg-[#050505]">
      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] pointer-events-none" />
      
      {/* Background Gradients - Primary Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[180px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 blur-[180px] rounded-full animate-pulse" style={{ animationDuration: '12s' }} />
      
      {/* Prominent Central White Glow - "More White in Background" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-white/[0.08] blur-[200px] rounded-full pointer-events-none" />
      
      {/* Top White Soft Light */}
      <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

      {/* Subtle Bottom Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[30%] bg-gradient-to-t from-white/[0.07] to-transparent pointer-events-none" />
      
      {/* Interactive Light Dots */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full blur-[2px] animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/20 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};
