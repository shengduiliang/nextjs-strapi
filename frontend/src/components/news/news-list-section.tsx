"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { NewsCard } from "@/components/news/news-card";
import { NewsPagination } from "@/components/news/news-pagination";
import { newsDetailPath } from "@/lib/news-articles";
import type { NewsArticleRecord } from "@/lib/news/repository";
import { newsPageTotalPages, newsYearOptions } from "@/lib/site-config";

type NewsListSectionProps = {
  items: NewsArticleRecord[];
};

function toCardItem(item: NewsArticleRecord) {
  const [year, month, day] = item.date.split("-");
  return {
    title: item.title,
    excerpt: item.excerpt,
    href: newsDetailPath(item.slug),
    dayMonth: `${month}.${day}`,
    year: year ?? "",
  };
}

export function NewsListSection({ items }: NewsListSectionProps) {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = selectedYear
    ? items.filter((item) => item.date.startsWith(selectedYear))
    : items;

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative w-full max-w-[350px]">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="h-[50px] w-full appearance-none rounded-sm border border-[#dde4e6] bg-white pl-[23px] pr-10 text-base text-[#333] outline-none focus:border-[#0068b7]"
            aria-label="选择年份"
          >
            <option value="">选择年份</option>
            {newsYearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#666]"
            aria-hidden
          />
        </div>
        <button
          type="button"
          className="h-[50px] w-[152px] shrink-0 bg-[#0e68ae] text-base text-white transition-colors hover:bg-[#0068b7]"
        >
          搜索
        </button>
      </div>

      <div className="mt-[40px] grid grid-cols-1 gap-x-9 gap-y-6 md:grid-cols-2">
        {filteredItems.map((item) => (
          <NewsCard key={item.slug} item={toCardItem(item)} />
        ))}
      </div>

      <NewsPagination
        currentPage={currentPage}
        totalPages={newsPageTotalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
