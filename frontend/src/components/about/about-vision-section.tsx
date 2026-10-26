import Image from "next/image";

import { Container } from "@/components/layout/container";
import { aboutAchievements, aboutVision } from "@/lib/site-config";

export function AboutVisionSection() {
  return (
    <section className="relative min-h-[560px] overflow-visible bg-[#eef4f9] xl:min-h-[770px]">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/about/vision-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <Container className="relative px-4 sm:px-6 lg:px-0">
        <div className="relative">
          {/* 成就白卡：绝对定位上浮叠入蓝色 Hero（官网 top:-15%~-19%） */}
          <div className="relative z-20 -mt-[100px] bg-white xl:absolute xl:left-0 xl:top-[-19%] xl:mt-0 xl:w-full">
            <ul className="flex flex-col lg:flex-row">
              {aboutAchievements.map((item) => (
                <li
                  key={item.title.join("")}
                  className="w-full border-b border-[#eee] last:border-b-0 lg:w-1/3 lg:border-b-0 lg:border-r lg:border-[#eee] lg:last:border-r-0"
                >
                  <div className="flex items-start px-6 py-12 sm:px-[26px] sm:py-[60px] xl:px-9 xl:py-[85px]">
                    <div className="w-[46px] shrink-0 xl:w-[66px]">
                      <Image
                        src={item.icon}
                        alt=""
                        width={66}
                        height={66}
                        className="h-auto w-full"
                        aria-hidden
                      />
                    </div>
                    <div className="min-w-0 flex-1 pl-3">
                      <h3 className="text-lg font-bold leading-[1.5] text-[#0e68ae] sm:text-[20px] xl:text-2xl">
                        {item.title.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#646a7c] sm:mt-[12px] sm:text-base sm:leading-8 xl:mt-[22px] xl:leading-[2]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 pb-[70px] pt-16 text-center xl:pb-20 xl:pt-[360px]">
            <div>
              {aboutVision.headings.map((heading) => (
                <h2
                  key={heading}
                  className="text-[28px] font-bold leading-[1.5] text-[#0b254b] sm:text-[40px]"
                >
                  {heading}
                </h2>
              ))}
            </div>
            <p className="mx-auto mt-[30px] w-full text-base leading-8 text-[#666] sm:w-[70%] sm:text-lg sm:leading-9 xl:leading-[2]">
              {aboutVision.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
