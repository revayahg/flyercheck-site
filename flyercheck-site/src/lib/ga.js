// Sends a GA4 event through the gtag already loaded in index.html.
// No-ops when GA is blocked or not loaded. Never pass personal data in params.
export function trackGaEvent(name, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  try {
    window.gtag("event", name, params);
  } catch (error) {
    console.error("GA event error:", error);
  }
}
