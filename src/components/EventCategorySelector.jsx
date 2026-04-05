import React from "react";
import { reportError } from "../utils/errorHandler";

function EventCategorySelector({ selectedCategories, onCategoryChange }) {
    try {
        const categoryGroups = [
            {
                title: "A. Nightlife & Social",
                categories: [
                    { value: "party-nightlife", label: "Party / Nightlife", icon: "fas fa-glass-cheers" },
                    { value: "club-event", label: "Club Event", icon: "fas fa-music" },
                    { value: "happy-hour", label: "Happy Hour / Social Mixer", icon: "fas fa-cocktail" },
                    { value: "bar-event", label: "Bar Event", icon: "fas fa-wine-glass-alt" }
                ]
            },
            {
                title: "B. Arts, Culture & Entertainment",
                categories: [
                    { value: "concert-live-music", label: "Concert / Live Music", icon: "fas fa-guitar" },
                    { value: "festival-fair", label: "Festival / Fair", icon: "fas fa-theater-masks" },
                    { value: "theater-performance", label: "Theater / Performance", icon: "fas fa-theater-masks" },
                    { value: "comedy-show", label: "Comedy Show", icon: "fas fa-laugh" },
                    { value: "art-show", label: "Art Show / Gallery Event", icon: "fas fa-palette" }
                ]
            },
            {
                title: "C. Community & Nonprofit",
                categories: [
                    { value: "community-event", label: "Community Event", icon: "fas fa-users" },
                    { value: "fundraiser-charity", label: "Fundraiser / Charity Event", icon: "fas fa-hand-holding-heart" },
                    { value: "parade-march-pride", label: "Parade / March / Pride Event", icon: "fas fa-flag" },
                    { value: "cultural-celebration", label: "Cultural Celebration", icon: "fas fa-globe" }
                ]
            },
            {
                title: "D. Business & Professional",
                categories: [
                    { value: "conference", label: "Conference", icon: "fas fa-briefcase" },
                    { value: "networking-event", label: "Networking Event", icon: "fas fa-handshake" },
                    { value: "workshop-training", label: "Workshop / Training", icon: "fas fa-chalkboard-teacher" },
                    { value: "trade-show-expo", label: "Trade Show / Expo", icon: "fas fa-building" },
                    { value: "corporate-meeting", label: "Corporate Meeting / Company Event", icon: "fas fa-users-cog" }
                ]
            },
            {
                title: "E. Sports & Fitness",
                categories: [
                    { value: "sports-event", label: "Sports Event", icon: "fas fa-football-ball" },
                    { value: "fitness-wellness", label: "Fitness Class / Wellness Event", icon: "fas fa-dumbbell" },
                    { value: "tournament-competition", label: "Tournament / Competition", icon: "fas fa-trophy" }
                ]
            },
            {
                title: "F. Education",
                categories: [
                    { value: "class-course", label: "Class / Course", icon: "fas fa-book" },
                    { value: "lecture-speaker", label: "Lecture / Speaker Series", icon: "fas fa-microphone" },
                    { value: "campus-event", label: "Campus Event", icon: "fas fa-university" }
                ]
            },
            {
                title: "G. Hospitality & Food",
                categories: [
                    { value: "restaurant-event", label: "Restaurant Event / Menu Special", icon: "fas fa-utensils" },
                    { value: "food-drink-festival", label: "Food & Drink Festival", icon: "fas fa-wine-bottle" },
                    { value: "tasting-event", label: "Tasting Event (Wine, Spirits, etc.)", icon: "fas fa-wine-glass" }
                ]
            },
            {
                title: "H. Family & Kids",
                categories: [
                    { value: "kids-event", label: "Kids Event", icon: "fas fa-child" },
                    { value: "family-friendly", label: "Family-Friendly Event", icon: "fas fa-home" }
                ]
            },
            {
                title: "I. Special Occasions",
                categories: [
                    { value: "holiday-event", label: "Holiday Event", icon: "fas fa-gift" },
                    { value: "themed-event", label: "Themed Event", icon: "fas fa-star" },
                    { value: "grand-opening", label: "Grand Opening", icon: "fas fa-door-open" },
                    { value: "anniversary-celebration", label: "Anniversary / Celebration", icon: "fas fa-birthday-cake" }
                ]
            },
            {
                title: "J. Other",
                categories: [
                    { value: "general-event", label: "General Event / Misc", icon: "fas fa-calendar-alt" },
                    { value: "virtual-event", label: "Virtual Event", icon: "fas fa-video" }
                ]
            }
        ];

        const handleCategoryToggle = (categoryValue) => {
            const isSelected = selectedCategories.includes(categoryValue);
            if (isSelected) {
                onCategoryChange(selectedCategories.filter(cat => cat !== categoryValue));
            } else {
                onCategoryChange([...selectedCategories, categoryValue]);
            }
        };

        return (
            <div className="event-category-selector" data-name="event-category-selector">
                <h3 className="category-title">Select Event Categories:</h3>
                <p className="category-subtitle">Select one or more categories that best describe your event. This helps us provide category-specific design recommendations.</p>
                <div className="category-groups">
                    {categoryGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="category-group">
                            <h4 className="category-group-title">{group.title}</h4>
                            <div className="category-options">
                                {group.categories.map((category) => {
                                    const isSelected = selectedCategories.includes(category.value);
                                    return (
                                        <div 
                                            key={category.value} 
                                            className={`category-option ${isSelected ? 'selected' : ''}`}
                                            data-name={`category-option-${category.value}`}
                                            onClick={() => handleCategoryToggle(category.value)}
                                        >
                                            <div className="category-checkbox">
                                                <i className={`fas ${isSelected ? 'fa-check-square' : 'fa-square'}`}></i>
                                            </div>
                                            <div className="category-icon">
                                                <i className={category.icon}></i>
                                            </div>
                                            <div className="category-info">
                                                <span className="category-name">{category.label}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                {selectedCategories.length > 0 && (
                    <>
                        <div className="selected-categories-summary">
                            <strong>{selectedCategories.length}</strong> categor{selectedCategories.length === 1 ? 'y' : 'ies'} selected
                        </div>
                        <div className="scroll-indicator">
                            <div className="scroll-indicator-text">Continue below to select your target audience</div>
                            <i className="fas fa-chevron-down scroll-indicator-icon"></i>
                        </div>
                    </>
                )}
            </div>
        );
    } catch (error) {
        console.error('EventCategorySelector component error:', error);
        reportError(error);
        return null;
    }
}

export default EventCategorySelector;
