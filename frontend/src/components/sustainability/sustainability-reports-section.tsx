import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { sustainabilityReportLinks } from "@/lib/site-config";

export function SustainabilityReportsSection() {
  return (
    <section
      id="reports"
      className="relative scroll-mt-36 overflow-hidden py-[70px] sm:scroll-mt-40 sm:py-[110px]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/sustainability/banner.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
        <div
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#163d84] via-[#163d84]/90 to-transparent sm:w-4/5"
          style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
          aria-hidden
        />
      </div>
      <Container className="relative z-10">
        <div className="w-full max-w-xl">
          <h2 className="text-[28px] font-bold leading-[1.5] text-white sm:text-[40px]">
            报告下载
          </h2>
          <p className="mt-3 text-base leading-7 text-white">
            获取荣芯半导体环境、社会及管治报告与专项报告。
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            {sustainabilityReportLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center border border-white px-8 text-base text-white transition-colors hover:bg-white/10"
              >
                <span className="pr-4">{item.label}</span>
                <Image
                  src="/images/quality/arrow-right.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px] brightness-0 invert"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
