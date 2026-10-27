import { strapiGet } from "@/lib/strapi";

import type { ProductMenuCategory } from "./menu-types";

type GroupRow = { slug?: string; label?: string; href?: string; sortOrder?: number };
type CategoryRow = { slug?: string; label?: string; href?: string; groups?: unknown };

export async function fetchPublishedProductMenuFromDb(): Promise<ProductMenuCategory[]> {
  const data = await strapiGet(
    "/api/product-categories?sort=sortOrder:asc&populate=groups"
  );
  if (!Array.isArray(data) || data.length === 0) return [];
  return data.map((row: CategoryRow) => {
    const groups = (Array.isArray(row.groups) ? (row.groups as GroupRow[]) : [])
      .slice()
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
    return {
      id: String(row.slug ?? ""),
      label: String(row.label ?? ""),
      href: String(row.href ?? "/products"),
      columns: [
        groups.map((g) => ({
          id: String(g.slug ?? ""),
          title: String(g.label ?? ""),
          href: String(g.href ?? "/products"),
        })),
      ],
    };
  });
}
