// revaya-site/src/pages/ContactPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import { reportError } from "../utils/errorHandler";
import { contactFaqItems } from "../content/faqContent";

const CLIENT_FORMSPREE = (import.meta.env.VITE_FORMSPREE_ENDPOINT || "").trim();
const CONTACT_SUBMIT_URL = CLIENT_FORMSPREE || "/api/contact";

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
      setIsSubmitting(true);
      setSubmitMessage(null);

      try {
        const response = await fetch(CONTACT_SUBMIT_URL, {
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
          const errMsg = data.error || "Failed to send message";
          if (response.status === 503) {
            setSubmitMessage(
              `${errMsg} You can also email us at info@revayahg.com.`
            );
            setIsSuccess(false);
            return;
          }
          throw new Error(errMsg);
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
              For tool questions (formats, privacy, pricing), check the{" "}
              <a href="/faq">FAQ</a> first; use this form for support, feedback, and
              partnership ideas.
            </p>

            <p className="why-revaya-text" style={{ maxWidth: "720px", margin: "0 auto 2rem", textAlign: "center" }}>
              When reporting an analyzer issue, include the event type, what FlyerCheck flagged,
              and anything it missed — that helps us reproduce and improve results. We respond
              within one to two business days with a clear next step.
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
                Before you reach out
              </h2>
              <p className="contact-subtitle" style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                Questions about how the analyzer works, pricing, file formats, or
                privacy are all on our FAQ page. Below are contact-specific
                answers — if yours isn&apos;t listed, send a note through the form
                above.
              </p>
              <dl className="flyercheck-faq-list">
                {contactFaqItems.map((item) => (
                  <div key={item.q} className="flyercheck-faq-item">
                    <dt className="flyercheck-faq-question">{item.q}</dt>
                    <dd className="flyercheck-faq-answer">{item.a}</dd>
                  </div>
                ))}
              </dl>
              <div className="insights-cta" style={{ marginTop: "1.5rem" }}>
                <a href="/faq" className="insight-link">
                  Tool questions? See the full FlyerCheck FAQ →
                </a>
              </div>
            </section>
          </div>
        </div>

        <AdBanner inline />

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