import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";
import FileUploader from "../components/FileUploader";

import HomepageSectionsContainer from "../components/HomepageSectionsContainer";
import FlyerMistakesSection from "../components/FlyerMistakesSection";

import { reportError } from "../utils/errorHandler";
import "../utils/flyerAnalysisService";

export default function LandingPage() {
  try {
    return (
      <div data-name="landing-page">
        <Navbar />
        <Hero
          title="Catch the mistake before your audience does."
          accentWord="mistake"
          subtitle="Upload your flyer. FlyerCheck flags missing dates, weak CTAs, and clutter before you go live — free, no account needed."
          primaryCta={{ text: "Try FlyerCheck", href: "/flyercheck", icon: "fas fa-arrow-right" }}
          showLogo={false}
          image={{
            src: "/images/flyercheck-reality.png",
            alt: "Group chat messages asking where the event is, what the address is, and which door to use — because the flyer didn't say.",
          }}
        />
        <div className="flyercheck-page" data-name="landing-flyercheck-embed">
          <section
            className="flyercheck-landing"
            data-name="landing-flyercheck-tool"
            aria-label="Analyze your flyer with FlyerCheck"
          >
            <div className="flyercheck-landing-inner">
              <div className="flyercheck-landing-tool">
                <FileUploader />
              </div>
            </div>
          </section>
        </div>
        <ProductSection />

        <FlyerMistakesSection />

        <HomepageSectionsContainer />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("LandingPage error:", error);
    reportError(error);
    return null;
  }
}