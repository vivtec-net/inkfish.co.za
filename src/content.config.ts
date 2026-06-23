import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const insights = defineCollection({
	loader: glob({ base: "./src/content/insights", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
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
