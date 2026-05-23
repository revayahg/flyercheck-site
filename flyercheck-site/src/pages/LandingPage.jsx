import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";
import FileUploader from "../components/FileUploader";

import HomepageSectionsContainer from "../components/HomepageSectionsContainer";

import { reportError } from "../utils/errorHandler";
import logoFull from "../assets/flyercheck-logo-full.png";
import "../utils/flyerAnalysisService";

export default function LandingPage() {
  try {
    return (
      <div data-name="landing-page">
        <Navbar />
        <Hero
          title="Less Stress. More Show"
          subtitle="Revaya Hospitality Group designs solutions for venues, events, and hospitality operators managing complex, high-pressure environments. Our mission is to simplify operations so teams can spend less time managing chaos and more time delivering exceptional experiences."
          primaryCta={{ text: "Try FlyerCheck", href: "/flyercheck", icon: "fas fa-arrow-right" }}
          secondaryCta={{ text: "Contact Us", href: "/contact" }}
          showLogo={false}
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
              <section className="hero hero-flyercheck" data-name="flyercheck-hero-strip">
                <div className="hero-content">
                  <div className="hero-flyercheck-bar">
                    <img
                      src={logoFull}
                      alt=""
                      className="hero-flyercheck-logo"
                    />
                    <div className="hero-flyercheck-copy">
                      <h2 className="hero-title">FlyerCheck™</h2>
                      <p className="hero-subtitle">
                        Don&apos;t let your audience find the mistake first.
                      </p>
                      <p className="hero-description">
                        Upload your flyer. Free to use — no account needed.
                      </p>
                      <p className="hero-description" style={{ marginTop: "0.75rem" }}>
                        <a href="/flyercheck" style={{ color: "inherit", fontWeight: 600 }}>
                          Full FlyerCheck page — overview, tips &amp; FAQs
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
        <ProductSection />

        {/* Why Event Operations Are So Complex - editorial section for SEO / AdSense */}
        <section className="homepage-section event-ops-complex-section" data-name="why-event-ops-complex" aria-labelledby="event-ops-complex-heading">
          <div className="container">
            <h2 id="event-ops-complex-heading" className="section-title">
              Why Event Operations Are So Complex
            </h2>
            <div className="event-ops-prose">
              <p className="why-revaya-text">
                Behind every successful event is an invisible system of coordination. Vendors, performers, venues, sponsors, staff, and guests all depend on accurate information and well-timed communication. Even small breakdowns in that coordination can create operational challenges that affect both the guest experience and the event team.
              </p>
              <p className="why-revaya-text">
                Event organizers often manage these moving parts across spreadsheets, email threads, shared documents, and messaging apps. While each tool can serve a purpose, they rarely provide a complete operational picture. As events become larger and more dynamic, teams need better ways to organize information and keep everyone aligned.
              </p>
              <p className="why-revaya-text">
                Hospitality and live events require more than planning alone. They require structured execution. Timelines, logistics, communication, vendor coordination, and guest-facing details all need to work together in order for an event to feel seamless from the outside.
              </p>
              <p className="why-revaya-text">
                Revaya Hospitality Group focuses on the operational side of live experiences. Our tools and insights are designed to help event teams reduce confusion, improve coordination, and create stronger guest experiences through better systems.
              </p>
            </div>
          </div>
        </section>

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