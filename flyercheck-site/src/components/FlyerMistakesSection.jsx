import React from "react";
import { reportError } from "../utils/errorHandler";

export default function FlyerMistakesSection() {
  try {
    return (
      <section
        className="homepage-section flyer-mistakes-section"
        data-name="why-flyer-mistakes-matter"
        aria-labelledby="flyer-mistakes-heading"
      >
        <div className="container">
          <div className="flyer-mistakes-inner">
            <h2 id="flyer-mistakes-heading" className="section-title">
              Why a flyer mistake costs more than a reprint
            </h2>
            <p className="flyer-mistakes-lead">
              Not the reprint — the RSVPs you never get.
            </p>
            <div className="flyer-mistakes-copy">
              <p>
                Most people decide in seconds. If the date, time, venue, or ticket link isn&apos;t obvious, they scroll past. A typo doesn&apos;t just look unprofessional — it quietly kills attendance.
              </p>
              <p>
                Promoters move fast: Instagram posts, print runs, last-minute group-chat updates. FlyerCheck is a quick pre-publish check — upload, see what&apos;s missing or hard to read, and fix it before your audience does.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("FlyerMistakesSection error:", error);
    reportError(error);
    return null;
  }
}
