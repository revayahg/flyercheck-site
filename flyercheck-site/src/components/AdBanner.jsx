import React, { useEffect, useRef, useState } from "react";
import { reportError } from "../utils/errorHandler";
import { loadAdSense } from "../utils/loadAdSense";

const AD_FILL_POLL_MS = 250;
const AD_FILL_TIMEOUT_MS = 10000;

const OFF_SCREEN_HOST_STYLE =
    "position:fixed;left:-10000px;top:0;width:728px;height:90px;overflow:hidden;visibility:hidden;pointer-events:none;z-index:-1;";

function createAdUnit(adSlot) {
    const ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.style.width = "100%";
    ins.style.height = "90px";
    ins.style.minHeight = "90px";
    ins.style.maxHeight = "90px";
    ins.style.maxWidth = "728px";
    ins.style.margin = "0";
    ins.style.padding = "0";
    ins.style.overflow = "hidden";
    ins.setAttribute("data-ad-client", "ca-pub-1821148589855201");
    ins.setAttribute("data-ad-slot", adSlot);
    ins.setAttribute("data-ad-format", "horizontal");
    ins.setAttribute("data-full-width-responsive", "false");
    return ins;
}

function isAdFilled(ins) {
    if (!ins) return false;
    if (ins.getAttribute("data-ad-status") === "unfilled") return false;
    if (ins.getAttribute("data-ad-status") !== "filled") return false;
    const iframe = ins.querySelector("iframe");
    return Boolean(iframe && iframe.offsetHeight > 0);
}

function AdBanner({ inline = false }) {
    try {
        const mountRef = useRef(null);
        const insRef = useRef(null);
        const [adState, setAdState] = useState("loading");
        const adSlot =
            import.meta.env.VITE_ADSENSE_BANNER_SLOT &&
            /^\d+$/.test(import.meta.env.VITE_ADSENSE_BANNER_SLOT)
                ? import.meta.env.VITE_ADSENSE_BANNER_SLOT
                : "8254176920";

        useEffect(() => {
            if (typeof document === "undefined") return undefined;

            let cancelled = false;
            let host = null;
            let observer = null;
            let poll = null;
            let timeout = null;
            let settled = false;

            const markFilled = () => {
                if (settled || cancelled) return;
                settled = true;
                setAdState("filled");
            };

            const markUnfilled = () => {
                if (settled || cancelled) return;
                settled = true;
                setAdState("unfilled");
            };

            const checkFillStatus = () => {
                if (!insRef.current) return false;
                if (insRef.current.getAttribute("data-ad-status") === "unfilled") {
                    markUnfilled();
                    return true;
                }
                if (isAdFilled(insRef.current)) {
                    markFilled();
                    return true;
                }
                return false;
            };

            const cleanupLoader = () => {
                observer?.disconnect();
                if (poll) window.clearInterval(poll);
                if (timeout) window.clearTimeout(timeout);
                host?.remove();
                host = null;
            };

            loadAdSense()
                .then(() => {
                    if (cancelled || typeof window === "undefined" || !window.adsbygoogle) {
                        markUnfilled();
                        return;
                    }

                    host = document.createElement("div");
                    host.setAttribute("data-ad-loader", "true");
                    host.style.cssText = OFF_SCREEN_HOST_STYLE;
                    document.body.appendChild(host);

                    const ins = createAdUnit(adSlot);
                    host.appendChild(ins);
                    insRef.current = ins;

                    try {
                        window.adsbygoogle.push({});
                    } catch (error) {
                        console.error("AdBanner push error:", error);
                        markUnfilled();
                        cleanupLoader();
                        return;
                    }

                    observer = new MutationObserver(() => {
                        checkFillStatus();
                    });
                    observer.observe(ins, {
                        attributes: true,
                        attributeFilter: ["data-ad-status"],
                        childList: true,
                        subtree: true,
                    });

                    poll = window.setInterval(() => {
                        checkFillStatus();
                    }, AD_FILL_POLL_MS);

                    timeout = window.setTimeout(() => {
                        if (!checkFillStatus()) {
                            markUnfilled();
                        }
                    }, AD_FILL_TIMEOUT_MS);
                })
                .catch((error) => {
                    console.error("AdSense load error:", error);
                    markUnfilled();
                });

            return () => {
                cancelled = true;
                cleanupLoader();
                insRef.current = null;
            };
        }, [adSlot]);

        useEffect(() => {
            if (adState !== "filled" || !mountRef.current || !insRef.current) return;
            mountRef.current.appendChild(insRef.current);
            document.querySelector("[data-ad-loader]")?.remove();
        }, [adState]);

        if (adState !== "filled") return null;

        return (
            <div
                className={`ad-banner ad-banner--visible${inline ? " ad-banner--inline" : ""}`}
                data-name="ad-banner"
            >
                <div className="ad-container" ref={mountRef} data-name="ad-container" />
            </div>
        );
    } catch (error) {
        console.error("AdBanner component error:", error);
        reportError(error);
        return null;
    }
}

export default AdBanner;
