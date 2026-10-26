import Image from "next/image";

import { Container } from "@/components/layout/container";
import { aboutCoreValues } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function AboutValuesSection() {
  return (
    <section className="bg-white py-[70px] sm:py-[110px]">
      <Container className="px-4 sm:px-6 lg:px-0">
        <h2 className="mb-8 text-center text-[28px] font-bold leading-[1.5] text-[#0b254b] sm:mb-[50px] sm:text-[40px] xl:text-[48px]">
          核心价值观
        </h2>
        <ul className="-mx-1.5 flex flex-wrap sm:-mx-3">
          {aboutCoreValues.map((column, columnIndex) => (
            <li key={columnIndex} className="mb-0 w-full px-1.5 sm:w-1/2 sm:px-3 lg:w-1/3">
              {column.map((value) => (
                <article
                  key={value.title}
                  className={cn(
                    "group relative mb-3 w-full overflow-hidden sm:mb-[18px]",
                    value.tall ? "h-[200px] sm:h-[480px]" : "h-[200px] sm:h-[280px]",
                  )}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover transition-transform duration-[360ms] group-hover:scale-[1.08]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="relative p-10 sm:p-10">
                    <h3 className="text-left text-2xl font-bold text-white sm:text-[36px] sm:leading-[1.5]">
                      {value.title}
                    </h3>
                  </div>
                </article>
              ))}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
