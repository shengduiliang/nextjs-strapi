import Image from "next/image";

import { Container } from "@/components/layout/container";
import { careerWhyChoose } from "@/lib/site-config";

export function CareerWhySection() {
  return (
    <section className="bg-white py-[70px] sm:py-[110px]">
      <Container className="px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          <div className="w-full lg:w-[calc(100%-688px)] lg:pr-[80px] xl:pr-[143px]">
            <h2 className="text-[28px] font-bold leading-[1.5] text-[#333] sm:text-[40px] xl:text-[48px]">
              {careerWhyChoose.title}
            </h2>
            <ul className="mt-8 sm:mt-[34px]">
              {careerWhyChoose.items.map((item) => (
                <li key={item.description} className="mb-12 last:mb-0 sm:mb-[140px] sm:last:mb-0">
                  <p className="text-base leading-8 text-[#666] sm:text-lg sm:leading-[2]">
                    {item.description}
                  </p>
                  <p className="mt-4 text-base font-bold leading-8 text-[#0e68ae] sm:mt-[22px] sm:text-lg sm:leading-[1.5]">
                    {item.highlight}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full shrink-0 lg:w-[560px] xl:w-[688px]">
            <div className="relative w-full overflow-hidden lg:w-[calc(100%+80px)] xl:w-[calc(100%+260px)]">
              <Image
                src={careerWhyChoose.image}
                alt={careerWhyChoose.title}
                width={948}
                height={560}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
