import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // your entry file
      name: "storybook3",                        // global name (UMD)
      fileName: (format) => `index.${format}.js` // output filenames
    },
    rollupOptions: {
      // Don’t bundle React, let the app use its own
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
