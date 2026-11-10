/**
 * Unknown HTML paths return the prerendered 404 page with status 404.
 *
 * Blog URLs come from publicBlogPosts (src/content/blogPosts.js).
 * Adding a post there is enough — do not add the slug to this file.
 * blogPosts.js is plain ESM (no Node builtins), so this import is safe on the Edge runtime.
 */
import { publicBlogPosts } from "./src/content/blogPosts.js";
import {
  blogCategoryNoindexFile,
  categoryFromQueryParam,
} from "./src/content/blogCategories.js";

const STATIC_PATHS = [
  "/",
  "/flyercheck",
  "/about",
  "/faq",
  "/how-it-works",
  "/blog",
  "/privacy",
  "/terms",
  "/contact",
  "/acceptable-use",
  "/sitemap",
  "/404",
  "/blog/flyer-blind-spots",
];

const KNOWN_PATHS = new Set([
  ...STATIC_PATHS,
  ...publicBlogPosts.map((post) => `/blog/${post.slug}`),
]);

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const path = normalizePath(url.pathname);

  if (
    path.startsWith("/api") ||
    path.startsWith("/assets") ||
    path.startsWith("/styles") ||
    path.startsWith("/images") ||
    path.includes(".")
  ) {
    return;
  }

  if (path === "/blog") {
    const category = categoryFromQueryParam(url.searchParams.get("category") ?? "");
    const snapshot = category && blogCategoryNoindexFile(category);
    if (snapshot) {
      const fileUrl = new URL(snapshot, request.url);
      const file = await fetch(fileUrl);
      if (file.ok) {
        return new Response(await file.text(), {
          status: 200,
          headers: {
            "content-type": "text/html; charset=utf-8",
            "x-robots-tag": "noindex, follow",
            "cache-control": "public, max-age=0, must-revalidate",
          },
        });
      }
    }
  }

  if (KNOWN_PATHS.has(path)) return;

  const notFoundUrl = new URL("/404.html", request.url);
  const notFound = await fetch(notFoundUrl);
  const html = notFound.ok
    ? await notFound.text()
    : "<!doctype html><title>Page not found</title><h1>Page not found</h1>";

  return new Response(html, {
    status: 404,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, follow",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}

export const config = {
  matcher: ["/((?!assets/|api/|styles/|images/).*)"],
};
