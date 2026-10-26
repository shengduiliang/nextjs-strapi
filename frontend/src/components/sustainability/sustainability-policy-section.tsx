import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { sustainabilityPolicies } from "@/lib/site-config";

export function SustainabilityPolicySection() {
  return (
    <section
      id="policy"
      className="relative scroll-mt-36 min-h-[500px] overflow-hidden py-[70px] sm:scroll-mt-40 sm:min-h-[632px] sm:py-[110px]"
    >
      <Image
        src="/images/sustainability/pillars-bg.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />
      <Container className="relative">
        <h2 className="mb-10 text-[28px] font-bold leading-[1.3] text-white sm:mb-[60px] sm:text-[40px]">
          ESG政策
        </h2>
        <ul className="flex gap-6 overflow-x-auto pb-4">
          {sustainabilityPolicies.map((policy) => (
            <li key={policy.title} className="w-[280px] shrink-0 sm:w-[320px]">
              <Link
                href={policy.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full min-h-[180px] flex-col justify-between rounded border-b border-transparent bg-white px-8 pb-[55px] pt-10 transition-shadow hover:shadow-lg"
              >
                <p className="text-lg font-bold leading-[1.4] text-[#333] sm:text-xl">
                  {policy.title}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm text-[#0068b7]">
                  查看更多
                  <Image
                    src="/images/quality/arrow-right.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="size-4"
                    aria-hidden
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
