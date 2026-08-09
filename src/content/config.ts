import { defineCollection, z } from 'astro:content';

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    cover: z.string(),
    thumbnail: z.string().optional(),
    coverVideo: z.string().optional(),
    metric: z.string(),
    metricLabel: z.string().optional(),
    client: z.string(),
    role: z.string(),
    industry: z.string().optional(),
    platform: z.string().optional(),
    duration: z.string(),
    year: z.number(),
    draft: z.boolean().optional().default(false),
    comingSoon: z.boolean().optional().default(false),
  }),
});

export const collections = { cases };
