function FlyerCheckPage() {
    try {
        React.useEffect(() => {
            // Initialize ads
            if (window.adsbygoogle) {
                window.adsbygoogle.push({});
            }
        }, []);

        return (
            <div data-name="flyercheck-page">
                <Navbar />
                <AdBanner />
                <section className="hero hero-flyercheck" data-name="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Revaya Flyer Check™</h1>
                        <p className="hero-subtitle">
                            Your flyer is almost perfect. Let's make it undeniable.
                        </p>
                        <p className="hero-description">
                            Upload your design and get fast, unbiased feedback—<br />
                            clarity, errors, spacing, and visibility checks.
                        </p>
                    </div>
                </section>
                <FileUploader />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('FlyerCheckPage error:', error);
        reportError(error);
        return null;
    }
}
