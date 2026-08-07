import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** The two columns on the Writing page. */
export const SECTIONS = ['Medical AI', 'MindTech'] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().default('Deepak RJ'),
    section: z.enum(SECTIONS).default('Medical AI'),
    categories: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
