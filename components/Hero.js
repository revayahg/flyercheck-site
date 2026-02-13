function Hero({ title, subtitle, description, primaryCta, secondaryCta, page = 'landing', showLogo = false }) {
    try {
        return (
            <section className={`hero ${page === 'flyercheck' ? 'hero-flyercheck' : 'hero-landing'}`} data-name="hero">
                <div className="hero-content" data-name="hero-content">
                    {showLogo && (
                        <div className="hero-logo" data-name="hero-logo">
                            <img 
                                src="https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/514b6f7e-130b-496e-9d51-dc2d16df66fb.png"
                                alt="Revaya Hospitality Group logo"
                                className="hero-logo-image"
                            />
                            <p className="hero-brand-name" data-name="hero-brand-name">
                                Revaya Hospitality Group™
                            </p>
                        </div>
                    )}
                    <h1 className="hero-title" data-name="hero-title">
                        {title || "Revaya Hospitality Group™"}
                    </h1>
                    <p className="hero-subtitle" data-name="hero-subtitle">
                        {subtitle || "Less Stress, More Show"}
                    </p>
                    {description && (
                        <p className="hero-description" data-name="hero-description">
                            {description}
                        </p>
                    )}
                    {(primaryCta || secondaryCta) && (
                        <div className="hero-ctas" data-name="hero-ctas">
                            {primaryCta && (
                                <a href={primaryCta.href} className="cta-button-primary" data-name="hero-primary-cta">
                                    {primaryCta.text}
                                    {primaryCta.icon && <i className={primaryCta.icon}></i>}
                                </a>
                            )}
                            {secondaryCta && (
                                <a href={secondaryCta.href} className="cta-button-secondary" data-name="hero-secondary-cta">
                                    {secondaryCta.text}
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
