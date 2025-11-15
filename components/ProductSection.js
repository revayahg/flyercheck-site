function ProductSection() {
    try {
        return (
            <section className="product-section" data-name="product-section">
                <div className="container">
                    <h2 className="section-title" data-name="section-title">Our Solutions</h2>
                    <div className="products-preview" data-name="products-preview">
                        <ProductCard
                            title="Revaya Host"
                            description="Streamline your event management with our comprehensive planning solution"
                            imageSrc="https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/49cf8a9e-3349-4c17-b234-912cc24b9237.png"
                            link="/revaya-host"
                        />
                        <ProductCard
                            title="Revaya Flyer Check"
                            description="AI-powered flyer analysis for impactful event promotion."
                            imageSrc="https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/400b1943-c04a-4bd1-80ae-a093c8b07523.png"
                            link="/flyercheck"
                        />
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('ProductSection component error:', error);
        reportError(error);
        return null;
    }
}
