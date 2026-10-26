import type { Metadata } from "next";

import { AboutHero } from "@/components/about/about-hero";
import { AboutStatsSection } from "@/components/about/about-stats-section";
import { AboutSubnav } from "@/components/about/about-subnav";
import { AboutValuesSection } from "@/components/about/about-values-section";
import { AboutVisionSection } from "@/components/about/about-vision-section";
import { BackToTop } from "@/components/home/back-to-top";

export const metadata: Metadata = {
  title: "关于我们 | 荣芯半导体",
  description:
    "了解荣芯半导体：公司概况、核心业务、质量认证与核心价值观。",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutSubnav currentLabel="公司概况" />
      <AboutVisionSection />
      <AboutStatsSection />
      <AboutValuesSection />
      <BackToTop />
    </>
  );
}
