function LandingPage() {
    try {
        return (
            <div data-name="landing-page">
                <Navbar />
                <Hero />
                <ProductSection />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('LandingPage error:', error);
        reportError(error);
        return null;
    }
}
