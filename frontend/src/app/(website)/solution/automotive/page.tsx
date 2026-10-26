import type { Metadata } from "next";

import { BackToTop } from "@/components/home/back-to-top";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { PageBanner } from "@/components/layout/page-banner";
import { AutomotiveAdvantagesSection } from "@/components/solution/automotive-advantages-section";
import { AutomotiveIntroSection } from "@/components/solution/automotive-intro-section";
import { AutomotiveProductsSection } from "@/components/solution/automotive-products-section";
import { AutomotiveRelatedNewsSection } from "@/components/solution/automotive-related-news-section";
import { AutomotiveSolutionsSection } from "@/components/solution/automotive-solutions-section";
import { ROUTES } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "汽车 | 应用领域 | 荣芯半导体",
  description:
    "荣芯半导体汽车应用领域：车规级 Flash、MCU 产品，典型解决方案与 ISO 26262 ASIL D 认证体系。",
};

export default function AutomotiveSolutionPage() {
  return (
    <>
      <PageBanner
        title="汽车"
        imageSrc="/images/solution/automotive/banner.jpg"
        imageAlt="汽车应用领域"
      />

      <Container className="py-4 sm:py-[18px]">
        <Breadcrumbs
          items={[
            { label: "首页", href: ROUTES.home },
            { label: "应用领域", href: ROUTES.solution },
            { label: "汽车" },
          ]}
        />
      </Container>

      <AutomotiveIntroSection />
      <AutomotiveProductsSection />
      <AutomotiveSolutionsSection />
      <AutomotiveAdvantagesSection />
      <AutomotiveRelatedNewsSection />

      <BackToTop />
    </>
  );
}
