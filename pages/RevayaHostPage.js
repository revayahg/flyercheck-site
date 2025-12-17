function RevayaHostPage() {
    try {
        // Hide navbar logo on this page since we show it in the hero section
        React.useEffect(() => {
            const navbarLogo = document.querySelector('.navbar-logo');
            if (navbarLogo) {
                navbarLogo.style.display = 'none';
            }
            return () => {
                // Restore logo when leaving page
                if (navbarLogo) {
                    navbarLogo.style.display = '';
                }
            };
        }, []);

        const progressSteps = [
            {
                icon: "fas fa-check-circle",
                text: "Discovery & UX Research",
                status: "completed"
            },
            {
                icon: "fas fa-sync-alt",
                text: "Alpha with Partners",
                status: "in-progress",
                subtext: "in progress"
            },
            {
                icon: "fas fa-flask",
                text: "Beta Testing",
                status: "upcoming",
                subtext: "Winter 2025"
            },
            {
                icon: "fas fa-rocket",
                text: "Launch",
                status: "upcoming",
                subtext: "Spring 2026"
            }
        ];

        return (
            <div className="min-h-screen bg-white" data-name="revaya-host-page">
                <Navbar />
                <AdBanner />
                
                {/* Hero Section */}
                <section className="host-hero" data-name="host-hero">
                    <div className="host-hero-content" data-name="host-hero-content">
                        <div className="host-hero-logo" data-name="host-hero-logo">
                            <img 
                                src="https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/514b6f7e-130b-496e-9d51-dc2d16df66fb.png"
                                alt="Revaya Logo"
                                className="host-logo-image"
                            />
                        </div>
                        <div className="host-hero-badge" data-name="host-hero-badge">
                            <i className="fas fa-code-branch"></i>
                            <span>In Development</span>
                        </div>
                        <h1 className="host-hero-title" data-name="host-hero-title">
                            Revaya Host
                        </h1>
                        <p className="host-hero-subtitle" data-name="host-hero-subtitle">
                            All-in-one planning. Built with hospitality professionals, for hospitality professionals.
                        </p>
                        <p className="host-hero-description" data-name="host-hero-description">
                            A comprehensive event management platform designed to streamline your workflow, enhance collaboration, and deliver exceptional experiences.
                        </p>
                        <div className="host-hero-cta" data-name="host-hero-cta">
                            <a 
                                href="mailto:info@revayahg.com?subject=Count%20me%20in!"
                                className="cta-button-primary"
                                data-name="cta-button-primary"
                            >
                                <i className="fas fa-envelope"></i>
                                Join the Beta Waitlist
                            </a>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="host-intro-section" data-name="host-intro-section">
                    <div className="host-intro-container">
                        <div className="host-intro-content">
                            <h2 className="host-intro-title">A Professional Solution in Development</h2>
                            <p className="host-intro-text">
                                We're building Revaya Host in close partnership with hospitality professionals to ensure it meets the real-world needs of event planners, venue managers, and hospitality teams. Our development process prioritizes user experience, functionality, and seamless integration into your existing workflows.
                            </p>
                            <div className="host-intro-features">
                                <div className="host-intro-feature">
                                    <i className="fas fa-users"></i>
                                    <span>Built with industry professionals</span>
                                </div>
                                <div className="host-intro-feature">
                                    <i className="fas fa-mobile-alt"></i>
                                    <span>Responsive & accessible</span>
                                </div>
                                <div className="host-intro-feature">
                                    <i className="fas fa-shield-alt"></i>
                                    <span>Enterprise-grade security</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Progress Section */}
                <section className="progress-section" data-name="progress-section">
                    <div className="progress-container" data-name="progress-container">
                        <h2 className="progress-section-title">Development Roadmap</h2>
                        <p className="progress-section-subtitle">Our journey to launch</p>
                        <div className="progress-track" data-name="progress-track">
                            {progressSteps.map((step, index) => (
                                <div 
                                    key={index} 
                                    className={`progress-step ${step.status}`}
                                    data-name={`progress-step-${index + 1}`}
                                >
                                    <div className="step-icon-wrapper">
                                        <i className={`step-icon ${step.icon}`}></i>
                                    </div>
                                    <div className="step-content">
                                        <p className="step-text">{step.text}</p>
                                        {step.subtext && (
                                            <span className="step-subtext">{step.subtext}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section - How We Enable More Show */}
                <section id="features" className="features-section-host" data-name="features-section">
                    <div className="features-section-container">
                        <div className="features-section-header">
                            <h2 className="features-section-title">
                                How We Enable More Show
                            </h2>
                            <p className="features-section-subtitle">
                                Comprehensive tools designed to streamline your event planning process
                            </p>
                        </div>
                        
                        <div className="features-grid-host" data-name="features-grid">
                        {/* Column 1 - Event Management */}
                        <div className="feature-card-host" data-name="event-management-card">
                            <div className="feature-card-header">
                                <i className="feature-card-icon fas fa-calendar-alt"></i>
                                <h3 className="feature-card-title">
                                    Event Management
                                </h3>
                            </div>
                            <p className="feature-card-tagline">
                                Plan with precision.
                            </p>
                            
                            <ul className="feature-card-list">
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Create & edit events in minutes</span>
                                </li>
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Add multi-day schedules effortlessly</span>
                                </li>
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Upload logos & venue maps</span>
                                </li>
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Track budgets, spending, & totals in real time</span>
                                </li>
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Assign tasks with due dates & progress statuses</span>
                                </li>
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Keep everyone aligned with built-in event chat</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 - Collaboration Tools */}
                        <div className="feature-card-host" data-name="collaboration-card">
                            <div className="feature-card-header">
                                <i className="feature-card-icon fas fa-users"></i>
                                <h3 className="feature-card-title">
                                    Collaboration Tools
                                </h3>
                            </div>
                            <p className="feature-card-tagline">
                                Bring your team together.
                            </p>
                            
                            <ul className="feature-card-list">
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Invite collaborators with viewer or editor access</span>
                                </li>
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Share live updates & notifications automatically</span>
                                </li>
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Work faster with real-time updates across roles</span>
                                </li>
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Streamline communication between teams & committees</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 - Communication & Insights */}
                        <div className="feature-card-host" data-name="communication-insights-card">
                            <div className="feature-card-header">
                                <i className="feature-card-icon fas fa-comments"></i>
                                <h3 className="feature-card-title">
                                    Communication & Insights
                                </h3>
                            </div>
                            <p className="feature-card-tagline">
                                Stay connected, stay informed.
                            </p>
                            
                            <ul className="feature-card-list">
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Real-time chat within every event</span>
                                </li>
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Smart email notifications for key updates</span>
                                </li>
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Custom notification preferences (profile-based)</span>
                                </li>
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Unified dashboard: events, vendors & messages</span>
                                </li>
                                <li className="feature-card-item">
                                    <i className="fas fa-check"></i>
                                    <span>Responsive design for flawless desktop & mobile use</span>
                                </li>
                            </ul>
                        </div>
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
