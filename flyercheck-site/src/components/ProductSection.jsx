import React from "react";
import ProductCard from "./ProductCard";
import { reportError } from "../utils/errorHandler";

export default function ProductSection() {
  try {
    const products = [
      {
        title: "Revaya Host™",
        description:
          "End-to-end event operations platform for planning, vendor management, and day-of execution.",
        link: "/revaya-host",
        ctaText: "Explore Revaya Host"
      },
      {
        title: "Revaya FlyerCheck™",
        description:
          "AI-powered flyer quality check that catches missing details and design issues before you publish.",
        link: "/flyercheck",
        ctaText: "Try FlyerCheck"
      }
    ];

    return (
      <section className="product-section" data-name="product-section">
        <div className="container">
          <h2 className="section-title" data-name="section-title">
            Current Products & Platforms
          </h2>
          <p className="son-subtitle" data-name="product-section-subtitle">
            Practical tools built for hospitality and live-event workflows.
          </p>

          <div className="products-preview" data-name="products-preview">
            {products.map((p, idx) => (
              <ProductCard
                key={idx}
                title={p.title}
                description={p.description}
                link={p.link}
                ctaText={p.ctaText}
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
