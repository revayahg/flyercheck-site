function FlyerCheckPage() {
    try {
        React.useEffect(() => {
            // Initialize ads
            if (window.adsbygoogle) {
                window.adsbygoogle.push({});
            }
        }, []);

        return (
            <div data-name="flyercheck-page">
                <Navbar />
                <AdBanner />
                <section className="hero hero-flyercheck" data-name="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Revaya Flyer Check™</h1>
                        <p className="hero-subtitle">
                            Your flyer is almost perfect. Let's make it undeniable.
                        </p>
                        <p className="hero-description">
                            Upload your design and get fast, unbiased feedback—<br />
                            clarity, errors, spacing, and visibility checks.
                        </p>
                    </div>
                </section>

                {/* Content Section for AdSense Compliance */}
                <section className="flyercheck-content-section" data-name="flyercheck-content">
                    <div className="container">
                        <div className="flyercheck-content-wrapper">
                            <div className="flyercheck-intro">
                                <h2 className="flyercheck-section-title">AI-Powered Flyer Analysis for Better Event Attendance</h2>
                                <p className="flyercheck-intro-text">
                                    Revaya Flyer Check™ uses advanced AI technology to analyze your event flyers and provide comprehensive feedback on design, clarity, and effectiveness. Whether you're promoting a corporate conference, music festival, wedding, or nonprofit fundraiser, our tool helps ensure your flyer communicates clearly and drives attendance.
                                </p>
                            </div>

                            <div className="flyercheck-benefits">
                                <h3 className="flyercheck-subtitle">Why Use Flyer Check?</h3>
                                <div className="flyercheck-benefits-grid">
                                    <div className="flyercheck-benefit-card">
                                        <i className="fas fa-eye"></i>
                                        <h4>Fresh Perspective</h4>
                                        <p>When you've spent hours designing a flyer, you become too familiar with it. Our AI provides an unbiased, first-time viewer perspective to catch issues you might miss.</p>
                                    </div>
                                    <div className="flyercheck-benefit-card">
                                        <i className="fas fa-check-double"></i>
                                        <h4>Comprehensive Analysis</h4>
                                        <p>We evaluate text readability, visual hierarchy, branding consistency, contrast issues, and information completeness to ensure your flyer performs at its best.</p>
                                    </div>
                                    <div className="flyercheck-benefit-card">
                                        <i className="fas fa-clock"></i>
                                        <h4>Instant Feedback</h4>
                                        <p>Get detailed analysis in seconds, not days. No need to wait for colleagues or designers to review—receive actionable feedback immediately.</p>
                                    </div>
                                    <div className="flyercheck-benefit-card">
                                        <i className="fas fa-users"></i>
                                        <h4>Audience-Specific Insights</h4>
                                        <p>Our analysis adapts to your target audience, whether it's corporate professionals, families, young adults, or seniors, ensuring your message resonates.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flyercheck-how-it-works">
                                <h3 className="flyercheck-subtitle">How It Works</h3>
                                <div className="flyercheck-steps">
                                    <div className="flyercheck-step">
                                        <div className="step-number">1</div>
                                        <div className="step-content">
                                            <h4>Upload Your Flyer</h4>
                                            <p>Simply drag and drop your flyer image or click to upload. We support JPG, PNG, AVIF, HEIC, and WEBP formats up to 3MB.</p>
                                        </div>
                                    </div>
                                    <div className="flyercheck-step">
                                        <div className="step-number">2</div>
                                        <div className="step-content">
                                            <h4>Select Event Details</h4>
                                            <p>Choose your event category (corporate, music, wedding, nonprofit, etc.) and target audience to get tailored analysis.</p>
                                        </div>
                                    </div>
                                    <div className="flyercheck-step">
                                        <div className="step-number">3</div>
                                        <div className="step-content">
                                            <h4>Receive AI Analysis</h4>
                                            <p>Our AI analyzes your flyer for clarity, missing information, design issues, and conversion blockers, providing detailed feedback in seconds.</p>
                                        </div>
                                    </div>
                                    <div className="flyercheck-step">
                                        <div className="step-number">4</div>
                                        <div className="step-content">
                                            <h4>Improve and Iterate</h4>
                                            <p>Use our actionable recommendations to refine your flyer before publishing, ensuring maximum impact and attendance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flyercheck-use-cases">
                                <h3 className="flyercheck-subtitle">Perfect For</h3>
                                <div className="flyercheck-use-cases-list">
                                    <div className="use-case-item">
                                        <i className="fas fa-briefcase"></i>
                                        <div>
                                            <h4>Corporate Events</h4>
                                            <p>Conferences, networking events, product launches, and company gatherings that need professional, clear communication.</p>
                                        </div>
                                    </div>
                                    <div className="use-case-item">
                                        <i className="fas fa-music"></i>
                                        <div>
                                            <h4>Music & Entertainment</h4>
                                            <p>Concerts, festivals, club nights, and live performances where visual appeal and clear information are crucial for ticket sales.</p>
                                        </div>
                                    </div>
                                    <div className="use-case-item">
                                        <i className="fas fa-heart"></i>
                                        <div>
                                            <h4>Weddings & Celebrations</h4>
                                            <p>Wedding invitations, anniversary parties, and milestone celebrations that need to convey elegance and important details.</p>
                                        </div>
                                    </div>
                                    <div className="use-case-item">
                                        <i className="fas fa-hand-holding-heart"></i>
                                        <div>
                                            <h4>Nonprofit Fundraisers</h4>
                                            <p>Charity events, fundraisers, and community gatherings that must clearly communicate purpose and inspire action.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flyercheck-faq">
                                <h3 className="flyercheck-subtitle">Frequently Asked Questions</h3>
                                <div className="flyercheck-faq-list">
                                    <div className="faq-item">
                                        <h4>What file formats are supported?</h4>
                                        <p>We support JPG, PNG, AVIF, HEIC, and WEBP image formats. PDF files need to be converted to an image first (you can take a screenshot or use an online converter). Maximum file size is 3MB, and images are automatically compressed if needed.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h4>How accurate is the AI analysis?</h4>
                                        <p>Our AI is trained on thousands of event flyers and design best practices. It evaluates visual hierarchy, text readability, information completeness, and audience alignment to provide comprehensive, actionable feedback.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h4>Do I need to create an account?</h4>
                                        <p>No account required! Simply upload your flyer and get instant analysis. Your files are processed securely and are not stored after analysis.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h4>What makes a flyer effective?</h4>
                                        <p>An effective flyer clearly communicates the what, when, where, and why of your event. It has strong visual hierarchy, readable text, complete information, and aligns with your target audience's expectations. Our analysis checks all these elements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FileUploader />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('FlyerCheckPage error:', error);
        reportError(error);
        return null;
    }
}
