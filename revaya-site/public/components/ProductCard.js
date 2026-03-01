function ProductCard({ title, description, imageSrc, link }) {
    try {
        return (
            <div className="product-card" data-name="product-card">
                <a href={link} className="product-card-link" data-name="product-card-link">
                    <img 
                        src={imageSrc} 
                        alt={title} 
                        className="product-card-image"
                        data-name="product-card-image"
                    />
                    <h3 className="product-card-title" data-name="product-card-title">
                        {title}™
                    </h3>
                    <p className="product-card-description" data-name="product-card-description">
                        {description}
                    </p>
                    <button className="btn btn-primary" data-name="product-card-cta">
                        Learn More
                    </button>
                </a>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
        return null;
    }
}
