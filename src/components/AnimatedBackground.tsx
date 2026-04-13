"use client";

import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pointer-events-none" />
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] bg-purple-500/5 blur-[150px] rounded-full" />
    </div>
  );
};