import Link from "next/link";

import { newsDetailPath } from "@/lib/news-articles";

type NewsDetailSidebarProps = {
  items: Array<{ slug: string; title: string; date: string }>;
};

export function NewsDetailSidebar({ items }: NewsDetailSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-[378px]">
      <h2 className="text-[30px] font-bold leading-[45px] text-[#333]">更多新闻</h2>
      <ul className="mt-8 divide-y divide-[#eaeaea] border-t border-[#eaeaea]">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={newsDetailPath(item.slug)}
              className="group block py-[26px] transition-colors hover:text-[#0068b7]"
            >
              <p className="text-sm leading-[21px] text-[#0e68ae]">{item.date}</p>
              <p className="mt-1 line-clamp-2 text-[18px] leading-[27px] text-[#5a5a68] group-hover:text-[#0068b7]">
                {item.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
