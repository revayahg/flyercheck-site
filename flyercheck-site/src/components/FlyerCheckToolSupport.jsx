import React from "react";
import { Link } from "react-router-dom";
import { reportError } from "../utils/errorHandler";

const supportLinks = [
  {
    title: "How it works",
    description: "Step-by-step: what happens when you upload and how to read the report.",
    href: "/how-it-works",
    icon: "fas fa-route",
  },
  {
    title: "FAQ",
    description: "File formats, privacy, pricing, and what to do when you disagree with a flag.",
    href: "/faq",
    icon: "fas fa-circle-question",
  },
  {
    title: "Event ops blog",
    description: "Articles on flyers, vendors, and run-of-show — beyond the analyzer.",
    href: "/blog",
    icon: "fas fa-newspaper",
  },
];

export default function FlyerCheckToolSupport() {
  try {
    return (
      <section
        className="flyercheck-tool-support"
        data-name="flyercheck-tool-support"
        aria-labelledby="flyercheck-tool-support-heading"
      >
        <div className="container">
          <h2 id="flyercheck-tool-support-heading" className="section-title">
            Need more context?
          </h2>
          <p className="section-subtitle flyercheck-tool-support-intro">
            The homepage covers the big picture. These pages are for when you&apos;re
            using the tool or interpreting results.
          </p>
          <div className="flyercheck-tool-support-grid">
            {supportLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flyercheck-tool-support-card"
                data-name={`flyercheck-support-${item.href.replace(/\//g, "")}`}
              >
                <span className="flyercheck-tool-support-icon" aria-hidden="true">
                  <i className={item.icon} />
                </span>
                <span className="flyercheck-tool-support-title">{item.title}</span>
                <span className="flyercheck-tool-support-desc">{item.description}</span>
                <span className="flyercheck-tool-support-arrow">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("FlyerCheckToolSupport error:", error);
    reportError(error);
    return null;
  }
}
