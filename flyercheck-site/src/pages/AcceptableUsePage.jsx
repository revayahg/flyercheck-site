import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reportError } from "../utils/errorHandler";

function AcceptableUsePage() {
    try {
        return (
            <div data-name="acceptable-use-page">
                <Navbar />
                <div className="page-content" data-name="acceptable-use-content">
                    <div className="container mx-auto px-4">
                        <div className="terms-policy" data-name="acceptable-use-policy">
                            <h1 className="page-title" data-name="acceptable-use-title">Acceptable Use Policy</h1>
                            <p className="effective-date" data-name="effective-date">Last Updated: August 29, 2026</p>
                            
                            <div className="terms-intro" data-name="acceptable-use-intro">
                                <p>
                                    This Acceptable Use Policy applies to your use of FlyerCheck at
                                    www.flyercheck.io — the free AI flyer review tool operated by
                                    Revaya Hospitality Group (&quot;Revaya&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
                                    By uploading a flyer or using the site, you agree to follow this
                                    policy. Violations may result in suspension or termination of access
                                    to the analyzer.
                                </p>
                                <p>
                                    FlyerCheck is designed for event promoters, venue marketers, and
                                    hospitality teams who need a quick pre-publish check on promotional
                                    images. These rules keep the tool safe, lawful, and useful for
                                    everyone.
                                </p>
                            </div>

                            <section className="terms-section" data-name="prohibited-uses">
                                <h2>1. Prohibited Uses</h2>
                                <p>You may not use FlyerCheck or flyercheck.io to:</p>
                                <ul>
                                    <li>Upload content that infringes copyright, trademark, or other intellectual property rights</li>
                                    <li>Upload illegal, harmful, threatening, or offensive content</li>
                                    <li>Violate anyone&apos;s privacy or upload sensitive personal data without consent</li>
                                    <li>Promote hate, harassment, discrimination, or violence</li>
                                    <li>Attempt to circumvent security measures, scrape the service, or abuse system resources</li>
                                    <li>Use automated scripts to flood the analyzer with bulk uploads unrelated to legitimate flyer review</li>
                                    <li>Use the service for any fraudulent or misleading purpose</li>
                                </ul>
                            </section>

                            <section className="terms-section" data-name="upload-rules">
                                <h2>2. Flyer Upload Rules</h2>
                                <p>When uploading event flyers for FlyerCheck analysis:</p>
                                <ul>
                                    <li>Upload only content you have the right to use — your own designs, client work you are authorized to share, or materials with proper licenses</li>
                                    <li>Do not upload sensitive personal data (for example, social security numbers, financial account details, or private health information)</li>
                                    <li>Do not upload flyers that primarily display private individuals&apos; contact details unless you have consent to share them publicly</li>
                                    <li>Upload the version you intend to publish — the tool reviews what your audience will see</li>
                                    <li>Ensure content complies with applicable laws, venue policies, and our <a href="/terms">Terms of Service</a></li>
                                </ul>
                                <p>
                                    FlyerCheck analyzes images to flag communication and layout issues.
                                    It does not guarantee legal compliance, copyright clearance, or that
                                    your flyer meets every venue or platform requirement.
                                </p>
                            </section>

                            <section className="terms-section" data-name="acceptable-content">
                                <h2>3. What FlyerCheck Is (and Isn&apos;t) For</h2>
                                <p>Appropriate uses include:</p>
                                <ul>
                                    <li>Checking event flyers before posting to social media, email, or print</li>
                                    <li>QA passes for venue nights, festivals, galas, brand activations, and community events</li>
                                    <li>Training new team members on what guests need to see on a promotional image</li>
                                </ul>
                                <p>Inappropriate uses include:</p>
                                <ul>
                                    <li>Uploading non-flyer content unrelated to event promotion solely to test the AI</li>
                                    <li>Using outputs to misrepresent event details to attendees</li>
                                    <li>Redistributing analyzer outputs as if they were professional design certification</li>
                                </ul>
                            </section>

                            <section className="terms-section" data-name="account-behavior">
                                <h2>4. Site Behavior and Fair Use</h2>
                                <p>
                                    FlyerCheck is free and does not require an account today. We may
                                    apply reasonable rate limits to protect service availability. Do not
                                    interfere with other users&apos; ability to access the analyzer or
                                    attempt to probe, scan, or test vulnerabilities except through
                                    authorized security research channels.
                                </p>
                                <p>
                                    Advertising on flyercheck.io is subject to our{" "}
                                    <a href="/privacy">Privacy Policy</a>, including how cookies and
                                    third-party ad partners may operate on the site.
                                </p>
                            </section>

                            <section className="terms-section" data-name="enforcement">
                                <h2>5. Enforcement and Reporting</h2>
                                <p>
                                    We reserve the right to block uploads, suspend access, and take
                                    other appropriate action for violations of this policy or our Terms
                                    of Service. If you believe content on flyercheck.io infringes your
                                    rights, contact us with enough detail for us to investigate.
                                </p>
                                <p>
                                    For questions about acceptable use, email{" "}
                                    <a href="mailto:info@revayahg.com">info@revayahg.com</a> or use the{" "}
                                    <a href="/contact">contact form</a>.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error("AcceptableUsePage error:", error);
        reportError(error);
        return null;
    }
}

export default AcceptableUsePage;
