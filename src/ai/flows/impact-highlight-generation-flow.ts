'use server';
/**
 * @fileOverview A Genkit flow for extracting and highlighting key achievements and impacts from structured resume data.
 *
 * - generateImpactHighlights - A function that takes structured resume data and returns identified impact highlights and top 3 verbatim impact statements.
 * - ImpactHighlightInput - The input type for the generateImpactHighlights function.
 * - ImpactHighlightOutput - The return type for the generateImpactHighlights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema: Defines the structure of the resume data relevant for impact analysis.
const ResumeBasicSchema = z.object({
  summary: z.string().describe('A concise professional summary.')
}).optional();

const ResumeExperienceItemSchema = z.object({
  company: z.string().describe('The name of the company.'),
  role: z.string().describe('The role held at the company.'),
  dates: z.string().describe('The duration of the role.'),
  bullets: z.array(z.string()).describe('Key responsibilities and achievements in this role, including measurable impacts.')
});

const ResumeAchievementItemSchema = z.object({
  measurableItem: z.string().describe('A specific, measurable achievement.'),
  context: z.string().optional().describe('Optional context for the achievement.')
});

const ResumeProjectItemSchema = z.object({
  title: z.string().describe('The title of the project.'),
  bullets: z.array(z.string()).describe('Key features, technologies, and impact of the project.')
});

const ImpactHighlightInputSchema = z.object({
  basics: ResumeBasicSchema.describe('Basic information including the professional summary.').optional(),
  experience: z.array(ResumeExperienceItemSchema).describe('Professional work experience, with details for each role.').optional(),
  achievements: z.array(ResumeAchievementItemSchema).describe('Specific individual achievements with measurable outcomes.').optional(),
  projects: z.array(ResumeProjectItemSchema).describe('Details of projects undertaken, including their impact.').optional()
});

export type ImpactHighlightInput = z.infer<typeof ImpactHighlightInputSchema>;

// Output Schema: Defines the structure for the extracted impact highlights.
const ImpactHighlightOutputSchema = z.object({
  highlights: z.array(z.object({
    title: z.string().describe('A concise title for the impact highlight.'),
    description: z.string().describe('A detailed description of the impact, focusing on measurable achievements and key contributions, potentially rephrased or summarized for clarity.').nullable()
  })).describe('A list of the most impactful achievements and key contributions from the resume, rephrased for conciseness and impact.'),
  top3Impact: z.array(z.string()).describe('The top 3 most impactful statements, directly extracted verbatim from the resume data without alteration or summarization.')
});

export type ImpactHighlightOutput = z.infer<typeof ImpactHighlightOutputSchema>;

// Define the prompt that the LLM will use.
const impactHighlightPrompt = ai.definePrompt({
  name: 'impactHighlightPrompt',
  input: { schema: ImpactHighlightInputSchema },
  output: { schema: ImpactHighlightOutputSchema },
  prompt: `You are a senior product designer and front-end engineer. Your task is to analyze the provided structured resume data to identify the most impactful achievements and key contributions. Focus on measurable results, leadership, and significant project outcomes.\n\nHere is the structured resume data:\n\n{{#if basics.summary}}\nSummary: {{{basics.summary}}}\n{{/if}}\n\n{{#if experience}}\nExperience:\n{{#each experience}}\n  Company: {{this.company}}\n  Role: {{this.role}}\n  Dates: {{this.dates}}\n  Bullets:\n  {{#each this.bullets}}\n    - {{{this}}}\n  {{/each}}\n{{/each}}\n{{/if}}\n\n{{#if achievements}}\nAchievements:\n{{#each achievements}}\n  - Measurable Item: {{{this.measurableItem}}} {{#if this.context}} (Context: {{{this.context}}}){{/if}}\n{{/each}}\n{{/if}}\n\n{{#if projects}}\nProjects:\n{{#each projects}}\n  Title: {{this.title}}\n  Bullets:\n  {{#each this.bullets}}\n    - {{{this}}}\n  {{/each}}\n{{/each}}\n{{/if}}\n\nBased on this data, please provide two lists in JSON format, as per the output schema:\n1.  \`highlights\`: A list of the most impactful achievements and key contributions. For each highlight, provide a concise title and a detailed description. You may rephrase or summarize for clarity, but ensure the core meaning and impact are accurately conveyed.\n2.  \`top3Impact\`: The top 3 most impactful statements. These must be extracted *verbatim* from the resume data provided above, without any alteration, summarization, or rephrasing. They should be direct quotes.\n`
});

// Define the Genkit flow.
const impactHighlightGenerationFlow = ai.defineFlow(
  {
    name: 'impactHighlightGenerationFlow',
    inputSchema: ImpactHighlightInputSchema,
    outputSchema: ImpactHighlightOutputSchema
  },
  async (input) => {
    const {output} = await impactHighlightPrompt(input);
    return output!;
  }
);

// Wrapper function for the flow to be called from Next.js.
export async function generateImpactHighlights(input: ImpactHighlightInput): Promise<ImpactHighlightOutput> {
  return impactHighlightGenerationFlow(input);
}
