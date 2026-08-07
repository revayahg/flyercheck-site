// revaya-site/src/pages/ContactPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reportError } from "../utils/errorHandler";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

function ContactPage() {
  try {
    const [formData, setFormData] = React.useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitMessage, setSubmitMessage] = React.useState(null);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.trim() === "") {
        setSubmitMessage(
          "Contact form is not configured yet. Email us at info@revayahg.com."
        );
        setIsSuccess(false);
        return;
      }

      setIsSubmitting(true);
      setSubmitMessage(null);

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            source: "flyercheck.io contact form",
          }),
        });

        if (response.ok) {
          setSubmitMessage("Thanks — we'll get back to you shortly.");
          setIsSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.error || "Failed to send message");
        }
      } catch (error) {
        reportError(error);
        setSubmitMessage(
          "Sorry, there was an error sending your message. Please try again or email us directly at info@revayahg.com"
        );
        setIsSuccess(false);
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div data-name="contact-page">
        <Navbar />

        <div className="contact-section" data-name="contact-content">
          <div className="container">
            <h1 className="contact-title">Contact</h1>
            <p className="contact-subtitle">
              Questions about FlyerCheck or event ops? Reach out — we read every message.
            </p>

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
                    <p>
                      407 Lincoln Road, Ste 6H
                      <br />
                      Miami Beach, FL
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-form-wrapper">
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  data-name="contact-form"
                >
                  {submitMessage && (
                    <div
                      className={`form-message ${
                        isSuccess ? "success" : "error"
                      }`}
                    >
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

            <section
              className="homepage-section flyercheck-faq-section"
              data-name="contact-faq"
              aria-labelledby="contact-faq-heading"
            >
              <h2 id="contact-faq-heading" className="section-title">
                Common Questions
              </h2>
              <dl className="flyercheck-faq-list">
                <div className="flyercheck-faq-item">
                  <dt className="flyercheck-faq-question">
                    What happens after I send a message?
                  </dt>
                  <dd className="flyercheck-faq-answer">
                    We read every note and respond within 1–2 business days.
                    If you&apos;re reporting a bug or tool issue, include the type of
                    flyer you uploaded and what the result said — it helps us
                    reproduce it faster.
                  </dd>
                </div>
                <div className="flyercheck-faq-item">
                  <dt className="flyercheck-faq-question">
                    Do you work with venues and hospitality teams directly?
                  </dt>
                  <dd className="flyercheck-faq-answer">
                    Yes. FlyerCheck is built for anyone producing live
                    experiences — promoters, venue marketing teams, hospitality
                    operators, and festival organizers. If your team reviews
                    flyers regularly, reach out and we can talk about how the
                    tool fits your workflow.
                  </dd>
                </div>
                <div className="flyercheck-faq-item">
                  <dt className="flyercheck-faq-question">
                    Can I suggest a feature or flag something the tool missed?
                  </dt>
                  <dd className="flyercheck-faq-answer">
                    Absolutely — product feedback is the most useful thing
                    you can send. Tell us what the flyer was for, what FlyerCheck
                    said, and what it missed. That goes directly into how we
                    improve the analysis.
                  </dd>
                </div>
                <div className="flyercheck-faq-item">
                  <dt className="flyercheck-faq-question">
                    Are you open to partnerships or integrations?
                  </dt>
                  <dd className="flyercheck-faq-answer">
                    We&apos;re selectively open to partnerships with platforms and
                    tools that serve event producers and hospitality professionals.
                    Send a note with what you have in mind.
                  </dd>
                </div>
                <div className="flyercheck-faq-item">
                  <dt className="flyercheck-faq-question">Is FlyerCheck free?</dt>
                  <dd className="flyercheck-faq-answer">
                    Yes. The core flyer analysis tool is free to use with no
                    account required. Upload your flyer and get results immediately.
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error("ContactPage error:", error);
    reportError(error);
    return null;
  }
}

export default ContactPage;