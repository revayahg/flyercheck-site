import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeeItInAction from "../components/host/SeeItInAction";
import HostEarlyAccess from "../components/host/HostEarlyAccess";
import { HostOverview, HostProblem, HostHowItWorks, HostUseCases, HostFeatures } from "../components/host/HostStory";
import { reportError } from "../utils/errorHandler";

function RevayaHostPage() {
    try {
        React.useEffect(() => {
            const navbarLogo = document.querySelector(".navbar-logo");
            if (navbarLogo) {
                navbarLogo.style.display = "none";
            }
            return () => {
                if (navbarLogo) {
                    navbarLogo.style.display = "";
                }
            };
        }, []);

        return (
            <div className="min-h-screen bg-white" data-name="revaya-host-page">
                <Navbar />

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
                        <div className="host-hero-cta" data-name="host-hero-cta">
                            <HostEarlyAccess idPrefix="host-hero-access" />
                        </div>
                    </div>
                </section>

                <SeeItInAction />
                <HostHowItWorks />
                <HostOverview />
                <HostProblem />
                <HostUseCases />
                <HostFeatures />

                <section className="host-close" data-name="host-close">
                    <p className="host-close-line">Plan, coordinate, and run the event from one place.</p>
                    <HostEarlyAccess idPrefix="host-close-access" />
                </section>

                <section className="host-faq" aria-labelledby="faq-heading">
                    <div className="host-faq-container">
                        <h2 id="faq-heading" className="host-faq-title">
                            Frequently Asked Questions
                        </h2>
                        <dl className="host-faq-list">
                            <div className="host-faq-item">
                                <dt className="host-faq-question">What types of events can Revaya Host support?</dt>
                                <dd className="host-faq-answer">
                                    Revaya Host is designed for a wide range of live experiences including festivals, community events, venue activations, hospitality programming, and corporate events.
                                </dd>
                            </div>
                            <div className="host-faq-item">
                                <dt className="host-faq-question">Who typically uses Revaya Host?</dt>
                                <dd className="host-faq-answer">
                                    The platform is intended for event planners, venue managers, hospitality teams, and operations staff responsible for coordinating live events.
                                </dd>
                            </div>
                            <div className="host-faq-item">
                                <dt className="host-faq-question">Is Revaya Host only useful for large events?</dt>
                                <dd className="host-faq-answer">
                                    While the platform is especially helpful for complex events, smaller teams can also benefit from having a structured way to organize event logistics and coordination.
                                </dd>
                            </div>
                            <div className="host-faq-item">
                                <dt className="host-faq-question">Can Revaya Host help manage vendors?</dt>
                                <dd className="host-faq-answer">
                                    Yes. Revaya Host helps teams organize vendor information and maintain clear communication about logistical details and responsibilities.
                                </dd>
                            </div>
                            <div className="host-faq-item">
                                <dt className="host-faq-question">Is Revaya Host focused on planning or execution?</dt>
                                <dd className="host-faq-answer">
                                    Revaya Host supports both. It helps teams organize event details during the planning phase and maintain operational clarity during event execution.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <Footer />
            </div>
        );
    } catch (error) {
        console.error("RevayaHostPage error:", error);
        reportError(error);
        return null;
    }
}

export default RevayaHostPage;
