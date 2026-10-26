import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { sustainabilityPillars } from "@/lib/site-config";

export function SustainabilityPillarsSection() {
  return (
    <section className="relative overflow-hidden px-0 sm:px-[60px]">
      <div className="relative">
        <Image
          src="/images/sustainability/pillars-bg.jpg"
          alt=""
          width={1920}
          height={700}
          className="h-auto min-h-[420px] w-full object-cover sm:min-h-[560px]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1a2233]/55" aria-hidden />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <h2 className="mb-12 text-center text-[28px] font-bold leading-[1.3] text-white sm:mb-[95px] sm:text-[40px]">
              坚持长期主义，科技向善而行
            </h2>
            <ul className="mb-10 flex flex-wrap justify-center sm:mb-[60px]">
              {sustainabilityPillars.map((pillar) => (
                <li
                  key={pillar.title}
                  className="flex w-1/2 flex-col items-center px-3 py-4 sm:w-1/3 lg:w-1/5"
                >
                  <Image
                    src={pillar.image}
                    alt=""
                    width={76}
                    height={76}
                    className="mb-4 size-[64px] object-contain sm:size-[76px]"
                    aria-hidden
                  />
                  <h3 className="text-center text-xl font-medium text-white sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-center text-[10px] tracking-widest text-white/70 uppercase sm:text-xs">
                    {pillar.subtitle}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <Link
                href="/quality-and-reliability"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[50px] items-center rounded-[3px] bg-white px-10 text-base text-[#0068b7] transition-opacity hover:opacity-90"
              >
                <span className="pr-4">了解我们的ESG战略</span>
                <Image
                  src="/images/quality/arrow-right.svg"
                  alt=""
                  width={19}
                  height={19}
                  className="size-[19px]"
                  aria-hidden
                />
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
