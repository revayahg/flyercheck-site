import React from "react";
import { reportError } from "../utils/errorHandler";

export default function Hero({
  title,
  accentWord,
  subtitle,
  primaryCta,
  secondaryCta,
  showLogo = false,
  page,
  image,
}) {
  try {
    const renderTitle = () => {
      if (!title) return null;
      if (!accentWord || !title.includes(accentWord)) {
        return title;
      }
      const [before, after] = title.split(accentWord);
      return (
        <>
          {before}
          <span className="hero-accent">{accentWord}</span>
          {after}
        </>
      );
    };

    const hasVisual = Boolean(image?.src);

    const copyBlock = (
      <div className="hero-copy" data-name="hero-copy">
        {showLogo && (
          <div className="hero-logo" data-name="hero-logo">
            <img
              src="https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/514b6f7e-130b-496e-9d51-dc2d16df66fb.png"
              alt="Revaya Hospitality Group logo"
              className="hero-logo-img"
            />
            <p className="hero-brand-name" data-name="hero-brand-name">
              Revaya Hospitality Group™
            </p>
          </div>
        )}

        {title && (
          <h1 className="hero-title" data-name="hero-title">
            {renderTitle()}
          </h1>
        )}

        {subtitle && (
          <p className="hero-subtitle" data-name="hero-subtitle">
            {subtitle}
          </p>
        )}
      </div>
    );

    const visualBlock = hasVisual && (
      <div className="hero-visual" data-name="hero-visual">
        <img
          src={image.src}
          alt={image.alt}
          className="hero-visual-image"
          loading="eager"
          decoding="async"
        />
      </div>
    );

    const ctasBlock = (
      <div className="hero-ctas" data-name="hero-ctas">
        {primaryCta?.href && (
          <a
            href={primaryCta.href}
            className="cta-button-primary"
            data-name="hero-primary-cta"
          >
            {primaryCta.icon && <i className={primaryCta.icon} />}
            <span>{primaryCta.text}</span>
          </a>
        )}

        {secondaryCta?.href && (
          <a
            href={secondaryCta.href}
            className="cta-button-secondary"
            data-name="hero-secondary-cta"
          >
            {secondaryCta.text}
          </a>
        )}
      </div>
    );

    return (
      <section
        className={`hero ${page === "flyercheck" ? "hero-flyercheck" : "hero-landing"}${hasVisual ? " hero--with-visual" : ""}`}
        data-name="hero"
      >
        <div className="hero-content" data-name="hero-content">
          {hasVisual ? (
            <div className="hero-layout" data-name="hero-layout">
              {copyBlock}
              {visualBlock}
              {ctasBlock}
            </div>
          ) : (
            <>
              {copyBlock}
              {ctasBlock}
            </>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Hero component error:", error);
    reportError(error);
    return null;
  }
}
