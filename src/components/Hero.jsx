import React from "react";
import { reportError } from "../utils/errorHandler";

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  showLogo = false,
  page
}) {
  try {
    return (
      <section
        className={`hero ${page === "flyercheck" ? "hero-flyercheck" : "hero-landing"}`}
        data-name="hero"
      >
        <div className="hero-content" data-name="hero-content">
          {showLogo && (
            <div className="hero-logo" data-name="hero-logo">
              <img
                src="https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/514b6f7e-130b-496e-9d51-dc2d16df66fb.png"
                alt="Revaya Hospitality Group logo"
                className="hero-logo-img"
              />
              <p className="hero-brand-name" data-name="hero-brand-name">
                Revaya Hospitality Group™
              </p>
            </div>
          )}

          {title && (
            <h1 className="hero-title" data-name="hero-title">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="hero-subtitle" data-name="hero-subtitle">
              {subtitle}
            </p>
          )}

          <div className="hero-ctas" data-name="hero-ctas">
            {primaryCta?.href && (
              <a
                href={primaryCta.href}
                className="cta-button-primary"
                data-name="hero-primary-cta"
              >
                {primaryCta.icon && <i className={primaryCta.icon} />}
                <span>{primaryCta.text}</span>
              </a>
            )}

            {secondaryCta?.href && (
              <a
                href={secondaryCta.href}
                className="cta-button-secondary"
                data-name="hero-secondary-cta"
              >
                {secondaryCta.text}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Hero component error:", error);
    reportError(error);
    return null;
  }
}