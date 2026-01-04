function Hero({ title, subtitle, page = 'landing' }) {
    try {
        return (
            <section className={`hero ${page === 'flyercheck' ? 'hero-flyercheck' : 'hero-landing'}`} data-name="hero">
                <div className="hero-content" data-name="hero-content">
                    <h1 className="hero-title" data-name="hero-title">
                        {title || "Revaya Hospitality Group™"}
                    </h1>
                    <p className="hero-subtitle" data-name="hero-subtitle">
                        {subtitle || "Less Stress, More Show"}
                    </p>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
