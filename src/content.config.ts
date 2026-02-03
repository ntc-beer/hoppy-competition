import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

const clubs = defineCollection({
  loader: file("../config/clubs.json"),
  schema: z.object({
    name: z.string(),
    website: z.string().url().optional(),
    description: z.string().optional(),
  })
});

const competitions = defineCollection({
  loader: file("../config/competitions.json"),
  schema: z.object({
    name: z.string(),
    openDate: z.string(),
    closeDate: z.string(),
    awardsDate: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    club: z.string().optional(),
    infoLink: z.string().url().optional(),
    image: z.string().optional()
  })
});

export const collections = {clubs, competitions};

