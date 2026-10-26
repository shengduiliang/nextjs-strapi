import type { Metadata } from "next";

import { BackToTop } from "@/components/home/back-to-top";
import { PageBanner } from "@/components/layout/page-banner";
import { QualityCertSection } from "@/components/quality/quality-cert-section";
import { QualityPolicySplit } from "@/components/quality/quality-policy-split";
import { QualityStickyNav } from "@/components/quality/quality-sticky-nav";
import {
  qualityCertIntro,
  qualityCoreDirectionSection,
  qualityEnvironmentCerts,
  qualityEnvironmentPolicySection,
  qualityPolicySection,
  qualityQualificationCerts,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "质量与可靠性 | 荣芯半导体",
  description:
    "荣芯半导体质量与可靠性：资质证书、环保证书、质量方针、环境方针与核心方向。",
};

export default function QualityPage() {
  return (
    <>
      <PageBanner
        title="质量与可靠性"
        imageSrc="/images/quality/banner.jpg"
        imageAlt="质量与可靠性"
        className="[&_h1]:text-center"
      />

      <QualityStickyNav />

      <QualityCertSection
        id="zzzs"
        title="资质证书下载"
        intro={qualityCertIntro}
        items={qualityQualificationCerts}
        variant="light"
      />

      <QualityCertSection
        id="hbzs"
        title="环保证书下载"
        intro={qualityCertIntro}
        items={qualityEnvironmentCerts}
        variant="light"
        backgroundImage="/images/quality/env-cert-bg.jpg"
      />

      <QualityPolicySplit
        id="zlfz"
        title={qualityPolicySection.title}
        slogan={qualityPolicySection.slogan}
        points={qualityPolicySection.points}
        image={qualityPolicySection.image}
        imagePosition={qualityPolicySection.imagePosition}
      />

      <QualityPolicySplit
        id="hjfz"
        title={qualityEnvironmentPolicySection.title}
        slogan={qualityEnvironmentPolicySection.slogan}
        points={qualityEnvironmentPolicySection.points}
        image={qualityEnvironmentPolicySection.image}
        imagePosition={qualityEnvironmentPolicySection.imagePosition}
      />

      <QualityPolicySplit
        id="hxfx"
        title={qualityCoreDirectionSection.title}
        description={qualityCoreDirectionSection.description}
        points={qualityCoreDirectionSection.points}
        image={qualityCoreDirectionSection.image}
        imagePosition={qualityCoreDirectionSection.imagePosition}
      />

      <BackToTop />
    </>
  );
}
