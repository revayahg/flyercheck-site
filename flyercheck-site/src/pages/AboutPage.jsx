import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import FounderCard from "../components/FounderCard";
import { reportError } from "../utils/errorHandler";
import { usePageJsonLd } from "../utils/pageJsonLd";

const jolysePersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jolyse Stultz",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Revaya Hospitality Group",
    url: "https://www.revayahg.com",
  },
  url: "https://www.flyercheck.io/about",
  sameAs: [
    "https://www.linkedin.com/in/jolysestultz",
    "https://www.instagram.com/revayahg",
  ],
  knowsAbout: [
    "Event Operations",
    "Hospitality",
    "Live Events",
    "Event Technology",
  ],
};

export default function AboutPage() {
  try {
    usePageJsonLd(jolysePersonSchema);
    const foundersList = [
      {
        name: "Jolyse Stultz",
        imageClass: "jolyse",
        title: "CEO",
        image:
          "https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/e60eaeed-06d4-4811-9d58-57fee988b301.png",
        email: "info@revayahg.com",
        bio: [
          "Jolyse is an energetic and highly motivated experience strategy, digital, and analytics professional with over 15 years of progressive experience in the travel & hospitality sector. She is deeply passionate about travel, hospitality, and delivering impactful guest experiences. Jolyse thrives at the intersection of strategy, technology, and human connection.",
          "Jolyse specializes in leveraging digital innovation to enhance guest interactions, making every touchpoint seamless, engaging, and memorable. Whether it's optimizing digital platforms, designing frictionless customer journeys, or using data to drive smarter decisions, Jolyse's professional mantra is simple:"
        ],
        mantra: "I sincerely believe that everyone deserves to have a good time."
      },
      {
        name: "Thiago Ferreira",
        imageClass: "thiago",
        title: "Chief AI Officer",
        image:
          "https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/fefdf014-b643-44d6-a0e0-f8622be9e7ce.png",
        email: "info@revayahg.com",
        bio: [
          "As the Founder of Elevate AI Consulting and Chief AI Officer at Revaya HG, I specialize in helping businesses through custom AI automation and executive training solutions.",
          "Thiago is an MBA graduate of IE Business School in Madrid, where he served as President of the school's LGBTQ+ club and currently teaches executive MBA candidates as an Assistant AI Professor. He has led international business development efforts across the U.S., Canada, Spain, and Portugal, bringing a global, people-first approach to technology. He also volunteers with Junior Achievement of Greater Miami, teaching entrepreneurship, investing and other real-world skills to the next generation of leaders."
        ],
        mantra: "AI for humans, by humans."
      }
    ];

    return (
      <div data-name="about-page">
        <Navbar />
        <div className="about-section" data-name="about-content">
          <div className="container">
            <h1 className="about-title">Our Founders</h1>
            <p className="why-revaya-text" style={{ maxWidth: "720px", margin: "0 auto 2rem", textAlign: "center" }}>
              FlyerCheck is built by the team at Revaya Hospitality Group — event operators and technologists who help hospitality professionals, event organizers, and promoters produce stronger live experiences.
            </p>

            <section
              className="about-founder-section about-info-card"
              data-name="about-founder-section"
              aria-labelledby="about-founder-heading"
            >
              <h2 id="about-founder-heading" className="about-info-title">
                About the founder
              </h2>
              <div className="about-founder-layout">
                <div className="about-founder-photo">
                  {/* Add headshot photo to public/images/ */}
                  <img
                    src="/images/jolyse-stultz.jpg"
                    alt="Jolyse Stultz, Founder of Revaya Hospitality Group"
                    className="about-founder-headshot"
                    width={280}
                    height={280}
                  />
                </div>
                <div className="about-founder-content">
                  <p className="about-founder-byline">
                    Jolyse Stultz, Founder — Revaya Hospitality Group
                  </p>
                  <p className="about-info-p">
                    I&apos;ve spent more than fifteen years in travel and hospitality — running events, watching teams scramble in the week before doors open, and sitting in the room when a small miscommunication turned into a very long night. The work taught me that great guest experiences don&apos;t happen by accident. They happen when the people behind the scenes have clear information, aligned timelines, and tools that match how live events actually run.
                  </p>
                  <p className="about-info-p">
                    FlyerCheck came out of a frustration I kept seeing up close: a flyer goes out with a wrong date, a buried ticket link, or text that doesn&apos;t read on a phone screen — and nobody catches it until the comments start rolling in. We built it as a simple pre-publish check for hospitality professionals, event organizers, and promoters who move fast and don&apos;t always have a second pair of eyes before post. It&apos;s not trying to replace your designer. It&apos;s the quick sanity pass before your audience becomes the proofreader.
                  </p>
                  <p className="about-info-p">
                    Revaya Hospitality Group is where we&apos;re building the rest of that picture — practical tools, operational guidance, and technology that reduces the friction between planning and execution. My goal is straightforward: help the people who make live events happen spend less time chasing details and more time delivering experiences worth showing up for.
                  </p>
                  <div className="about-founder-social" data-name="about-founder-social">
                    <p className="about-founder-social-label">Connect with Jolyse</p>
                    <div className="about-founder-social-links">
                      <a
                        href="https://www.linkedin.com/in/jolysestultz"
                        className="about-founder-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-name="about-founder-linkedin"
                      >
                        <i className="fab fa-linkedin" aria-hidden="true" />
                        LinkedIn
                      </a>
                      <a
                        href="https://www.instagram.com/revayahg"
                        className="about-founder-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-name="about-founder-instagram"
                      >
                        <i className="fab fa-instagram" aria-hidden="true" />
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="founders-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2.5rem",
                alignItems: "start",
                maxWidth: "1200px",
                margin: "0 auto"
              }}
            >
              {foundersList.map((founder, index) => (
                <FounderCard key={index} {...founder} />
              ))}
            </div>

            <div className="about-info-wrapper">
              <section className="about-info-block about-info-card">
                <div className="about-info-block-header">
                  <i className="fas fa-eye about-info-icon" aria-hidden="true" />
                  <h2 className="about-info-title">Our Perspective on Hospitality and Event Operations</h2>
                </div>
                <p className="about-info-p">
                  Live events are operationally complex. Behind every smooth opening night or seamless conference is a web of moving parts: vendors arriving on schedule, venues prepared to spec, staff briefed on roles, and guests guided from arrival to departure. The coordination required is substantial, and the margin for error is often slim.
              </p>
              <p className="about-info-p">
                Success depends on clear communication and reliable information systems. When vendor A’s load-in time shifts, production and venue teams need to know. When a session runs over, catering and the next presenter need to align. Fragmented communication leads to delays, duplicated effort, and stress that guests may never see but that teams feel every day.
              </p>
              <p className="about-info-p">
                Hospitality principles—anticipating needs, reducing friction, and creating a sense of care—apply as much to back-of-house operations as they do to the guest experience. Event execution is not only about logistics; it is about enabling teams to deliver consistently so that every attendee leaves with a positive impression.
              </p>
            </section>

            <section className="about-info-block about-info-card">
              <div className="about-info-block-header">
                <i className="fas fa-star about-info-icon" aria-hidden="true" />
                <h2 className="about-info-title">Why Revaya Exists</h2>
              </div>
              <p className="about-info-p">
                Event teams routinely face the same operational problems: tools that don’t talk to each other, critical details buried in email threads, and no single place to see who is doing what and when. These issues are not failures of effort; they are limitations of how information is shared and coordinated.
              </p>
              <p className="about-info-p">
                Fragmented tools and communication breakdowns create hidden cost—extra hours, last-minute scrambles, and burnout. We started Revaya to address that gap. Our goal is to improve how event teams manage information: one source of truth, clearer coordination, and technology that supports the way teams actually work.
              </p>
              <p className="about-info-p">
                We build and advise with a focus on reducing complexity so that hospitality professionals, event organizers, promoters, and their teams can focus on what matters most: delivering great experiences.
              </p>
            </section>

            <section className="about-info-block about-info-card">
              <div className="about-info-block-header">
                <i className="fas fa-bullseye about-info-icon" aria-hidden="true" />
                <h2 className="about-info-title">Our Focus</h2>
              </div>
              <div className="about-info-pills">
                <div className="about-info-pill">
                  <i className="fas fa-calendar-check about-info-pill-icon" aria-hidden="true" />
                  <span>Event operations and coordination</span>
                </div>
                <div className="about-info-pill">
                  <i className="fas fa-concierge-bell about-info-pill-icon" aria-hidden="true" />
                  <span>Hospitality-driven guest experiences</span>
                </div>
                <div className="about-info-pill">
                  <i className="fas fa-truck about-info-pill-icon" aria-hidden="true" />
                  <span>Vendor communication and logistics</span>
                </div>
                <div className="about-info-pill">
                  <i className="fas fa-microchip about-info-pill-icon" aria-hidden="true" />
                  <span>Technology that simplifies event execution</span>
                </div>
              </div>
            </section>

            <section className="about-info-block about-info-card">
              <div className="about-info-block-header">
                <i className="fas fa-handshake about-info-icon" aria-hidden="true" />
                <h2 className="about-info-title">Roles We Support</h2>
              </div>
              <p className="about-info-p">
                Our tools and guidance are designed to support hospitality professionals, event organizers, and promoters — along with venue operators, event producers, and production teams across live events:
              </p>
              <div className="about-info-pills">
                <div className="about-info-pill">
                  <i className="fas fa-clipboard-list about-info-pill-icon" aria-hidden="true" />
                  <span>Event planners &amp; producers</span>
                </div>
                <div className="about-info-pill">
                  <i className="fas fa-music about-info-pill-icon" aria-hidden="true" />
                  <span>Festival organizers</span>
                </div>
                <div className="about-info-pill">
                  <i className="fas fa-building about-info-pill-icon" aria-hidden="true" />
                  <span>Venue operators</span>
                </div>
                <div className="about-info-pill">
                  <i className="fas fa-hotel about-info-pill-icon" aria-hidden="true" />
                  <span>Hospitality professionals</span>
                </div>
                <div className="about-info-pill">
                  <i className="fas fa-bullhorn about-info-pill-icon" aria-hidden="true" />
                  <span>Event organizers &amp; promoters</span>
                </div>
                <div className="about-info-pill">
                  <i className="fas fa-boxes about-info-pill-icon" aria-hidden="true" />
                  <span>Production and logistics teams</span>
                </div>
              </div>
            </section>
            </div>
          </div>
        </div>
        <AdBanner inline />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("AboutPage error:", error);
    reportError(error);
    return null;
  }
}