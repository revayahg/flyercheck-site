import React from "react";

export default function StatusReportMock() {
    return (
        <div className="host-mock host-status" aria-hidden="true">
            <div className="host-appbar">
                <span className="host-appbar-brand">Revaya Host</span>
                <span className="host-appbar-meta">Eclipse Gala 2026 · Status</span>
            </div>

            <div className="host-status-body">
                <div className="host-status-card">
                    <div className="host-status-card-top">
                        <div>
                            <p className="host-kicker">Event status report</p>
                            <p className="host-status-name">Eclipse Gala 2026</p>
                            <p className="host-status-sub">Annual Charity Gala · Miami Beach</p>
                        </div>
                        <p className="host-wordmark">
                            <span>Revaya</span> Host
                        </p>
                    </div>
                    <p className="host-status-when">Oct 18, 2026, 2:00 PM – 7:00 PM</p>
                    <p className="host-status-where">Miami Beach Marina</p>
                    <p className="host-status-rsvp">180 confirmed / 180 expected</p>
                    <span className="host-status-pill">Event in 185 days</span>
                </div>

                <p className="host-status-asof">
                    Status as of Jan 15, 2026, 9:14 AM EDT — This report does not update
                </p>

                <div className="host-status-stats">
                    <p>
                        <strong>9</strong> of <strong>11</strong> vendors confirmed
                    </p>
                    <p>
                        <strong>180</strong> of <strong>180</strong> guests confirmed
                    </p>
                    <p>
                        <strong>2</strong> tasks overdue
                    </p>
                    <p>
                        <strong>34</strong> of <strong>51</strong> tasks complete
                    </p>
                </div>

                <div className="host-status-split">
                    <div>
                        <h3 className="host-panel-title">Schedule Highlights</h3>
                        <ul className="host-schedule">
                            <li>
                                <span>5:00 PM</span>
                                Vendor load-in
                            </li>
                            <li>
                                <span>6:00 PM</span>
                                Guest arrival &amp; cocktails
                            </li>
                            <li>
                                <span>8:00 PM</span>
                                Dinner &amp; program
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="host-panel-heading">
                            <h3 className="host-panel-title">Recent Activity</h3>
                            <span className="host-panel-note">Last 7 days</span>
                        </div>
                        <ul className="host-activity">
                            <li>
                                <span>Vendors</span>
                                <span>2 confirmed</span>
                            </li>
                            <li>
                                <span>Guests</span>
                                <span>14 added</span>
                            </li>
                            <li>
                                <span>Tasks completed</span>
                                <span>6 done</span>
                            </li>
                            <li>
                                <span>Schedule</span>
                                <span>3 updates</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
