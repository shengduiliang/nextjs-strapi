"use client";

import Link from "next/link";
import { useState } from "react";

import { ProductContainer } from "@/components/products/product-container";
import { productRelatedNewsItems } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ProductRelatedNews() {
  const [activePage, setActivePage] = useState(0);
  const pageCount = 2;

  return (
    <section className="bg-white py-16 sm:py-[90px]">
      <ProductContainer>
        <h2 className="text-[28px] font-bold leading-[42px] text-[#333] sm:text-[34px] sm:leading-[51px]">
          相关新闻
        </h2>

        <div className="relative mt-[45px]">
          <div className="-mx-[15px] grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
            {productRelatedNewsItems.map((item) => (
              <div key={item.title} className="px-[15px]">
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-auto min-h-[280px] flex-col border border-[#dde4e6] bg-white px-7 pb-8 pt-10 transition-shadow hover:shadow-[0_6px_18px_rgba(165,181,211,0.28)] sm:h-[326px] sm:px-[38px] sm:pb-[34px] sm:pt-[52px]"
                >
                  <h3 className="line-clamp-3 text-[20px] font-bold leading-[30px] text-[#333] transition-colors group-hover:text-[#0068b7] sm:text-[26px] sm:leading-[39px]">
                    {item.title}
                  </h3>
                  <div className="mt-auto pt-[30px]">
                    <p className="text-[14px] leading-6 text-[#999]">{item.date}</p>
                    <div className="mt-[22px] flex items-center border-t border-[#dde4e6] pt-[23px]">
                      <span className="pr-[10px] text-[16px] leading-6 text-[#666]">查看更多</span>
                      <span className="text-[#666]" aria-hidden>
                        —
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-[50px] flex justify-center gap-3">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActivePage(index)}
                aria-label={`第 ${index + 1} 页`}
                className={cn(
                  "size-2 rounded-[4px]",
                  activePage === index ? "bg-[#0068b7]" : "bg-[#ccc]"
                )}
              />
            ))}
          </div>
        </div>
      </ProductContainer>
    </section>
  );
}
