import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reportError } from "../utils/errorHandler";
import { blogPosts } from "../content/blogPosts";

function SitemapPage() {
    try {
        const blogLinks = [
            ...blogPosts.map((p) => ({ title: p.title, url: `/blog/${p.slug}` })),
            { title: "Flyer Blind Spots: What Your Event Marketing May Be Missing", url: "/blog/flyer-blind-spots" },
        ];

        return (
            <div data-name="sitemap-page">
                <Navbar />
                <div className="sitemap-section" data-name="sitemap-content">
                    <div className="container">
                        <h1 className="sitemap-title">Sitemap</h1>
                        <p className="contact-subtitle" style={{ textAlign: "left", marginBottom: "1.5rem", maxWidth: "720px" }}>
                            This page lists every major section of flyercheck.io — the free flyer
                            analyzer, how-it-works guides, FAQ, blog articles on event operations,
                            and legal pages. Use it to find a specific article or policy quickly.
                            For search engines, we also publish an XML sitemap at{" "}
                            <a href="/sitemap.xml">/sitemap.xml</a>.
                        </p>

                        <h2 className="sitemap-subtitle">Main pages</h2>
                        <p className="why-revaya-text" style={{ marginBottom: "1rem", maxWidth: "720px" }}>
                            Start on the homepage for an overview of FlyerCheck and featured blog
                            posts. Upload and analyze flyers on the dedicated analyzer page. Questions
                            about the tool, privacy, or support are answered on FAQ and Contact.
                        </p>
                        <div className="sitemap-links">
                            <a href="/" className="sitemap-link">Home — overview &amp; latest articles</a>
                            <a href="/flyercheck" className="sitemap-link">FlyerCheck — free flyer analyzer</a>
                            <a href="/how-it-works" className="sitemap-link">How It Works</a>
                            <a href="/faq" className="sitemap-link">FAQ</a>
                            <a href="/about" className="sitemap-link">About Us</a>
                            <a href="/blog" className="sitemap-link">Blog — all articles</a>
                            <a href="/contact" className="sitemap-link">Contact</a>
                        </div>

                        <h2 className="sitemap-subtitle">Policies</h2>
                        <p className="why-revaya-text" style={{ marginBottom: "1rem", maxWidth: "720px" }}>
                            Privacy, terms, and acceptable-use policies describe how FlyerCheck
                            handles uploads, advertising cookies, and responsible use of the analyzer.
                        </p>
                        <div className="sitemap-links">
                            <a href="/privacy" className="sitemap-link">Privacy Policy</a>
                            <a href="/terms" className="sitemap-link">Terms of Service</a>
                            <a href="/acceptable-use" className="sitemap-link">Acceptable Use</a>
                        </div>

                        <h2 className="sitemap-subtitle">Blog posts ({blogLinks.length})</h2>
                        <p className="why-revaya-text" style={{ marginBottom: "1rem", maxWidth: "720px" }}>
                            Practical reads on flyers, vendor coordination, run-of-show discipline,
                            budgets, and hospitality execution — written for promoters, venue teams,
                            and event operators.
                        </p>
                        <div className="sitemap-links">
                            {blogLinks.map(({ title, url }) => (
                                <a key={url} href={url} className="sitemap-link">{title}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('SitemapPage error:', error);
        reportError(error);
        return null;
    }
}

export default SitemapPage;
