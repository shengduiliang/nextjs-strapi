import type { Metadata } from "next";

import { BackToTop } from "@/components/home/back-to-top";
import { SustainabilityEsgSections } from "@/components/sustainability/sustainability-esg-sections";
import { SustainabilityHero } from "@/components/sustainability/sustainability-hero";
import { SustainabilityNewsSection } from "@/components/sustainability/sustainability-news-section";
import { SustainabilityPillarsSection } from "@/components/sustainability/sustainability-pillars-section";
import { SustainabilityPolicySection } from "@/components/sustainability/sustainability-policy-section";
import { SustainabilityQuoteSection } from "@/components/sustainability/sustainability-quote-section";
import { SustainabilityRatingsSection } from "@/components/sustainability/sustainability-ratings-section";
import { SustainabilityReportsSection } from "@/components/sustainability/sustainability-reports-section";
import { SustainabilityStickyNav } from "@/components/sustainability/sustainability-sticky-nav";

export const metadata: Metadata = {
  title: "可持续发展 | 荣芯半导体",
  description:
    "荣芯半导体可持续发展与 ESG：环境、社会、治理战略，ESG 评级与报告下载。",
};

export default function SustainabilityPage() {
  return (
    <>
      <SustainabilityHero />
      <SustainabilityStickyNav />
      <SustainabilityQuoteSection />
      <SustainabilityPillarsSection />
      <SustainabilityEsgSections />
      <SustainabilityRatingsSection />
      <SustainabilityPolicySection />
      <SustainabilityNewsSection />
      <SustainabilityReportsSection />
      <BackToTop />
    </>
  );
}
