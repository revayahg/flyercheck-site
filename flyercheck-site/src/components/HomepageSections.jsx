import React from "react";
import { reportError } from "../utils/errorHandler";
import { getLatestInternalPosts } from "../content/blogPosts";

export function WhatWeDoSection() {
  try {
    const pillars = [
      {
        icon: "fas fa-search",
        title: "Scans for what audiences notice first",
        description:
          "FlyerCheck looks at the details guests actually use to decide — date, time, location, price, and how to get tickets — not abstract design scores.",
      },
      {
        icon: "fas fa-mobile-alt",
        title: "Built for phone-screen speed",
        description:
          "Most flyers get seen on a feed, not a monitor. The check focuses on readability, hierarchy, and contrast at mobile scale.",
      },
      {
        icon: "fas fa-bolt",
        title: "Fast enough for launch day",
        description:
          "Upload, review, adjust. No account, no long onboarding — meant for the hour before you hit post.",
      },
    ];

    return (
      <section className="homepage-section what-we-do-section" data-name="how-flyercheck-works">
        <div className="container">
          <h2 className="section-title" data-name="what-we-do-title">How FlyerCheck works</h2>
          <p className="section-subtitle" data-name="what-we-do-subtitle">
            One upload. A clear list of what to fix. Then you publish with confidence.
          </p>
          <div className="pillars-grid" data-name="pillars-grid">
            {pillars.map((pillar, index) => (
              <div key={index} className="pillar-card" data-name={`pillar-${index}`}>
                <div className="pillar-icon" data-name={`pillar-icon-${index}`}>
                  <i className={pillar.icon} aria-hidden="true"></i>
                </div>
                <h3 className="pillar-title" data-name={`pillar-title-${index}`}>
                  {pillar.title}
                </h3>
                <p className="pillar-description" data-name={`pillar-description-${index}`}>
                  {pillar.description}
                </p>
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
      { label: "Event promoters & street teams", icon: "fas fa-bullhorn" },
      { label: "Independent organizers", icon: "fas fa-star" },
      { label: "Venue & nightlife marketers", icon: "fas fa-building" },
      { label: "Festivals & city-wide events", icon: "fas fa-music" },
      { label: "Brand activations & pop-ups", icon: "fas fa-store" },
      { label: "Community & nonprofit events", icon: "fas fa-hand-holding-heart" },
    ];

    return (
      <section className="homepage-section who-we-work-with-section" data-name="who-uses-flyercheck">
        <div className="container">
          <h2 className="section-title" data-name="who-we-work-with-title">Who uses FlyerCheck</h2>
          <p className="section-subtitle" data-name="who-we-work-with-subtitle">
            Anyone shipping a flyer under pressure — when there&apos;s no time for a second designer review.
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

export function WhyFlyerCheckExistsSection() {
  try {
    const sectionImage =
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

    return (
      <section className="homepage-section why-revaya-section" data-name="why-flyercheck">
        <div className="container">
          <h2 className="section-title" data-name="why-flyercheck-title">Why FlyerCheck exists</h2>
          <div className="why-revaya-grid" data-name="why-flyercheck-content">
            <div className="why-revaya-image-wrap" data-name="why-flyercheck-image">
              <img
                src={sectionImage}
                alt="Crowd at a live event viewing promotional materials"
                className="why-revaya-image"
              />
            </div>
            <div className="why-revaya-content" data-name="why-flyercheck-text-wrap">
              <p className="why-revaya-text" data-name="why-flyercheck-text-1">
                Flyers go out fast — often the same day the lineup changes or the venue updates. The people posting them aren&apos;t always the same people who designed them, and there&apos;s rarely a formal QA step before something hits the feed.
              </p>
              <p className="why-revaya-text" data-name="why-flyercheck-text-2">
                FlyerCheck fills that gap. It&apos;s a pre-publish check built for promoters and event teams who need a straight answer: is anything missing, hard to read, or easy to misinterpret? Not a replacement for a designer — a safety net before your audience becomes the proofreader.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("WhyFlyerCheckExistsSection error:", error);
    reportError(error);
    return null;
  }
}

export function FlyerCheckFaqSection() {
  try {
    const faqs = [
      {
        question: "What does FlyerCheck analyze?",
        answer:
          "It checks for missing event details, weak visual hierarchy, readability issues, and unclear calls to action.",
      },
      {
        question: "Who is FlyerCheck designed for?",
        answer:
          "Event organizers, promoters, venue teams, and anyone who sends a flyer before an event.",
      },
      {
        question: "Does FlyerCheck replace a graphic designer?",
        answer:
          "No. It's a pre-publish review tool — a second set of eyes, not a redesign.",
      },
      {
        question: "Can FlyerCheck be used for different types of events?",
        answer:
          "Yes. Community events, venue programming, brand activations, festivals, and more.",
      },
      {
        question: "Why is flyer clarity so important?",
        answer:
          "Because guests decide in seconds. If the basics aren't clear, most won't ask for clarification — they'll just move on.",
      },
    ];

    return (
      <section
        className="homepage-section flyercheck-faq-section"
        data-name="flyercheck-faq"
        aria-labelledby="flyercheck-faq-heading"
      >
        <div className="container">
          <h2 id="flyercheck-faq-heading" className="section-title">
            Frequently Asked Questions
          </h2>
          <dl className="flyercheck-faq-list">
            {faqs.map((faq) => (
              <div key={faq.question} className="flyercheck-faq-item">
                <dt className="flyercheck-faq-question">{faq.question}</dt>
                <dd className="flyercheck-faq-answer">{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="insights-cta">
            <a href="/faq" className="insight-link">
              More questions? See the full FAQ →
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("FlyerCheckFaqSection error:", error);
    reportError(error);
    return null;
  }
}

export function FlyerCheckResultsMeaningSection() {
  try {
    const categories = [
      {
        title: "Missing event details",
        description:
          "FlyerCheck checks for the information attendees need before they decide to show up: date, time, venue name, address, ticket price, and how to get tickets. A flag here means one or more of these is absent or hard to find. These are the details that, when missing, generate the most confusion — and the most \"wait, where is this again?\" messages in your group chat the day of the event.",
      },
      {
        title: "Readability issues",
        description:
          "This covers text that is difficult to read at phone-screen size: font that is too small, text that blends into the background due to low contrast, or layouts where too much information competes for attention at once. Most flyers are seen at reduced size in a social media feed. If it doesn't read clearly at that scale, it loses people before they engage.",
      },
      {
        title: "Weak or unclear call to action",
        description:
          "A call to action tells people what to do next — buy a ticket, RSVP, follow for updates. A weak CTA is one that's buried, generic (\"click here\"), or absent entirely. FlyerCheck flags CTAs that are likely to reduce conversion even when the rest of the flyer is strong.",
      },
      {
        title: "Visual hierarchy",
        description:
          "Information hierarchy is about whether the most important details are visually dominant. If the DJ name is larger than the venue and date, that's a hierarchy issue — not because the DJ doesn't matter, but because attendees need logistics first. A flag here means the layout may not be guiding the reader's eye in the right order.",
      },
      {
        title: "Branding and consistency",
        description:
          "This covers cases where the visual treatment of the flyer — colors, logos, fonts — appears inconsistent or conflicts in a way that reads as unprofessional or confusing. A clear brand presentation builds trust; inconsistency undermines it before a word is read.",
      },
    ];

    return (
      <section
        className="homepage-section flyercheck-faq-section"
        data-name="what-your-results-mean"
        aria-labelledby="results-meaning-heading"
      >
        <div className="container">
          <h2 id="results-meaning-heading" className="section-title">
            What your results mean
          </h2>
          <dl className="flyercheck-faq-list">
            {categories.map((item) => (
              <div key={item.title} className="flyercheck-faq-item">
                <dt className="flyercheck-faq-question">{item.title}</dt>
                <dd className="flyercheck-faq-answer">{item.description}</dd>
              </div>
            ))}
          </dl>
          <div className="flyercheck-faq-list">
            <p className="flyercheck-faq-answer" data-name="results-meaning-closing">
              FlyerCheck doesn&apos;t score flyers or rank them. It flags specific
              issues so you can decide what to fix before you post. Not every
              flag requires a change — some are judgment calls. The goal is
              to give you a second set of eyes before your audience becomes
              your proofreader.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("FlyerCheckResultsMeaningSection error:", error);
    reportError(error);
    return null;
  }
}

export function InsightsSection() {
  try {
    const featuredPosts = getLatestInternalPosts(4);

    return (
      <section
        className="homepage-section insights-section"
        data-name="insights"
        aria-labelledby="latest-blog-heading"
      >
        <div className="container">
          <h2 id="latest-blog-heading" className="section-title" data-name="insights-title">
            Latest from the Blog
          </h2>
          <p className="section-subtitle" data-name="insights-subtitle">
            Event operations and hospitality insights from FlyerCheck.
          </p>
          <div className="insights-grid" data-name="insights-grid">
            {featuredPosts.map((post, index) => (
              <article key={post.url} className="insight-card" data-name={`insight-${index}`}>
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
              </article>
            ))}
          </div>
          <div className="insights-cta" data-name="insights-cta">
            <a href="/blog" className="btn btn-primary">View all posts</a>
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
