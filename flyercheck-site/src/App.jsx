import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { updateSEO } from "./utils/seoConfig";

import FlyerCheckPage from "./pages/FlyerCheckPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import BlogPostFlyerBlindSpots from "./pages/BlogPostFlyerBlindSpots";
import ContactPage from "./pages/ContactPage";
import AcceptableUsePage from "./pages/AcceptableUsePage";
import SitemapPage from "./pages/SitemapPage";
import AboutPage from "./pages/AboutPage";
import RevayaHostPage from "./pages/RevayaHostPage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    updateSEO();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<FlyerCheckPage />} />
      <Route path="/flyercheck" element={<FlyerCheckPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/revaya-host" element={<RevayaHostPage />} />
      <Route path="/sitemap" element={<SitemapPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/acceptable-use" element={<AcceptableUsePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/flyer-blind-spots" element={<BlogPostFlyerBlindSpots />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}