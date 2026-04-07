import { trackEvent } from "../lib/analytics";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import FileUploader from "../components/FileUploader";
import { reportError } from "../utils/errorHandler";
import "../utils/flyerAnalysisService";

function FlyerCheckPage() {
  try {
    useEffect(() => {
      trackEvent({
        eventName: "flyercheck_page_view",
      });
    }, []);

    useEffect(() => {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    }, []);

    return (
      <div className="flyercheck-page" data-name="flyercheck-page">
        <Navbar />
        <section
          className="flyercheck-landing"
          aria-label="Analyze your flyer"
        >
          <div className="flyercheck-landing-inner">
            <section className="hero hero-flyercheck" data-name="hero">
              <div className="hero-content">
                <h1 className="hero-title">FlyerCheck™</h1>
                <p className="hero-subtitle">
                  Your flyer is almost perfect. Let&apos;s make it undeniable.
                </p>
                <p className="hero-description">
                  Upload your flyer and receive instant feedback on clarity,
                  readability, and missing event details.
                </p>
              </div>
            </section>
            <div className="flyercheck-landing-tool">
              <FileUploader />
            </div>
          </div>
        </section>

        <AdBanner />

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
              FlyerCheck is a flyer analysis tool designed to help event
              organizers review promotional materials before they are published.
            </p>
            <p className="host-content-text">
              For many events, the flyer is the first piece of communication a
              guest sees. It often determines whether a potential attendee
              understands the value of the event, knows what action to take, and
              feels confident enough to attend.
            </p>
            <p className="host-content-text">
              FlyerCheck helps identify common communication and design issues in
              event flyers, including missing information, weak hierarchy, and
              unclear calls to action. By reviewing flyers before they go live,
              teams can reduce avoidable mistakes and improve the clarity of
              their event messaging.
            </p>
            <p className="host-content-text">
              The goal is not simply to improve design. It is to improve
              communication so guests can quickly understand what the event is,
              where it is happening, and how to participate.
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
              Event flyers often carry a heavy communication burden. In a single
              image or graphic, organizers are expected to communicate the
              purpose of the event, the date and time, the location, the
              audience, and the action guests should take next.
            </p>
            <p className="host-content-text">
              When key information is missing or poorly organized, potential
              attendees can become confused or lose interest. Even strong events
              can underperform if their promotional materials do not clearly
              communicate the basics.
            </p>
            <p className="host-content-text">
              Common flyer issues include:
            </p>
            <ul className="host-content-list">
              <li>missing location or time details</li>
              <li>weak visual hierarchy</li>
              <li>cluttered layouts</li>
              <li>unclear calls to action</li>
              <li>text that is difficult to read on mobile devices</li>
            </ul>
            <p className="host-content-text">
              These are not only design issues — they are event communication
              issues. FlyerCheck helps organizers spot them earlier.
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
              FlyerCheck reviews uploaded event flyer content and highlights
              common communication and presentation issues that can affect
              audience understanding.
            </p>
            <p className="host-content-text">
              The tool is designed to help event teams evaluate whether a flyer
              clearly answers the questions guests are most likely to ask:
            </p>
            <ul className="host-content-list">
              <li>What is this event?</li>
              <li>When is it happening?</li>
              <li>Where is it happening?</li>
              <li>Who is it for?</li>
              <li>What should I do next?</li>
            </ul>
            <p className="host-content-text">
              By identifying communication gaps and layout concerns, FlyerCheck
              helps teams strengthen the clarity of their event materials before
              those materials are shared publicly.
            </p>
            <p className="host-content-text">
              It can be especially useful for teams working quickly, managing
              multiple events, or reviewing a large volume of promotional
              materials.
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
              A flyer is often the first touchpoint in the guest journey. Before
              someone visits an event website, buys a ticket, or asks a
              question, they may first encounter a flyer on social media, in an
              email, or through a shared message.
            </p>
            <p className="host-content-text">
              If the flyer is confusing, incomplete, or difficult to scan, the
              audience may never take the next step.
            </p>
            <p className="host-content-text">
              Clear communication does more than make a flyer look polished. It
              reduces friction, improves guest confidence, and increases the
              likelihood that the right audience will understand the event and
              respond.
            </p>
            <p className="host-content-text">
              For hospitality and event teams, better flyer communication
              supports stronger attendance, fewer guest questions, and a more
              consistent brand experience.
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
              Some of the most common flyer problems are easy to miss
              internally, especially when teams are close to the content or
              moving quickly.
            </p>
            <p className="host-content-text">Typical issues include:</p>
            <ul className="host-content-list">
              <li>emphasizing decorative elements over key event details</li>
              <li>burying date, time, or location information</li>
              <li>using too many fonts or inconsistent visual styles</li>
              <li>making mobile readability an afterthought</li>
              <li>relying on visuals without a strong call to action</li>
            </ul>
            <p className="host-content-text">
              These mistakes can reduce audience understanding even when the
              event itself is compelling. FlyerCheck helps teams review flyers
              with a clearer, more objective lens.
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
              FlyerCheck can support a wide range of event and hospitality
              marketing scenarios.
            </p>

            <h3 className="host-content-subtitle">Community Events</h3>
            <p className="host-content-text">
              Neighborhood events, nonprofit events, and public festivals often
              rely on flyers and social graphics to spread awareness quickly.
              FlyerCheck helps ensure the message is complete and easy to
              understand.
            </p>

            <h3 className="host-content-subtitle">Venue Programming</h3>
            <p className="host-content-text">
              Restaurants, hotels, bars, and entertainment venues frequently
              promote recurring events and activations. FlyerCheck helps teams
              maintain clarity and consistency across these materials.
            </p>

            <h3 className="host-content-subtitle">Brand Activations</h3>
            <p className="host-content-text">
              Experiential campaigns and pop-up events often need promotional
              materials that communicate quickly and clearly. FlyerCheck helps
              teams evaluate whether those materials are doing their job.
            </p>

            <h3 className="host-content-subtitle">Fast-Moving Event Teams</h3>
            <p className="host-content-text">
              Teams working under deadline pressure can use FlyerCheck as an
              extra review step before publishing event materials.
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
                FlyerCheck reviews event flyer content for communication
                clarity, information completeness, and common design or layout
                issues that may affect audience understanding.
              </dd>

              <dt className="host-faq-question">
                Who is FlyerCheck designed for?
              </dt>
              <dd className="host-faq-answer">
                FlyerCheck is designed for event organizers, hospitality teams,
                marketers, venue operators, and anyone responsible for creating
                or reviewing promotional materials for live experiences.
              </dd>

              <dt className="host-faq-question">
                Does FlyerCheck replace a graphic designer?
              </dt>
              <dd className="host-faq-answer">
                No. FlyerCheck is intended as a review and quality-control tool.
                It helps identify potential issues before publishing, but it
                does not replace professional design judgment.
              </dd>

              <dt className="host-faq-question">
                Can FlyerCheck be used for different types of events?
              </dt>
              <dd className="host-faq-answer">
                Yes. FlyerCheck can support a wide range of event types,
                including community events, hospitality activations, festivals,
                venue programming, and corporate events.
              </dd>

              <dt className="host-faq-question">
                Why is flyer clarity so important?
              </dt>
              <dd className="host-faq-answer">
                A flyer often serves as the first impression of an event. If key
                information is missing or hard to understand, potential guests
                may not take the next step.
              </dd>
            </dl>
          </div>
        </section>

        <section
          className="host-content-section host-content-section--alt"
          aria-labelledby="flyercheck-communication-heading"
        >
          <div className="host-content-container">
            <h2
              id="flyercheck-communication-heading"
              className="host-content-title"
            >
              Why Clear Event Communication Matters
            </h2>
            <p className="host-content-text">
              Guests make fast decisions. In many cases, they decide within
              seconds whether an event feels relevant, interesting, and worth
              pursuing further.
            </p>
            <p className="host-content-text">
              When communication is clear, guests feel more confident. They
              understand what the event is, how to attend, and what to expect.
            </p>
            <p className="host-content-text">
              When communication is unclear, even strong events can lose
              momentum.
            </p>
            <p className="host-content-text">
              FlyerCheck supports clearer event communication by helping teams
              review their materials before they are published, reducing the
              risk of confusion at the earliest stage of the guest journey.
            </p>
          </div>
        </section>

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