import React from "react";
import { reportError } from "../utils/errorHandler";
import logo from "../assets/flyercheck-logo-full.png";

export default function Navbar() {
  try {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen((v) => !v);
    };

    return (
      <nav className="navbar" data-name="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-brand" data-name="navbar-brand">
            <img
              src={logo}
              alt="Revaya FlyerCheck — Less Stress, More Show"
              className="navbar-logo"
              data-name="navbar-logo"
            />
            <span className="navbar-brand-text" data-name="navbar-brand-text">
              Revaya FlyerCheck
            </span>
          </a>

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
            <a href="/privacy" className="nav-link" data-name="nav-privacy">
              Privacy
            </a>
            <a href="/terms" className="nav-link" data-name="nav-terms">
              Terms
            </a>
            <a href="/blog" className="nav-link" data-name="nav-blog">
              Blog
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