import React from "react";

export default function BrandWordmark({ href = "/", className = "", size = "nav" }) {
    const lockup = (
        <span className={`brand-wordmark brand-wordmark--${size} ${className}`.trim()}>
            <span className="brand-wordmark-name">FlyerCheck</span>
            <span className="brand-wordmark-by">by Revaya</span>
        </span>
    );

    if (href) {
        return (
            <a href={href} className="brand-wordmark-link" aria-label="FlyerCheck by Revaya — Home">
                {lockup}
            </a>
        );
    }

    return lockup;
}
