import Image from "next/image";

import { Container } from "@/components/layout/container";
import { careerHero } from "@/lib/site-config";

export function CareerHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <Image
          src={careerHero.image}
          alt={careerHero.title}
          width={1920}
          height={380}
          className="h-auto w-full object-cover"
          priority
          sizes="100vw"
        />
        <Container className="pointer-events-none absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 lg:px-0">
          <h1 className="text-[32px] font-bold leading-[1.5] text-white sm:text-[40px] xl:text-[48px]">
            {careerHero.title}
          </h1>
          <p className="mt-2 text-base leading-[1.5] text-white sm:mt-3 sm:text-lg xl:text-2xl">
            {careerHero.subtitle}
          </p>
        </Container>
      </div>
    </section>
  );
}
