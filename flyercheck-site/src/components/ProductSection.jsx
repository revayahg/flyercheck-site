import React from "react";
import { reportError } from "../utils/errorHandler";

export default function ProductSection({ showCta = true }) {
  try {
    const checks = [
      {
        icon: "fas fa-calendar-day",
        title: "Missing event details",
        description:
          "Dates, times, venues, and ticket links — the basics people need before they decide to show up.",
      },
      {
        icon: "fas fa-eye",
        title: "Readability at a glance",
        description:
          "Text size, contrast, and clutter that make your flyer hard to scan on a phone screen.",
      },
      {
        icon: "fas fa-bullhorn",
        title: "Weak calls to action",
        description:
          "Vague or buried CTAs that leave people unsure what to do next.",
      },
    ];

    return (
      <section className="product-section flyercheck-value-section" data-name="flyercheck-value-section">
        <div className="container">
          <h2 className="section-title" data-name="section-title">
            What FlyerCheck flags before you post
          </h2>
          <p className="section-subtitle" data-name="product-section-subtitle">
            A free AI pass on the flyer details that cost you RSVPs — not a redesign tool, a second set of eyes.
          </p>

          <div className="pillars-grid" data-name="flyercheck-checks-grid">
            {checks.map((item, idx) => (
              <div key={idx} className="pillar-card" data-name={`flyercheck-check-${idx}`}>
                <div className="pillar-icon" data-name={`flyercheck-check-icon-${idx}`}>
                  <i className={item.icon} aria-hidden="true" />
                </div>
                <h3 className="pillar-title" data-name={`flyercheck-check-title-${idx}`}>
                  {item.title}
                </h3>
                <p className="pillar-description" data-name={`flyercheck-check-desc-${idx}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {showCta && (
            <div className="insights-cta" data-name="flyercheck-value-cta">
              <a href="/flyercheck" className="btn btn-primary">
                Run a free flyer check
              </a>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error("ProductSection component error:", error);
    reportError(error);
    return null;
  }
}
