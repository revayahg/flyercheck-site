import React from "react";
import { reportError } from "../utils/errorHandler";

export default function FounderCard({ name, title, image, email, bio = [], mantra, imageClass }) {
  try {
    return (
      <div className="founder-card" data-name="founder-card">
        <div className="founder-card-inner" data-name="founder-card-inner">
          {image ? (
            <div className="founder-image-wrapper" data-name="founder-image-wrapper">
              <img
                src={image}
                alt={`${name} headshot`}
                className={`founder-image${imageClass ? ` ${imageClass}` : ''}`}
                data-name="founder-image"
              />
            </div>
          ) : null}

          <div className="founder-content" data-name="founder-content">
            <div className="founder-header" data-name="founder-header">
              <h2 className="founder-name" data-name="founder-name">{name}</h2>
              <div className="founder-title" data-name="founder-title">{title}</div>
              {email ? (
                <a
                  href={`mailto:${email}`}
                  className="founder-email"
                  data-name="founder-email"
                >
                  {email}
                </a>
              ) : null}
            </div>

            <div className="founder-bio" data-name="founder-bio">
              {Array.isArray(bio) ? (
                bio.map((paragraph, idx) => (
                  <p key={idx} className="founder-bio-paragraph" data-name={`founder-bio-${idx}`}>
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="founder-bio-paragraph" data-name="founder-bio-0">
                  {bio}
                </p>
              )}
            </div>

            {mantra ? (
              <blockquote className="founder-mantra" data-name="founder-mantra">
                “{mantra}”
              </blockquote>
            ) : null}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("FounderCard component error:", error);
    reportError(error);
    return null;
  }
}
