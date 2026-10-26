import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/home/section-heading";
import type { HomepageStoryCard } from "@/lib/cms/get-cms";

type StorySectionProps = {
  items: HomepageStoryCard[];
};

export function StorySection({ items }: StorySectionProps) {
  return (
    <section id="stories" className="bg-[#f8f9fb] py-16 sm:py-[110px]">
      <Container>
        <SectionHeading title="公司动态" showMore moreHref="/about/news-and-event/news" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.href}
              className="group overflow-hidden bg-white shadow-[0_3px_14px_rgba(165,181,211,0.18)] transition-shadow hover:shadow-[0_8px_22px_rgba(165,181,211,0.28)]"
            >
              <Link href={item.href} className="block">
                <div className="relative aspect-[451/254] overflow-hidden bg-[#e8eef5]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block bg-[#0068b7]/10 px-4 py-1.5 text-sm text-[#0068b7]">
                    {item.tag}
                  </span>
                  <h3 className="mt-4 line-clamp-3 text-xl font-medium leading-8 text-[#333] transition-colors group-hover:text-[#0068b7]">
                    {item.title}
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-[#0068b7]">
                    查看更多 →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
