/** Canonical blog categories for filtering and navigation. */
export const BLOG_CATEGORIES = [
  "Event Operations",
  "Vendor Management",
  "Event Marketing",
  "Tools & Workflow",
  "Guest Experience",
];

export function isBlogCategory(value) {
  return BLOG_CATEGORIES.includes(value);
}

/** URL-safe category param (spaces → + or encodeURIComponent). */
export function categoryToQueryParam(category) {
  return encodeURIComponent(category);
}

export function categoryFromQueryParam(param) {
  if (!param) return null;
  let decoded = param.replace(/\+/g, " ");
  try {
    while (decoded.includes("%")) {
      const next = decodeURIComponent(decoded);
      if (next === decoded) break;
      decoded = next;
    }
  } catch {
    return null;
  }
  return isBlogCategory(decoded) ? decoded : null;
}

export function blogUrlForCategory(category) {
  if (!category || category === "All") return "/blog";
  return `/blog?category=${categoryToQueryParam(category)}`;
}
