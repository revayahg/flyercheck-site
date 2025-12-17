function ContactPage() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [submitMessage, setSubmitMessage] = React.useState(null);
        const [isSuccess, setIsSuccess] = React.useState(false);

        // Check for success parameter in URL
        React.useEffect(() => {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('success') === 'true') {
                setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you soon.');
                setIsSuccess(true);
            }
        }, []);

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            setSubmitMessage(null);

            try {
                // FormSubmit expects form-encoded data
                const formDataToSend = new FormData();
                formDataToSend.append('name', formData.name);
                formDataToSend.append('email', formData.email);
                formDataToSend.append('subject', formData.subject);
                formDataToSend.append('message', formData.message);
                formDataToSend.append('_captcha', 'false');
                formDataToSend.append('_template', 'table');
                formDataToSend.append('_next', window.location.origin + '/contact?success=true');

                const response = await fetch('https://formsubmit.co/info@revayahg.com', {
                    method: 'POST',
                    body: formDataToSend
                });

                if (response.ok) {
                    setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you soon.');
                    setIsSuccess(true);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                setSubmitMessage('Sorry, there was an error sending your message. Please try again or email us directly at info@revayahg.com');
                setIsSuccess(false);
            } finally {
                setIsSubmitting(false);
            }
        };

        return (
            <div data-name="contact-page">
                <Navbar />
                <AdBanner />
                <div className="contact-section" data-name="contact-content">
                    <div className="container">
                        <h1 className="contact-title">Contact Us</h1>
                        <p className="contact-subtitle">We'd love to hear from you. Get in touch with us!</p>
                        
                        <div className="contact-content-wrapper">
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <h3>Email</h3>
                                        <a href="mailto:info@revayahg.com">info@revayahg.com</a>
                                    </div>
                                </div>
                                
                                <div className="contact-info-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <h3>Business Address</h3>
                                        <p>407 Lincoln Road, Ste 6H<br />Miami Beach, FL</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-form-wrapper">
                                <form className="contact-form" onSubmit={handleSubmit} data-name="contact-form">
                                    {submitMessage && (
                                        <div className={`form-message ${isSuccess ? 'success' : 'error'}`}>
                                            {submitMessage}
                                        </div>
                                    )}
                                    
                                    <div className="form-group">
                                        <label htmlFor="name">Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">Subject *</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="What is this regarding?"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            placeholder="Tell us how we can help..."
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="submit-button"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <i className="fas fa-spinner fa-spin"></i>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-paper-plane"></i>
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('ContactPage error:', error);
        reportError(error);
        return null;
    }
}

