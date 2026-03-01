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