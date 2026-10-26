import type { Metadata } from "next";

import { AboutSubnav } from "@/components/about/about-subnav";
import { ContactContent } from "@/components/about/contact-content";
import { BackToTop } from "@/components/home/back-to-top";
import { Container } from "@/components/layout/container";
import { PageBanner } from "@/components/layout/page-banner";
import { getContactContent } from "@/lib/cms/get-cms";

export const metadata: Metadata = {
  title: "联系我们 | 荣芯半导体",
  description: "联系深圳市荣芯半导体有限公司：地址、电话、邮箱与在线留言。",
};

export default async function ContactPage() {
  const content = await getContactContent();

  return (
    <>
      <PageBanner
        title="关于我们"
        imageSrc="/images/solution/banner.jpg"
        imageAlt="关于我们"
        className="[&_h1]:text-center"
      />
      <AboutSubnav currentLabel="联系我们" />

      <section className="bg-[#f4f8fb] py-12 sm:py-[70px]">
        <Container>
          <ContactContent content={content} />
        </Container>
      </section>

      <BackToTop />
    </>
  );
}
