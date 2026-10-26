"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { automotiveRelatedNewsItems } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 3;

export function AutomotiveRelatedNewsSection() {
  const [activePage, setActivePage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(automotiveRelatedNewsItems.length / ITEMS_PER_PAGE));
  const visibleItems = automotiveRelatedNewsItems.slice(
    activePage * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="bg-white py-16 sm:py-[90px]">
      <Container>
        <h2 className="text-[28px] font-bold leading-tight text-[#0b254b] sm:text-[40px] sm:leading-[60px]">
          相关新闻
        </h2>

        <div className="relative mt-10 sm:mt-12">
          <ul className="-mx-2 grid grid-cols-1 gap-y-5 md:grid-cols-3">
            {visibleItems.map((item) => (
              <li key={item.title} className="px-2">
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[248px] flex-col rounded-md bg-white px-6 pb-8 pt-5 shadow-[0_3px_18px_rgba(165,181,211,0.27)] transition-shadow hover:shadow-[0_6px_22px_rgba(165,181,211,0.4)] sm:px-[25px] sm:pb-[30px] sm:pt-[15px]"
                >
                  <p className="text-base text-[#0e68ae]">{item.category}</p>
                  <h3 className="mt-3 line-clamp-3 flex-1 text-lg font-bold leading-8 text-[#0b254b] transition-colors group-hover:text-[#0068b7] sm:text-xl sm:leading-[30px]">
                    {item.title}
                  </h3>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm text-[#0e68ae]">
                    查看更多
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {pageCount > 1 && (
            <div className="mt-10 flex justify-center gap-3 sm:mt-12">
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActivePage(index)}
                  aria-label={`第 ${index + 1} 页`}
                  aria-current={activePage === index ? "true" : undefined}
                  className={cn(
                    "size-2 rounded-[4px] transition-colors",
                    activePage === index ? "bg-[#0068b7]" : "bg-[#ccc] hover:bg-[#aaa]"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
