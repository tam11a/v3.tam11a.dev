// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind(),
    icon({
      include: {
        lucide: ["*"],
        "vscode-icons": ["*"],
      },
    }),
  ],
});
