import React from "react";
import { reportError } from "../utils/errorHandler";

export default function ProductCard({ title, description, link, ctaText }) {
  try {
    return (
      <div className="product-card" data-name="product-card">
        <a href={link} className="product-card-link" data-name="product-card-link">
          <div className="product-card-body" data-name="product-card-body">
            <h3 className="product-card-title" data-name="product-card-title">{title}</h3>
            <p className="product-card-description" data-name="product-card-description">
              {description}
            </p>
          </div>

          <div className="product-card-footer" data-name="product-card-footer">
            <button className="btn btn-primary" data-name="product-card-cta" type="button">
              {ctaText || "Learn More"}
            </button>
          </div>
        </a>
      </div>
    );
  } catch (error) {
    console.error("ProductCard component error:", error);
    reportError(error);
    return null;
  }
}
