import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductSection from "../components/ProductSection";

import HomepageSectionsContainer from "../components/HomepageSectionsContainer";

import { reportError } from "../utils/errorHandler";

export default function LandingPage() {
  try {
    return (
      <div data-name="landing-page">
        <Navbar />
        <Hero
          title="Less Stress. More Show"
          subtitle="Revaya Hospitality Group designs solutions for venues, events, and hospitality operators managing complex, high-pressure environments. Our mission is to simplify operations so teams can spend less time managing chaos and more time delivering exceptional experiences."
          primaryCta={{ text: "Explore Our Products", href: "/revaya-host", icon: "fas fa-arrow-right" }}
          secondaryCta={{ text: "Contact Us", href: "/contact" }}
          showLogo={false}
        />
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