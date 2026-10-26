"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { aboutMenuItems, ROUTES } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type AboutSubnavProps = {
  currentLabel: string;
};

export function AboutSubnav({ currentLabel }: AboutSubnavProps) {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[#eaeaea] bg-white" aria-label="关于我们页面导航">
      <Container className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <Breadcrumbs
          items={[
            { label: "首页", href: ROUTES.home },
            { label: "关于我们", href: ROUTES.about },
            { label: currentLabel },
          ]}
        />
        <ul className="flex overflow-x-auto">
          {aboutMenuItems.map((item) => {
            const isActive =
              item.href === pathname ||
              (item.href !== ROUTES.about && pathname.startsWith(item.href));
            return (
              <li key={item.label} className="shrink-0">
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
