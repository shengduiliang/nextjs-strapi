import Image from "next/image";

import { Container } from "@/components/layout/container";
import { aboutQualityText, aboutStats } from "@/lib/site-config";

export function AboutStatsSection() {
  return (
    <section className="relative overflow-visible pb-0 pt-[70px] sm:pt-[110px]">
      <Image
        src="/images/about/stats-bg.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <Container className="relative overflow-visible px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-0">
          {/* 右侧：数据（DOM 顺序靠前，row-reverse 后显示在右） */}
          <div className="w-full flex-1 lg:w-[calc(100%-525px)] lg:pl-[18%] xl:pl-[22%]">
            <ul className="flex flex-wrap">
              {aboutStats.map((stat) => (
                <li key={stat.label} className="mb-10 w-1/2 sm:mb-[66px]">
                  <div>
                    <p className="text-lg font-bold leading-[1.5] text-white sm:text-2xl">
                      <span className="text-[40px] leading-[1.5] sm:text-[48px]">{stat.value}</span>
                      {stat.unit ? <span>{stat.unit}</span> : null}
                    </p>
                    <p className="mt-1 text-base leading-[1.5] text-white sm:text-lg">{stat.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 左侧：芯片纹理图 + 白卡右偏移（勿 overflow-hidden，否则裁切 translateX） */}
          <div className="relative w-full shrink-0 lg:w-[420px] xl:w-[525px]">
            <div
              className="relative flex min-h-[440px] items-end rounded-t-md pt-[65px] pl-10 sm:min-h-[480px] sm:pt-[70px] sm:pl-[50px] xl:min-h-[560px] xl:pt-[87px] xl:pl-[73px]"
              style={{
                backgroundImage: "url(/images/about/stats-building.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative z-10 w-full translate-x-0 rounded-t-md bg-white px-8 py-12 sm:translate-x-[55px] sm:px-10 sm:py-[50px] xl:translate-x-[90px] xl:px-[63px] xl:py-[85px]">
                <p className="text-sm leading-7 text-[#666] sm:text-base sm:leading-9 xl:leading-[2.25]">
                  {aboutQualityText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
