import React from "react";
import { reportError } from "../utils/errorHandler";
import { blogPosts } from "../content/blogPosts";

export function WhatWeDoSection() {
  try {
    const pillars = [
      {
        icon: "fas fa-calendar-check",
        label: "Product",
        title: "Revaya Host™",
        description:
          "The event operations platform. Plan the show, manage vendors, and run day-of from one place — instead of spreadsheets, inboxes, and a generic project board.",
        href: "/revaya-host",
        cta: "See the Overview"
      },
      {
        icon: "fas fa-chart-line",
        label: "In development",
        title: "Ancillary Revenue",
        description:
          "Tools to sell more around the event — not just the ticket. Think hotel blocks, tours, experiences, and other add-ons that guests actually book.",
        extras: ["Hotels", "Tours", "Experiences"]
      }
    ];

    return (
      <section className="homepage-section what-we-do-section" data-name="what-we-do">
        <div className="container">
          <h2 className="section-title" data-name="what-we-do-title">What We Do</h2>
          <p className="section-subtitle" data-name="what-we-do-subtitle">
            A product for running the show, and tools we’re building for hotels, tours, and other add-ons around the ticket.
          </p>
          <div className="pillars-grid" data-name="pillars-grid">
            {pillars.map((pillar, index) => (
              <div key={index} className="pillar-card" data-name={`pillar-${index}`}>
                <div className="pillar-icon" data-name={`pillar-icon-${index}`}>
                  <i className={pillar.icon} aria-hidden="true"></i>
                </div>
                <p className="pillar-label">{pillar.label}</p>
                <h3 className="pillar-title" data-name={`pillar-title-${index}`}>
                  {pillar.title}
                </h3>
                <p className="pillar-description" data-name={`pillar-description-${index}`}>
                  {pillar.description}
                </p>
                {pillar.extras ? (
                  <ul className="pillar-extras">
                    {pillar.extras.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {pillar.href ? (
                  <a className="pillar-cta" href={pillar.href}>
                    {pillar.cta}
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("WhatWeDoSection error:", error);
    reportError(error);
    return null;
  }
}

export function WhoWeWorkWithSection() {
  try {
    const clients = [
      { label: "Event Producers", icon: "fas fa-star" },
      { label: "Festivals And City-Wide Events", icon: "fas fa-music" },
      { label: "Conferences And Conventions", icon: "fas fa-microphone" },
      { label: "Nonprofits And Community Events", icon: "fas fa-hand-holding-heart" },
      { label: "Hotels & Property Managers", icon: "fas fa-hotel" }
    ];

    return (
      <section className="homepage-section who-we-work-with-section" data-name="who-we-work-with">
        <div className="container">
          <h2 className="section-title" data-name="who-we-work-with-title">Who We Work With</h2>
          <p className="section-subtitle" data-name="who-we-work-with-subtitle">
            We serve organizations that prioritize exceptional guest experiences and operational excellence.
          </p>
          <div className="clients-list" data-name="clients-list">
            {clients.map((client, index) => (
              <div key={index} className="client-item" data-name={`client-item-${index}`}>
                <span className="client-item-icon">
                  <i className={client.icon} aria-hidden="true"></i>
                </span>
                {client.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("WhoWeWorkWithSection error:", error);
    reportError(error);
    return null;
  }
}

export function WhyRevayaExistsSection() {
  try {
    const whyRevayaImage =
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80";
    const inherited = [
      { icon: "fas fa-table", name: "Budget.xlsx", label: "Spreadsheets" },
      { icon: "fas fa-file-lines", name: "Timeline.docx", label: "Documents" },
      { icon: "fas fa-envelope", name: "Inbox", label: "Email" },
      { icon: "fas fa-list-check", name: "Project board", label: "Generic PM" }
    ];
    const integrated = [
      { icon: "fas fa-table", label: "Budget" },
      { icon: "fas fa-file-lines", label: "Timeline" },
      { icon: "fas fa-envelope", label: "Comms" },
      { icon: "fas fa-list-check", label: "Tasks" },
      { icon: "fas fa-handshake", label: "Vendors" },
      { icon: "fas fa-star", label: "Guests" },
      { icon: "fas fa-map-location-dot", label: "Venue" },
      { icon: "fas fa-bolt", label: "Live ops" }
    ];

    return (
      <section className="homepage-section why-revaya-section" data-name="why-revaya">
        <div className="container">
          <h2 className="section-title" data-name="why-revaya-title">Why Revaya Exists</h2>
          <p className="section-subtitle" data-name="why-revaya-subtitle">
            Event work was never meant to live in spreadsheets, inboxes, and generic project tools.
          </p>

          <div className="why-revaya-banner" data-name="why-revaya-image">
            <img
              src={whyRevayaImage}
              alt="Teams coordinating a live event"
              className="why-revaya-image"
            />
            <p className="why-revaya-banner-caption">
              Live events need one operational picture — not four disconnected tools.
            </p>
          </div>

          <div className="why-revaya-compare" data-name="why-revaya-content">
            <article className="why-revaya-panel why-revaya-panel-problem">
              <p className="why-revaya-panel-kicker">The inherited stack</p>
              <h3 className="why-revaya-panel-title">Tools that work in isolation</h3>
              <div className="why-revaya-fragments" aria-label="Fragmented event tools">
                {inherited.map((item, index) => (
                  <div
                    key={item.label}
                    className={`why-revaya-fragment why-revaya-fragment-${index}`}
                  >
                    <div className="why-revaya-fragment-bar">
                      <span className="why-revaya-fragment-dots" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className="why-revaya-fragment-file">{item.name}</span>
                    </div>
                    <div className="why-revaya-fragment-body">
                      <span className="why-revaya-fragment-icon" aria-hidden="true">
                        <i className={item.icon}></i>
                      </span>
                      <span>{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="why-revaya-fragment-note">Four silos. No shared picture.</p>
            </article>

            <article className="why-revaya-panel why-revaya-panel-need">
              <p className="why-revaya-panel-kicker">What hospitality needs</p>
              <h3 className="why-revaya-panel-title">Tools that understand the show</h3>
              <div className="why-revaya-system" aria-label="Integrated event operations">
                <div className="why-revaya-system-bar">
                  <span className="why-revaya-system-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>Revaya · Eclipse Gala 2026</span>
                </div>
                <div className="why-revaya-system-body">
                  <ul className="why-revaya-system-nodes">
                    {integrated.slice(0, 4).map((item) => (
                      <li key={item.label}>
                        <span className="why-revaya-system-icon" aria-hidden="true">
                          <i className={item.icon}></i>
                        </span>
                        {item.label}
                      </li>
                    ))}
                  </ul>
                  <div className="why-revaya-system-hub">
                    <span>One operational picture</span>
                  </div>
                  <ul className="why-revaya-system-nodes">
                    {integrated.slice(4).map((item) => (
                      <li key={item.label}>
                        <span className="why-revaya-system-icon" aria-hidden="true">
                          <i className={item.icon}></i>
                        </span>
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="why-revaya-system-note">
                The inherited tools, plus vendors, guests, venue, and live ops — connected.
              </p>
            </article>
          </div>

          <p className="why-revaya-close" data-name="why-revaya-text-2">
            We build technology that understands these nuances from the ground up — tools that feel
            natural to hospitality professionals and give teams the structure to execute flawlessly.
          </p>
        </div>
      </section>
    );
  } catch (error) {
    console.error("WhyRevayaExistsSection error:", error);
    reportError(error);
    return null;
  }
}

export function InsightsSection() {
  try {
    const flyerBlindSpots = {
      title:
        "You're Too Close to the Flyer: How Great Events Lose People Before They Even Show Up",
      description:
        "Discover how event organizers miss critical details in their flyers that prevent potential attendees from showing up. Learn the common blind spots and how to fix them.",
      url: "/blog/flyer-blind-spots",
      date: "January 4, 2026",
      author: "Jolyse Stultz"
    };
    const allInternalPosts = [
      flyerBlindSpots,
      ...blogPosts.map((p) => ({
        title: p.title,
        description: p.description,
        url: `/blog/${p.slug}`,
        date: p.date,
        author: p.author
      }))
    ];
    const parseDate = (dateStr) => {
      const d = new Date(dateStr);
      return isNaN(d.getTime()) ? 0 : d.getTime();
    };
    const featuredPosts = allInternalPosts
      .sort((a, b) => parseDate(b.date) - parseDate(a.date))
      .slice(0, 3);

    return (
      <section className="homepage-section insights-section" data-name="insights">
        <div className="container">
          <h2 className="section-title" data-name="insights-title">Insights & Resources</h2>
          <p className="section-subtitle" data-name="insights-subtitle">
            Original thinking on events, operations, and guest experience.
          </p>
          <div className="insights-grid" data-name="insights-grid">
            {featuredPosts.map((post, index) => (
              <div key={index} className="insight-card" data-name={`insight-${index}`}>
                <h3 className="insight-title" data-name={`insight-title-${index}`}>
                  <a href={post.url}>{post.title}</a>
                </h3>
                <p className="insight-description" data-name={`insight-description-${index}`}>
                  {post.description}
                </p>
                <div className="insight-meta" data-name={`insight-meta-${index}`}>
                  <span className="insight-author">{post.author}</span>
                  <span className="insight-date">{post.date}</span>
                  <a href={post.url} className="insight-link">Read More →</a>
                </div>
              </div>
            ))}
          </div>
          <div className="insights-cta" data-name="insights-cta">
            <a href="/blog" className="btn btn-primary">View All Articles</a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("InsightsSection error:", error);
    reportError(error);
    return null;
  }
}
