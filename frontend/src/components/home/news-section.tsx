import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/home/section-heading";
import type { HomepageNewsCard } from "@/lib/cms/get-cms";
import { ROUTES } from "@/lib/site-config";

type NewsSectionProps = {
  items: HomepageNewsCard[];
};

export function NewsSection({ items }: NewsSectionProps) {
  return (
    <section id="news" className="bg-white py-16 sm:py-[110px]">
      <Container>
        <SectionHeading title="新闻动态" showMore moreHref={ROUTES.news} />
        <div className="-mx-4 mt-12 flex gap-0 overflow-x-auto px-4 pb-4 snap-x snap-mandatory sm:-mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group min-w-[280px] shrink-0 snap-start border border-[#eee] bg-white p-7 transition-shadow hover:shadow-[0_6px_18px_rgba(165,181,211,0.28)] sm:min-w-0 sm:p-8"
            >
              <p className="text-base text-[#0068b7]">{item.category}</p>
              <h3 className="mt-3 line-clamp-3 min-h-[96px] text-lg font-medium leading-8 text-[#333] transition-colors group-hover:text-[#0068b7] sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-5 text-base text-[#999]">{item.date}</p>
              <div className="relative mt-6 aspect-[407/229] w-full overflow-hidden bg-[#eef2f7]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
