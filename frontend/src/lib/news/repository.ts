import type { NewsArticleBlock } from "@/lib/news-articles";
import { mediaUrl, strapiGet } from "@/lib/strapi";

export type NewsArticleRecord = {
  id?: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string | null;
  blocks: NewsArticleBlock[];
  nextSlug?: string | null;
  status?: string;
};

type NewsRow = {
  slug?: string;
  title?: string;
  date?: string;
  excerpt?: string;
  coverImage?: string | null;
  blocks?: unknown;
  nextSlug?: string | null;
  status?: string;
};

function mapRow(row: NewsRow): NewsArticleRecord {
  return {
    slug: String(row.slug ?? ""),
    title: String(row.title ?? ""),
    date: String(row.date ?? ""),
    excerpt: String(row.excerpt ?? ""),
    coverImage: mediaUrl(row.coverImage) || null,
    blocks: Array.isArray(row.blocks) ? (row.blocks as NewsArticleBlock[]) : [],
    nextSlug: row.nextSlug ?? null,
    status: String(row.status ?? "published"),
  };
}

export async function fetchPublishedNewsFromDb(): Promise<NewsArticleRecord[]> {
  const data = await strapiGet("/api/articles?sort=date:desc&pagination[limit]=100&populate=*");
  if (!Array.isArray(data)) return [];
  return data.map(mapRow);
}

export async function fetchPublishedNewsBySlug(slug: string): Promise<NewsArticleRecord | null> {
  const data = await strapiGet(`/api/articles?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`);
  if (!Array.isArray(data) || data.length === 0) return null;
  return mapRow(data[0] as NewsRow);
}

export async function fetchAllNewsSlugsFromDb(): Promise<string[]> {
  const data = await strapiGet("/api/articles?pagination[limit]=100");
  if (!Array.isArray(data)) return [];
  return data.map((row: NewsRow) => String(row.slug ?? "")).filter(Boolean);
}
