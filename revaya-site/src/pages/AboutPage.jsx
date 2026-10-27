import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FounderCard from "../components/FounderCard";
import { reportError } from "../utils/errorHandler";

export default function AboutPage() {
  try {
    const foundersList = [
      {
        name: "Jolyse Stultz",
        imageClass: "jolyse",
        title: "CEO",
        image:
          "https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/e60eaeed-06d4-4811-9d58-57fee988b301.png",
        email: "info@revayahg.com",
        bio: [
          "Jolyse has spent 15 years in travel and hospitality, mostly on how a trip or a show actually runs — guests, crew, and the systems in between. At Royal Caribbean she led digital strategy for the company’s first mobile app. Since then she’s mapped guest journeys for cruise brands, stood up contact centers and booking tools, and sat with operators when the reservation system didn’t match the floor.",
          "She started Revaya after watching event teams run live shows out of spreadsheets, inboxes, and generic project tools. The job is still the same: make the operation make sense so people can have a good time. Her professional mantra is simple:"
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

            <div className="founders-grid">
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
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("AboutPage error:", error);
    reportError(error);
    return null;
  }
}