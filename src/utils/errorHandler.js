// Global error handler utility

export function reportError(error) {
  console.error("Application Error:", error);
  // optionally send to tracking service later
}

if (typeof window !== "undefined") {
  window.reportError = reportError;
}