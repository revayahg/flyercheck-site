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
                            <p className="effective-date" data-name="effective-date">Last Updated: February 28, 2026</p>
                            
                            <div className="terms-intro" data-name="acceptable-use-intro">
                                <p>This Acceptable Use Policy applies to your use of Revaya Hospitality Group&apos;s website and services, including Revaya Host and Revaya FlyerCheck. By using our services, you agree to comply with this policy. Violations may result in suspension or termination of access.</p>
                            </div>

                            <section className="terms-section" data-name="prohibited-uses">
                                <h2>1. Prohibited Uses</h2>
                                <p>You may not use our services to:</p>
                                <ul>
                                    <li>Upload content that infringes copyright, trademark, or other intellectual property rights</li>
                                    <li>Upload illegal, harmful, threatening, or offensive content</li>
                                    <li>Violate anyone&apos;s privacy or upload sensitive personal data without consent</li>
                                    <li>Promote hate, harassment, discrimination, or violence</li>
                                    <li>Attempt to circumvent security measures or abuse system resources</li>
                                    <li>Use the services for any fraudulent or misleading purpose</li>
                                </ul>
                            </section>

                            <section className="terms-section" data-name="upload-rules">
                                <h2>2. Upload Rules</h2>
                                <p>When uploading content (e.g., event flyers for FlyerCheck analysis):</p>
                                <ul>
                                    <li>Upload only content you have the right to use</li>
                                    <li>Do not upload sensitive personal data (e.g., social security numbers, financial data, health information)</li>
                                    <li>Ensure content complies with applicable laws and our Terms of Service</li>
                                </ul>
                            </section>

                            <section className="terms-section" data-name="enforcement">
                                <h2>3. Enforcement</h2>
                                <p>We reserve the right to remove content, suspend access, and take other appropriate action for violations of this policy. For questions, contact us at <a href="mailto:info@revayahg.com">info@revayahg.com</a>.</p>
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
