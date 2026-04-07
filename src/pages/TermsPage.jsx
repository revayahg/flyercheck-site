import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reportError } from "../utils/errorHandler";

function TermsPage() {
    try {
        return (
            <div data-name="terms-page">
                <Navbar />
                <div className="page-content" data-name="terms-content">
                    <div className="container mx-auto px-4">
                        <div className="terms-policy" data-name="terms-policy">
                            <h1 className="page-title" data-name="terms-title">Terms of Service</h1>
                            <p className="effective-date" data-name="effective-date">Last Updated: February 28, 2026</p>
                            
                            <div className="terms-intro" data-name="terms-intro">
                                <p>Welcome to Revaya Hospitality Group (&quot;Revaya&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing or using our website and services (including Revaya Host and Revaya FlyerCheck), you agree to the following terms and conditions. Our <a href="/privacy">Privacy Policy</a> describes how we collect and use information. If you do not agree to these terms, please do not use our services.</p>
                            </div>

                            <section className="terms-section" data-name="use-of-services">
                                <h2>1. Use of Our Services</h2>
                                <p>You agree to use our website and platforms only for lawful purposes. You may not:</p>
                                <ul>
                                    <li>Interfere with or disrupt the functionality of the services</li>
                                    <li>Use the services for any fraudulent, harmful, or unlawful activity</li>
                                    <li>Attempt to access other users' data without permission</li>
                                </ul>
                            </section>

                            <section className="terms-section" data-name="account-registration">
                                <h2>2. Account Registration</h2>
                                <p>Some features may require you to register for an account. You are responsible for maintaining the confidentiality of your login credentials and for any activity under your account.</p>
                            </section>

                            <section className="terms-section" data-name="intellectual-property">
                                <h2>3. Intellectual Property</h2>
                                <p>All content on our website—including text, graphics, logos, and software—is owned by or licensed to Revaya and is protected by intellectual property laws. You may not copy, reproduce, or use our content without written permission.</p>
                            </section>

                            <section className="terms-section" data-name="third-party">
                                <h2>4. Third-Party Services</h2>
                                <p>Our services may include links to or integrations with third-party tools and websites. We are not responsible for the content or practices of these third parties.</p>
                            </section>

                            <section className="terms-section" data-name="user-content">
                                <h2>5. User Content and Uploads</h2>
                                <p>You retain ownership of content you upload (e.g., event flyers for analysis). By uploading, you grant Revaya a limited license to host, process, transmit, analyze, and generate outputs from your uploads solely to provide and improve the service.</p>
                                <p>You represent and warrant that you have the rights to upload such content and that it does not infringe any third-party rights or violate any law. You are responsible for ensuring your uploads comply with these terms.</p>
                            </section>

                            <section className="terms-section" data-name="prohibited-uses">
                                <h2>6. Prohibited Uses</h2>
                                <p>You may not use our services to:</p>
                                <ul>
                                    <li>Upload content that infringes copyright, trademark, or other intellectual property rights</li>
                                    <li>Upload illegal, harmful, or offensive content</li>
                                    <li>Violate anyone&apos;s privacy or upload sensitive personal data without consent</li>
                                    <li>Promote hate, harassment, discrimination, or violence</li>
                                </ul>
                                <p>We reserve the right to remove content and suspend access for violations.</p>
                            </section>

                            <section className="terms-section" data-name="ai-disclaimer">
                                <h2>7. AI Output Disclaimer</h2>
                                <p>AI-generated outputs (including flyer analysis and suggested copy) may be inaccurate or incomplete. You must review all outputs before publishing or relying on them. We do not guarantee results, conversions, compliance, or accuracy. Use AI outputs at your own risk.</p>
                            </section>

                            <section className="terms-section" data-name="indemnification">
                                <h2>8. Indemnification</h2>
                                <p>You agree to indemnify, defend, and hold harmless Revaya and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your uploads, your use of the services, or your violation of these terms.</p>
                            </section>

                            <section className="terms-section" data-name="termination">
                                <h2>9. Termination</h2>
                                <p>We reserve the right to suspend or terminate your access to our services at any time, for any reason, without notice.</p>
                            </section>

                            <section className="terms-section" data-name="disclaimers">
                                <h2>10. Disclaimer of Warranties</h2>
                                <p>Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied, to the fullest extent permitted by law. We do not guarantee that the website or services will be error-free, uninterrupted, or secure.</p>
                            </section>

                            <section className="terms-section" data-name="limitation">
                                <h2>11. Limitation of Liability</h2>
                                <p>To the fullest extent permitted by law, Revaya shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of our services, including but not limited to loss of data, profits, or business opportunities. Our total liability shall not exceed the amount you paid us, if any, in the twelve months preceding the claim.</p>
                            </section>

                            <section className="terms-section" data-name="copyright-dmca">
                                <h2>12. Copyright / DMCA</h2>
                                <p>We respect intellectual property rights. If you believe content on our site infringes your copyright, please send a notice to our designated agent: <a href="mailto:info@revayahg.com">info@revayahg.com</a>. Include: (1) identification of the copyrighted work, (2) identification of the infringing material, (3) your contact information, (4) a statement of good faith, (5) a statement of accuracy under penalty of perjury, and (6) your signature. We will respond to valid DMCA notices in accordance with applicable law.</p>
                            </section>

                            <section className="terms-section" data-name="changes">
                                <h2>13. Changes to These Terms</h2>
                                <p>We may update these Terms of Service from time to time. Continued use of our services after changes are posted constitutes your acceptance of the updated terms.</p>
                            </section>

                            <section className="terms-section" data-name="governing-law">
                                <h2>14. Governing Law</h2>
                                <p>These terms are governed by the laws of the State of Florida, without regard to its conflict of law provisions.</p>
                            </section>

                            <section className="terms-section" data-name="contact">
                                <h2>15. Contact Us</h2>
                                <p>If you have any questions about these Terms of Service, please contact us at:</p>
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
        console.error('TermsPage error:', error);
        reportError(error);
        return null;
    }
}

export default TermsPage;
