import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts as operationalPosts } from "../content/blogPosts";
import {
  BLOG_CATEGORIES,
  categoryFromQueryParam,
} from "../content/blogCategories";
import { reportError } from "../utils/errorHandler";

function BlogPage() {
  try {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get("category");
    const activeCategory = categoryFromQueryParam(categoryParam) || "All";

    const setCategoryFilter = (category) => {
      if (category === "All") {
        setSearchParams({});
        return;
      }
      setSearchParams({ category });
    };

    const externalPosts = [
      {
        title: "The Power of the Unremarkable",
        author: "Jolyse Stultz",
        platform: "LinkedIn",
        url: "https://www.linkedin.com/pulse/power-unremarkable-jolyse-stultz-d01hc/",
        date: "2025",
        description:
          "Drawing from 15+ years in travel and hospitality, Jolyse explores how the most powerful customer experiences are often unremarkable—they just work seamlessly. From smartphone updates to Global Entry and cruise boarding, discover why seamless experiences that don't draw attention to themselves are often the most unforgettable.",
        icon: "fab fa-linkedin",
        color: "#0077b5",
      },
    ];

    const internalPosts = [
      {
        title:
          "You're Too Close to the Flyer: How Great Events Lose People Before They Even Show Up",
        author: "Jolyse Stultz",
        platform: "FlyerCheck",
        category: "Event Marketing",
        url: "/blog/flyer-blind-spots",
        date: "January 4, 2026",
        description:
          "Discover how event organizers miss critical details in their flyers that prevent potential attendees from showing up. Learn the common blind spots and how to fix them.",
        icon: "fas fa-file-alt",
        color: "#90684A",
      },
      ...operationalPosts.map((p) => ({
        title: p.title,
        author: p.author,
        platform: p.platform || "FlyerCheck",
        category: p.category,
        url: `/blog/${p.slug}`,
        date: p.date,
        description: p.description,
        icon: "fas fa-file-alt",
        color: "#90684A",
      })),
    ];

    const allPosts = [...internalPosts, ...externalPosts];

    const parsePostDate = (dateStr) => {
      if (!dateStr) return 0;
      const d = new Date(dateStr);
      return Number.isNaN(d.getTime()) ? 0 : d.getTime();
    };
    allPosts.sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date));

    const filteredPosts =
      activeCategory === "All"
        ? allPosts
        : allPosts.filter((post) => post.category === activeCategory);

    const filterOptions = ["All", ...BLOG_CATEGORIES];

    return (
      <div data-name="blog-page">
        <Navbar />

        <div className="blog-section" data-name="blog-content">
          <div className="container">
            <h1 className="blog-title">Latest from the Blog</h1>
            <p className="blog-subtitle">
              Event operations and hospitality insights from FlyerCheck — plus
              selected features from our founders across the web.
            </p>

            <div
              className="blog-category-filters"
              role="tablist"
              aria-label="Filter blog posts by category"
              data-name="blog-category-filters"
            >
              {filterOptions.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  className={`blog-category-filter${
                    activeCategory === category ? " active" : ""
                  }`}
                  onClick={() => setCategoryFilter(category)}
                  data-name={`blog-filter-${category.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredPosts.length === 0 ? (
              <p className="blog-filter-empty" data-name="blog-filter-empty">
                No posts in this category yet. Try &ldquo;All&rdquo; to see everything.
              </p>
            ) : (
              <div className="blog-posts-grid">
                {filteredPosts.map((post) => (
                  <article
                    key={`${post.url}-${post.title}`}
                    className="blog-post-card"
                  >
                    <div className="blog-post-header">
                      <div className="blog-platform-icon">
                        <i className={post.icon} aria-hidden="true"></i>
                      </div>
                      <div className="blog-platform-badge">
                        {post.category || post.platform}
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <h2 className="blog-post-title">{post.title}</h2>
                      <p className="blog-post-description">{post.description}</p>

                      <div className="blog-post-meta">
                        <span className="blog-post-author">
                          <i className="fas fa-user"></i>
                          {post.author}
                        </span>
                        <span className="blog-post-date">
                          <i className="fas fa-calendar"></i>
                          {post.date}
                        </span>
                      </div>
                    </div>

                    <div className="blog-post-footer">
                      {post.url.startsWith("http") ? (
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="blog-read-more-btn"
                        >
                          Read Article
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      ) : (
                        <Link to={post.url} className="blog-read-more-btn">
                          Read More
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error("BlogPage error:", error);
    reportError(error);
    return null;
  }
}

export default BlogPage;
