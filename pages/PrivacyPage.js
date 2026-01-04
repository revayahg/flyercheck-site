function PrivacyPage() {
    try {
        return (
            <div data-name="privacy-page">
                <Navbar />
                <div className="page-content" data-name="privacy-content">
                    <div className="container mx-auto px-4">
                        <div className="privacy-policy" data-name="privacy-policy">
                            <h1 className="page-title" data-name="privacy-title">Privacy Policy</h1>
                            <p className="effective-date" data-name="effective-date">Effective Date: 5 May 2025</p>
                            
                            <div className="policy-intro" data-name="policy-intro">
                                <p>Revaya Hospitality Group ("Revaya", "we", "our", or "us") values your privacy. This Privacy Policy describes how we collect, use, and protect your information when you visit our website, revayahg.com, or use any of our services.</p>
                            </div>

                            <section className="policy-section" data-name="information-collection">
                                <h2>1. Information We Collect</h2>
                                <p>We may collect the following types of information:</p>
                                <ul>
                                    <li>Personal Information: Name, email address, phone number, event details, preferences, and other information you provide when submitting forms or interacting with us.</li>
                                    <li>Usage Information: IP address, browser type, device information, pages viewed, and other analytical data.</li>
                                    <li>Cookies and Tracking: Data collected via cookies, web beacons, and similar technologies to improve your experience and analyze website traffic.</li>
                                </ul>
                            </section>

                            <section className="policy-section" data-name="information-usage">
                                <h2>2. How We Use Your Information</h2>
                                <p>We use the information we collect to:</p>
                                <ul>
                                    <li>Deliver and improve our event services and software products</li>
                                    <li>Respond to your inquiries and customer support requests</li>
                                    <li>Personalize your experience and send relevant updates or marketing content</li>
                                    <li>Analyze usage trends to improve our website and offerings</li>
                                    <li>Ensure compliance with applicable laws and regulations</li>
                                </ul>
                            </section>

                            <section className="policy-section" data-name="information-sharing">
                                <h2>3. Sharing Your Information</h2>
                                <p>We do not sell your personal information. We may share data with:</p>
                                <ul>
                                    <li>Trusted service providers (e.g., web hosting, analytics tools, email platforms) to support our business operations</li>
                                    <li>Law enforcement or legal entities when required by law</li>
                                    <li>In connection with a merger, acquisition, or sale of assets</li>
                                </ul>
                            </section>

                            <section className="policy-section" data-name="cookies">
                                <h2>4. Cookies and Tracking Technologies</h2>
                                <p>We use cookies to:</p>
                                <ul>
                                    <li>Remember your preferences</li>
                                    <li>Provide relevant content and ads</li>
                                    <li>Track site traffic and usage behavior</li>
                                </ul>
                                <p>You can disable cookies through your browser settings, but some features of the site may not function properly as a result.</p>
                            </section>

                            <section className="policy-section" data-name="user-rights">
                                <h2>5. Your Rights and Choices</h2>
                                <p>You have the right to:</p>
                                <ul>
                                    <li>Access, update, or delete your personal information</li>
                                    <li>Opt out of marketing communications at any time</li>
                                    <li>Request a copy of the data we have about you</li>
                                </ul>
                                <p>To make a request, email us at info@revayahg.com.</p>
                            </section>

                            <section className="policy-section" data-name="data-security">
                                <h2>6. Data Security</h2>
                                <p>We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.</p>
                            </section>

                            <section className="policy-section" data-name="third-party">
                                <h2>7. Third-Party Links</h2>
                                <p>Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.</p>
                            </section>

                            <section className="policy-section" data-name="children">
                                <h2>8. Children's Privacy</h2>
                                <p>Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children.</p>
                            </section>

                            <section className="policy-section" data-name="policy-changes">
                                <h2>9. Changes to This Policy</h2>
                                <p>We may update this Privacy Policy from time to time. The most current version will always be posted on this page. We encourage you to review it periodically.</p>
                            </section>

                            <section className="policy-section" data-name="contact">
                                <h2>10. Contact Us</h2>
                                <p>If you have any questions about this Privacy Policy or how we handle your information, please contact us at:</p>
                                <p><i className="fas fa-envelope"></i> Email: info@revayahg.com</p>
                                <p><i className="fas fa-globe"></i> Website: https://www.revayahg.com</p>
                            </section>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('PrivacyPage error:', error);
        reportError(error);
        return null;
    }
}
