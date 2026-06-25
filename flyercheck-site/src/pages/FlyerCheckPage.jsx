import { trackEvent } from "../lib/analytics";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import FileUploader from "../components/FileUploader";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import FlyerMistakesSection from "../components/FlyerMistakesSection";
import {
  WhatWeDoSection,
  WhoWeWorkWithSection,
  WhyFlyerCheckExistsSection,
  FlyerCheckFaqSection,
} from "../components/HomepageSections";
import { reportError } from "../utils/errorHandler";
import { usePageJsonLd } from "../utils/pageJsonLd";
import "../utils/flyerAnalysisService";

const flyercheckPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "FlyerCheck",
  url: "https://www.flyercheck.io/flyercheck",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered flyer analysis tool that catches mistakes before your event launches.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

function FlyerCheckPage() {
  try {
    usePageJsonLd(flyercheckPageSchema);

    useEffect(() => {
      trackEvent({
        eventName: "flyercheck_page_view",
      });
    }, []);

    return (
      <div className="flyercheck-page" data-name="flyercheck-page">
        <Navbar />

        <Hero
          title="Catch the mistake before your audience does."
          accentWord="mistake"
          subtitle="Upload your flyer. Free to use — no account needed."
          showLogo={false}
        />

        <section
          className="flyercheck-landing"
          aria-label="Analyze your flyer"
        >
          <div className="flyercheck-landing-inner">
            <div className="flyercheck-landing-tool">
              <FileUploader />
            </div>
          </div>
        </section>

        <ProductSection showCta={false} />
        <FlyerMistakesSection />
        <WhatWeDoSection />
        <WhoWeWorkWithSection />
        <WhyFlyerCheckExistsSection />
        <FlyerCheckFaqSection />

        <AdBanner />

        <p className="uploader-legal-notice">
          Do not upload sensitive personal data. Upload only content you have
          rights to use.
        </p>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error("FlyerCheckPage error:", error);
    reportError(error);
    return null;
  }
}

export default FlyerCheckPage;
