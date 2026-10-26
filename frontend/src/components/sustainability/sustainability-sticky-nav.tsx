"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { sustainabilityNavItems } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SustainabilityStickyNav() {
  const [activeHref, setActiveHref] = useState<string>(
    sustainabilityNavItems[0]?.href ?? ""
  );

  useEffect(() => {
    const ids = sustainabilityNavItems.map((item) => item.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="sticky top-16 z-50 sm:top-20"
      aria-label="可持续发展页面导航"
    >
      <Container>
        <div className="relative -mt-[38px]">
          <ul className="flex overflow-x-auto rounded bg-white shadow-[10px_10px_15px_0_rgba(0,0,0,0.12)]">
            {sustainabilityNavItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <li key={item.href} className="w-[12.5%] min-w-[72px] shrink-0 text-center">
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-block px-3 py-[15px] text-base leading-[1.6] transition-colors sm:text-lg",
                      isActive
                        ? "font-bold text-[#0068b7]"
                        : "text-[#666] hover:text-[#0068b7]"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-1 bg-[#0068b7] transition-all",
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      )}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
