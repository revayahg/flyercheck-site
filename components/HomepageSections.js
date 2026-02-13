// Homepage section components

function WhatWeDoSection() {
    try {
        const pillars = [
            {
                title: "Event Operations Technology",
                description: "We build tools that streamline event planning, vendor management, and day-of operations. Our technology reduces administrative overhead so teams can focus on creating exceptional experiences."
            },
            {
                title: "Guest & Experience Strategy",
                description: "Built on deep hospitality expertise, we help organizations understand and improve the guest journey—from discovery through attendance. We combine data insights with hands-on experience to drive satisfaction and attendance."
            },
            {
                title: "Ancillary Revenue Technology",
                description: "We develop platforms that increase ancillary revenue and unlock new streams for events and partners. Our technology helps teams optimize vendor relationships and create mutually beneficial opportunities."
            }
        ];

        return (
            <section className="homepage-section what-we-do-section" data-name="what-we-do">
                <div className="container">
                    <h2 className="section-title" data-name="what-we-do-title">What We Do</h2>
                    <p className="section-subtitle" data-name="what-we-do-subtitle">
                        We build technology and provide strategic guidance for modern hospitality and live events.
                    </p>
                    <div className="pillars-grid" data-name="pillars-grid">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="pillar-card" data-name={`pillar-${index}`}>
                                <h3 className="pillar-title" data-name={`pillar-title-${index}`}>
                                    {pillar.title}
                                </h3>
                                <p className="pillar-description" data-name={`pillar-description-${index}`}>
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('WhatWeDoSection error:', error);
        reportError(error);
        return null;
    }
}

function WhoWeWorkWithSection() {
    try {
        const clients = [
            "Event Producers",
            "Festivals And City-Wide Events",
            "Conferences And Conventions",
            "Cruise Lines",
            "Nonprofits And Community Events",
            "Hotels & Property Managers"
        ];

        return (
            <section className="homepage-section who-we-work-with-section" data-name="who-we-work-with">
                <div className="container">
                    <h2 className="section-title" data-name="who-we-work-with-title">Who We Work With</h2>
                    <p className="section-subtitle" data-name="who-we-work-with-subtitle">
                        We serve organizations that prioritize exceptional guest experiences and operational excellence.
                    </p>
                    <div className="clients-list" data-name="clients-list">
                        {clients.map((client, index) => (
                            <div key={index} className="client-item" data-name={`client-item-${index}`}>
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('WhoWeWorkWithSection error:', error);
        reportError(error);
        return null;
    }
}

function WhyRevayaExistsSection() {
    try {
        const whyRevayaImage = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
        return (
            <section className="homepage-section why-revaya-section" data-name="why-revaya">
                <div className="container">
                    <h2 className="section-title" data-name="why-revaya-title">Why Revaya Exists</h2>
                    <div className="why-revaya-grid" data-name="why-revaya-content">
                        <div className="why-revaya-image-wrap" data-name="why-revaya-image">
                            <img src={whyRevayaImage} alt="Event and hospitality operations" className="why-revaya-image" />
                        </div>
                        <div className="why-revaya-content" data-name="why-revaya-text-wrap">
                            <p className="why-revaya-text" data-name="why-revaya-text-1">
                                Event planning has always relied on fragmented tools—spreadsheets for budgets, documents for timelines, email for communication, and generic project management software that wasn't designed for hospitality workflows. These tools work in isolation, creating information silos and forcing teams to constantly switch contexts.
                            </p>
                            <p className="why-revaya-text" data-name="why-revaya-text-2">
                                Spreadsheets and generic PM tools fail hospitality teams because they don't understand the unique requirements of events: vendor relationships, guest experience considerations, venue logistics, and the real-time nature of event operations. We build technology that understands these nuances from the ground up, creating tools that feel natural to hospitality professionals while providing the structure and insights they need to execute flawlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('WhyRevayaExistsSection error:', error);
        reportError(error);
        return null;
    }
}

function InsightsSection() {
    try {
        const featuredPosts = [
            {
                title: "You're Too Close to the Flyer: How Great Events Lose People Before They Even Show Up",
                description: "Discover how event organizers miss critical details in their flyers that prevent potential attendees from showing up. Learn the common blind spots and how to fix them.",
                url: "/blog/flyer-blind-spots",
                date: "January 4, 2026"
            }
        ];

        return (
            <section className="homepage-section insights-section" data-name="insights">
                <div className="container">
                    <h2 className="section-title" data-name="insights-title">Insights & Resources</h2>
                    <p className="section-subtitle" data-name="insights-subtitle">
                        Original thinking on events, operations, and guest experience.
                    </p>
                    <div className="insights-grid" data-name="insights-grid">
                        {featuredPosts.map((post, index) => (
                            <div key={index} className="insight-card" data-name={`insight-${index}`}>
                                <h3 className="insight-title" data-name={`insight-title-${index}`}>
                                    <a href={post.url}>{post.title}</a>
                                </h3>
                                <p className="insight-description" data-name={`insight-description-${index}`}>
                                    {post.description}
                                </p>
                                <div className="insight-meta" data-name={`insight-meta-${index}`}>
                                    <span className="insight-date">{post.date}</span>
                                    <a href={post.url} className="insight-link">Read More →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="insights-cta" data-name="insights-cta">
                        <a href="/blog" className="btn btn-primary">View All Articles</a>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('InsightsSection error:', error);
        reportError(error);
        return null;
    }
}
