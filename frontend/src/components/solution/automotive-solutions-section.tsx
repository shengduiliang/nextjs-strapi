import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { automotiveTypicalSolutions } from "@/lib/site-config";

export function AutomotiveSolutionsSection() {
  return (
    <section className="bg-white py-16 sm:py-[90px]">
      <Container>
        <h2 className="text-center text-[28px] font-bold leading-tight text-[#0b254b] sm:text-[40px] sm:leading-[60px]">
          典型解决方案
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6">
          {automotiveTypicalSolutions.map((solution) => (
            <li key={solution.title}>
              <Link
                href={solution.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full overflow-hidden border border-[#e8eef3] bg-white transition-shadow hover:shadow-[0_6px_18px_rgba(165,181,211,0.35)]"
              >
                <div className="relative aspect-[294/197] w-[48%] shrink-0 overflow-hidden bg-[#eef2f7] sm:w-[51%]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 300px"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between px-5 py-6 sm:px-7 sm:py-8">
                  <h3 className="text-lg font-bold leading-8 text-[#0b254b] transition-colors group-hover:text-[#0068b7] sm:text-xl sm:leading-9">
                    {solution.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm text-[#0e68ae]">
                    查看更多
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
