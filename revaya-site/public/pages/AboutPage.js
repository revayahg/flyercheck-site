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
                    "As the Founder of Elevate AI Consulting and Chief AI Officer at Revaya HG, I specialize in helping businesses through custom AI automation and executive training solutions.",
                    "Thiago is an MBA graduate of IE Business School in Madrid, where he served as President of the school's LGBTQ+ club and currently teaches executive MBA candidates as an Assistant AI Professor. He has led international business development efforts across the U.S., Canada, Spain, and Portugal, bringing a global, people-first approach to technology. He also volunteers with Junior Achievement of Greater Miami, teaching entrepreneurship, investing and other real-world skills to the next generation of leaders."
                ],
                mantra: "AI for humans, by humans."
            }
        ];

        return (
            <div data-name="about-page">
                <Navbar />
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
