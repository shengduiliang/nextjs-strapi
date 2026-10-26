import Link from "next/link";

import { newsDetailPath } from "@/lib/news-articles";
import { ROUTES } from "@/lib/site-config";

type NavItem = {
  slug: string;
  title: string;
};

type NewsDetailNavigationProps = {
  prev: NavItem | null;
  next: NavItem | null;
};

export function NewsDetailNavigation({ prev, next }: NewsDetailNavigationProps) {
  return (
    <div>
      <div className="mt-12 flex flex-col gap-3 border-t border-[#eaeaea] pt-8 text-base sm:flex-row sm:justify-between">
        {prev ? (
          <Link
            href={newsDetailPath(prev.slug)}
            className="text-[#666] transition-colors hover:text-[#0068b7]"
          >
            上一篇：{prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={newsDetailPath(next.slug)}
            className="text-[#666] transition-colors hover:text-[#0068b7] sm:text-right"
          >
            下一篇：{next.title}
          </Link>
        ) : null}
      </div>

      <div className="mt-8">
        <Link
          href={ROUTES.news}
          className="inline-flex items-center text-base text-[#0068b7] hover:underline"
        >
          ← 返回新闻动态
        </Link>
      </div>
    </div>
  );
}
