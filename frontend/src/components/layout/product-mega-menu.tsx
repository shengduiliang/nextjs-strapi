"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";

import { isInternalProductHref } from "@/lib/product-sidebar";
import type { ProductMenuCategory } from "@/lib/products/menu-types";
import { cn } from "@/lib/utils";

function productLinkProps(href: string) {
  if (isInternalProductHref(href)) return {};
  return { target: "_blank" as const, rel: "noopener noreferrer" };
}

type ProductMegaMenuProps = {
  open: boolean;
  categories: ProductMenuCategory[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

function MenuGroup({ group }: { group: ProductMenuCategory["columns"][number][number] }) {
  return (
    <div className="space-y-2">
      <Link
        href={group.href}
        {...productLinkProps(group.href)}
        className="block border-b border-[#eaeaea] pb-2 text-base text-[#637381] transition-colors hover:text-[#0068b7]"
      >
        {group.title}
      </Link>
      {group.children && group.children.length > 0 && (
        <ul className="space-y-0.5">
          {group.children.map((child) => (
            <li key={`${child.label}-${child.href}`}>
              <Link
                href={child.href}
                {...productLinkProps(child.href)}
                className="block py-0.5 text-base leading-7 text-[#666] transition-colors hover:text-[#0068b7]"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ProductMegaMenu({
  open,
  categories,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ProductMegaMenuProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "");

  useEffect(() => {
    if (!categories.some((category) => category.id === activeId)) {
      setActiveId(categories[0]?.id ?? "");
    }
  }, [categories, activeId]);

  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];

  if (categories.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "absolute top-full left-1/2 z-50 w-screen max-w-none -translate-x-1/2 overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
        open ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div
        className={cn(
          "w-full overflow-hidden bg-white shadow-[0_0_8px_rgba(19,60,91,0.17)]",
          "transition-transform duration-300 ease-out",
          open ? "translate-y-0" : "-translate-y-2"
        )}
      >
        <div className="mx-auto flex min-h-[360px] w-full max-w-[1920px]">
          {/* 左侧：产品大类 */}
          <aside className="w-[min(100%,220px)] shrink-0 bg-[#f7f9fc] py-9 pl-6 pr-3 sm:w-[280px] sm:pl-10 lg:w-[36%] lg:max-w-[420px] lg:py-11 lg:pl-[100px] lg:pr-4">
            <ul className="space-y-1.5">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={category.href}
                    {...productLinkProps(category.href)}
                    onMouseEnter={() => setActiveId(category.id)}
                    className={cn(
                      "flex h-[48px] items-center rounded-sm px-4 text-xl transition-colors sm:px-5",
                      activeId === category.id
                        ? "bg-[#0068b7]/8 text-[#0068b7]"
                        : "text-[#637381] hover:bg-[#0068b7]/5 hover:text-[#0068b7]"
                    )}
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* 中间：子类链接 */}
          <div className="flex min-w-0 flex-1 border-l border-[#f0f0f0] py-9 pl-5 pr-4 sm:pl-8 lg:py-11 lg:pr-8">
            <div className="grid w-full flex-1 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 lg:gap-14">
              {activeCategory?.columns.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-4 px-0 sm:px-4 lg:px-8">
                  {column.map((group) => (
                    <MenuGroup key={`${group.title}-${group.href}`} group={group} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：推荐产品 */}
          {activeCategory?.featured && (
            <aside className="relative hidden w-[26%] min-w-[260px] max-w-[360px] shrink-0 lg:block">
              <div className="absolute top-[10%] bottom-[10%] left-0 w-px bg-[#eaeaea]" aria-hidden />
              <Link
                href={activeCategory.featured.href}
                {...productLinkProps(activeCategory.featured.href)}
                className="flex h-full flex-col px-6 py-10 transition-opacity hover:opacity-90 xl:px-8"
              >
                <div>
                  <p className="text-base font-bold leading-[1.5] text-[#0068b7]">
                    {activeCategory.featured.title}
                  </p>
                  <p className="mt-2.5 text-base leading-[1.5] text-[#637381]">
                    {activeCategory.featured.productName}
                  </p>
                </div>
                <div className="relative mt-5 aspect-square w-full max-w-[280px] self-center overflow-hidden rounded-sm bg-black">
                  <Image
                    src={activeCategory.featured.image}
                    alt={activeCategory.featured.productName}
                    fill
                    className="object-contain"
                    sizes="280px"
                  />
                </div>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-base text-[#0e68ae]">
                  查看更多
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}

export { useMegaMenuHover as useProductMenuHover } from "@/components/layout/use-mega-menu-hover";
