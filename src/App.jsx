import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { updateSEO } from "./utils/seoConfig";

import FlyerCheckPage from "./pages/FlyerCheckPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    updateSEO();
  }, [location.pathname]);

  return (
    <Routes>
      {/* Homepage = FlyerCheck */}
      <Route path="/" element={<FlyerCheckPage />} />

      {/* Keep only essential pages */}
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />

      {/* Safety redirects */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}