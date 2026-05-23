import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { blogPosts } from "./src/content/blogPosts.js";

/** CJS entry: the package ESM build uses `require` and fails when Vite loads the config as ESM. */
const require = createRequire(import.meta.url);
const vitePrerender = require("vite-plugin-prerender");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const staticPrerenderRoutes = [
  "/",
  "/flyercheck",
  "/about",
  "/blog",
  "/privacy",
  "/terms",
  "/contact",
  "/acceptable-use",
];
const prerenderRoutes = [
  ...staticPrerenderRoutes,
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];

/** Plugin’s bundled Chromium often fails to launch; prefer system Chrome (or PUPPETEER_EXECUTABLE_PATH). */
const defaultDarwinChrome =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const puppeteerExecutablePath =
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  (process.platform === "darwin" && fs.existsSync(defaultDarwinChrome)
    ? defaultDarwinChrome
    : undefined);

/**
 * Vercel build agents are Linux with no Chrome install; Puppeteer’s Chromium often fails to launch
 * and can exit the whole build. Skip prerender there—SPA still ships with updated index.html/CSS/JS.
 * Local / CI with Chrome: set SKIP_PRERENDER=1 to disable; set FORCE_PRERENDER=1 on Vercel only if you wire Chromium (e.g. PUPPETEER_EXECUTABLE_PATH).
 */
const enablePrerender =
  process.env.SKIP_PRERENDER !== "1" &&
  (process.env.FORCE_PRERENDER === "1" || process.env.VERCEL !== "1");

export default defineConfig({
  /** Downlevel bundle only when prerender runs (old Chromium in vite-plugin-prerender). */
  build: enablePrerender ? { target: "chrome76" } : {},
  plugins: [
    react(),
    ...(enablePrerender
      ? [
          vitePrerender({
            staticDir: path.join(__dirname, "dist"),
            routes: prerenderRoutes,
            renderer: new vitePrerender.PuppeteerRenderer({
              headless: true,
              renderAfterTime: 4000,
              skipThirdPartyRequests: true,
              ...(puppeteerExecutablePath && {
                executablePath: puppeteerExecutablePath,
              }),
              args: ["--no-sandbox", "--disable-setuid-sandbox"],
            }),
          }),
        ]
      : []),
  ],
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