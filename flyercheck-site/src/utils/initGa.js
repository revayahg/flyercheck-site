/**
 * GA4 via gtag. Set VITE_GA_MEASUREMENT_ID to your FlyerCheck property (G-…).
 * Omit or leave unset to keep the legacy shared ID. Set to "false" to disable.
 */
export function initGoogleAnalytics() {
  const raw = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const gaId =
    raw === "false" || raw === ""
      ? null
      : raw || "G-7QCG3QQEMH";

  if (!gaId) return;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", gaId);
}
