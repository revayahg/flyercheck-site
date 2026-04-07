import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPostBySlug, getRelatedPosts } from "../content/blogPosts";
import { reportError } from "../utils/errorHandler";

function BlogPostPage() {
  try {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    if (!post) {
      return (
        <div data-name="blog-post-page">
          <Navbar />
          <article className="blog-article-section" data-name="blog-article-content">
            <div className="container">
              <div className="blog-article-container">
                <h1 className="blog-article-title">Post not found</h1>
                <p>The blog post you're looking for doesn't exist.</p>
                <Link to="/blog" className="blog-read-more-btn" style={{ display: "inline-flex", width: "auto", marginTop: "1rem" }}>
                  Back to Blog
                  <i className="fas fa-arrow-left" style={{ marginLeft: "0.5rem" }}></i>
                </Link>
              </div>
            </div>
          </article>
          <Footer />
        </div>
      );
    }

    const relatedPosts = getRelatedPosts(post.slug, 3);

    return (
      <div data-name="blog-post-page">
        <Navbar />
        <article className="blog-article-section" data-name="blog-article-content">
          <div className="container">
            <div className="blog-article-container">
              <header className="blog-article-header">
                <h1 className="blog-article-title">{post.title}</h1>
                <div className="blog-article-meta">
                  <span className="blog-article-date">
                    <i className="fas fa-calendar"></i>
                    {post.date}
                  </span>
                  <span className="blog-article-author">
                    <i className="fas fa-user"></i>
                    {post.author}
                  </span>
                </div>
              </header>

              <div className="blog-article-body">
                {post.sections.map((section, i) => (
                  <section key={i}>
                    {section.heading && <h2>{section.heading}</h2>}
                    {section.paragraphs.map((p, j) => (
                      <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                  </section>
                ))}
              </div>

              <div className="blog-article-footer" style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e5e7eb" }}>
                <Link to="/blog" className="blog-read-more-btn" style={{ display: "inline-flex", width: "auto" }}>
                  Back to Blog
                  <i className="fas fa-arrow-left" style={{ marginLeft: "0.5rem" }}></i>
                </Link>
              </div>

              {relatedPosts.length > 0 && (
                <div className="blog-related-posts" style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "Didot, serif", fontSize: "1.25rem", marginBottom: "1rem", color: "#2B2B2B" }}>Related posts</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {relatedPosts.map((rp) => (
                      <li key={rp.slug} style={{ marginBottom: "0.75rem" }}>
                        <Link to={`/blog/${rp.slug}`} style={{ color: "#90684A", fontWeight: 600, textDecoration: "none" }}>
                          {rp.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </article>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("BlogPostPage error:", error);
    reportError(error);
    return null;
  }
}

export default BlogPostPage;
