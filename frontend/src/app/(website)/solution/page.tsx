import type { Metadata } from "next";

import { BackToTop } from "@/components/home/back-to-top";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { PageBanner } from "@/components/layout/page-banner";
import { ApplicationAreaCard } from "@/components/solution/application-area-card";
import { applicationAreas, ROUTES } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "应用领域 | 荣芯半导体",
  description:
    "荣芯半导体应用领域解决方案：运动手表、智能戒指、臂带、手环、耳机、AI眼镜、胸带等可穿戴场景。",
};

export default function SolutionPage() {
  return (
    <>
      <PageBanner
        title="应用领域"
        imageSrc="/images/solution/banner.jpg"
        imageAlt="应用领域"
        className="[&_h1]:text-center"
      />

      <Container className="py-4 sm:py-[18px]">
        <Breadcrumbs
          items={[
            { label: "首页", href: ROUTES.home },
            { label: "应用领域" },
          ]}
        />
      </Container>

      <section className="bg-[#f4f8fb] pb-16 pt-2 sm:pb-[90px]">
        <Container>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applicationAreas.map((area) => (
              <li key={area.title}>
                <ApplicationAreaCard
                  title={area.title}
                  image={area.image}
                  href={area.href}
                  description={area.description}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <BackToTop />
    </>
  );
}
