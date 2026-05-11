import { trackEvent } from "../lib/analytics";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import FileUploader from "../components/FileUploader";
import { reportError } from "../utils/errorHandler";
import logoFull from "../assets/flyercheck-logo-full.png";
import "../utils/flyerAnalysisService";

function FlyerCheckPage() {
  try {
    useEffect(() => {
      trackEvent({
        eventName: "flyercheck_page_view",
      });
    }, []);

    return (
      <div className="flyercheck-page" data-name="flyercheck-page">
        <Navbar />
        <section
          className="flyercheck-landing"
          aria-label="Analyze your flyer"
        >
          <div className="flyercheck-landing-inner">
            <div className="flyercheck-landing-tool">
              <FileUploader />
            </div>
            <section className="hero hero-flyercheck" data-name="hero">
              <div className="hero-content">
                <div className="hero-flyercheck-bar">
                  <img
                    src={logoFull}
                    alt=""
                    className="hero-flyercheck-logo"
                  />
                  <div className="hero-flyercheck-copy">
                    <h1 className="hero-title">FlyerCheck™</h1>
                    <p className="hero-subtitle">
                      Don&apos;t let your audience find the mistake first.
                    </p>
                    <p className="hero-description">
                      Upload your flyer. Free to use — no account needed.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section
          className="host-content-section"
          aria-labelledby="flyercheck-overview-heading"
        >
          <div className="host-content-container">
            <h2
              id="flyercheck-overview-heading"
              className="host-content-title"
            >
              Overview
            </h2>
            <p className="host-content-text">
              FlyerCheck reviews your flyer before your audience does —
              flagging missing information, weak hierarchy, and anything that
              could cause confusion before your event goes live.
            </p>
          </div>
        </section>

        <section
          className="host-content-section host-content-section--alt"
          aria-labelledby="flyercheck-problem-heading"
        >
          <div className="host-content-container">
            <h2
              id="flyercheck-problem-heading"
              className="host-content-title"
            >
              The Problem
            </h2>
            <p className="host-content-text">
              You&apos;ve seen it happen. The flyer goes out and someone texts:
              &quot;Hey — there&apos;s no address on here.&quot; By then it&apos;s too late.
              One overlooked detail can undercut an otherwise strong event.
            </p>
            <ul className="host-content-list">
              <li>No address, time, or ticket link</li>
              <li>Key details buried under decorative elements</li>
              <li>Text too small to read on a phone</li>
              <li>No clear call to action</li>
              <li>Inconsistent fonts and cluttered layouts</li>
            </ul>
            <p className="host-content-text">
              These aren&apos;t just design problems. They&apos;re communication
              failures. FlyerCheck helps you catch them before your audience
              does.
            </p>
          </div>
        </section>

        <section
          className="host-content-section"
          aria-labelledby="flyercheck-how-heading"
        >
          <div className="host-content-container">
            <h2 id="flyercheck-how-heading" className="host-content-title">
              How It Works
            </h2>
            <p className="host-content-text">
              Upload your flyer. FlyerCheck analyzes it against the five
              questions every guest is asking:
            </p>
            <ul className="host-content-list">
              <li>What is this event?</li>
              <li>When is it happening?</li>
              <li>Where is it happening?</li>
              <li>Who is it for?</li>
              <li>What should I do next?</li>
            </ul>
            <p className="host-content-text">
              That&apos;s it. No account required. Results in seconds.
            </p>
          </div>
        </section>

        <section
          className="host-content-section host-content-section--alt"
          aria-labelledby="flyercheck-clarity-heading"
        >
          <div className="host-content-container">
            <h2
              id="flyercheck-clarity-heading"
              className="host-content-title"
            >
              Why Flyer Clarity Matters
            </h2>
            <p className="host-content-text">
              Your flyer is often the first thing a potential guest sees —
              before the website, before the ticket link, before they ask
              anyone about it. If it doesn&apos;t answer the basics immediately,
              most people won&apos;t dig deeper. Clear flyers reduce confusion,
              build confidence, and give your event a better chance of filling
              the room.
            </p>
          </div>
        </section>

        <section
          className="host-content-section"
          aria-labelledby="flyercheck-mistakes-heading"
        >
          <div className="host-content-container">
            <h2
              id="flyercheck-mistakes-heading"
              className="host-content-title"
            >
              Common Mistakes in Event Flyer Design
            </h2>
            <p className="host-content-text">
              The most common flyer mistakes are easy to miss when you&apos;re
              close to the work.
            </p>
            <ul className="host-content-list">
              <li>No address on the flyer</li>
              <li>Date and time hidden at the bottom</li>
              <li>Three fonts, four colors, no hierarchy</li>
              <li>Looks great on desktop — unreadable on a phone</li>
              <li>Strong visuals, no CTA</li>
            </ul>
            <p className="host-content-text">
              FlyerCheck gives you a second set of eyes before it goes public.
            </p>
          </div>
        </section>

        <section
          className="host-content-section host-content-section--alt"
          aria-labelledby="flyercheck-use-cases-heading"
        >
          <div className="host-content-container">
            <h2
              id="flyercheck-use-cases-heading"
              className="host-content-title"
            >
              Use Cases
            </h2>
            <p className="host-content-text">
              FlyerCheck works for anyone promoting a live experience.
            </p>

            <h3 className="host-content-subtitle">
              Event Promoters &amp; Street Teams
            </h3>
            <p className="host-content-text">
              Moving fast and pushing flyers across multiple channels? FlyerCheck
              is your last check before you hit send.
            </p>

            <h3 className="host-content-subtitle">
              Venue &amp; Hospitality Teams
            </h3>
            <p className="host-content-text">
              Bars, restaurants, and hotels promoting recurring events can use
              FlyerCheck to keep materials clear and consistent every time.
            </p>

            <h3 className="host-content-subtitle">Independent Organizers</h3>
            <p className="host-content-text">
              No design team? No problem. FlyerCheck helps solo organizers catch
              what a second opinion would have caught.
            </p>

            <h3 className="host-content-subtitle">Brand Activations &amp; Pop-Ups</h3>
            <p className="host-content-text">
              When your promotional window is short, your flyer has to work
              immediately. FlyerCheck helps make sure it does.
            </p>
          </div>
        </section>

        <section
          className="host-content-section"
          aria-labelledby="flyercheck-faq-heading"
        >
          <div className="host-content-container">
            <h2 id="flyercheck-faq-heading" className="host-content-title">
              Frequently Asked Questions
            </h2>

            <dl className="host-faq-list">
              <dt className="host-faq-question">
                What does FlyerCheck analyze?
              </dt>
              <dd className="host-faq-answer">
                It checks for missing event details, weak visual hierarchy,
                readability issues, and unclear calls to action.
              </dd>

              <dt className="host-faq-question">
                Who is FlyerCheck designed for?
              </dt>
              <dd className="host-faq-answer">
                Event organizers, promoters, venue teams, and anyone who sends a
                flyer before an event.
              </dd>

              <dt className="host-faq-question">
                Does FlyerCheck replace a graphic designer?
              </dt>
              <dd className="host-faq-answer">
                No. It&apos;s a pre-publish review tool — a second set of eyes,
                not a redesign.
              </dd>

              <dt className="host-faq-question">
                Can FlyerCheck be used for different types of events?
              </dt>
              <dd className="host-faq-answer">
                Yes. Community events, venue programming, brand activations,
                festivals, and more.
              </dd>

              <dt className="host-faq-question">
                Why is flyer clarity so important?
              </dt>
              <dd className="host-faq-answer">
                Because guests decide in seconds. If the basics aren&apos;t clear,
                most won&apos;t ask for clarification — they&apos;ll just move on.
              </dd>
            </dl>
          </div>
        </section>

        <AdBanner />

        <p
          style={{
            fontSize: "0.75rem",
            opacity: 0.5,
            textAlign: "center",
            padding: "0 1rem 2rem",
          }}
        >
          Do not upload sensitive personal data. Upload only content you have
          rights to use.
        </p>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error("FlyerCheckPage error:", error);
    reportError(error);
    return null;
  }
}

export default FlyerCheckPage;