import React from "react";
import { reportError } from "../utils/errorHandler";

export default function Footer() {
  try {
    const year = new Date().getFullYear();

    return (
      <footer className="footer" data-name="footer">
        <div className="container mx-auto px-4">
          <div className="footer-content" data-name="footer-content">
            <div className="footer-brand" data-name="footer-brand">
              <div className="footer-brand-name" data-name="footer-brand-name">
                Revaya Hospitality Group™
              </div>
              <div className="footer-brand-tagline" data-name="footer-brand-tagline">
                Less stress. More show.
              </div>
            </div>

            <div className="footer-links" data-name="footer-links">
              <a href="/about" className="footer-link" data-name="footer-link-about">About</a>
              <a href="/revaya-host" className="footer-link" data-name="footer-link-host">Revaya Host™</a>
              <a href="/flyercheck" className="footer-link" data-name="footer-link-flyercheck">Revaya FlyerCheck™</a>
              <a href="/blog" className="footer-link" data-name="footer-link-blog">Blog</a>
              <a href="/contact" className="footer-link" data-name="footer-link-contact">Contact</a>
            </div>

            <div className="footer-legal" data-name="footer-legal">
              <a href="/privacy" className="footer-link" data-name="footer-link-privacy">Privacy</a>
              <a href="/terms" className="footer-link" data-name="footer-link-terms">Terms</a>
              <a href="/sitemap" className="footer-link" data-name="footer-link-sitemap">Sitemap</a>
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