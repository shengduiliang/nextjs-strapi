import { strapiGet } from "@/lib/strapi";

import { defaultProductCatalog } from "./default-catalog";
import type { ProductRecord } from "./product-types";

type ProductRow = Record<string, unknown>;

function mapRow(row: ProductRow): ProductRecord {
  return {
    id: String(row.documentId ?? row.slug ?? ""),
    slug: String(row.slug ?? ""),
    name: String(row.name ?? ""),
    status: String(row.productStatus ?? ""),
    tagline: String(row.tagline ?? ""),
    sampleHref: String(row.sampleHref ?? "/about/contact"),
    heroImage: String(row.heroImage ?? ""),
    blockDiagram: String(row.blockDiagram ?? ""),
    bannerImage: String(row.bannerImage ?? ""),
    description: Array.isArray(row.description)
      ? row.description.map((p: any) => String(p?.text ?? ""))
      : [],
    datasheets: Array.isArray(row.datasheets)
      ? (row.datasheets as ProductRecord["datasheets"])
      : [],
    documentSections: Array.isArray(row.documentSections)
      ? (row.documentSections as ProductRecord["documentSections"])
      : [],
    tools: Array.isArray(row.tools) ? (row.tools as ProductRecord["tools"]) : [],
    applications: Array.isArray(row.applications)
      ? row.applications.map((a: any) => String(a?.text ?? ""))
      : [],
    publishStatus: String(row.publishStatus ?? "published"),
    categorySlug: String(row.categorySlug ?? ""),
    groupId: String(row.groupId ?? ""),
    coverImage: String(row.coverImage ?? ""),
    sortOrder: Number(row.sortOrder ?? 0),
    updatedAt: String(row.updatedAt ?? ""),
  };
}

export async function fetchPublishedProducts(): Promise<ProductRecord[]> {
  const data = await strapiGet("/api/products?pagination[limit]=100&populate=*");
  const list =
    Array.isArray(data) && data.length > 0
      ? data.map(mapRow)
      : defaultProductCatalog;
  return list.filter((item) => item.publishStatus === "published");
}

export async function fetchPublishedProductBySlug(
  slug: string
): Promise<ProductRecord | null> {
  const data = await strapiGet(
    `/api/products?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );
  if (Array.isArray(data) && data.length > 0) return mapRow(data[0] as ProductRow);
  return defaultProductCatalog.find((item) => item.slug === slug) ?? null;
}
