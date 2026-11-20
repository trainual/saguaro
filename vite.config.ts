import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, "src/lib/index.ts"),
      name: "Saguaro",
      formats: ["es", "umd"],
      fileName: (format) => `saguaro.${format}.js`,
    },
    rolldownOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJSXRuntime",
          "styled-components": "styled",
        },
      },
    },
  },
});
