import { strapiGet } from "@/lib/strapi";

import type { ProductMenuCategory } from "./menu-types";

type MenuRow = {
  slug?: string;
  label?: string;
  href?: string;
  columns?: unknown;
  featured?: unknown;
};

export async function fetchPublishedProductMenuFromDb(): Promise<ProductMenuCategory[]> {
  const data = await strapiGet(
    "/api/product-menu-categories?sort=sortOrder:asc&pagination[limit]=50"
  );
  if (!Array.isArray(data) || data.length === 0) return [];
  return data.map((row: MenuRow) => ({
    id: String(row.slug ?? ""),
    label: String(row.label ?? ""),
    href: String(row.href ?? "/products"),
    columns: Array.isArray(row.columns)
      ? (row.columns as ProductMenuCategory["columns"])
      : [],
    featured: row.featured
      ? (row.featured as ProductMenuCategory["featured"])
      : undefined,
  }));
}
