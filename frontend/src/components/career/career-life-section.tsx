import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { careerLife } from "@/lib/site-config";

export function CareerLifeSection() {
  return (
    <section className="relative z-[1] bg-white py-[70px] sm:py-[110px]">
      <div className="pointer-events-none absolute bottom-0 left-0 z-[-1] h-[68%] w-[71.5%] bg-[#f7f7f7]" />
      <Container className="relative px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col gap-10 lg:w-[calc(100%+120px)] lg:flex-row xl:w-[calc(100%+260px)]">
          <div className="w-full lg:w-[44%] lg:pr-8 xl:pr-12">
            <h2 className="mb-6 text-[28px] font-bold leading-[1.3] text-[#333] sm:mb-10 sm:text-[40px] xl:text-[48px]">
              {careerLife.title}
            </h2>
            <p className="text-base leading-[1.6] text-[#666] sm:text-lg">{careerLife.description}</p>
          </div>

          <div className="w-full overflow-hidden lg:w-[56%]">
            <ul>
              {careerLife.items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={480}
                        className="h-auto w-full object-cover transition-transform duration-[360ms] group-hover:scale-[1.04]"
                        sizes="(max-width: 1024px) 100vw, 56vw"
                      />
                    </div>
                    <p className="mt-5 text-lg font-bold leading-[1.5] text-[#0b254b] transition-colors duration-300 group-hover:text-[#0e68ae] sm:text-xl xl:text-2xl">
                      {item.title}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-base text-[#0e68ae]">
                      <span>查看更多</span>
                      <Image
                        src="/images/career/arrow.svg"
                        alt=""
                        width={18}
                        height={5}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
