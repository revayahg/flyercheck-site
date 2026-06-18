import React, { useEffect, useRef, useState } from "react";
import { reportError } from "../utils/errorHandler";
import { loadAdSense } from "../utils/loadAdSense";

function AdBanner() {
    try {
        const adRef = useRef(null);
        const [adsReady, setAdsReady] = useState(false);
        const adSlot =
            import.meta.env.VITE_ADSENSE_BANNER_SLOT &&
            /^\d+$/.test(import.meta.env.VITE_ADSENSE_BANNER_SLOT)
                ? import.meta.env.VITE_ADSENSE_BANNER_SLOT
                : "8254176920";

        useEffect(() => {
            let cancelled = false;
            loadAdSense()
                .then(() => {
                    if (!cancelled) setAdsReady(true);
                })
                .catch((error) => {
                    console.error("AdSense load error:", error);
                });
            return () => {
                cancelled = true;
            };
        }, []);

        useEffect(() => {
            if (!adsReady || !adRef.current || typeof window === "undefined" || !window.adsbygoogle) return;
            try {
                window.adsbygoogle.push({});
            } catch (error) {
                console.error("AdBanner push error:", error);
            }
        }, [adsReady]);

        if (!adsReady) return null;

        return (
            <div className="ad-banner" data-name="ad-banner">
                <div className="ad-container" data-name="ad-container">
                    <ins
                        ref={adRef}
                        className="adsbygoogle"
                        style={{
                            display: 'block',
                            width: '100%',
                            height: '90px',
                            minHeight: '90px',
                            maxHeight: '90px',
                            maxWidth: '728px',
                            margin: 0,
                            padding: 0,
                            overflow: 'hidden'
                        }}
                        data-ad-client="ca-pub-1821148589855201"
                        data-ad-slot={adSlot}
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    >
                    </ins>
                </div>
            </div>
        );
    } catch (error) {
        console.error('AdBanner component error:', error);
        reportError(error);
        return null;
    }
}

export default AdBanner;
