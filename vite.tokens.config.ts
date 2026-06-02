import path from "node:path";
import { defineConfig } from "vite";

/**
 * Separate library build for the dependency-free `saguaro/tokens` entry.
 *
 * Kept apart from the main build (vite.config.ts) because UMD output requires a
 * single entry. This entry is pure data + functions, so it needs no React or
 * styled-components plugins.
 *
 * Declarations are NOT emitted here: the main build's vite-plugin-dts already
 * processes all of `src` and emits `dist/lib/tokens.d.ts`, which the
 * `./tokens` export points at.
 *
 * `emptyOutDir: false` preserves the main build's output (saguaro.* + .d.ts),
 * since this runs as a second `vite build` after the main one.
 */
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/lib/tokens.ts"),
      name: "SaguaroTokens",
      formats: ["es", "umd"],
      fileName: (format) => `tokens.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
});
