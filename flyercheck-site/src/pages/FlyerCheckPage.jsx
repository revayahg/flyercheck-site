import { trackEvent } from "../lib/analytics";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import FileUploader from "../components/FileUploader";
import FlyerCheckToolSupport from "../components/FlyerCheckToolSupport";
import { FlyerCheckResultsMeaningSection } from "../components/HomepageSections";
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
      <div className="flyercheck-page flyercheck-workspace" data-name="flyercheck-page">
        <Navbar />

        <header className="flyercheck-workspace-header" data-name="flyercheck-workspace-header">
          <div className="container">
            <p className="flyercheck-workspace-eyebrow">Free analyzer</p>
            <h1 className="flyercheck-workspace-title">
              Upload your flyer for a pre-publish check
            </h1>
            <p className="flyercheck-workspace-lead">
              PNG, JPEG, or WEBP — upload the version you plan to post. FlyerCheck
              flags missing event details, readability issues, and weak CTAs in under
              a minute. No account required.
            </p>
            <p className="flyercheck-workspace-home-link">
              New here?{" "}
              <Link to="/" className="insight-link">
                Start on the homepage
              </Link>{" "}
              for an overview, or jump straight into upload below.
            </p>
          </div>
        </header>

        <section
          className="flyercheck-landing flyercheck-workspace-tool"
          aria-label="Analyze your flyer"
          data-name="flyercheck-workspace-tool"
        >
          <div className="flyercheck-landing-inner">
            <div className="flyercheck-landing-tool">
              <FileUploader />
            </div>
          </div>
        </section>

        <div className="flyercheck-workspace-guide" data-name="flyercheck-workspace-guide">
          <FlyerCheckResultsMeaningSection />
          <FlyerCheckToolSupport />
        </div>

        <AdBanner inline />

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
