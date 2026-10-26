"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { qualityNavItems, ROUTES } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function QualityStickyNav() {
  const [activeHref, setActiveHref] = useState<string>(
    qualityNavItems[0]?.href ?? ""
  );

  useEffect(() => {
    const ids = qualityNavItems.map((item) => item.href.replace("#", ""));
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
      className="sticky top-16 z-40 border-b border-[#eaeaea] bg-white sm:top-20"
      aria-label="质量与可靠性页面导航"
    >
      <Container className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <Breadcrumbs
          items={[
            { label: "首页", href: ROUTES.home },
            { label: "质量与可靠性" },
          ]}
        />
        <ul className="flex overflow-x-auto">
          {qualityNavItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className={cn(
                    "relative inline-block whitespace-nowrap px-3 py-3 text-sm transition-colors sm:px-4 sm:py-[18px] sm:text-base",
                    isActive
                      ? "font-medium text-[#0068b7]"
                      : "text-[#666] hover:text-[#0068b7]"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-3 right-3 h-0.5 bg-[#0068b7] transition-opacity sm:left-4 sm:right-4",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                    aria-hidden
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
