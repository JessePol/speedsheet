/// <reference types="vitest" />
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    testFiles: "src/**/*.spec.ts",
    exclude: ["**/node_modules/**", "**/dist/**", "tests/e2e/**"],
  },
  plugins: [tsconfigPaths()],

});
