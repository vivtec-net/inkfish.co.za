import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const insights = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/archives/insights" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.date().optional(),
			category: z.string(),
			image: image().optional(),
		}),
});

export const collections = { insights };
