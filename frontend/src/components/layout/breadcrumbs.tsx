import Link from "next/link";

import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="面包屑" className={cn("text-sm leading-[1.5] text-[#999]", className)}>
      <ol className="flex flex-wrap items-center">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center text-[#999]">
              {index > 0 && <span className="px-1">&gt;</span>}
              {item.href && !isLast ? (
                <Link href={item.href} className="pr-1 transition-colors hover:text-[#0068b7]">
                  {item.label}
                </Link>
              ) : (
                <span className={cn(item.href ? "pr-1" : undefined)}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
