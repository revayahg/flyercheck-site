import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reportError } from "../utils/errorHandler";

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

        return (
            <div className="min-h-screen bg-white" data-name="revaya-host-page">
                <Navbar />
                
                {/* Hero Section */}
                <section className="host-hero" data-name="host-hero">
                    <div className="host-hero-content" data-name="host-hero-content">
                        <div className="host-hero-logo" data-name="host-hero-logo">
                            <img 
                                src="https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/514b6f7e-130b-496e-9d51-dc2d16df66fb.png"
                                alt="Revaya Hospitality Group logo"
                                className="host-logo-image"
                            />
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
                                Request Early Access
                            </a>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="host-intro-section" data-name="host-intro-section">
                    <div className="host-intro-container">
                        <div className="host-intro-content">
                            <h2 className="host-intro-title">Built for Real-World Event Operations</h2>
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

                {/* Overview */}
                <section className="host-content-section" aria-labelledby="overview-heading">
                    <div className="host-content-container">
                        <h2 id="overview-heading" className="host-content-title">Overview</h2>
                        <p className="host-content-text">
                            Revaya Host is an event operations platform designed to help hospitality teams plan, coordinate, and execute live experiences with greater clarity.
                        </p>
                        <p className="host-content-text">
                            Events require constant coordination between venues, vendors, performers, sponsors, staff, and guests. Much of this coordination still happens across spreadsheets, email threads, and messaging apps, which makes it difficult for teams to maintain a clear operational view of the event.
                        </p>
                        <p className="host-content-text">
                            Revaya Host centralizes event information so planners and hospitality teams can organize logistics, track responsibilities, and keep everyone aligned. The platform is designed to support the operational side of events — the details that ensure an event runs smoothly behind the scenes.
                        </p>
                        <p className="host-content-text">
                            By providing a structured way to manage event information, Revaya Host helps teams reduce last-minute confusion and deliver a more consistent guest experience.
                        </p>
                    </div>
                </section>

                {/* The Problem */}
                <section className="host-content-section host-content-section--alt" aria-labelledby="problem-heading">
                    <div className="host-content-container">
                        <h2 id="problem-heading" className="host-content-title">The Problem</h2>
                        <p className="host-content-text">
                            Behind every successful event is a complex network of operational coordination.
                        </p>
                        <p className="host-content-text">
                            Event planners and hospitality teams must manage dozens of moving parts at once: vendor logistics, venue requirements, production timelines, guest communication, and staff coordination. Each of these elements often involves different stakeholders who rely on timely information and clear communication.
                        </p>
                        <p className="host-content-text">
                            In many cases, teams manage these responsibilities using a combination of spreadsheets, shared documents, emails, and messaging platforms. While these tools help track information, they rarely provide a single operational view of the event.
                        </p>
                        <p className="host-content-text">
                            This fragmentation can create challenges such as:
                        </p>
                        <ul className="host-content-list">
                            <li>Vendor miscommunication</li>
                            <li>Conflicting timelines</li>
                            <li>Missing logistical details</li>
                            <li>Last-minute operational surprises</li>
                        </ul>
                        <p className="host-content-text">
                            As events grow in size and complexity, the need for a more structured coordination system becomes increasingly important.
                        </p>
                    </div>
                </section>

                {/* How It Works */}
                <section className="host-content-section" aria-labelledby="how-it-works-heading">
                    <div className="host-content-container">
                        <h2 id="how-it-works-heading" className="host-content-title">How It Works</h2>
                        <p className="host-content-text">
                            Revaya Host helps event teams organize operational information in a way that is accessible, structured, and easy to maintain throughout the planning process.
                        </p>
                        <p className="host-content-text">
                            The platform allows planners and hospitality teams to coordinate key aspects of an event in a single environment. Instead of managing multiple disconnected tools, teams can centralize their operational information and maintain a clear overview of the event.
                        </p>
                        <p className="host-content-text">
                            Revaya Host focuses on the operational workflow of event planning, including:
                        </p>
                        <ul className="host-content-list">
                            <li>coordinating vendors and partners</li>
                            <li>organizing event logistics and timelines</li>
                            <li>maintaining shared operational details</li>
                            <li>improving communication across teams</li>
                        </ul>
                        <p className="host-content-text">
                            By providing a centralized operational view, Revaya Host helps reduce confusion and allows teams to focus on delivering the best possible experience for guests.
                        </p>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="host-content-section host-content-section--alt" aria-labelledby="use-cases-heading">
                    <div className="host-content-container">
                        <h2 id="use-cases-heading" className="host-content-title">Use Cases</h2>
                        <p className="host-content-text">
                            Revaya Host is designed to support a wide range of live experiences where coordination and communication are essential.
                        </p>
                        <h3 className="host-content-subtitle">Festivals and Community Events</h3>
                        <p className="host-content-text">
                            Large outdoor events often involve multiple vendors, performers, and operational teams. Revaya Host helps planners manage logistics and maintain visibility across the event.
                        </p>
                        <h3 className="host-content-subtitle">Venue Programming</h3>
                        <p className="host-content-text">
                            Restaurants, hotels, and entertainment venues frequently host events and activations that require coordination across multiple departments.
                        </p>
                        <h3 className="host-content-subtitle">Hospitality Activations</h3>
                        <p className="host-content-text">
                            Brand activations, pop-ups, and experiential marketing events require detailed coordination between vendors, production teams, and venue staff.
                        </p>
                        <h3 className="host-content-subtitle">Conferences and Corporate Events</h3>
                        <p className="host-content-text">
                            Professional events involve complex logistics including speakers, sponsors, programming schedules, and guest communication.
                        </p>
                        <p className="host-content-text">
                            Revaya Host helps organizers maintain a structured view of these moving parts so teams can coordinate more effectively.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="host-content-section" aria-labelledby="faq-heading">
                    <div className="host-content-container">
                        <h2 id="faq-heading" className="host-content-title">Frequently Asked Questions</h2>
                        <dl className="host-faq-list">
                            <dt className="host-faq-question">What types of events can Revaya Host support?</dt>
                            <dd className="host-faq-answer">
                                Revaya Host is designed for a wide range of live experiences including festivals, community events, venue activations, hospitality programming, and corporate events.
                            </dd>
                            <dt className="host-faq-question">Who typically uses Revaya Host?</dt>
                            <dd className="host-faq-answer">
                                The platform is intended for event planners, venue managers, hospitality teams, and operations staff responsible for coordinating live events.
                            </dd>
                            <dt className="host-faq-question">Is Revaya Host only useful for large events?</dt>
                            <dd className="host-faq-answer">
                                While the platform is especially helpful for complex events, smaller teams can also benefit from having a structured way to organize event logistics and coordination.
                            </dd>
                            <dt className="host-faq-question">Can Revaya Host help manage vendors?</dt>
                            <dd className="host-faq-answer">
                                Yes. Revaya Host helps teams organize vendor information and maintain clear communication about logistical details and responsibilities.
                            </dd>
                            <dt className="host-faq-question">Is Revaya Host focused on planning or execution?</dt>
                            <dd className="host-faq-answer">
                                Revaya Host supports both. It helps teams organize event details during the planning phase and maintain operational clarity during event execution.
                            </dd>
                        </dl>
                    </div>
                </section>

                {/* Why Event Operations Matter */}
                <section className="host-content-section host-content-section--alt" aria-labelledby="why-ops-heading">
                    <div className="host-content-container">
                        <h2 id="why-ops-heading" className="host-content-title">Why Event Operations Matter</h2>
                        <p className="host-content-text">
                            Guests often experience events as seamless moments of entertainment, hospitality, or celebration. Behind the scenes, however, successful events require careful coordination between many different people and teams.
                        </p>
                        <p className="host-content-text">
                            When operational details are organized clearly and communication flows effectively, planners can focus less on troubleshooting and more on delivering memorable experiences.
                        </p>
                        <p className="host-content-text">
                            Revaya Host is designed to support that coordination by giving event teams a clearer operational foundation.
                        </p>
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

export default RevayaHostPage;