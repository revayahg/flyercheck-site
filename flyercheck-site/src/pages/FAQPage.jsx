import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reportError } from "../utils/errorHandler";

const faqs = [
  {
    q: "What does FlyerCheck analyze?",
    a: "FlyerCheck reviews your flyer for missing event details, readability issues, weak calls to action, visual hierarchy problems, and branding inconsistencies. It focuses on the things that affect whether someone decides to attend — not abstract design scores.",
  },
  {
    q: "Is FlyerCheck free?",
    a: "Yes. The core analysis tool is completely free to use with no account or signup required. Upload your flyer and get results immediately.",
  },
  {
    q: "What file formats does FlyerCheck accept?",
    a: "FlyerCheck accepts PNG, JPEG, and WEBP files. For best results, upload the version you plan to post — the tool analyzes what your audience will actually see.",
  },
  {
    q: "Who is FlyerCheck designed for?",
    a: "FlyerCheck is built for anyone producing live experiences: event promoters, hospitality teams, venue marketing departments, festival organizers, brand activation teams, and community event producers. If you send a flyer before an event, FlyerCheck is for you.",
  },
  {
    q: "Does FlyerCheck replace a graphic designer?",
    a: "No. FlyerCheck is a pre-publish review tool — a second set of eyes before you go live. It identifies specific issues but doesn't redesign anything. Think of it as a checklist run, not a creative direction.",
  },
  {
    q: "How long does an analysis take?",
    a: "Most analyses complete in under 30 seconds. The tool sends your flyer to an AI model that reviews the content and returns a structured report of findings.",
  },
  {
    q: "Does FlyerCheck store my flyer?",
    a: "No. Uploaded flyers are analyzed and not stored on FlyerCheck servers after the analysis completes. Do not upload flyers containing sensitive personal information.",
  },
  {
    q: "What should I do with my results?",
    a: "Review each flag and decide whether it applies to your specific flyer and audience. Not every flag requires a change — some are judgment calls. Fix what matters. Skip what doesn't. Post with confidence.",
  },
  {
    q: "Can I run the same flyer more than once?",
    a: "Yes. If you make changes based on the results, upload the updated version and run it again. There is no limit on how many times you can use the tool.",
  },
  {
    q: "How is FlyerCheck different from asking ChatGPT to review my flyer?",
    a: "FlyerCheck is purpose-built for event flyers specifically. It checks for the exact details attendees need (date, time, venue, ticket link) and evaluates readability at phone-screen scale — the context where most flyers are actually seen. A general AI tool will give you general feedback; FlyerCheck gives you event-specific feedback.",
  },
  {
    q: "Who built FlyerCheck?",
    a: "FlyerCheck is a product of Revaya Hospitality Group, built by event operators and technologists who have worked in live events and hospitality.",
  },
  {
    q: "How do I contact the team?",
    a: "Email info@revayahg.com or use the contact form at flyercheck.io/contact. We read everything and respond within 1–2 business days.",
  },
];

function FAQPage() {
  try {
    return (
      <div data-name="faq-page">
        <Navbar />
        <div className="contact-section" data-name="faq-content">
          <div className="container">
            <h1 className="contact-title">Frequently Asked Questions</h1>
            <p className="contact-subtitle">
              Everything you need to know about FlyerCheck.
            </p>

            <section
              className="homepage-section flyercheck-faq-section"
              data-name="faq-list"
            >
              <dl className="flyercheck-faq-list">
                {faqs.map((item) => (
                  <div key={item.q} className="flyercheck-faq-item">
                    <dt className="flyercheck-faq-question">{item.q}</dt>
                    <dd className="flyercheck-faq-answer">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
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
