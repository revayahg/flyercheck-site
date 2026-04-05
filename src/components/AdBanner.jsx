import React from "react";
import { reportError } from "../utils/errorHandler";

function AdBanner() {
    try {
        return (
            <div className="ad-banner" data-name="ad-banner">
                <div className="ad-container" data-name="ad-container">
                    <ins className="adsbygoogle"
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
                        data-ad-slot="horizontal-banner"
                        data-ad-format="auto"
                        data-full-width-responsive="true">
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
