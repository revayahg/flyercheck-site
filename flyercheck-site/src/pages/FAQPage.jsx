import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reportError } from "../utils/errorHandler";

const faqs = [
  {
    question: "What does FlyerCheck analyze?",
    answer:
      "FlyerCheck reviews your flyer for missing event details, readability issues, weak calls to action, visual hierarchy problems, and branding inconsistencies. It focuses on the things that affect whether someone decides to attend — not abstract design scores.",
  },
  {
    question: "Is FlyerCheck free?",
    answer:
      "Yes. The core analysis tool is completely free to use with no account or signup required. Upload your flyer and get results immediately.",
  },
  {
    question: "What file formats does FlyerCheck accept?",
    answer:
      "FlyerCheck accepts PNG, JPEG, and WEBP files up to 15MB. Large phone photos are compressed automatically before analysis. For best results, upload the version you plan to post — the tool analyzes what your audience will actually see.",
  },
  {
    question: "Who is FlyerCheck designed for?",
    answer:
      "FlyerCheck is built for anyone producing live experiences: event promoters, hospitality teams, venue marketing departments, festival organizers, brand activation teams, and community event producers. If you send a flyer before an event, FlyerCheck is for you.",
  },
  {
    question: "Does FlyerCheck replace a graphic designer?",
    answer:
      "No. FlyerCheck is a pre-publish review tool — a second set of eyes before you go live. It identifies specific issues but doesn't redesign anything. Think of it as a checklist run, not a creative direction.",
  },
  {
    question: "How long does an analysis take?",
    answer:
      "Most analyses complete in under 30 seconds. The tool sends your flyer to an AI model that reviews the content and returns a structured report of findings.",
  },
  {
    question: "Does FlyerCheck store my flyer?",
    answer:
      "No. Uploaded flyers are analyzed and not stored on FlyerCheck servers after the analysis completes. Do not upload flyers containing sensitive personal information.",
  },
  {
    question: "What should I do with my results?",
    answer:
      "Review each flag and decide whether it applies to your specific flyer and audience. Not every flag requires a change — some are judgment calls. Fix what matters, ignore what doesn't, and post with more confidence.",
  },
  {
    question: "Can I run the same flyer more than once?",
    answer:
      "Yes. If you make changes based on the results, upload the updated version and run it again. There is no limit on how many times you can use the tool.",
  },
  {
    question: "How is FlyerCheck different from asking ChatGPT to review my flyer?",
    answer:
      "FlyerCheck is purpose-built for event flyers specifically. It checks for the exact details attendees need (date, time, venue, ticket link) and evaluates readability at phone-screen scale — the context where most flyers are actually seen. A general AI tool will give you general feedback; FlyerCheck gives you event-specific feedback.",
  },
  {
    question: "Who built FlyerCheck?",
    answer:
      "FlyerCheck is a product of Revaya Hospitality Group, built by event operators and technologists who have worked in live events and hospitality. The tool came out of firsthand experience with how often flyer mistakes cost events attendance and credibility.",
  },
  {
    question: "How do I contact the team?",
    answer:
      "Email info@revayahg.com or use the contact form at flyercheck.io/contact. We read everything and respond within 1–2 business days.",
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
                {faqs.map((faq) => (
                  <div key={faq.question} className="flyercheck-faq-item">
                    <dt className="flyercheck-faq-question">{faq.question}</dt>
                    <dd className="flyercheck-faq-answer">{faq.answer}</dd>
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
