import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import { getPostBySlug, getAuthorBio } from "../content/blogPosts";
import { reportError } from "../utils/errorHandler";

function BlogPostFlyerBlindSpots() {
  try {
    const post = getPostBySlug("flyer-blind-spots");
    const authorBio = getAuthorBio(post?.author);

    if (!post?.sections) {
      return null;
    }

    return (
      <div data-name="blog-post-page">
        <Navbar />
        <article className="blog-article-section" data-name="blog-article-content">
          <div className="container">
            <div className="blog-article-branding">
              <a href="/" className="blog-branding-link">
                <img
                  src="https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/514b6f7e-130b-496e-9d51-dc2d16df66fb.png"
                  alt="Revaya Hospitality Group logo"
                  className="blog-branding-logo"
                />
                <span className="blog-branding-text">Revaya Hospitality Group™</span>
              </a>
            </div>

            <div className="blog-article-container">
              <header className="blog-article-header">
                <h1 className="blog-article-title">{post.title}</h1>
                <div className="blog-article-meta">
                  <span className="blog-article-author">
                    <i className="fas fa-user"></i>
                    {post.author}
                  </span>
                  <span className="blog-article-date">
                    <i className="fas fa-calendar"></i>
                    {post.date}
                  </span>
                </div>
                {authorBio && (
                  <p className="blog-article-author-bio">{authorBio}</p>
                )}
              </header>

              <div className="blog-article-top-cta">
                <div className="blog-top-cta-content">
                  <h3 className="blog-top-cta-title">
                    <i className="fas fa-magic"></i>
                    Try Revaya Flyer Check™
                  </h3>
                  <p className="blog-top-cta-text">
                    Get instant AI-powered feedback on your event flyers before you post them.
                  </p>
                  <a href="/flyercheck" className="blog-top-cta-button">
                    Analyze Your Flyer
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="blog-article-body">
                {post.sections.map((section, i) => {
                  const isLede =
                    section.lede ||
                    (i === 0 && !section.heading && section.paragraphs.length <= 2);

                  return (
                    <section
                      key={i}
                      className={isLede ? "blog-article-lede-section" : undefined}
                    >
                      {section.heading && <h2>{section.heading}</h2>}
                      {section.paragraphs.map((p, j) => (
                        <p
                          key={j}
                          className={isLede ? "blog-article-lede" : undefined}
                          dangerouslySetInnerHTML={{ __html: p }}
                        />
                      ))}
                    </section>
                  );
                })}
              </div>

              <div className="blog-cta-section">
                <p>
                  Before your next event flyer goes live, run it through FlyerCheck — a free AI-powered review that catches missing details, readability issues, and weak calls to action in under 30 seconds.
                </p>
                <a href="/flyercheck" className="blog-cta-button">
                  Check your flyer free →
                </a>
              </div>

              <AdBanner inline />

              <div className="blog-article-footer">
                <Link to="/blog" className="blog-read-more-btn" style={{ display: "inline-flex", width: "auto" }}>
                  Back to Blog
                  <i className="fas fa-arrow-left" style={{ marginLeft: "0.5rem" }}></i>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("BlogPostFlyerBlindSpots error:", error);
    reportError(error);
    return null;
  }
}

export default BlogPostFlyerBlindSpots;
