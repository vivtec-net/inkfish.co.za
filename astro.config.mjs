import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://inkfish.co.za",
	base: "/",
	trailingSlash: "always",
	integrations: [mdx(), sitemap()],
	outDir: "../../server/inkfish.co.za",
});
