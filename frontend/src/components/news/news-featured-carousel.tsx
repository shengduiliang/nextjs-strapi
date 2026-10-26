"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { newsDetailPath } from "@/lib/news-articles";
import type { NewsArticleRecord } from "@/lib/news/repository";
import { cn } from "@/lib/utils";

type NewsFeaturedCarouselProps = {
  slides: NewsArticleRecord[];
};

export function NewsFeaturedCarousel({ slides }: NewsFeaturedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = slides.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + slideCount) % slideCount);
    },
    [slideCount]
  );

  useEffect(() => {
    if (slideCount <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, 6000);
    return () => clearInterval(timer);
  }, [slideCount]);

  if (slideCount === 0) return null;

  const slide = slides[activeIndex];
  const href = newsDetailPath(slide.slug);
  const image = slide.coverImage ?? "/images/news/banner.jpg";

  return (
    <div className="pt-[30px]">
      <Link href={href} className="group relative block min-h-[390px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-[60px]">
          <div className="relative aspect-[670/390] w-full shrink-0 overflow-hidden rounded-[3px] lg:w-[670px]">
            <Image
              src={image}
              alt={slide.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 670px"
              priority
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col pt-0 lg:pt-[30px]">
            <h2 className="line-clamp-2 text-[30px] font-bold leading-[40.5px] text-[#0b254b] group-hover:text-[#0068b7]">
              {slide.title}
            </h2>
            <p className="pt-6 text-[15px] leading-6 text-[#999]">{slide.date}</p>
            <p className="line-clamp-3 pt-4 text-[18px] leading-[31.5px] text-[#666]">
              {slide.excerpt}
            </p>
          </div>
        </div>
      </Link>

      {slideCount > 1 && (
        <div className="mt-9 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`第 ${index + 1} 条推荐新闻`}
              onClick={() => goTo(index)}
              className={cn(
                "size-2 rounded-full transition-colors",
                activeIndex === index ? "bg-[#0068b7]" : "bg-[#ccc]"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
