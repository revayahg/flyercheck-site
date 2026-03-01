import React from "react";
import { reportError } from "../utils/errorHandler";

function TargetAudienceSelector({ selectedAudience, onAudienceChange }) {
    try {
        const audiences = [
            { value: "general-public", label: "General Public", icon: "fas fa-users" },
            { value: "parents-families", label: "Parents & Families", icon: "fas fa-users" },
            { value: "lgbtq", label: "LGBTQ+ Community", icon: "fas fa-rainbow" },
            { value: "local-residents", label: "Local Residents", icon: "fas fa-home" },
            { value: "gen-z", label: "Gen Z / Young Adults", icon: "fas fa-mobile-alt" },
            { value: "students", label: "Students", icon: "fas fa-graduation-cap" },
            { value: "professionals", label: "Professionals / Business", icon: "fas fa-briefcase" },
            { value: "tourists", label: "Tourists", icon: "fas fa-plane" },
            { value: "seniors", label: "Seniors", icon: "fas fa-person-cane" },
            { value: "nonprofit", label: "Nonprofit Supporters", icon: "fas fa-hand-holding-heart" },
            { value: "event-fans", label: "Event Fans", icon: "fas fa-theater-masks" },
            { value: "fitness", label: "Fitness & Wellness", icon: "fas fa-dumbbell" },
            { value: "religious", label: "Religious / Spiritual", icon: "fas fa-dove" },
            { value: "other", label: "Other", icon: "fas fa-star" }
        ];

        return (
            <div className="target-audience-selector" data-name="target-audience-selector">
                <h3 className="audience-title">Select Target Audience:</h3>
                <div className="audience-options" data-name="audience-options">
                    {audiences.map((audience) => (
                        <div key={audience.value} className="audience-option" data-name={`audience-option-${audience.value}`}>
                            <label className="audience-label">
                                <input
                                    type="radio"
                                    name="audience"
                                    value={audience.value}
                                    checked={selectedAudience === audience.value}
                                    onChange={(e) => onAudienceChange(e.target.value)}
                                />
                                <i className={audience.icon}></i>
                                <span>{audience.label}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('TargetAudienceSelector component error:', error);
        reportError(error);
        return null;
    }
}

export default TargetAudienceSelector;
