import Image from "next/image";

import { Container } from "@/components/layout/container";
import { sustainabilityRatings } from "@/lib/site-config";

export function SustainabilityRatingsSection() {
  return (
    <section id="ratings" className="scroll-mt-36 bg-white py-[70px] sm:scroll-mt-40 sm:py-[110px]">
      <Container>
        <h2 className="mb-[60px] text-[28px] font-bold leading-[1.3] text-[#333] sm:text-[40px]">
          ESG评级
        </h2>
        <ul>
          {sustainabilityRatings.map((rating) => (
            <li
              key={rating.name}
              className="mb-[30px] flex flex-col gap-4 bg-[#f3f3f3] px-6 py-[25px] last:mb-0 sm:flex-row sm:items-center sm:justify-between sm:px-[110px]"
            >
              <div className="flex items-center sm:pr-14">
                <span className="flex size-[60px] shrink-0 items-center justify-center rounded-full bg-[#0068b7]/10 text-xl font-bold text-[#0068b7]">
                  {rating.name.charAt(0)}
                </span>
                <span className="pl-6 text-lg font-bold leading-[1.3] text-[#333] sm:pl-14 sm:text-2xl">
                  {rating.name}
                </span>
              </div>
              <span className="text-2xl font-bold leading-[1.3] text-[#0068b7] sm:text-[32px]">
                {rating.value}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
