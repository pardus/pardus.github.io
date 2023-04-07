import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  extensions: [".svelte", ".md"],

  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    mdsvex({
      extension: "md",
      markdownOptions: {
        typographer: true,
        linkify: true
      }
    }),
    vitePreprocess(),
    preprocess({
      postcss: true
    }),
  ],
};
