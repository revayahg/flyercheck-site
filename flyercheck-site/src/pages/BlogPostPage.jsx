import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import { getPostBySlug, getRelatedPosts, getAuthorBio } from "../content/blogPosts";
import { reportError } from "../utils/errorHandler";
import { usePageJsonLd } from "../utils/pageJsonLd";

function buildArticleSchema(post) {
  if (!post) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    url: `https://www.flyercheck.io/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "FlyerCheck",
      url: "https://www.flyercheck.io",
    },
  };

  const datePublished = post.publishedAt ?? post.date;
  if (datePublished) {
    schema.datePublished = datePublished;
  }

  return schema;
}

function BlogPostPage() {
  try {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    usePageJsonLd(buildArticleSchema(post));

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
    const authorBio = getAuthorBio(post.author);

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
                {authorBio && (
                  <p className="blog-article-author-bio">{authorBio}</p>
                )}
              </header>

              <div className="blog-article-body">
                {post.sections.map((section, i) => {
                  const isLede = section.lede || (i === 0 && !section.heading && section.paragraphs.length === 1);

                  return (
                    <section key={i} className={isLede ? "blog-article-lede-section" : undefined}>
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

              <AdBanner inline />

              <div className="blog-article-footer">
                <Link to="/blog" className="blog-read-more-btn" style={{ display: "inline-flex", width: "auto" }}>
                  Back to Blog
                  <i className="fas fa-arrow-left" style={{ marginLeft: "0.5rem" }}></i>
                </Link>
              </div>

              {relatedPosts.length > 0 && (
                <div className="blog-related-posts">
                  <h3>Related posts</h3>
                  <ul>
                    {relatedPosts.map((rp) => (
                      <li key={rp.slug}>
                        <Link to={`/blog/${rp.slug}`}>{rp.title}</Link>
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
