function TermsPage() {
    try {
        return (
            <div data-name="terms-page">
                <Navbar />
                <div className="page-content" data-name="terms-content">
                    <div className="container mx-auto px-4">
                        <div className="terms-policy" data-name="terms-policy">
                            <h1 className="page-title" data-name="terms-title">Terms of Service</h1>
                            <p className="effective-date" data-name="effective-date">Last Updated: 5 May 2025</p>
                            
                            <div className="terms-intro" data-name="terms-intro">
                                <p>Welcome to Revaya Hospitality Group ("Revaya", "we", "our", or "us"). By accessing or using our website and services (including Revaya Host and Revaya FlyerCheck), you agree to the following terms and conditions. If you do not agree to these terms, please do not use our services.</p>
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

                            <section className="terms-section" data-name="termination">
                                <h2>5. Termination</h2>
                                <p>We reserve the right to suspend or terminate your access to our services at any time, for any reason, without notice.</p>
                            </section>

                            <section className="terms-section" data-name="disclaimers">
                                <h2>6. Disclaimers</h2>
                                <p>Our services are provided "as is" without warranties of any kind. We do not guarantee that the website or services will be error-free or uninterrupted.</p>
                            </section>

                            <section className="terms-section" data-name="limitation">
                                <h2>7. Limitation of Liability</h2>
                                <p>To the fullest extent permitted by law, Revaya shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
                            </section>

                            <section className="terms-section" data-name="changes">
                                <h2>8. Changes to These Terms</h2>
                                <p>We may update these Terms of Service from time to time. Continued use of our services after changes are posted constitutes your acceptance of the updated terms.</p>
                            </section>

                            <section className="terms-section" data-name="governing-law">
                                <h2>9. Governing Law</h2>
                                <p>These terms are governed by the laws of the State of Florida, without regard to its conflict of law provisions.</p>
                            </section>

                            <section className="terms-section" data-name="contact">
                                <h2>10. Contact Us</h2>
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
