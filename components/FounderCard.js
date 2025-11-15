function FounderCard({ name, title, bio, mantra, image, email }) {
    try {
        const imageClass = `founder-image ${name.split(' ')[0].toLowerCase()}`;
        
        return (
            <div 
                className="founder-card" 
                data-name="founder-card" 
                style={{ 
                    textAlign: 'center', 
                    maxWidth: '560px', 
                    margin: '0 auto'
                }}
            >
                <img 
                    src={image} 
                    alt={name} 
                    className={imageClass}
                    data-name="founder-image"
                    style={{
                        width: '320px',
                        height: '320px',
                        borderRadius: '9999px',
                        objectFit: 'cover',
                        objectPosition: name === "Jolyse Stultz" ? 'center top' : 'center',
                        transform: name === "Jolyse Stultz" ? 'scale(0.85)' : 'scale(1)',
                        transition: 'transform 0.3s ease',
                        display: 'block',
                        margin: '0 auto 1rem'
                    }}
                />
                <a 
                    href={`mailto:${email}`} 
                    className="founder-name" 
                    data-name="founder-name"
                    style={{
                        color: 'var(--brand-primary, #5B4636)',
                        fontWeight: '700',
                        fontSize: '1.5rem',
                        lineHeight: '1.2',
                        margin: '0.25rem 0',
                        textDecoration: 'none',
                        display: 'block'
                    }}
                >
                    {name}
                </a>
                <div 
                    className="founder-title" 
                    data-name="founder-title"
                    style={{
                        color: 'var(--brand-accent, #8C7A5B)',
                        fontWeight: '600',
                        marginBottom: '1rem'
                    }}
                >
                    {title}
                </div>
                <div 
                    className="founder-bio" 
                    data-name="founder-bio"
                    style={{
                        textAlign: 'left',
                        maxWidth: '62ch',
                        margin: '0.75rem auto 0'
                    }}
                >
                    {bio.map((paragraph, index) => (
                        <p key={index} style={{ margin: '0 0 0.75rem' }}>{paragraph}</p>
                    ))}
                    {mantra && (
                        <blockquote 
                            className="founder-quote" 
                            data-name="founder-quote"
                            style={{ 
                                margin: '1rem 0 0', 
                                fontStyle: 'italic', 
                                color: 'var(--brand-primary, #5B4636)',
                                textAlign: 'center'
                            }}
                        >
                            "{mantra}"
                        </blockquote>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('FounderCard component error:', error);
        reportError(error);
        return null;
    }
}
