function RevayaHostPage() {
    try {
        const progressSteps = [
            {
                icon: "✅",
                text: "Discovery & UX Research",
                status: "completed"
            },
            {
                icon: "🔄",
                text: "Alpha with Partners",
                status: "in-progress",
                subtext: "in progress"
            },
            {
                icon: "🔄",
                text: "Beta Testing",
                status: "upcoming",
                subtext: "Winter 2025"
            },
            {
                icon: "🚀",
                text: "Launch",
                status: "upcoming",
                subtext: "Spring 2026"
            }
        ];

        return (
            <div className="min-h-screen bg-white" data-name="revaya-host-page">
                <Navbar />
                <AdBanner />
                
                {/* Hero Section - Complete and Isolated */}
                <section className="host-hero" data-name="host-hero">
                    <div className="hero-banner" data-name="hero-banner">
                        <p className="banner-text" data-name="banner-text">
                            All-in-one planning. Built with hospitality professionals, for hospitality professionals.
                        </p>
                    </div>
                    <div className="hero-bottom" data-name="hero-bottom">
                        <a 
                            href="mailto:info@revayahg.com?subject=Count%20me%20in!"
                            className="cta-button"
                            data-name="cta-button"
                        >
                            Join the Beta Waitlist
                        </a>
                    </div>
                </section>

                {/* Progress Section */}
                <section className="progress-section" data-name="progress-section">
                    <div className="progress-container" data-name="progress-container">
                        <div className="progress-track" data-name="progress-track">
                            {progressSteps.map((step, index) => (
                                <div 
                                    key={index} 
                                    className={`progress-step ${step.status}`}
                                    data-name={`progress-step-${index + 1}`}
                                >
                                    <div className="step-icon">{step.icon}</div>
                                    <div className="step-content">
                                        <p className="step-text">{step.text}</p>
                                        {step.subtext && (
                                            <span className="step-subtext">({step.subtext})</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section - How We Enable More Show */}
                <section id="features" className="relative mx-auto max-w-7xl px-6 py-16" data-name="features-section">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Didot, serif' }}>
                            How We Enable More Show
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-name="features-grid">
                        {/* Column 1 - Event Management */}
                        <div className="rounded-2xl bg-[#F6F1EB] p-8 shadow-sm feature-card" data-name="event-management-card">
                            <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-2" style={{ fontFamily: 'Didot, serif' }}>
                                Event Management
                            </h3>
                            <p className="text-lg font-medium text-[#5B4636] mb-6" style={{ fontFamily: 'Avenir Next, sans-serif' }}>
                                Plan with precision.
                            </p>
                            
                            <ul className="space-y-3 text-[#2B2B2B]/80" style={{ fontFamily: 'Avenir Next, sans-serif' }}>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Create & edit events in minutes
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Add multi-day schedules effortlessly
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Upload logos & venue maps
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Track budgets, spending, & totals in real time
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Assign tasks with due dates & progress statuses
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Keep everyone aligned with built-in event chat
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 - Collaboration Tools */}
                        <div className="rounded-2xl bg-[#F6F1EB] p-8 shadow-sm feature-card" data-name="collaboration-card">
                            <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-2" style={{ fontFamily: 'Didot, serif' }}>
                                Collaboration Tools
                            </h3>
                            <p className="text-lg font-medium text-[#5B4636] mb-6" style={{ fontFamily: 'Avenir Next, sans-serif' }}>
                                Bring your team together.
                            </p>
                            
                            <ul className="space-y-3 text-[#2B2B2B]/80" style={{ fontFamily: 'Avenir Next, sans-serif' }}>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Invite collaborators with viewer or editor access
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Share live updates & notifications automatically
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Work faster with real-time updates across roles
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Streamline communication between teams & committees
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 - Communication & Insights */}
                        <div className="rounded-2xl bg-[#F6F1EB] p-8 shadow-sm feature-card" data-name="communication-insights-card">
                            <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-2" style={{ fontFamily: 'Didot, serif' }}>
                                Communication & Insights
                            </h3>
                            <p className="text-lg font-medium text-[#5B4636] mb-6" style={{ fontFamily: 'Avenir Next, sans-serif' }}>
                                Stay connected, stay informed.
                            </p>
                            
                            <ul className="space-y-3 text-[#2B2B2B]/80" style={{ fontFamily: 'Avenir Next, sans-serif' }}>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Real-time chat within every event
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Smart email notifications for key updates
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Custom notification preferences (profile-based)
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Unified dashboard: events, vendors & messages
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#8C7A5B] mr-3 mt-1">•</span>
                                    Responsive design for flawless desktop & mobile use
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    } catch (error) {
        console.error('RevayaHostPage error:', error);
        reportError(error);
        return null;
    }
}
