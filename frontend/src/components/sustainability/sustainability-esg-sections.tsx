import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { sustainabilityEsgSections } from "@/lib/site-config";

export function SustainabilityEsgSections() {
  return (
    <section className="bg-white py-16 sm:py-[110px]">
      <Container>
        <ul className="flex flex-col gap-10 sm:gap-[38px]">
          {sustainabilityEsgSections.map((section) => (
            <li
              key={section.id}
              id={section.id}
              className="scroll-mt-36 sm:scroll-mt-40"
            >
              <article className="relative aspect-[1385/446] w-full overflow-hidden rounded-sm">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
                <div className="relative max-w-[812px] p-8 sm:p-12">
                  <h2 className="text-2xl font-medium text-white sm:text-[28px]">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/90 sm:text-base sm:leading-[26px]">
                    {section.description}
                  </p>
                  <Link
                    href={section.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-white transition-opacity hover:opacity-80"
                  >
                    查看更多
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
