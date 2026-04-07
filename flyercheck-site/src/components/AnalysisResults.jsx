import React from "react";

function AnalysisResults({ analysis }) {
    try {
        if (!analysis) return null;

        const dimensionLabels = {
            visualClarity: 'Visual Clarity',
            messageClarity: 'Message Clarity',
            brandingConsistency: 'Branding Consistency',
            emotionalAppeal: 'Emotional Appeal',
            ctaEffectiveness: 'CTA Effectiveness',
            audienceFit: 'Audience Fit',
            technicalQuality: 'Technical Quality'
        };

        const getScoreColor = (score) => {
            if (score >= 8) return '#10b981'; // green
            if (score >= 6) return '#f59e0b'; // yellow
            return '#ef4444'; // red
        };

        return (
            <div className="analysis-results" data-name="analysis-results">
                <h3 className="results-title">Analysis Results</h3>
                
                {analysis.positiveSummary && (
                    <div className="result-section positive-summary">
                        <p className="positive-text">{analysis.positiveSummary}</p>
                    </div>
                )}

                {analysis.overallScore !== undefined && (
                    <div className="result-section overall-score">
                        <h4>Overall Score</h4>
                        <div className="score-display">
                            <span className="score-value" style={{ color: getScoreColor(analysis.overallScore) }}>
                                {analysis.overallScore.toFixed(1)}
                            </span>
                        </div>
                    </div>
                )}

                {analysis.scores && Object.keys(analysis.scores).length > 0 && (
                    <div className="result-section scores-section">
                        <h4>Dimension Scores</h4>
                        <div className="scores-grid">
                            {Object.entries(analysis.scores).map(([key, score]) => (
                                <div key={key} className="score-item">
                                    <span className="score-label">{dimensionLabels[key] || key}:</span>
                                    <span className="score-number" style={{ color: getScoreColor(score) }}>
                                        {score}/10
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {analysis.detailedFeedback && Object.keys(analysis.detailedFeedback).length > 0 && (
                    <div className="result-section detailed-feedback-section">
                        <h4>Detailed Feedback</h4>
                        {Object.entries(analysis.detailedFeedback).map(([key, feedback]) => (
                            <div key={key} className="feedback-item">
                                <h5 className="feedback-dimension">{dimensionLabels[key] || key}</h5>
                                <p className="feedback-text">{feedback}</p>
                            </div>
                        ))}
                    </div>
                )}

                {analysis.pitfallsFound && analysis.pitfallsFound.length > 0 && (
                    <div className="result-section pitfalls-section">
                        <h4>⚠️ Design Pitfalls Found</h4>
                        <ul className="pitfalls-list">
                            {analysis.pitfallsFound.map((pitfall, index) => (
                                <li key={index}>{pitfall}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {analysis.strengths && analysis.strengths.length > 0 && (
                    <div className="result-section">
                        <h4>✅ Strengths</h4>
                        <ul className="strengths-list">
                            {analysis.strengths.map((strength, index) => (
                                <li key={index}>{strength}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {analysis.improvements && analysis.improvements.length > 0 && (
                    <div className="result-section">
                        <h4>💡 Areas for Improvement</h4>
                        <ul className="improvements-list">
                            {analysis.improvements.map((improvement, index) => (
                                <li key={index}>{improvement}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {analysis.recommendations && analysis.recommendations.length > 0 && (
                    <div className="result-section">
                        <h4>📋 Recommendations</h4>
                        <ul className="recommendations-list">
                            {analysis.recommendations.map((rec, index) => (
                                <li key={index}>{rec}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {analysis.audienceSpecificTips && (
                    <div className="result-section">
                        <h4>🎯 Audience-Specific Tips</h4>
                        <p className="audience-tips">{analysis.audienceSpecificTips}</p>
                    </div>
                )}

                {analysis.categorySpecificGuidance && (
                    <div className="result-section">
                        <h4>📂 Category-Specific Guidance</h4>
                        <p className="category-guidance">{analysis.categorySpecificGuidance}</p>
                    </div>
                )}

                {analysis.encouragement && (
                    <div className="result-section encouragement-section">
                        <p className="encouragement-text">{analysis.encouragement}</p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('AnalysisResults component error:', error);
        return null;
    }
}

export default AnalysisResults;
