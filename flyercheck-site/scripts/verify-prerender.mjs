/**
 * Verifies prerendered HTML contains visible copy (not an empty #root shell).
 * Run after build locally or curl production — see DEPLOY.md for GSC steps.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { blogPosts } from "../src/content/blogPosts.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");

const checks = [
  { route: "/", needle: "Revaya Hospitality Group" },
  { route: "/flyercheck", needle: "FlyerCheck" },
  { route: "/blog", needle: "Event Operations" },
  { route: "/about", needle: "About" },
  {
    route: `/blog/${blogPosts[0].slug}`,
    needle: blogPosts[0].title.slice(0, 40),
  },
];

function routeToFile(route) {
  if (route === "/") return path.join(distDir, "index.html");
  return path.join(distDir, route.replace(/^\//, ""), "index.html");
}

let failed = 0;

for (const { route, needle } of checks) {
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
    console.log(`OK   ${route}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} prerender check(s) failed`);
  process.exit(1);
}

console.log("\nAll prerender checks passed.");
