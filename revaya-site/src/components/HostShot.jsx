import React from "react";

export default function HostShot() {
  return (
    <div className="host-shot" aria-hidden="true">
      <div className="host-shot-bar">
        <span className="host-shot-dots">
          <i />
          <i />
          <i />
        </span>
        <span>Eclipse Gala 2026 · Status</span>
      </div>
      <div className="host-shot-appbar">Revaya Host</div>
      <div className="host-shot-card">
        <p className="host-shot-kicker">Event status report</p>
        <p className="host-shot-name">Eclipse Gala 2026</p>
        <p className="host-shot-meta">Oct 18 · Miami Beach Marina</p>
        <p className="host-shot-meta">180 confirmed / 180 expected</p>
        <span className="host-shot-pill">Event in 185 days</span>
      </div>
      <div className="host-shot-stats">
        <p>
          <strong>9/11</strong>
          vendors
        </p>
        <p>
          <strong>180</strong>
          guests
        </p>
        <p>
          <strong>34/51</strong>
          tasks
        </p>
      </div>
    </div>
  );
}
