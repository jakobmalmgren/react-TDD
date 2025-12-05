import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-tests.js",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "html"], // text i terminal + HTML-rapport
      all: true, // täck alla filer, inte bara de som testas
      include: ["src/**/*.{js,jsx,ts,tsx}"], // vilka filer som ska täckas
      exclude: ["node_modules", "tests/**/*.{js,ts}", "src/main.jsx"], // exkludera node_modules och testfiler
    },
  },
});
