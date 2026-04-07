import React from "react";
import { reportError } from "../utils/errorHandler";
import logo from "../assets/flyercheck-logo-full.png";

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
            </div>

            <div className="footer-links" data-name="footer-links">
              <a href="/privacy" className="footer-link" data-name="footer-link-privacy">
                Privacy
              </a>
              <a href="/terms" className="footer-link" data-name="footer-link-terms">
                Terms
              </a>
              <a href="/blog" className="footer-link" data-name="footer-link-blog">
                Blog
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
