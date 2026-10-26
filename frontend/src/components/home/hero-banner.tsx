"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { HomepageSlide } from "@/lib/cms/types";
import { cn } from "@/lib/utils";

type HeroBannerProps = {
  slides: HomepageSlide[];
};

export function HeroBanner({ slides }: HeroBannerProps) {
  const [active, setActive] = useState(0);
  const safeSlides = slides.length > 0 ? slides : [];

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % safeSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [safeSlides.length]);

  if (safeSlides.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#0a1628]">
      <div className="relative aspect-[1920/542] w-full max-h-[542px]">
        {safeSlides.map((slide, index) => (
          <Link
            key={`${slide.src}-${index}`}
            href={slide.href}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              active === index ? "opacity-100" : "pointer-events-none opacity-0"
            )}
            aria-hidden={active !== index}
            tabIndex={active === index ? 0 : -1}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
            <div className="absolute inset-y-0 left-0 flex w-full max-w-[1400px] items-center px-6 sm:px-10 lg:px-[53px]">
              <div className="max-w-[560px] text-white">
                <p className="text-2xl font-bold leading-tight sm:text-4xl lg:text-[48px] lg:leading-[1.2]">
                  {slide.title}
                </p>
                <p className="mt-3 text-base text-white/90 sm:text-xl">{slide.subtitle}</p>
                <span className="mt-6 inline-flex items-center border border-white/80 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-[#0068b7] sm:mt-8">
                  了解更多
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <ul className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 sm:bottom-8">
        {safeSlides.map((slide, index) => (
          <li key={`${slide.src}-dot-${index}`}>
            <button
              type="button"
              aria-label={`切换到第 ${index + 1} 张`}
              onClick={() => setActive(index)}
              className={cn(
                "size-2 rounded-sm transition-colors",
                active === index ? "bg-white" : "bg-[#244a6e] hover:bg-white/70"
              )}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
