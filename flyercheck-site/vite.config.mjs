import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {
  blogCategoryNoindexFile,
  categoryFromQueryParam,
} from "./src/content/blogCategories.js";

const root = path.dirname(fileURLToPath(import.meta.url));

function blogCategoryNoindexPreview() {
  return {
    name: "blog-category-noindex-preview",
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url ?? "/", "http://127.0.0.1");
        const pathname =
          url.pathname.length > 1 && url.pathname.endsWith("/")
            ? url.pathname.slice(0, -1)
            : url.pathname;
        if (pathname !== "/blog") return next();
        const category = categoryFromQueryParam(url.searchParams.get("category") ?? "");
        const rel = category && blogCategoryNoindexFile(category);
        if (!rel) return next();
        const file = path.join(root, "dist", ...rel.split("/").filter(Boolean));
        if (!fs.existsSync(file)) return next();
        res.statusCode = 200;
        res.setHeader("content-type", "text/html; charset=utf-8");
        res.end(fs.readFileSync(file));
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), blogCategoryNoindexPreview()],
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
