import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { careerRecruitCards } from "@/lib/site-config";

export function CareerRecruitCards() {
  return (
    <section className="bg-[#f3f4f8] py-[70px] sm:py-[110px]">
      <Container className="px-4 sm:px-6 lg:px-0">
        <ul className="-mx-3 flex flex-wrap">
          {careerRecruitCards.map((card) => (
            <li key={card.title} className="mb-6 w-full px-3 sm:mb-0 sm:w-1/2 lg:w-1/3">
              <Link
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start rounded-[3px] border border-[#ebf0f3] bg-white px-8 py-12 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(14,104,174,0.08)] sm:px-[46px] sm:py-[50px]"
              >
                <div className="w-[48px] shrink-0 sm:w-[60px]">
                  <Image
                    src={card.icon}
                    alt=""
                    width={60}
                    height={60}
                    className="h-auto w-full"
                    aria-hidden
                  />
                </div>
                <div className="min-w-0 flex-1 pl-6 pt-1 sm:pl-[34px] sm:pt-2.5">
                  <p className="text-xl font-bold leading-[1.5] text-[#0b254b] transition-colors duration-300 group-hover:text-[#0e68ae] sm:text-2xl">
                    {card.title}
                  </p>
                  <div className="mt-[18px] flex items-center gap-2 text-base text-[#0e68ae] sm:mt-[22px]">
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
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
