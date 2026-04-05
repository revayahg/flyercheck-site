import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reportError } from "../utils/errorHandler";

function PrivacyPage() {
    try {
        return (
            <div data-name="privacy-page">
                <Navbar />
                <div className="page-content" data-name="privacy-content">
                    <div className="container mx-auto px-4">
                        <div className="privacy-policy" data-name="privacy-policy">
                            <h1 className="page-title" data-name="privacy-title">Privacy Policy</h1>
                            <p className="effective-date" data-name="effective-date">Last Updated: February 28, 2026</p>
                            
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
                                <p>Some cookies may be set by third-party providers (e.g., analytics and advertising partners).</p>
                                <p>You can disable cookies through your browser settings, but some features of the site may not function properly as a result.</p>
                            </section>

                            <section className="policy-section" data-name="advertising">
                                <h2>5. Advertising and Cookies (Google AdSense)</h2>
                                <p>
                                    We may display ads served by Google and its partners (for example, Google AdSense). Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites.
                                </p>
                                <ul>
                                    <li>
                                        Google&apos;s use of advertising cookies (including the DoubleClick cookie) enables it and its
                                        partners to serve ads based on your visit to this site and/or other sites on the internet.
                                    </li>
                                    <li>
                                        Depending on your location and settings, ads may be personalized or non-personalized.
                                    </li>
                                    <li>
                                        You can manage or opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google&apos;s ad settings</a> and/or adjusting your browser&apos;s cookie settings.
                                    </li>
                                </ul>
                                <p>
                                    We do not receive your personal information (such as your name or email) from these advertising
                                    providers unless you explicitly provide it to us through a form.
                                </p>
                            </section>

                            <section className="policy-section" data-name="ai-processing">
                                <h2>6. AI Processing and Flyer Uploads</h2>
                                <p>
                                    When you upload an event flyer image for analysis using Revaya FlyerCheck, the image and/or extracted text may be processed by Revaya&apos;s systems and by third-party AI providers (such as OpenAI) to generate feedback and suggested copy.
                                </p>
                                <p><strong>What we collect:</strong> The uploaded image, text extracted from the image, and basic device/log information necessary for service delivery.</p>
                                <p><strong>What we do not collect:</strong> We do not collect additional personal data from your uploads beyond what is necessary for the analysis.</p>
                                <p><strong>Retention:</strong> We do not store flyer images after processing except transiently for service delivery. Minimal logs may be kept for security and debugging purposes. Processed content is not retained for marketing or other purposes.</p>
                            </section>

                            <section className="policy-section" data-name="service-providers">
                                <h2>7. Service Providers</h2>
                                <p>We work with the following service providers who may process data on our behalf:</p>
                                <ul>
                                    <li><strong>Vercel</strong> – Hosting and infrastructure</li>
                                    <li><strong>OpenAI</strong> – AI processing for flyer analysis</li>
                                    <li><strong>Google</strong> – Search Console; AdSense (when enabled) for advertising</li>
                                </ul>
                                <p>These providers are bound by their own privacy and data protection obligations.</p>
                            </section>

                            <section className="policy-section" data-name="user-rights">
                                <h2>8. Your Rights and Choices</h2>
                                <p>You have the right to:</p>
                                <ul>
                                    <li>Access, update, or delete your personal information</li>
                                    <li>Opt out of marketing communications at any time</li>
                                    <li>Request a copy of the data we have about you</li>
                                </ul>
                                <p>To make a request, email us at info@revayahg.com.</p>
                            </section>

                            <section className="policy-section" data-name="data-security">
                                <h2>9. Data Security</h2>
                                <p>We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.</p>
                            </section>

                            <section className="policy-section" data-name="third-party">
                                <h2>10. Third-Party Links</h2>
                                <p>Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.</p>
                            </section>

                            <section className="policy-section" data-name="children">
                                <h2>11. Children&apos;s Privacy</h2>
                                <p>Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children.</p>
                            </section>

                            <section className="policy-section" data-name="policy-changes">
                                <h2>12. Changes to This Policy</h2>
                                <p>We may update this Privacy Policy from time to time. The most current version will always be posted on this page. We encourage you to review it periodically.</p>
                            </section>

                            <section className="policy-section" data-name="contact">
                                <h2>13. Contact Us</h2>
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

export default PrivacyPage;