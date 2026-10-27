import React from "react";
import ProductCard from "./ProductCard";
import FlyerCheckShot from "./FlyerCheckShot";
import HostShot from "./HostShot";
import { reportError } from "../utils/errorHandler";

export default function ProductSection() {
  try {
    const products = [
      {
        title: "Revaya Host™",
        description:
          "End-to-end event operations platform for planning, vendor management, and day-of execution.",
        link: "/revaya-host",
        ctaText: "See the Overview",
        preview: <HostShot />
      },
      {
        title: "Revaya FlyerCheck™",
        description:
          "AI-powered flyer quality check that catches missing details and design issues before you publish.",
        link: "https://www.flyercheck.io/",
        ctaText: "Try FlyerCheck",
        preview: <FlyerCheckShot />
      }
    ];

    return (
      <section className="product-section" data-name="product-section">
        <div className="container">
          <div className="product-section-header">
            <h2 className="section-title" data-name="section-title">
              Current Products & Platforms
            </h2>
            <p className="section-subtitle" data-name="product-section-subtitle">
              Practical tools built for hospitality and live-event workflows.
            </p>
          </div>

          <div className="products-preview" data-name="products-preview">
            {products.map((p, idx) => (
              <ProductCard
                key={idx}
                title={p.title}
                description={p.description}
                link={p.link}
                ctaText={p.ctaText}
                image={p.image}
                imageAlt={p.imageAlt}
                preview={p.preview}
              />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("ProductSection component error:", error);
    reportError(error);
    return null;
  }
}
