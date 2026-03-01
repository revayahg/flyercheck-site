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
                        <div className="sitemap-links">
                            <a href="/" className="sitemap-link">Home</a>
                            <a href="/about" className="sitemap-link">About Us</a>
                            <a href="/revaya-host" className="sitemap-link">Revaya Host™</a>
                            <a href="/flyercheck" className="sitemap-link">FlyerCheck</a>
                            <a href="/blog" className="sitemap-link">Blog</a>
                            <a href="/contact" className="sitemap-link">Contact</a>
                            <a href="/privacy" className="sitemap-link">Privacy Policy</a>
                            <a href="/terms" className="sitemap-link">Terms of Service</a>
                            <a href="/sitemap" className="sitemap-link">Sitemap</a>
                        </div>
                        <h2 className="sitemap-subtitle">Blog Posts</h2>
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