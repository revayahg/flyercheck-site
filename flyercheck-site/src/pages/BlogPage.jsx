// revaya-site/src/pages/BlogPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts as operationalPosts } from "../content/blogPosts";
import { reportError } from "../utils/errorHandler";

function BlogPage() {
  try {
    const externalPosts = [
      {
        title: "The AI Training Bootcamp Helping Companies Finally See ROI",
        author: "Thiago Ferreira",
        platform: "USA News",
        url: "https://usanews.com/newsroom/the-ai-training-bootcamp-helping-companies-finally-see-roi",
        date: "2025",
        description:
          "Featured article on how Elevate AI Consulting's AI Training Bootcamp is transforming organizational adoption and building real ROI for companies nationwide.",
        icon: "fas fa-newspaper",
        color: "#1a1a1a",
      },
      {
        title: "Turning AI Hype Into Impact with Elevate AI Consulting",
        author: "Thiago Ferreira",
        platform: "CEO Times",
        url: "https://ceotimes.com/turning-ai-hype-into-impact-with-elevate-ai-consulting-2/",
        date: "2025",
        description:
          "Featured coverage on how Elevate AI Consulting helps executives transform AI potential into measurable business results.",
        icon: "fas fa-briefcase",
        color: "#0066cc",
      },
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
      {
        title: "Becoming an AI Consultant",
        author: "Thiago Ferreira",
        platform: "Elevate AI Consulting",
        url: "https://www.elevateaiconsulting.com/post/becoming-an-ai-consultant",
        date: "2025",
        description:
          "Insights and experiences from the journey of becoming an AI consultant.",
        icon: "fas fa-robot",
        color: "#90684A",
      },
      {
        title: "Chat GPT-5: Our First Impressions",
        author: "Thiago Ferreira",
        platform: "Elevate AI Consulting",
        url: "https://www.elevateaiconsulting.com/post/chat-gpt-5-our-first-impressions",
        date: "2025",
        description: "Initial thoughts and analysis on OpenAI's latest language model.",
        icon: "fas fa-comments",
        color: "#90684A",
      },
    ];

    const internalPosts = [
      {
        title:
          "You're Too Close to the Flyer: How Great Events Lose People Before They Even Show Up",
        author: "Jolyse Stultz",
        platform: "FlyerCheck",
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
        platform: "FlyerCheck",
        url: `/blog/${p.slug}`,
        date: p.date,
        description: p.description,
        icon: "fas fa-file-alt",
        color: "#90684A",
      })),
    ];

    const allPosts = [...internalPosts, ...externalPosts];

    // Sort by most recent post date first (parse date string to timestamp for comparison)
    const parsePostDate = (dateStr) => {
      if (!dateStr) return 0;
      const d = new Date(dateStr);
      return Number.isNaN(d.getTime()) ? 0 : d.getTime();
    };
    allPosts.sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date));

    return (
      <div data-name="blog-page">
        <Navbar />

        <div className="blog-section" data-name="blog-content">
          <div className="container">
            <h1 className="blog-title">Our Blog</h1>
            <p className="blog-subtitle">
              Articles, citations, and insights on hospitality, AI, and event
              management from Revaya Hospitality Group and founders Jolyse Stultz
              and Thiago Ferreira — on FlyerCheck and across the web.
            </p>

            <div className="blog-posts-grid">
              {allPosts.map((post, index) => (
                <article key={index} className="blog-post-card">
                  <div className="blog-post-header">
                    <div
                      className="blog-platform-icon"
                      style={{ color: post.color }}
                    >
                      <i className={post.icon}></i>
                    </div>
                    <div
                      className="blog-platform-badge"
                      style={{
                        backgroundColor: post.color + "20",
                        color: post.color,
                      }}
                    >
                      {post.platform}
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