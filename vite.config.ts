import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: resolve("dist"),
    emptyOutDir: true,
    lib: {
      entry: resolve("src/index.ts"),
      formats: ["cjs"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: ["siyuan"],
      output: {
        exports: "default",
      },
    },
    sourcemap: false,
    minify: "esbuild",
  },
});
