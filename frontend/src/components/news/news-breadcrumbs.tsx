import Link from "next/link";

import type { BreadcrumbItem } from "@/components/layout/breadcrumbs";

type NewsBreadcrumbsProps = {
  items: readonly BreadcrumbItem[];
};

export function NewsBreadcrumbs({ items }: NewsBreadcrumbsProps) {
  return (
    <nav aria-label="面包屑" className="pt-[18px] text-sm leading-[21px] text-[#999]">
      <ol className="flex flex-wrap items-center">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center">
            {index > 0 && (
              <span className="text-[14px] leading-[21px] text-[#99b2df]">&gt;&nbsp;</span>
            )}
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="text-[14px] leading-[21px] text-[#999] hover:text-[#0068b7]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[14px] leading-[21px] text-[#999]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
