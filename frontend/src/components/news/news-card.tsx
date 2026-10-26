import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { NewsPageItem } from "@/lib/site-config";

type NewsCardProps = {
  item: NewsPageItem;
};

function linkProps(href: string) {
  if (href.startsWith("/")) return {};
  return { target: "_blank" as const, rel: "noopener noreferrer" as const };
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <Link
      href={item.href}
      {...linkProps(item.href)}
      className="group flex h-full flex-col bg-white px-[66px] py-[38px] shadow-[0_3px_3px_rgba(138,150,172,0.26)] transition-shadow hover:shadow-[0_6px_12px_rgba(138,150,172,0.3)]"
    >
      <div className="flex h-12 items-baseline gap-2">
        <span className="text-[32px] leading-[48px] text-[#0e68ae]">{item.dayMonth}</span>
        <span className="text-base leading-4 text-[#0e68ae]">/ {item.year}</span>
      </div>

      <div className="mt-[15px] flex flex-col gap-[27px]">
        <h3 className="line-clamp-2 text-2xl font-bold leading-9 text-[#0b254b] group-hover:text-[#0068b7]">
          {item.title}
        </h3>
        <p className="line-clamp-2 text-[15.8px] leading-6 text-[#666]">{item.excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm text-[#0e68ae]">
          查看更多
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
