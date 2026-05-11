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
  "/revaya-host",
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

export default defineConfig({
  /** Downlevel syntax so prerender’s bundled Chromium (~Chrome 77) can execute the client bundle. */
  build: {
    target: "chrome76",
  },
  plugins: [
    react(),
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