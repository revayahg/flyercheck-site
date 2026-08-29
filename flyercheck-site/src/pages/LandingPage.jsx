import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";
import FlyerMistakesSection from "../components/FlyerMistakesSection";
import HomepageSectionsContainer from "../components/HomepageSectionsContainer";

import { reportError } from "../utils/errorHandler";
import { usePageJsonLd } from "../utils/pageJsonLd";

const landingPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FlyerCheck",
  url: "https://www.flyercheck.io",
};

export default function LandingPage() {
  try {
    usePageJsonLd(landingPageSchema);

    return (
      <div className="landing-page" data-name="landing-page">
        <Navbar />
        <Hero
          title="Catch the mistake before your audience does."
          accentWord="mistake"
          subtitle="FlyerCheck flags missing dates, weak CTAs, and clutter before you go live — free, no account needed. Run your pre-publish check on the analyzer page."
          primaryCta={{ text: "Open FlyerCheck analyzer", href: "/flyercheck", icon: "fas fa-arrow-right" }}
          showLogo={false}
          image={{
            src: "/images/flyercheck-reality.png",
            alt: "Group chat messages asking where the event is, what the address is, and which door to use — because the flyer didn't say.",
          }}
        />

        <section
          className="landing-band landing-band--surface landing-intro"
          data-name="landing-editorial-intro"
          aria-labelledby="landing-editorial-heading"
        >
          <div className="container">
            <h2 id="landing-editorial-heading" className="section-title">
              Flyer QA built for promoters under pressure
            </h2>
            <p className="section-subtitle landing-intro-lead">
              Most event flyers are reviewed on a phone, posted minutes after the lineup changes, and rarely get a second designer pass. FlyerCheck is the quick sanity check before your audience becomes the proofreader — focused on logistics guests actually use to decide whether to show up.
            </p>
            <p className="landing-intro-body">
              This site is your hub for the free analyzer, how-it-works guides, and practical event-operations articles. When you&apos;re ready to upload, head to the dedicated tool page for instant feedback on clarity, completeness, and conversion killers.
            </p>
            <div className="landing-intro-actions">
              <Link to="/flyercheck" className="btn btn-primary">
                Upload your flyer
              </Link>
              <Link to="/how-it-works" className="insight-link">
                How FlyerCheck works →
              </Link>
            </div>
          </div>
        </section>

        <div className="landing-band landing-band--base">
          <ProductSection />
        </div>

        <FlyerMistakesSection />

        <div className="landing-band landing-band--surface landing-home-sections">
          <HomepageSectionsContainer />
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("LandingPage error:", error);
    reportError(error);
    return null;
  }
}
