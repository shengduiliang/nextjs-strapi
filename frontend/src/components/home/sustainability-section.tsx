import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ROUTES, sustainabilityPillars } from "@/lib/site-config";

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="relative overflow-hidden py-20 text-white sm:py-28">
      <Image
        src="/images/home/sustainability-bg.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#0b254b]/78" aria-hidden />

      <Container className="relative text-center">
        <h2 className="text-3xl font-bold sm:text-[40px] sm:leading-[60px]">
          坚持长期主义，科技向善而行
        </h2>
        <ul className="mt-14 grid grid-cols-2 gap-6 sm:mt-16 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {sustainabilityPillars.map((pillar) => (
            <li key={pillar.title} className="px-2 py-4 sm:px-4 sm:py-6">
              <div className="mx-auto mb-5 flex size-[88px] items-center justify-center rounded-full border border-white/35 bg-white/5 sm:size-[104px]">
                <Image
                  src={pillar.image}
                  alt=""
                  width={52}
                  height={52}
                  className="size-10 object-contain sm:size-[52px]"
                  aria-hidden
                />
              </div>
              <h3 className="text-xl font-semibold sm:text-2xl">{pillar.title}</h3>
              <p className="mt-2 text-[11px] tracking-[0.12em] text-white/70 uppercase sm:text-xs">
                {pillar.subtitle}
              </p>
            </li>
          ))}
        </ul>
        <Link
          href={ROUTES.sustainability}
          className="mt-12 inline-flex items-center gap-2 border border-white/50 px-10 py-3 text-base transition-colors hover:bg-white hover:text-[#0b254b]"
        >
          了解我们的可持续发展 →
        </Link>
      </Container>
    </section>
  );
}
