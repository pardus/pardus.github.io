import { defineMDSveXConfig as defineConfig } from "mdsvex";
const config = defineConfig({
  extensions: [".md", ".svx"],
  layout: {
    default: "./src/routes/wiki/default-layout.svelte",
    fancy: "./src/routes/wiki/default-layout.svelte",
  },
});

export default config;
