import React from "react";

const participants = [
    { initials: "MR", name: "Marcus R.", role: "Producer", tone: "mr" },
    { initials: "SL", name: "Sofia L.", role: "Diamond AV", tone: "sl" },
    { initials: "JT", name: "James T.", role: "Harvest Catering", tone: "jt" }
];

const alsoOnEvent = [
    { initials: "RL", name: "Rivera Lights", role: "Vendor", tone: "tan" },
    { initials: "TN", name: "Tara N.", role: "Sponsor", tone: "tan" }
];

function Person({ initials, name, role, tone }) {
    return (
        <li className="host-person">
            <span className={`host-avatar host-avatar-${tone}`}>{initials}</span>
            <span className="host-person-copy">
                <span className="host-person-name">{name}</span>
                <span className="host-person-role">{role}</span>
            </span>
        </li>
    );
}

export default function MessagesMock() {
    return (
        <div className="host-mock host-messages" aria-hidden="true">
            <div className="host-appbar">
                <span className="host-appbar-brand">Revaya Host</span>
                <span className="host-appbar-meta">Eclipse Gala 2026 · Messages</span>
            </div>

            <div className="host-messages-body">
                <div className="host-thread">
                    <p className="host-thread-time">Today · 10:42 AM</p>

                    <article className="host-msg">
                        <span className="host-avatar host-avatar-mr">MR</span>
                        <div className="host-msg-body">
                            <p className="host-msg-name">
                                Marcus R. <span>· Producer</span>
                            </p>
                            <p className="host-bubble">
                                Quick heads up — AV load-in and catering setup are both at 2 PM Saturday. Sofia, James — can you two work out a split?
                            </p>
                        </div>
                    </article>

                    <article className="host-msg">
                        <span className="host-avatar host-avatar-sl">SL</span>
                        <div className="host-msg-body">
                            <p className="host-msg-name">
                                Sofia L. <span>· Diamond AV</span>
                            </p>
                            <p className="host-bubble">
                                James — we need 90 min for rigging and sound check. If we take 2–3:30 PM does that work?
                            </p>
                        </div>
                    </article>

                    <div className="host-composer">
                        <span>Message the team...</span>
                        <i className="fas fa-paper-plane" />
                    </div>
                </div>

                <aside className="host-roster">
                    <h3 className="host-roster-label">Participants</h3>
                    <ul className="host-roster-list">
                        {participants.map((person) => (
                            <Person key={person.initials} {...person} />
                        ))}
                    </ul>

                    <h3 className="host-roster-label">Also on event</h3>
                    <ul className="host-roster-list">
                        {alsoOnEvent.map((person) => (
                            <Person key={person.initials} {...person} />
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
}
