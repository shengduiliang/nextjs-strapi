import Link from "next/link";

import { ProductContainer } from "@/components/products/product-container";
import type { BreadcrumbItem } from "@/components/layout/breadcrumbs";

type ProductPageHeaderProps = {
  breadcrumbs: readonly BreadcrumbItem[];
  title: string;
};

export function ProductPageHeader({ breadcrumbs, title }: ProductPageHeaderProps) {
  return (
    <header className="bg-white pt-4 sm:pt-5">
      <ProductContainer>
        <nav aria-label="面包屑" className="text-sm leading-[21px] text-[#999]">
          <ol className="flex flex-wrap items-center">
            {breadcrumbs.map((item, index) => (
              <li key={item.label} className="flex items-center">
                {index > 0 && (
                  <span className="mx-1 text-[14px] leading-[21px] text-[#99b2df]">&gt;</span>
                )}
                {item.href && index < breadcrumbs.length - 1 ? (
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
        <h1 className="pt-[47px] text-[40px] font-bold leading-[60px] text-[#333] sm:text-[48px] sm:leading-[72px]">
          {title}
        </h1>
      </ProductContainer>
    </header>
  );
}
