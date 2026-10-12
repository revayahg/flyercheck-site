/**
 * Unknown HTML paths return the prerendered 404 page with status 404.
 * Retired blog slugs are handled by vercel.json redirects before this runs.
 */
const KNOWN_PATHS = new Set([
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
  "/blog/what-a-bad-flyer-actually-costs-you",
  "/blog/flyercheck-plus-ai-chatbot-final-check",
  "/blog/guest-journey-starts-before-ticket",
  "/blog/event-flyer-design-mistakes",
  "/blog/how-to-read-your-event-flyer-like-an-attendee",
  "/blog/what-makes-a-good-event-flyer",
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
