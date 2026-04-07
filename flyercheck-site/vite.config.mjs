import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // In local dev, /api is not run by Vite; proxy to production so FlyerCheck analyze works
      "/api": {
        target: "https://www.flyercheck.io",
        changeOrigin: true,
      },
    },
  },
});