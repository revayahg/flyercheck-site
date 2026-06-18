/**
 * Post-build prerender: serves dist/ locally and snapshots each route to static HTML.
 * Uses @sparticuz/chromium on Linux (Vercel); system Chrome on macOS when available.
 */
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "serve-handler";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { blogPosts } from "../src/content/blogPosts.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const PORT = Number(process.env.PRERENDER_PORT) || 8765;

const staticRoutes = [
  "/",
  "/flyercheck",
  "/about",
  "/blog",
  "/privacy",
  "/terms",
  "/contact",
  "/acceptable-use",
  "/sitemap",
  "/blog/flyer-blind-spots",
];
const routes = [
  ...new Set([
    ...staticRoutes,
    ...blogPosts.map((p) => `/blog/${p.slug}`),
  ]),
];

const defaultDarwinChrome =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

function routeToFilePath(route) {
  if (route === "/") return path.join(distDir, "index.html");
  const clean = route.replace(/^\//, "").replace(/\/$/, "");
  return path.join(distDir, clean, "index.html");
}

async function launchBrowser() {
  const useSparticuz =
    process.platform === "linux" || process.env.VERCEL === "1";

  if (useSparticuz) {
    chromium.setGraphicsMode = false;
    return puppeteer.launch({
      args: [...chromium.args, "--no-sandbox", "--disable-setuid-sandbox"],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }

  const executablePath =
    process.env.PUPPETEER_EXECUTABLE_PATH ||
    (process.platform === "darwin" && fs.existsSync(defaultDarwinChrome)
      ? defaultDarwinChrome
      : undefined);

  if (!executablePath) {
    console.warn(
      "[prerender] No Chrome/Chromium found (set PUPPETEER_EXECUTABLE_PATH). Skipping.",
    );
    return null;
  }

  return puppeteer.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
}

function startServer() {
  const server = http.createServer((request, response) =>
    handler(request, response, {
      public: distDir,
      rewrites: [{ source: "**", destination: "/index.html" }],
    }),
  );

  return new Promise((resolve) => {
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

async function prerenderRoute(page, baseURL, route) {
  const url = `${baseURL}${route}`;
  console.log(`[prerender] ${route}`);

  await page.goto(url, { waitUntil: "load", timeout: 90_000 });
  await page.waitForSelector("#root", { timeout: 15_000 });
  await new Promise((r) => setTimeout(r, 3000));

  const html = await page.content();
  const outPath = routeToFilePath(route);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, "utf8");
}

async function main() {
  if (process.env.SKIP_PRERENDER === "1") {
    console.log("[prerender] SKIP_PRERENDER=1 — skipping");
    return;
  }

  if (!fs.existsSync(path.join(distDir, "index.html"))) {
    throw new Error(`dist/index.html not found — run vite build first`);
  }

  const browser = await launchBrowser();
  if (!browser) return;

  const server = await startServer();
  const baseURL = `http://127.0.0.1:${PORT}`;

  try {
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const reqUrl = req.url();
      if (
        reqUrl.includes("googlesyndication.com") ||
        reqUrl.includes("googleadservices.com") ||
        reqUrl.includes("doubleclick.net")
      ) {
        req.abort();
        return;
      }
      req.continue();
    });

    for (const route of routes) {
      await prerenderRoute(page, baseURL, route);
    }

    console.log(`[prerender] Wrote ${routes.length} HTML snapshots to dist/`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
