import { ProductsLayoutClient } from "@/components/products/products-layout-client";
import { getProductMenuCategories } from "@/lib/products/get-product-menu";
import type { ProductSidebarNode } from "@/lib/product-sidebar";

export default async function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = await getProductMenuCategories();
  const tree: ProductSidebarNode[] = menu.map((category) => ({
    label: category.label,
    href: category.href,
    children: category.columns.flat().map((group) => ({
      label: group.title,
      href: group.href,
      children: group.children?.map((child) => ({
        label: child.label,
        href: child.href,
      })),
    })),
  }));

  return <ProductsLayoutClient tree={tree}>{children}</ProductsLayoutClient>;
}
