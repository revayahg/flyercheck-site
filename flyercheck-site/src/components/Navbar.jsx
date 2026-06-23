import React from "react";
import { reportError } from "../utils/errorHandler";
import BrandWordmark from "./BrandWordmark";

export default function Navbar() {
  try {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen((v) => !v);
    };

    return (
      <nav className="navbar" data-name="navbar">
        <div className="navbar-container">
          <div className="navbar-brand" data-name="navbar-brand">
            <BrandWordmark href="/" size="nav" />
          </div>

          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            data-name="mobile-menu-button"
            aria-label="Toggle navigation menu"
            type="button"
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`} />
          </button>

          <div
            className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}
            data-name="nav-menu"
          >
            <a href="/" className="nav-link" data-name="nav-home">
              Home
            </a>
            <a href="/flyercheck" className="nav-link" data-name="nav-flyercheck">
              FlyerCheck
            </a>
            <a href="/blog" className="nav-link" data-name="nav-blog">
              Blog
            </a>
            <a href="/contact" className="nav-link" data-name="nav-contact">
              Contact
            </a>
            <a href="/privacy" className="nav-link" data-name="nav-privacy">
              Privacy
            </a>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error("Navbar component error:", error);
    reportError(error);
    return null;
  }
}
