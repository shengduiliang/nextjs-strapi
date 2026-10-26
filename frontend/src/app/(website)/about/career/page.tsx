import type { Metadata } from "next";

import { AboutSubnav } from "@/components/about/about-subnav";
import { CareerContent } from "@/components/career/career-content";
import { BackToTop } from "@/components/home/back-to-top";
import { Container } from "@/components/layout/container";
import { PageBanner } from "@/components/layout/page-banner";

export const metadata: Metadata = {
  title: "人才招募 | 荣芯半导体",
  description: "发送邮件，投递简历，开启您和荣芯的故事。查看荣芯半导体招聘岗位。",
};

export default function CareerPage() {
  return (
    <>
      <PageBanner
        title="关于我们"
        imageSrc="/images/solution/banner.jpg"
        imageAlt="关于我们"
        className="[&_h1]:text-center"
      />
      <AboutSubnav currentLabel="人才招募" />

      <section className="bg-[#f4f8fb] py-12 sm:py-[70px]">
        <Container>
          <CareerContent />
        </Container>
      </section>

      <BackToTop />
    </>
  );
}
