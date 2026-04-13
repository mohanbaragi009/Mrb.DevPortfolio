'use server';
/**
 * @fileOverview A Genkit flow for extracting structured data from a resume document.
 *
 * - extractResumeData - A function that handles the resume data extraction process.
 * - ResumeDataExtractionInput - The input type for the extractResumeData function.
 * - ResumeDataExtractionOutput - The return type for the extractResumeData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// 1. Define Input Schema
const ResumeDataExtractionInputSchema = z.object({
  resumeText: z.string().describe('The full text content of a resume document.'),
});
export type ResumeDataExtractionInput = z.infer<typeof ResumeDataExtractionInputSchema>;

// 2. Define Output Schema
const ResumeDataExtractionOutputSchema = z.object({
  basics: z.object({
    name: z.string().optional().describe('The full name of the person.'),
    title: z.string().optional().describe('The professional title.'),
    summary: z.string().optional().describe('A brief professional summary or objective.'),
    location: z.string().optional().describe('Current location (city, state, country).'),
    email: z.string().email().optional().describe('Email address.'),
    phone: z.string().optional().describe('Phone number.'),
    links: z.array(z.string().url()).optional().describe('An array of URLs for professional profiles (e.g., LinkedIn, GitHub, personal website).'),
  }).describe('Basic personal and contact information.'),
  experience: z.array(z.object({
    company: z.string().describe('The name of the company.'),
    role: z.string().describe('The job title or role.'),
    dates: z.string().describe('The start and end dates of employment.'),
    location: z.string().optional().describe('The location of employment.'),
    bullets: z.array(z.string()).describe('An array of key responsibilities and achievements.'),
  })).describe('A list of work experiences.'),
  achievements: z.array(z.string()).optional().describe('A list of significant measurable achievements or awards, each as a distinct string that includes context.'),
  projects: z.array(z.object({
    title: z.string().describe('The title of the project.'),
    stack: z.string().optional().describe('Technologies or tools used in the project.'),
    bullets: z.array(z.string()).describe('An array of descriptions or achievements related to the project.'),
    links: z.array(z.string().url()).optional().describe('An array of URLs related to the project (e.g., GitHub repo, live demo).'),
  })).optional().describe('A list of personal or professional projects.'),
  skills: z.array(z.object({
    category: z.string().describe('Category of the skills (e.g., "Programming Languages", "Frameworks", "Tools").'),
    items: z.array(z.string()).describe('An array of specific skills within the category.'),
  })).optional().describe('A categorized list of skills.'),
  education: z.array(z.object({
    degree: z.string().describe('The degree or qualification obtained.'),
    institution: z.string().describe('The name of the educational institution.'),
    dates: z.string().describe('The start and end dates of education.'),
    location: z.string().optional().describe('The location of the institution.'),
    details: z.array(z.string()).optional().describe('Additional details like GPA, relevant coursework, or honors.'),
  })).optional().describe('A list of educational background entries.'),
  certifications: z.array(z.string()).optional().describe('A list of professional certifications.'),
  awards: z.array(z.string()).optional().describe('A list of awards and honors received.'),
  extra: z.array(z.string()).optional().describe('Any resume lines that did not fit into other structured fields, ensuring no information is missed.'),
});
export type ResumeDataExtractionOutput = z.infer<typeof ResumeDataExtractionOutputSchema>;

// 3. Define the prompt
const resumeDataExtractionPrompt = ai.definePrompt({
  name: 'resumeDataExtractionPrompt',
  input: { schema: ResumeDataExtractionInputSchema },
  output: { schema: ResumeDataExtractionOutputSchema },
  prompt: `You are an expert resume parser and product designer. Your task is to accurately extract all information from the provided resume text and structure it into a JSON object strictly following the provided schema. The goal is to capture every detail for a portfolio website.\n\nAdhere to the following critical rules:\n1.  **Completeness**: Every single line, word, number, and piece of information from the resume document MUST be included somewhere in the output JSON. Do not omit anything. If a bullet point under experience or projects contains multiple distinct facts, ensure each fact is preserved as a separate string within the 'bullets' array.\n2.  **No Invention**: Do not invent, infer, or hallucinate any achievements, companies, dates, numbers, skills, links, or titles that are not explicitly present in the input resume text.\n3.  **Ambiguity Handling**: If a piece of information is ambiguous or doesn't clearly fit into one of the predefined fields, place it verbatim in the \`extra[]\` array rather than making a guess or omitting it.\n4.  **Schema Compliance**: The output MUST be a valid JSON object that strictly conforms to the provided output schema, including all arrays and nested objects. Ensure that optional fields are omitted if no relevant information is found in the resume.\n5.  **Output Format**: The output should be ONLY the JSON object, nothing else.\n\nResume Document:\n{{{resumeText}}}\n`,
});

// 4. Define the flow
const resumeDataExtractionFlow = ai.defineFlow(
  {
    name: 'resumeDataExtractionFlow',
    inputSchema: ResumeDataExtractionInputSchema,
    outputSchema: ResumeDataExtractionOutputSchema,
  },
  async (input) => {
    const {output} = await resumeDataExtractionPrompt(input);
    if (!output) {
      throw new Error('Failed to extract resume data. Output was null or undefined.');
    }
    return output;
  }
);

// 5. Export the wrapper function
export async function extractResumeData(input: ResumeDataExtractionInput): Promise<ResumeDataExtractionOutput> {
  return resumeDataExtractionFlow(input);
}
