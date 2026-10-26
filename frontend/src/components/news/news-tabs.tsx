import Link from "next/link";

import { newsPageTabs } from "@/lib/site-config";

export function NewsTabs() {
  return (
    <div className="flex overflow-hidden rounded-[3px] pt-[30px]">
      {newsPageTabs.map((tab) => {
        const isInternal = tab.href.startsWith("/");

        if (tab.active) {
          return (
            <div
              key={tab.label}
              className="flex h-[50px] w-[200px] items-center justify-center bg-[#0e68ae] text-base leading-[50px] text-white"
            >
              {tab.label}
            </div>
          );
        }

        return (
          <Link
            key={tab.label}
            href={tab.href}
            {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="flex h-[50px] w-[200px] items-center justify-center bg-[#e2e5ef] text-base leading-[50px] text-[#333] transition-colors hover:bg-[#d5d9e6]"
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
