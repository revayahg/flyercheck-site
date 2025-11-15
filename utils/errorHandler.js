// Global error handler utility
function reportError(error) {
    console.error('Application Error:', error);
    // In production, you might want to send this to an error tracking service
    // For now, we just log it to console
}

// Make it globally available
window.reportError = reportError;

