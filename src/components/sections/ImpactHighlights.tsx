"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { generateImpactHighlights, ImpactHighlightOutput } from '@/ai/flows/impact-highlight-generation-flow';
import { resumeData } from '@/lib/resume-data';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const ImpactHighlights: React.FC = () => {
  const [data, setData] = useState<ImpactHighlightOutput | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const result = await generateImpactHighlights({
          basics: { summary: resumeData.basics.summary },
          experience: resumeData.experience,
          achievements: resumeData.achievements,
          projects: resumeData.projects
        });
        setData(result);
      } catch (e) {
        console.error("Failed to generate AI highlights", e);
      } finally {
        setLoading(false);
      }
    };
    fetchHighlights();
  }, []);

  if (loading) {
    return (
      <div className="py-24 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Skeleton className="h-48 w-full glass" />
        <Skeleton className="h-48 w-full glass" />
      </div>
    );
  }

  if (!data) return null;

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <Sparkles className="text-primary" />
        <h2 className="text-2xl font-headline font-bold tracking-tight">
          AI Impact <span className="text-primary">Analysis</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.highlights.slice(0, 4).map((highlight, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-primary/20 hover:border-primary/50 transition-all h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-headline font-bold text-primary mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
