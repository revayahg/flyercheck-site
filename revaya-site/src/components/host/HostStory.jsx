import React from "react";

const overviewPoints = [
    { icon: "fa-layer-group", title: "One operational view", text: "Logistics, responsibilities, and updates live together." },
    { icon: "fa-people-group", title: "Everyone aligned", text: "Venues, vendors, sponsors, staff, and guests share the same picture." },
    { icon: "fa-champagne-glasses", title: "A clearer guest experience", text: "Less last-minute confusion behind the scenes." }
];

const problems = [
    { icon: "fa-comments", title: "Vendor miscommunication" },
    { icon: "fa-clock", title: "Conflicting timelines" },
    { icon: "fa-clipboard-list", title: "Missing logistical details" },
    { icon: "fa-bolt", title: "Last-minute surprises" }
];

const steps = [
    { n: "01", title: "Vendors and partners", text: "Coordinate who is responsible for what." },
    { n: "02", title: "Logistics and timelines", text: "Keep the schedule and the details in one place." },
    { n: "03", title: "Shared operations", text: "Give every team the same operational view." },
    { n: "04", title: "Team communication", text: "Resolve issues in the event, as they come up." }
];

const useCases = [
    { icon: "fa-music", title: "Festivals and community events", text: "Multiple vendors, performers, and ops teams, with visibility across the event." },
    { icon: "fa-hotel", title: "Venue programming", text: "Restaurants, hotels, and entertainment venues coordinating across departments." },
    { icon: "fa-store", title: "Hospitality activations", text: "Pop-ups, brand activations, and production crews working from one plan." },
    { icon: "fa-briefcase", title: "Conferences and corporate events", text: "Speakers, sponsors, schedules, and guest communication in one view." }
];

const features = [
    {
        icon: "fa-calendar-alt",
        title: "Event Management",
        tagline: "Plan with precision.",
        items: [
            "Create & edit events in minutes",
            "Add multi-day schedules effortlessly",
            "Upload logos & venue maps",
            "Track budgets, spending, & totals in real time",
            "Assign tasks with due dates & progress statuses",
            "Keep everyone aligned with built-in event chat"
        ]
    },
    {
        icon: "fa-users",
        title: "Collaboration Tools",
        tagline: "Bring your team together.",
        items: [
            "Invite collaborators with viewer or editor access",
            "Share live updates & notifications automatically",
            "Work faster with real-time updates across roles",
            "Streamline communication between teams & committees"
        ]
    },
    {
        icon: "fa-comments",
        title: "Communication & Insights",
        tagline: "Stay connected, stay informed.",
        items: [
            "Real-time chat within every event",
            "Smart email notifications for key updates",
            "Custom notification preferences (profile-based)",
            "Unified dashboard: events, vendors & messages",
            "Responsive design for flawless desktop & mobile use"
        ]
    }
];

export function HostOverview() {
    return (
        <section className="host-band" aria-labelledby="overview-heading">
            <div className="host-band-inner">
                <h2 id="overview-heading" className="host-band-title">Overview</h2>
                <p className="host-band-lead">
                    Revaya Host is an event operations platform for hospitality teams. It brings planning, coordination, and day-of execution into one place, so the details that used to live in spreadsheets, email, and chat stay clear.
                </p>
                <ul className="host-point-row">
                    {overviewPoints.map((point) => (
                        <li key={point.title} className="host-point">
                            <i className={`fas ${point.icon}`} aria-hidden="true" />
                            <h3>{point.title}</h3>
                            <p>{point.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function HostProblem() {
    return (
        <section className="host-band host-band--cream" aria-labelledby="problem-heading">
            <div className="host-band-inner">
                <h2 id="problem-heading" className="host-band-title">The Problem</h2>
                <p className="host-band-lead">
                    Behind every event is a network of vendor logistics, venue requirements, production timelines, guest communication, and staff. Most teams still split that work across spreadsheets, documents, email, and messaging apps, with no single operational view.
                </p>
                <ul className="host-problem-grid">
                    {problems.map((item) => (
                        <li key={item.title} className="host-problem-card">
                            <i className={`fas ${item.icon}`} aria-hidden="true" />
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function HostHowItWorks() {
    return (
        <section className="host-band" aria-labelledby="how-it-works-heading">
            <div className="host-band-inner">
                <h2 id="how-it-works-heading" className="host-band-title">How It Works</h2>
                <p className="host-band-lead">
                    Planners and hospitality teams run the operational workflow in one environment, from the first vendor confirm through the day of the event.
                </p>
                <ol className="host-steps">
                    {steps.map((step) => (
                        <li key={step.n} className="host-step">
                            <span className="host-step-n">{step.n}</span>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export function HostUseCases() {
    return (
        <section className="host-band host-band--cream" aria-labelledby="use-cases-heading">
            <div className="host-band-inner">
                <h2 id="use-cases-heading" className="host-band-title">Use Cases</h2>
                <p className="host-band-lead">
                    Built for live experiences where coordination is the job.
                </p>
                <ul className="host-case-grid">
                    {useCases.map((item) => (
                        <li key={item.title} className="host-case-card">
                            <i className={`fas ${item.icon}`} aria-hidden="true" />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function HostFeatures() {
    return (
        <section id="features" className="host-band" aria-labelledby="features-heading" data-name="features-section">
            <div className="host-band-inner host-band-inner--wide">
                <h2 id="features-heading" className="host-band-title">How We Enable More Show</h2>
                <p className="host-band-lead">
                    Comprehensive tools designed to streamline your event planning process.
                </p>
                <div className="host-feature-grid">
                    {features.map((feature) => (
                        <article key={feature.title} className="host-feature-card">
                            <div className="host-feature-head">
                                <i className={`fas ${feature.icon}`} aria-hidden="true" />
                                <h3>{feature.title}</h3>
                            </div>
                            <p className="host-feature-tagline">{feature.tagline}</p>
                            <ul>
                                {feature.items.map((item) => (
                                    <li key={item}>
                                        <i className="fas fa-check" aria-hidden="true" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
