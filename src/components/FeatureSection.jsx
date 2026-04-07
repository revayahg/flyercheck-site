function FeatureSection() {
    try {
        const features = [
            {
                title: "Products",
                icon: "fa-box",
                items: [
                    {
                        title: "Create an Event",
                        subItems: ["Create New Event", "Upload Event Map"]
                    },
                    {
                        title: "Find Vendor",
                        subItems: ["Vendor Recommendations", "Search", "Filter/Sort Search Results"]
                    },
                    {
                        title: "Project Management",
                        subItems: [
                            "Event Dashboard Summary",
                            "Tasks",
                            "Event Map Tools",
                            "Project Status Tracker",
                            "Run of Show",
                            "Event Knowledge Base"
                        ]
                    }
                ]
            },
            {
                title: "Vendor Management",
                icon: "fa-tools",
                items: [
                    {
                        title: "Vendor Services",
                        subItems: [
                            "Vendor Onboarding",
                            "Business Profile",
                            "Product & Service Portfolio"
                        ]
                    }
                ]
            },
            {
                title: "Messaging",
                icon: "fa-comments",
                items: [
                    {
                        title: "Communication Tools",
                        subItems: [
                            "Send & Receive Messages",
                            "Email Notifications"
                        ]
                    }
                ]
            }
        ];

        return (
            <section className="feature-section" data-name="feature-section">
                <div className="container">
                    <h2 className="feature-title" data-name="feature-title">
                        Everything You Need to Plan with Confidence
                    </h2>
                    <p className="feature-subtitle" data-name="feature-subtitle">
                        Explore the features we're building to streamline your entire event workflow — from first idea to final recap.
                    </p>
                    
                    <div className="features-grid" data-name="features-grid">
                        {features.map((category, index) => (
                            <div key={index} className="feature-category" data-name={`feature-category-${index}`}>
                                <div className="category-header" data-name="category-header">
                                    <i className={`fas ${category.icon}`}></i>
                                    <h3>{category.title}</h3>
                                </div>
                                
                                <div className="category-content" data-name="category-content">
                                    {category.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="feature-item" data-name={`feature-item-${itemIndex}`}>
                                            <h4>{item.title}</h4>
                                            <ul>
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <li key={subIndex}>{subItem}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('FeatureSection component error:', error);
        reportError(error);
        return null;
    }
}
