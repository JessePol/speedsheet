import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      speedsheet: path.resolve("../../../src"),
      src: path.resolve("../../../src"),
    },
  },
  server: {
    port: 3000,
  },
});
