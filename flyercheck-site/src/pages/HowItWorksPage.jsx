import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reportError } from "../utils/errorHandler";

const steps = [
  {
    icon: "fas fa-upload",
    title: "Step 1: Upload your flyer",
    description:
      "Drag or drop your flyer image — PNG, JPEG, or WEBP up to 15MB. Large files are compressed automatically. No account needed. No email required. The upload is the only thing standing between you and your results.",
  },
  {
    icon: "fas fa-robot",
    title: "Step 2: The AI reviews your flyer",
    description:
      "FlyerCheck sends your flyer to an AI model trained to evaluate event promotional materials. It reads the content, assesses the visual structure, and checks for the specific information attendees need before they decide to show up.",
  },
  {
    icon: "fas fa-list-alt",
    title: "Step 3: You get a structured report",
    description:
      "Results come back as a list of specific findings — not a score, not a grade. Each finding identifies what was flagged, where on the flyer it appears, and why it might affect your audience's response. Most analyses complete in under 30 seconds.",
  },
  {
    icon: "fas fa-check-double",
    title: "Step 4: You decide what to fix",
    description:
      "Not every flag is a required change. Some findings are judgment calls — you know your audience and your event better than the tool does. FlyerCheck gives you the information; you make the call. Fix what matters. Skip what doesn't. Post with confidence.",
  },
];

function HowItWorksPage() {
  try {
    return (
      <div data-name="how-it-works-page">
        <Navbar />
        <div className="contact-section" data-name="how-it-works-content">
          <div className="container">
            <h1 className="contact-title">How FlyerCheck works</h1>
            <p className="contact-subtitle">
              One upload. A structured review. Then you decide what to fix.
            </p>

            <section
              className="homepage-section what-we-do-section"
              data-name="how-it-works-steps"
            >
              <div className="pillars-grid" data-name="how-it-works-grid">
                {steps.map((step, index) => (
                  <div key={step.title} className="pillar-card" data-name={`how-it-works-step-${index}`}>
                    <div className="pillar-icon" data-name={`how-it-works-icon-${index}`}>
                      <i className={step.icon} aria-hidden="true"></i>
                    </div>
                    <h2 className="pillar-title" data-name={`how-it-works-title-${index}`}>
                      {step.title}
                    </h2>
                    <p className="pillar-description" data-name={`how-it-works-desc-${index}`}>
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="homepage-section flyercheck-faq-section"
              data-name="what-flyercheck-does-not-do"
              aria-labelledby="does-not-do-heading"
            >
              <h2 id="does-not-do-heading" className="section-title">
                What FlyerCheck does not do
              </h2>
              <div className="flyercheck-faq-list">
                <p className="flyercheck-faq-answer">
                  FlyerCheck does not redesign your flyer, generate new creative,
                  or tell you what your event should look like. It reviews what
                  you&apos;ve already made and flags potential issues. It does not
                  replace a graphic designer, a marketing strategist, or your
                  own judgment about your audience. It is a quality control
                  step — one that takes 30 seconds and happens before your
                  audience sees the work.
                </p>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("HowItWorksPage error:", error);
    reportError(error);
    return null;
  }
}

export default HowItWorksPage;
