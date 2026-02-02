// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import icon from "astro-icon";

// only import keystatic conditionally
const integrations = [
  react(),
  markdoc(),
  icon(),
];

if (!import.meta.env.PROD) {
  const { default: keystatic } = await import("@keystatic/astro");
  integrations.push(keystatic());
}

export default defineConfig({
  output: "static",
  integrations,
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },
  site: "https://variniaz.github.io",
  base: "/",
});
