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
                            Upload your event flier and get instant feedback to improve design, messaging, and audience engagement
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
