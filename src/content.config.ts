import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				category: z.string().optional(),
				// Learning pages use: Not started | Learning | Practicing | Comfortable.
				// Project pages use a separate vocabulary (e.g. "Active").
				// Kept as a plain string rather than a strict enum since one field serves both.
				status: z.string().optional(),
				date: z.coerce.date().optional(),
				type: z.enum(['learning', 'project', 'build-log']).optional(),
				github: z.string().url().optional(),
			}),
		}),
	}),
};
