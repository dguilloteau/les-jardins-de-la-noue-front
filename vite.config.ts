import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext"
    }
  },
  build: {
    target: "esnext"
  },
  plugins: [react()],
});