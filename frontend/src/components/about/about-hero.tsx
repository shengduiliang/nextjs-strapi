import Image from "next/image";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { aboutIntro, ROUTES } from "@/lib/site-config";

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[490px] overflow-hidden xl:min-h-[600px]">
      <Image
        src="/images/about/hero-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <Container className="relative px-4 sm:px-6 lg:px-0">
        <div className="pt-[18px]">
          <Breadcrumbs
            className="text-white [&_a]:text-white [&_a]:hover:text-white/80 [&_li]:text-white [&_span]:text-white"
            items={[
              { label: "首页", href: ROUTES.home },
              { label: "关于我们", href: ROUTES.about },
              { label: "公司概况" },
            ]}
          />
        </div>
        <div className="py-[70px] text-center xl:py-[110px]">
          <h1 className="text-[32px] font-bold leading-[1.5] text-white sm:text-[40px] xl:text-[48px]">
            关于荣芯半导体
          </h1>
          <p className="mx-auto mt-[22px] max-w-none px-0 text-base leading-8 text-white sm:px-[80px] sm:text-lg sm:leading-9 xl:mt-[35px] xl:px-[190px] xl:leading-[2]">
            {aboutIntro}
          </p>
        </div>
      </Container>
    </section>
  );
}
