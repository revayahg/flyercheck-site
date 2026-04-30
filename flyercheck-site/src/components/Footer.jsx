import React from "react";
import { reportError } from "../utils/errorHandler";
import logo from "../assets/flyercheck-logo-full.png";

const REVAYA_SITE = "https://www.revayahg.com";

export default function Footer() {
  try {
    const year = new Date().getFullYear();

    return (
      <footer className="footer" data-name="footer">
        <div className="container mx-auto px-4">
          <div className="footer-content" data-name="footer-content">
            <div className="footer-brand" data-name="footer-brand">
              <img
                src={logo}
                alt="Revaya FlyerCheck — Less Stress, More Show"
                className="footer-brand-logo"
                data-name="footer-brand-logo"
              />
              <div className="footer-brand-text" data-name="footer-brand-text">
                <span className="footer-brand-name" data-name="footer-brand-name">
                  Revaya Hospitality Group™
                </span>
                <span className="footer-brand-tagline" data-name="footer-brand-tagline">
                  Less Stress. More Show.
                </span>
              </div>
            </div>

            <div className="footer-links" data-name="footer-links">
              <a
                href={`${REVAYA_SITE}/about`}
                className="footer-link"
                data-name="footer-link-about"
              >
                About
              </a>
              <a href="/blog" className="footer-link" data-name="footer-link-blog">
                Blog
              </a>
              <a
                href="/contact"
                className="footer-link"
                data-name="footer-link-contact"
              >
                Contact
              </a>
            </div>

            <div className="footer-legal" data-name="footer-legal">
              <a href="/privacy" className="footer-link" data-name="footer-link-privacy">
                Privacy
              </a>
              <a href="/terms" className="footer-link" data-name="footer-link-terms">
                Terms
              </a>
              <a
                href="/acceptable-use"
                className="footer-link"
                data-name="footer-link-acceptable-use"
              >
                Acceptable Use
              </a>
              <a
                href="/sitemap"
                className="footer-link"
                data-name="footer-link-sitemap"
              >
                Sitemap
              </a>
            </div>
          </div>

          <div className="footer-bottom" data-name="footer-bottom">
            <div className="footer-copyright" data-name="footer-copyright">
              © {year} Revaya Hospitality Group. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error("Footer component error:", error);
    reportError(error);
    return null;
  }
}
