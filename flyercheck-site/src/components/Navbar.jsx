import React from "react";
import { Link } from "react-router-dom";
import { reportError } from "../utils/errorHandler";
import BrandWordmark from "./BrandWordmark";
import { BLOG_CATEGORIES, blogUrlForCategory } from "../content/blogCategories";

export default function Navbar() {
  try {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isBlogDropdownOpen, setIsBlogDropdownOpen] = React.useState(false);
    const blogDropdownRef = React.useRef(null);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen((v) => !v);
    };

    const closeMenus = () => {
      setIsMobileMenuOpen(false);
      setIsBlogDropdownOpen(false);
    };

    React.useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          blogDropdownRef.current &&
          !blogDropdownRef.current.contains(event.target)
        ) {
          setIsBlogDropdownOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, []);

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
            <a href="/" className="nav-link" data-name="nav-home" onClick={closeMenus}>
              Home
            </a>
            <a
              href="/flyercheck"
              className="nav-link"
              data-name="nav-flyercheck"
              onClick={closeMenus}
            >
              FlyerCheck
            </a>

            <div
              className={`dropdown${isBlogDropdownOpen ? " open" : ""}`}
              ref={blogDropdownRef}
              data-name="nav-blog-dropdown"
            >
              <button
                type="button"
                className="dropdown-btn"
                data-name="nav-blog"
                aria-expanded={isBlogDropdownOpen}
                aria-haspopup="true"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsBlogDropdownOpen((open) => !open);
                }}
              >
                Blog
                <i className="fas fa-chevron-down dropdown-arrow" aria-hidden="true" />
              </button>
              <div className="dropdown-content" data-name="nav-blog-menu">
                  <Link
                    to="/blog"
                    className="dropdown-item"
                    data-name="nav-blog-all"
                    onClick={closeMenus}
                  >
                    All posts
                  </Link>
                  {BLOG_CATEGORIES.map((category) => (
                    <Link
                      key={category}
                      to={blogUrlForCategory(category)}
                      className="dropdown-item"
                      data-name={`nav-blog-${category.replace(/\s+/g, "-").toLowerCase()}`}
                      onClick={closeMenus}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
            </div>

            <a
              href="/contact"
              className="nav-link"
              data-name="nav-contact"
              onClick={closeMenus}
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="nav-link"
              data-name="nav-privacy"
              onClick={closeMenus}
            >
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
