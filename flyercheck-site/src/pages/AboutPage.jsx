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
  jobTitle: "Co-founder & CEO",
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
        title: "Co-founder & CEO",
        image:
          "https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/e60eaeed-06d4-4811-9d58-57fee988b301.png",
        email: "info@revayahg.com",
        linkedin: "https://www.linkedin.com/in/jolysestultz",
        bio: [
          "Jolyse is an experience strategy, digital, and analytics professional with over 15 years in travel and hospitality. She has run events, watched teams scramble in the week before doors open, and built FlyerCheck as a pre-publish check for promoters who move fast — catching wrong dates, buried ticket links, and unreadable text before the audience does.",
          "She specializes in leveraging digital innovation to enhance guest interactions, making every touchpoint seamless, engaging, and memorable. Whether it's optimizing digital platforms, designing frictionless customer journeys, or using data to drive smarter decisions, Jolyse's professional mantra is simple:",
        ],
        mantra: "I sincerely believe that everyone deserves to have a good time.",
      },
      {
        name: "Thiago Ferreira",
        imageClass: "thiago",
        title: "Co-founder & Chief AI Officer",
        image:
          "https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/fefdf014-b643-44d6-a0e0-f8622be9e7ce.png",
        email: "info@revayahg.com",
        linkedin: "https://www.linkedin.com/in/thiagoef/",
        bio: [
          "Thiago co-founded FlyerCheck and leads AI strategy and engineering — shaping how the analyzer reviews event flyers for clarity, completeness, and readability at mobile scale.",
          "He is an MBA graduate of IE Business School in Madrid, where he served as President of the school's LGBTQ+ club and currently teaches executive MBA candidates as an Assistant AI Professor. He has led international business development across the U.S., Canada, Spain, and Portugal, bringing a global, people-first approach to product development. He also volunteers with Junior Achievement of Greater Miami, teaching entrepreneurship and investing to the next generation of leaders.",
        ],
        mantra: "AI for humans, by humans.",
      },
    ];

    return (
      <div data-name="about-page">
        <Navbar />
        <div className="about-section" data-name="about-content">
          <div className="container">
            <h1 className="about-title">Our Co-founders</h1>
            <p className="why-revaya-text" style={{ maxWidth: "720px", margin: "0 auto 2rem", textAlign: "center" }}>
              FlyerCheck is a free pre-publish flyer review tool for hospitality professionals, event organizers, and promoters — built by Jolyse and Thiago, operators who have run galas, festivals, and venue nights and know what breaks when details slip.
            </p>

            <div
              className="founders-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2.5rem",
                alignItems: "start",
                maxWidth: "1200px",
                margin: "0 auto 2.5rem",
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
                <h2 className="about-info-title">Why We Built FlyerCheck</h2>
              </div>
              <p className="about-info-p">
                Event teams routinely ship flyers under time pressure — often without a formal QA step before post. A wrong date, buried ticket link, or unreadable text at phone-screen size can cost RSVPs long before anyone notices in the comments.
              </p>
              <p className="about-info-p">
                FlyerCheck addresses that gap with a focused pre-publish check: upload the version you plan to post, review flags on logistics and readability, fix what matters, and publish with confidence. It is not a design tool — it is a second set of eyes built for how promoters actually work.
              </p>
              <p className="about-info-p">
                We build with hospitality professionals, event organizers, promoters, and venue teams in mind — people who need clear information fast, not another dashboard to learn.
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
