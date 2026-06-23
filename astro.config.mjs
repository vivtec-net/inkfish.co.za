import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://vivtec-net.github.io",
	base: "/inkfish.co.za/",
	trailingSlash: "always",
	integrations: [mdx(), sitemap()],
});
