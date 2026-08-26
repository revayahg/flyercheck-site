import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import { reportError } from "../utils/errorHandler";

const steps = [
  {
    num: "1",
    title: "Upload your flyer",
    body: "Drag or drop your flyer image — PNG, JPEG, or WEBP. No account needed. No email required. The upload is the only thing standing between you and your results.",
  },
  {
    num: "2",
    title: "The AI reviews your flyer",
    body: "FlyerCheck sends your flyer to an AI model trained to evaluate event promotional materials. It reads the content, assesses the visual structure, and checks for the specific information attendees need before they decide to show up.",
  },
  {
    num: "3",
    title: "You get a structured report",
    body: "Results come back as a list of specific findings — not a score, not a grade. Each finding identifies what was flagged, where on the flyer it appears, and why it might affect your audience's response. Most analyses complete in under 30 seconds.",
  },
  {
    num: "4",
    title: "You decide what to fix",
    body: "Not every flag is a required change. Some findings are judgment calls — you know your audience and your event better than the tool does. FlyerCheck gives you the information; you make the call. Fix what matters. Skip what doesn't. Post with confidence.",
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
              One upload. A structured review. Then you decide what to fix —
              a simple workflow built for event teams who need clarity before
              they hit post.
            </p>

            <section
              className="homepage-section flyercheck-how-it-works"
              data-name="how-it-works-steps"
            >
              <div className="flyercheck-steps">
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="flyercheck-step"
                    data-name={`how-it-works-step-${step.num}`}
                  >
                    <div className="step-number" aria-hidden="true">{step.num}</div>
                    <div className="step-content">
                      <h2 className="pillar-title">{step.title}</h2>
                      <p>{step.body}</p>
                    </div>
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
                  you have already made and flags potential issues. It does not
                  replace a graphic designer, a marketing strategist, or your
                  own judgment about your audience. It is a quality control
                  step — one that takes 30 seconds and happens before your
                  audience sees the work.
                </p>
              </div>
            </section>

            <section
              className="homepage-section flyercheck-faq-section"
              data-name="who-uses-flyercheck"
              aria-labelledby="who-uses-heading"
            >
              <h2 id="who-uses-heading" className="section-title">
                Who uses FlyerCheck
              </h2>
              <div className="flyercheck-faq-list">
                <p className="flyercheck-faq-answer">
                  FlyerCheck is used by event producers, promoters, venue
                  marketing teams, hospitality operators, and anyone who creates
                  promotional materials for live experiences. The tool is built
                  for people who care about getting it right before it goes out —
                  not after the event is over and the flyer has already
                  circulated.
                </p>
                <p className="flyercheck-faq-answer">
                  Most users run FlyerCheck as a final step before posting —
                  after the design is done but before it goes live. Some use it
                  earlier in the process to gut-check a rough draft before
                  spending time on polish. Either way, the analysis takes under
                  30 seconds and the results are specific enough to act on
                  immediately.
                </p>
              </div>
            </section>

            <section
              className="homepage-section flyercheck-faq-section"
              data-name="note-on-accuracy"
              aria-labelledby="accuracy-heading"
            >
              <h2 id="accuracy-heading" className="section-title">
                A note on accuracy
              </h2>
              <div className="flyercheck-faq-list">
                <p className="flyercheck-faq-answer">
                  FlyerCheck is an AI-powered tool, which means its analysis is
                  probabilistic rather than absolute. It will occasionally flag
                  something that does not need fixing, and it may miss something
                  specific to your event or audience. It is designed to catch the
                  most common and costly mistakes — not to be exhaustive. Use it
                  as a second set of eyes, not as a final authority. Your
                  knowledge of your event and your audience still matters. When in
                  doubt, fix the clear logistics issues first — date, time, venue,
                  and ticket path — and treat the rest as optional judgment calls.
                </p>
              </div>
            </section>
          </div>
        </div>
        <AdBanner inline />
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
