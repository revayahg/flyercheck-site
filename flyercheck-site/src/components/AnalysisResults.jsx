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
            if (score >= 8) return "var(--fc-confirm)";
            if (score >= 5) return "var(--fc-hazard)";
            return "#E24B4A";
        };

        const getSummaryTone = (score) => {
            if (score === undefined || score === null) return "mixed";
            if (score >= 8) return "strong";
            if (score >= 5) return "mixed";
            return "weak";
        };

        const splitFeedback = (feedback) => {
            if (typeof feedback !== "string") {
                return { score: null, body: feedback };
            }
            const match = feedback.match(/^Score:\s*(\d+(?:\.\d+)?)\s*\/\s*10\.?\s*/i);
            if (!match) {
                return { score: null, body: feedback };
            }
            return {
                score: Number(match[1]),
                body: feedback.slice(match[0].length).trim(),
            };
        };

        return (
            <div className="analysis-results" data-name="analysis-results">
                <h3 className="results-title">Here&apos;s what we caught</h3>

                {analysis.isEventFlyer === false && (
                    <div className="result-section not-flyer-banner" data-name="not-flyer-banner">
                        <h4>Not an event flyer</h4>
                        <p className="not-flyer-text">
                            {analysis.notFlyerReason ||
                                "This image doesn't appear to be an event promotional flyer."}{" "}
                            FlyerCheck only reviews event flyers — upload the graphic you plan to post
                            (with event details) to get a useful review.
                        </p>
                    </div>
                )}
                
                {analysis.isEventFlyer !== false && analysis.positiveSummary && (
                    <div
                        className={`result-section positive-summary summary-tone-${getSummaryTone(analysis.overallScore)}`}
                    >
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
                        {Object.entries(analysis.detailedFeedback).map(([key, feedback]) => {
                            const fromText = splitFeedback(feedback);
                            const score =
                                analysis.scores?.[key] !== undefined
                                    ? analysis.scores[key]
                                    : fromText.score;
                            const body = fromText.score !== null ? fromText.body : feedback;

                            return (
                                <div key={key} className="feedback-item">
                                    <h5 className="feedback-dimension">{dimensionLabels[key] || key}</h5>
                                    {score !== null && score !== undefined && (
                                        <p className="feedback-score">
                                            Score:{" "}
                                            <span
                                                className="feedback-score-value"
                                                style={{ color: getScoreColor(score) }}
                                            >
                                                {score}/10
                                            </span>
                                        </p>
                                    )}
                                    {body ? <p className="feedback-text">{body}</p> : null}
                                </div>
                            );
                        })}
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
