function SitemapPage() {
    try {
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
