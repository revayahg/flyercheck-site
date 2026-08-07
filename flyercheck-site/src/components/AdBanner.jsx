import React, { useEffect } from "react";
import { reportError } from "../utils/errorHandler";
import { loadAdSense } from "../utils/loadAdSense";

function AdBanner({ inline = false }) {
  const adSlot =
    import.meta.env.VITE_ADSENSE_BANNER_SLOT &&
    /^\d+$/.test(import.meta.env.VITE_ADSENSE_BANNER_SLOT)
      ? import.meta.env.VITE_ADSENSE_BANNER_SLOT
      : "8254176920";

  useEffect(() => {
    let cancelled = false;

    loadAdSense()
      .then(() => {
        if (cancelled || typeof window === "undefined") return;
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.error("AdSense push error:", error);
        }
      })
      .catch((error) => {
        console.error("AdSense load error:", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  try {
    return (
      <div
        className={`ad-banner ad-banner--visible${inline ? " ad-banner--inline" : ""}`}
        data-name="ad-banner"
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "90px" }}
          data-ad-client="ca-pub-1821148589855201"
          data-ad-slot={adSlot}
          data-ad-format="horizontal"
          data-full-width-responsive="false"
        />
      </div>
    );
  } catch (error) {
    console.error("AdBanner component error:", error);
    reportError(error);
    return null;
  }
}

export default AdBanner;
