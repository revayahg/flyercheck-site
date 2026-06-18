/**
 * Verifies prerendered HTML contains visible copy and page-specific metadata.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { blogPosts } from "../src/content/blogPosts.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");

const contentChecks = [
  { route: "/", needle: "FlyerCheck" },
  { route: "/flyercheck", needle: "FlyerCheck" },
  { route: "/blog", needle: "Blog" },
  { route: "/about", needle: "About" },
  {
    route: `/blog/${blogPosts[0].slug}`,
    needle: blogPosts[0].title.slice(0, 40),
  },
];

const metaChecks = [
  {
    route: "/",
    title: "Catch Flyer Mistakes Before Launch | FlyerCheck",
    descriptionNeedle: "finds the typo",
  },
  {
    route: "/sitemap",
    title: "flyercheck.io Sitemap—Tool, Blog & Policies",
    descriptionNeedle: "free flyer analyzer",
  },
  {
    route: `/blog/${blogPosts[0].slug}`,
    title: "Free Event Tools Cost More Than You Think | FlyerCheck",
    descriptionNeedle: "duplicate work",
  },
  {
    route: "/blog/flyer-blind-spots",
    title: "Too Close to Your Flyer to See the Flaw | FlyerCheck",
    descriptionNeedle: "blind spots",
  },
];

function routeToFile(route) {
  if (route === "/") return path.join(distDir, "index.html");
  return path.join(distDir, route.replace(/^\//, ""), "index.html");
}

function decodeHtmlEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return decodeHtmlEntities(m?.[1] ?? "");
}

function extractDescription(html) {
  const m = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i);
  return m?.[1] ?? "";
}

let failed = 0;

for (const { route, needle } of contentChecks) {
  const file = routeToFile(route);
  if (!fs.existsSync(file)) {
    console.error(`FAIL ${route}: missing ${file}`);
    failed++;
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  const rootMatch = html.match(/<div id="root"[^>]*>([\s\S]*?)<\/div>/i);
  const rootInner = rootMatch?.[1]?.replace(/\s+/g, " ").trim() ?? "";
  if (!html.includes(needle) || rootInner.length < 80) {
    console.error(
      `FAIL ${route}: expected "${needle}" in HTML; #root inner length=${rootInner.length}`,
    );
    failed++;
  } else {
    console.log(`OK   ${route} (content)`);
  }
}

for (const { route, title, descriptionNeedle } of metaChecks) {
  const file = routeToFile(route);
  if (!fs.existsSync(file)) {
    console.error(`FAIL ${route}: missing ${file}`);
    failed++;
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  const gotTitle = extractTitle(html);
  const gotDesc = extractDescription(html);
  if (gotTitle !== title) {
    console.error(`FAIL ${route} title: expected "${title}", got "${gotTitle}"`);
    failed++;
    continue;
  }
  if (!gotDesc.includes(descriptionNeedle)) {
    console.error(
      `FAIL ${route} description: expected to include "${descriptionNeedle}", got "${gotDesc.slice(0, 80)}..."`,
    );
    failed++;
    continue;
  }
  if (!html.includes('property="og:title"') || !html.includes('name="twitter:title"')) {
    console.error(`FAIL ${route}: missing og:title or twitter:title`);
    failed++;
    continue;
  }
  console.log(`OK   ${route} (meta)`);
}

if (failed > 0) {
  console.error(`\n${failed} prerender check(s) failed`);
  process.exit(1);
}

console.log("\nAll prerender checks passed.");
