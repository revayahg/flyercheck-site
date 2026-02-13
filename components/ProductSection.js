function ProductSection() {
    try {
        return (
            <section className="product-section" data-name="product-section">
                <div className="container">
                    <h2 className="section-title" data-name="section-title">Current Products & Platforms</h2>
                    <p className="section-subtitle" data-name="product-section-subtitle">
                        We build real tools that help event teams work more effectively.
                    </p>
                    <div className="products-preview" data-name="products-preview">
                        <ProductCard
                            title="Revaya Host"
                            description="Event management platform for producers, planners, and hospitality teams. Streamline vendor coordination, project tracking, and day-of operations in one unified system."
                            imageSrc="https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/49cf8a9e-3349-4c17-b234-912cc24b9237.png"
                            link="/revaya-host"
                        />
                        <ProductCard
                            title="Revaya FlyerCheck"
                            description="AI-powered flyer analysis tool that helps event organizers identify issues before publication. Get instant feedback on readability, information completeness, and design effectiveness."
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
