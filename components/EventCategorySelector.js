function EventCategorySelector({ selectedCategory, onCategoryChange }) {
    try {
        const categories = [
            { 
                value: "corporate", 
                label: "Corporate / Networking", 
                icon: "fas fa-briefcase",
                description: "Conferences, seminars, business events"
            },
            { 
                value: "hospitality", 
                label: "Hospitality / Nightlife", 
                icon: "fas fa-cocktail",
                description: "Restaurants, bars, clubs, hotel events"
            },
            { 
                value: "concert", 
                label: "Concert / Festival", 
                icon: "fas fa-music",
                description: "Live music, festivals, entertainment"
            },
            { 
                value: "wedding", 
                label: "Wedding / Private Party", 
                icon: "fas fa-heart",
                description: "Weddings, birthdays, private celebrations"
            },
            { 
                value: "nonprofit", 
                label: "Nonprofit / Community", 
                icon: "fas fa-hands-helping",
                description: "Fundraisers, community events, charity"
            },
            { 
                value: "other", 
                label: "Other", 
                icon: "fas fa-star",
                description: "Other event types"
            }
        ];

        return (
            <div className="event-category-selector" data-name="event-category-selector">
                <h3 className="category-title">Select Event Category:</h3>
                <p className="category-subtitle">This helps us provide category-specific design recommendations</p>
                <div className="category-options" data-name="category-options">
                    {categories.map((category) => (
                        <div 
                            key={category.value} 
                            className={`category-option ${selectedCategory === category.value ? 'selected' : ''}`}
                            data-name={`category-option-${category.value}`}
                            onClick={() => onCategoryChange(category.value)}
                        >
                            <div className="category-icon">
                                <i className={category.icon}></i>
                            </div>
                            <div className="category-info">
                                <label className="category-label">
                                    <input
                                        type="radio"
                                        name="eventCategory"
                                        value={category.value}
                                        checked={selectedCategory === category.value}
                                        onChange={(e) => onCategoryChange(e.target.value)}
                                    />
                                    <span className="category-name">{category.label}</span>
                                </label>
                                <p className="category-description">{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('EventCategorySelector component error:', error);
        reportError(error);
        return null;
    }
}

