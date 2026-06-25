import { useEffect } from "react";

const PAGE_JSON_LD_ID = "page-jsonld";

/**
 * Inject page-specific JSON-LD after route-level SEO runs (child effects run after App).
 */
export function usePageJsonLd(schema) {
  const serialized = schema ? JSON.stringify(schema) : null;

  useEffect(() => {
    const existing = document.getElementById(PAGE_JSON_LD_ID);
    if (existing) existing.remove();

    if (!serialized) return undefined;

    const script = document.createElement("script");
    script.id = PAGE_JSON_LD_ID;
    script.type = "application/ld+json";
    script.setAttribute("data-page-jsonld", "true");
    script.textContent = serialized;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [serialized]);
}
