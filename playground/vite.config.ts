import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwind()],
  resolve: {
    alias: {
      "@thiagomoraesn13/onboarding": path.resolve(__dirname, "../src/index.ts"),
    },
  },
});
