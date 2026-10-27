import { cache } from "react";
import { unstable_cache } from "next/cache";

import { productDetailPath } from "@/lib/products/default-catalog";
import { fetchPublishedProducts } from "@/lib/products/product-repository";
import { productMenuCategories as defaultProductMenuCategories } from "@/lib/site-config";

import { fetchPublishedProductMenuFromDb } from "./menu-repository";
import type { ProductMenuCategory, ProductMenuGroup } from "./menu-types";
import type { ProductRecord } from "./product-types";

function attachProductsToMenu(
  menu: ProductMenuCategory[],
  products: ProductRecord[]
): ProductMenuCategory[] {
  const published = products
    .filter((item) => item.publishStatus === "published")
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return menu.map((category) => ({
    ...category,
    columns: category.columns.map((column) =>
      column.map((group): ProductMenuGroup => {
        const children = published
          .filter((product) => product.groupId === group.id)
          .map((product) => ({
            label: product.name,
            href: productDetailPath(product.slug),
          }));
        return {
          id: group.id,
          title: group.title,
          href: group.href,
          children: children.length > 0 ? children : undefined,
        };
      })
    ),
  }));
}

const getCachedProductMenuStructure = unstable_cache(
  async () => {
    try {
      const fromDb = await fetchPublishedProductMenuFromDb();
      if (fromDb.length > 0) {
        return fromDb;
      }
    } catch {
      // Fallback to static config when database is unavailable.
    }

    return defaultProductMenuCategories;
  },
  ["published-product-menu-structure"],
  { revalidate: 60 }
);

export const getProductMenuCategories = cache(async (): Promise<ProductMenuCategory[]> => {
  const menu = await getCachedProductMenuStructure();
  let products: ProductRecord[] = [];
  try {
    products = await fetchPublishedProducts();
  } catch {
    products = [];
  }
  return attachProductsToMenu(menu, products);
});
