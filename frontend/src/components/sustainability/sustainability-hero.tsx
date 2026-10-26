import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { ROUTES, sustainabilityReportLinks } from "@/lib/site-config";

export function SustainabilityHero() {
  return (
    <section className="relative min-h-[min(100vh,730px)] w-full overflow-hidden">
      <Image
        src="/images/sustainability/banner.jpg"
        alt="可持续发展"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden />
      <Container className="relative flex min-h-[min(100vh,730px)] flex-col justify-center pb-28 pt-28">
        <div className="max-w-3xl">
          <h1 className="text-[32px] font-bold leading-[1.5] text-white sm:text-[40px]">
            可持续发展
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-white sm:text-2xl sm:leading-9">
            深圳市荣芯半导体有限公司环境、社会及管治报告
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {sustainabilityReportLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-3 rounded-[3px] bg-[#0e68ae] px-[26px] text-sm text-white transition-colors hover:bg-[#0068b7]"
              >
                <Image
                  src="/images/quality/cert-icon.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="size-[22px] brightness-0 invert"
                  aria-hidden
                />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <div className="absolute bottom-6 left-0 right-0 z-10">
        <Container>
          <Breadcrumbs
            className="text-white [&_a]:text-white [&_a]:hover:text-white/80 [&_li]:text-white [&_span]:text-white"
            items={[
              { label: "首页", href: ROUTES.home },
              { label: "可持续发展" },
            ]}
          />
        </Container>
      </div>
    </section>
  );
}
