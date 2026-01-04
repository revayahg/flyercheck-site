function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission here
            console.log('Form submitted:', formData);
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <section className="section" id="contact" data-name="contact-section">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12" data-name="contact-header">
                            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                            <p className="text-xl text-gray-600">Get in touch with our team</p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form" data-name="contact-form">
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    data-name="contact-name"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    data-name="contact-email"
                                />
                            </div>
                            <div className="mb-6">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    data-name="contact-message"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full" data-name="contact-submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
