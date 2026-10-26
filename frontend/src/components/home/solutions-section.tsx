import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { industrySolutions } from "@/lib/site-config";

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative bg-[#2b303e] py-16 sm:py-[110px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[#f0f1f5]" />
      <Container className="relative">
        <h2 className="text-3xl font-bold leading-tight text-[#333] sm:text-[40px] sm:leading-[60px]">
          应用方案
        </h2>
        <div className="mt-11 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {industrySolutions.map((item) => {
            const external = item.href.startsWith("http");
            return (
              <Link
                key={item.title}
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group relative aspect-[467/297] overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <h3 className="absolute bottom-5 left-5 text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
