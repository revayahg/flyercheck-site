function LandingPage() {
    try {
        return (
            <div data-name="landing-page">
                <Navbar />
                <Hero 
                    title="Less Stress. More Show"
                    subtitle="Revaya Hospitality Group designs solutions for venues, events, and hospitality operators managing complex, high-pressure environments. Our mission is to simplify operations so teams can spend less time managing chaos and more time delivering exceptional experiences."
                    primaryCta={{ text: "Explore Our Products", href: "/revaya-host", icon: "fas fa-arrow-right" }}
                    secondaryCta={{ text: "Contact Us", href: "/contact" }}
                    showLogo={true}
                />
                <WhatWeDoSection />
                <ProductSection />
                <WhoWeWorkWithSection />
                <WhyRevayaExistsSection />
                <InsightsSection />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('LandingPage error:', error);
        reportError(error);
        return null;
    }
}
