import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reportError } from "../utils/errorHandler";

const helpfulLinks = [
  { to: "/", label: "Home", description: "Overview and latest articles" },
  { to: "/flyercheck", label: "FlyerCheck analyzer", description: "Upload a flyer for a free pre-publish check" },
  { to: "/how-it-works", label: "How it works", description: "What the analyzer does step by step" },
  { to: "/faq", label: "FAQ", description: "Formats, privacy, and common questions" },
  { to: "/blog", label: "Blog", description: "Event operations and flyer clarity articles" },
  { to: "/sitemap", label: "Sitemap", description: "Full list of pages on flyercheck.io" },
  { to: "/contact", label: "Contact", description: "Reach the FlyerCheck team" },
];

function NotFoundPage() {
  try {
    const location = useLocation();
    const requestedPath = location.pathname || "/";

    return (
      <div data-name="not-found-page">
        <Navbar />
        <main className="contact-section not-found-section" data-name="not-found-content">
          <div className="container">
            <p className="not-found-status" data-name="not-found-status">
              404 — Page not found
            </p>
            <h1 className="contact-title">This page doesn&apos;t exist</h1>
            <p className="contact-subtitle not-found-lead">
              There is no page at{" "}
              <code className="not-found-path">{requestedPath}</code> on
              flyercheck.io. The link may be outdated, mistyped, or removed.
            </p>
            <p className="not-found-agent-note">
              HTTP status for missing URLs is 404. This page is intentionally
              brief so crawlers and agents can confirm the resource is gone and
              continue from the links below.
            </p>

            <nav
              className="not-found-links"
              aria-label="Helpful destinations"
              data-name="not-found-links"
            >
              <h2 className="section-title not-found-links-heading">
                Where to go next
              </h2>
              <ul className="not-found-link-list">
                {helpfulLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="not-found-link-card">
                      <span className="not-found-link-label">{item.label}</span>
                      <span className="not-found-link-desc">{item.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("NotFoundPage error:", error);
    reportError(error);
    return null;
  }
}

export default NotFoundPage;
