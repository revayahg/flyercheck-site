import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { updateSEO } from "./utils/seoConfig";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostFlyerBlindSpots from "./pages/BlogPostFlyerBlindSpots";
import BlogPostPage from "./pages/BlogPostPage";
import FlyerCheckPage from "./pages/FlyerCheckPage";
import RevayaHostPage from "./pages/RevayaHostPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AcceptableUsePage from "./pages/AcceptableUsePage";
import SitemapPage from "./pages/SitemapPage";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    updateSEO();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/flyer-blind-spots" element={<BlogPostFlyerBlindSpots />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/flyercheck" element={<FlyerCheckPage />} />
      <Route path="/revaya-host" element={<RevayaHostPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/acceptable-use" element={<AcceptableUsePage />} />
      <Route path="/sitemap" element={<SitemapPage />} />

      {/* optional safety */}
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}