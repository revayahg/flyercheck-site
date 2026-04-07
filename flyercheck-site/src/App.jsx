import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { updateSEO } from "./utils/seoConfig";

import FlyerCheckPage from "./pages/FlyerCheckPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import BlogPostFlyerBlindSpots from "./pages/BlogPostFlyerBlindSpots";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    updateSEO();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<FlyerCheckPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/flyer-blind-spots" element={<BlogPostFlyerBlindSpots />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}