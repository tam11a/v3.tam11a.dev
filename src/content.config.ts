import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const featured = defineCollection({
  type: "content_layer",
  loader: file("src/_components/featured/gallery.json", {
    parser(text) {
      return JSON.parse(text);
    },
  }),
  schema: z.object({
    slug: z.string(),
    logo: z.string(),
    company: z.string(),
    company_url: z.string().url().optional(),
  }),
});

export const collections = {
  featured,
};
