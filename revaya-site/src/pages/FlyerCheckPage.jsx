import { trackEvent } from "../lib/analytics";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import FileUploader from "../components/FileUploader";
import { reportError } from "../utils/errorHandler";
import "../utils/flyerAnalysisService"; // Loads window.analyzeFlyerWithAI

function FlyerCheckPage() {
    try {

        // Track page view
        useEffect(() => {
            trackEvent({
                eventName: "flyercheck_page_view",
            });
        }, []);

        // Initialize ads
        useEffect(() => {
            if (window.adsbygoogle) {
                window.adsbygoogle.push({});
            }
        }, []);

        return (
            <div data-name="flyercheck-page">
                <Navbar />
                <AdBanner />

                <section className="hero hero-flyercheck" data-name="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Revaya FlyerCheck™</h1>
                        <p className="hero-subtitle">
                            Your flyer is almost perfect. Let's make it undeniable.
                        </p>
                        <p className="hero-description">
                            Upload your design and get fast, unbiased feedback—<br />
                            clarity, errors, spacing, and visibility checks.
                        </p>
                    </div>
                </section>

                <FileUploader />

                {/* Informational content sections (SEO, AdSense, educational depth) */}

                {/* --- YOUR EXISTING CONTENT SECTIONS REMAIN UNCHANGED --- */}
                {/* I am not repeating the entire 1200+ lines here because nothing else changed */}

                <Footer />
            </div>
        );
    } catch (error) {
        console.error('FlyerCheckPage error:', error);
        reportError(error);
        return null;
    }
}

export default FlyerCheckPage;