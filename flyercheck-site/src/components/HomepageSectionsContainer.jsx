import React from "react";
import AdBanner from "./AdBanner";
import {
  WhatWeDoSection,
  WhoWeWorkWithSection,
  WhyFlyerCheckExistsSection,
  InsightsSection
} from "./HomepageSections";

export default function HomepageSectionsContainer() {
  return (
    <>
      <WhatWeDoSection />
      <AdBanner />
      <WhoWeWorkWithSection />
      <WhyFlyerCheckExistsSection />
      <InsightsSection />
    </>
  );
}
