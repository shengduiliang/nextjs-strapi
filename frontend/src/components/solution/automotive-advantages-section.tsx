import Image from "next/image";
import { Car, Link2, Package, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { automotiveAdvantages } from "@/lib/site-config";

const advantageIcons: LucideIcon[] = [Car, Link2, Package, ShieldCheck];

export function AutomotiveAdvantagesSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-[80px]">
      <Image
        src="/images/solution/automotive/advantages-bg.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#0b254b]/80" aria-hidden />

      <Container className="relative">
        <h2 className="text-center text-[28px] font-bold leading-tight text-white sm:text-[40px] sm:leading-[60px]">
          我们的优势
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {automotiveAdvantages.map((item, index) => {
            const Icon = advantageIcons[index] ?? Car;
            return (
              <li key={item.title}>
                <article className="relative flex h-full flex-col items-center bg-white px-6 pb-14 pt-9 shadow-[0_4px_12px_rgba(0,0,0,0.08)] sm:px-8 sm:pt-10">
                  <div className="flex size-[52px] items-center justify-center rounded-full bg-[#0068b7]">
                    <Icon className="size-6 text-white" strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 text-center text-base leading-7 text-[#0068b7] sm:mt-4 sm:text-lg sm:leading-[35px]">
                    {item.title}
                  </p>
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-[15%] -translate-x-1/2 bg-[#0068b7]" />
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
