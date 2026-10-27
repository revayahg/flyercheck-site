import React from "react";
import { reportError } from "../utils/errorHandler";

export default function ProductCard({ title, description, link, ctaText, image, imageAlt, preview }) {
  try {
    return (
      <div className="product-card" data-name="product-card">
        {image || preview ? (
          <div className="product-card-media" data-name="product-card-media">
            {preview || (
              <img
                src={image}
                alt={imageAlt || title}
                className="product-card-image"
              />
            )}
          </div>
        ) : null}
        <div className="product-card-body" data-name="product-card-body">
          <h3 className="product-card-title" data-name="product-card-title">{title}</h3>
          <p className="product-card-description" data-name="product-card-description">
            {description}
          </p>
        </div>

        <div className="product-card-footer" data-name="product-card-footer">
          <a href={link} className="btn btn-primary product-card-cta" data-name="product-card-cta">
            {ctaText || "Learn More"}
          </a>
        </div>
      </div>
    );
  } catch (error) {
    console.error("ProductCard component error:", error);
    reportError(error);
    return null;
  }
}
