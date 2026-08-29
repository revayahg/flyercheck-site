import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import { reportError } from "../utils/errorHandler";
import { faqItems } from "../content/faqContent";

function FAQPage() {
  try {
    return (
      <div data-name="faq-page">
        <Navbar />
        <div className="contact-section" data-name="faq-content">
          <div className="container">
            <h1 className="contact-title">Frequently Asked Questions</h1>
            <p className="contact-subtitle">
              Everything you need to know about FlyerCheck — from what it
              analyzes and who it&apos;s for, to privacy, results, and how to
              reach the team. If you still have a question after reading, use
              the contact form and we&apos;ll follow up within 1–2 business days
              with a practical answer you can act on.
            </p>

            <section
              className="homepage-section flyercheck-faq-section"
              data-name="faq-list"
            >
              <dl className="flyercheck-faq-list">
                {faqItems.map((item) => (
                  <div key={item.q} className="flyercheck-faq-item">
                    <dt className="flyercheck-faq-question">{item.q}</dt>
                    <dd className="flyercheck-faq-answer">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
        <AdBanner inline />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("FAQPage error:", error);
    reportError(error);
    return null;
  }
}

export default FAQPage;
