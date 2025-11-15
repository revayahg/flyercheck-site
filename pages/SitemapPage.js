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
                            <a href="/solutions" className="sitemap-link">Solutions</a>
                            <a href="/flyercheck" className="sitemap-link">FlyerCheck</a>
                            <a href="/contact" className="sitemap-link">Contact</a>
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
