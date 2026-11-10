/**
 * The AdSense loader script ships site-wide in index.html <head>. This helper only
 * makes sure the Funding Choices (consent) script is present before an ad unit pushes,
 * and falls back to injecting the loader if index.html was served without it.
 */
const ADSENSE_SRC =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1821148589855201";
let loadPromise = null;

function hasScript(srcPrefix) {
  return Array.from(document.scripts).some((s) => s.src && s.src.startsWith(srcPrefix));
}

function appendScript(src, crossOrigin) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    if (crossOrigin) script.crossOrigin = crossOrigin;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

function signalGooglefcPresent() {
  if (window.frames.googlefcPresent) return;
  const iframe = document.createElement("iframe");
  iframe.style =
    "width:0;height:0;border:none;z-index:-1000;left:-1000px;top:-1000px;display:none";
  iframe.name = "googlefcPresent";
  document.body.appendChild(iframe);
}

export function loadAdSense() {
  if (typeof document === "undefined") return Promise.resolve();
  if (window.adsbygoogle) return Promise.resolve();
  if (!loadPromise) {
    const loader = hasScript(ADSENSE_SRC)
      ? Promise.resolve()
      : appendScript(ADSENSE_SRC, "anonymous");
    loadPromise = loader
      .then(() =>
        appendScript(
          "https://fundingchoicesmessages.google.com/i/pub-1821148589855201?ers=1",
        ),
      )
      .then(() => {
        if (document.body) signalGooglefcPresent();
        else document.addEventListener("DOMContentLoaded", signalGooglefcPresent);
      })
      .catch((err) => {
        loadPromise = null;
        throw err;
      });
  }
  return loadPromise;
}
