function Features() {
    try {
        const features = [
            {
                icon: "fa-lightbulb",
                title: "Innovation",
                description: "Cutting-edge solutions that keep you ahead of the curve"
            },
            {
                icon: "fa-users",
                title: "Expert Team",
                description: "Dedicated professionals with years of industry experience"
            },
            {
                icon: "fa-chart-line",
                title: "Growth",
                description: "Strategies that drive sustainable business growth"
            }
        ];

        return (
            <section className="section bg-gray-50" id="services" data-name="features-section">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-name="features-header">
                        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                        <p className="text-xl text-gray-600">Discover how we can help transform your business</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8" data-name="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card p-6" data-name={`feature-card-${index}`}>
                                <div className="feature-icon mb-4">
                                    <i className={`fas ${feature.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        reportError(error);
        return null;
    }
}
