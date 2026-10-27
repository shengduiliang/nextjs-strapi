import { mediaUrl, strapiGet } from "@/lib/strapi";

import {
  defaultContactContent,
  defaultHomepageSlides,
  defaultHotProducts,
  defaultProductGs6933,
} from "./defaults";
import type {
  ContactContent,
  HomepageSlide,
  HotProductItem,
  ProductContent,
} from "./types";

type SlideRow = {
  src?: unknown;
  alt?: string;
  title?: string;
  subtitle?: string;
  href?: string;
};

type HotProductRow = {
  name?: string;
  description?: string;
  image?: unknown;
  href?: string;
};

export async function fetchHomepageSlidesFromDb(): Promise<HomepageSlide[] | null> {
  const data = await strapiGet("/api/homepage-slides?sort=order:asc&pagination[limit]=50&populate=*");
  if (!Array.isArray(data) || data.length === 0) return null;
  return data
    .map((row: SlideRow) => ({
      src: mediaUrl(row.src),
      alt: String(row.alt ?? row.title ?? ""),
      title: String(row.title ?? ""),
      subtitle: String(row.subtitle ?? ""),
      href: String(row.href ?? "/"),
    }))
    .filter((s) => s.src && s.title);
}

export async function fetchHotProductsFromDb(): Promise<HotProductItem[] | null> {
  const data = await strapiGet("/api/hot-products?sort=order:asc&pagination[limit]=50&populate=*");
  if (!Array.isArray(data) || data.length === 0) return null;
  return data
    .map((row: HotProductRow) => ({
      name: String(row.name ?? ""),
      description: String(row.description ?? ""),
      image: mediaUrl(row.image) || "/images/home/product-gs6933.png",
      href: String(row.href ?? "/products"),
    }))
    .filter((h) => h.name);
}

export async function fetchContactFromDb(): Promise<ContactContent | null> {
  const data = await strapiGet("/api/contact");
  if (!data || typeof data !== "object" || Array.isArray(data)) return null;
  const row = data as Record<string, unknown>;
  if (!row.company) return null;
  return {
    company: String(row.company),
    address: String(row.address ?? ""),
    phone: String(row.phone ?? ""),
    email: String(row.email ?? ""),
    formTitle: String(row.formTitle ?? "在线留言"),
    formIntro: String(row.formIntro ?? ""),
  };
}

export async function fetchProductGs6933FromDb(): Promise<ProductContent | null> {
  const data = await strapiGet("/api/products?filters[slug][$eq]=gs6933&populate=*");
  if (!Array.isArray(data) || data.length === 0) return null;
  const row = data[0] as Record<string, unknown>;
  if (!row.name) return null;
  return {
    name: String(row.name),
    status: String(row.productStatus ?? ""),
    tagline: String(row.tagline ?? ""),
    sampleHref: String(row.sampleHref ?? "/about/contact"),
    heroImage: mediaUrl(row.heroImage),
    blockDiagram: mediaUrl(row.blockDiagram),
    bannerImage: mediaUrl(row.bannerImage),
    description: Array.isArray(row.description)
      ? row.description.map((p: any) => String(p?.text ?? ""))
      : defaultProductGs6933.description,
    datasheets: Array.isArray(row.datasheets)
      ? (row.datasheets as ProductContent["datasheets"])
      : defaultProductGs6933.datasheets,
    documentSections: Array.isArray(row.documentSections)
      ? (row.documentSections as ProductContent["documentSections"])
      : defaultProductGs6933.documentSections,
    tools: Array.isArray(row.tools)
      ? (row.tools as ProductContent["tools"])
      : defaultProductGs6933.tools,
    applications: Array.isArray(row.applications)
      ? row.applications.map((a: any) => String(a?.text ?? ""))
      : defaultProductGs6933.applications,
  };
}

export {
  defaultContactContent,
  defaultHomepageSlides,
  defaultHotProducts,
  defaultProductGs6933,
};
