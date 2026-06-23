import React from "react";
import { reportError } from "../utils/errorHandler";
import BrandWordmark from "./BrandWordmark";

export default function Footer() {
  try {
    const year = new Date().getFullYear();

    return (
      <footer className="footer" data-name="footer">
        <div className="container mx-auto px-4">
          <div className="footer-content" data-name="footer-content">
            <div className="footer-brand" data-name="footer-brand">
              <BrandWordmark href="/" size="footer" />
              <div className="footer-brand-text" data-name="footer-brand-text">
                <span className="footer-brand-tagline" data-name="footer-brand-tagline">
                  A Revaya Hospitality Group product
                </span>
              </div>
            </div>

            <div className="footer-links" data-name="footer-links">
              <a href="/about" className="footer-link" data-name="footer-link-about">
                About
              </a>
              <a href="/flyercheck" className="footer-link" data-name="footer-link-flyercheck">
                FlyerCheck
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
                Privacy Policy
              </a>
              <a href="/terms" className="footer-link" data-name="footer-link-terms">
                Terms of Service
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
