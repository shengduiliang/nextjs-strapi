import { cache } from "react";
import { unstable_cache } from "next/cache";

import {
  firstParagraphText,
  getAllNewsSlugs,
  getNewsArticle,
  newsArticles,
  newsDetailPath,
  type NewsArticle,
} from "@/lib/news-articles";
import {
  fetchAllNewsSlugsFromDb,
  fetchPublishedNewsBySlug,
  fetchPublishedNewsFromDb,
  type NewsArticleRecord,
} from "@/lib/news/repository";

function staticToRecord(article: NewsArticle): NewsArticleRecord {
  return {
    slug: article.slug,
    title: article.title,
    date: article.date,
    excerpt: firstParagraphText(article.blocks).slice(0, 160),
    blocks: article.blocks,
    nextSlug: article.nextSlug,
    status: "published",
  };
}

const getCachedPublishedNewsList = unstable_cache(
  async () => {
    const dbArticles = await fetchPublishedNewsFromDb();
    if (dbArticles.length > 0) return dbArticles;
    return newsArticles.map(staticToRecord);
  },
  ["published-news-list"],
  { revalidate: 60 }
);

const getCachedPublishedNewsArticle = unstable_cache(
  async (slug: string) => {
    const dbArticle = await fetchPublishedNewsBySlug(slug);
    if (dbArticle) return dbArticle;

    const staticArticle = getNewsArticle(slug);
    if (!staticArticle) return null;
    return staticToRecord(staticArticle);
  },
  ["published-news-article"],
  { revalidate: 60 }
);

const getCachedPublishedNewsSlugs = unstable_cache(
  async () => {
    const dbSlugs = await fetchAllNewsSlugsFromDb();
    if (dbSlugs.length > 0) return dbSlugs;
    return getAllNewsSlugs();
  },
  ["published-news-slugs"],
  { revalidate: 60 }
);

export const getPublishedNewsList = cache(async (): Promise<NewsArticleRecord[]> => {
  return getCachedPublishedNewsList();
});

export const getPublishedNewsArticle = cache(
  async (slug: string): Promise<NewsArticleRecord | null> => {
    return getCachedPublishedNewsArticle(slug);
  }
);

export const getPublishedNewsSlugs = cache(async (): Promise<string[]> => {
  return getCachedPublishedNewsSlugs();
});

export { newsDetailPath };
