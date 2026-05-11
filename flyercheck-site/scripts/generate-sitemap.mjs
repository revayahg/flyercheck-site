/**
 * Writes public/sitemap.xml from src/content/blogPosts.js so URLs stay in sync with the app.
 * Run via npm prebuild (see package.json).
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { blogPosts } from "../src/content/blogPosts.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "public", "sitemap.xml");

const base = "https://www.flyercheck.io";
const lastmod = new Date().toISOString().slice(0, 10);

function urlEntry(loc, priority, changefreq) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const staticPaths = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/flyercheck", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/revaya-host", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/contact", priority: "0.6", changefreq: "monthly" },
  { path: "/privacy", priority: "0.5", changefreq: "monthly" },
  { path: "/terms", priority: "0.5", changefreq: "monthly" },
  { path: "/acceptable-use", priority: "0.4", changefreq: "monthly" },
  { path: "/sitemap", priority: "0.3", changefreq: "monthly" },
  { path: "/blog/flyer-blind-spots", priority: "0.7", changefreq: "monthly" },
];

const blogUrls = blogPosts.map((p) => ({
  path: `/blog/${p.slug}`,
  priority: "0.6",
  changefreq: "monthly",
}));

const all = [...staticPaths, ...blogUrls];

const body = all
  .map(({ path, priority, changefreq }) =>
    urlEntry(`${base}${path}`, priority, changefreq)
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(outPath, xml, "utf8");
console.log(`Wrote ${all.length} URLs to public/sitemap.xml`);
