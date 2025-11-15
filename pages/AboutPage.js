function AboutPage() {
    try {
        const foundersList = [
            {
                name: "Jolyse Stultz",
                title: "CEO",
                image: "https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/e60eaeed-06d4-4811-9d58-57fee988b301.png",
                email: "info@revayahg.com",
                bio: [
                    "Jolyse is an energetic and highly motivated experience strategy, digital, and analytics professional with over 15 years of progressive experience in the travel & hospitality sector. She is deeply passionate about travel, hospitality, and delivering impactful guest experiences. Jolyse thrives at the intersection of strategy, technology, and human connection.",
                    "Jolyse specializes in leveraging digital innovation to enhance guest interactions, making every touchpoint seamless, engaging, and memorable. Whether it's optimizing digital platforms, designing frictionless customer journeys, or using data to drive smarter decisions, Jolyse's professional mantra is simple:"
                ],
                mantra: "I sincerely believe that everyone deserves to have a good time."
            },
            {
                name: "Thiago Ferreira",
                title: "Chief AI Officer",
                image: "https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/fefdf014-b643-44d6-a0e0-f8622be9e7ce.png",
                email: "info@revayahg.com",
                bio: [
                    "Thiago specializes in AI Automation Consulting for small & medium-sized businesses in South Florida's vibrant hospitality scene. With a background in events, adult beverages, and technology, Thiago is able to understand business needs and offer custom automation solutions that maximize the power of Artificial Intelligence.",
                    "To ensure each client receives full expertise, attention, and tailored solutions, Thiago partners exclusively with a select number of businesses within each sector. This approach allows for maximum impact, avoiding any potential conflicts of interest and ensuring clients maintain a competitive edge."
                ]
            }
        ];

        return (
            <div data-name="about-page">
                <Navbar />
                <AdBanner />
                <div className="about-section" data-name="about-content">
                    <div className="container">
                        <h1 className="about-title">Our Founders</h1>
                        <div 
                            className="founders-grid"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                                gap: '2.5rem',
                                alignItems: 'start',
                                maxWidth: '1200px',
                                margin: '0 auto'
                            }}
                        >
                            {foundersList.map((founder, index) => (
                                <FounderCard
                                    key={index}
                                    {...founder}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('AboutPage error:', error);
        reportError(error);
        return null;
    }
}
