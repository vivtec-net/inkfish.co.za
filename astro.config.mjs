import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://vivtec-net.github.io",
	base: "/",
	trailingSlash: "always",
	integrations: [mdx(), sitemap()],
	outDir: "inkfish.co.za",
});
