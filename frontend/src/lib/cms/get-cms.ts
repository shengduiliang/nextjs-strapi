import { cache } from "react";
import { unstable_cache } from "next/cache";

import { newsDetailPath } from "@/lib/news-articles";
import { getPublishedNewsList } from "@/lib/news/get-news";
import { newsItems, storyItems } from "@/lib/site-config";

import {
  defaultContactContent,
  defaultHomepageSlides,
  defaultHotProducts,
  defaultProductGs6933,
  fetchContactFromDb,
  fetchHomepageSlidesFromDb,
  fetchHotProductsFromDb,
  fetchProductGs6933FromDb,
} from "./repository";
import type { ContactContent, HomepageSlide, HotProductItem, ProductContent } from "./types";

const getCachedHomepageSlides = unstable_cache(
  async () => (await fetchHomepageSlidesFromDb()) ?? defaultHomepageSlides,
  ["cms-homepage-slides"],
  { revalidate: 60 }
);

const getCachedHotProducts = unstable_cache(
  async () => (await fetchHotProductsFromDb()) ?? defaultHotProducts,
  ["cms-hot-products"],
  { revalidate: 60 }
);

const getCachedContact = unstable_cache(
  async () => (await fetchContactFromDb()) ?? defaultContactContent,
  ["cms-contact"],
  { revalidate: 60 }
);

const getCachedProductGs6933 = unstable_cache(
  async () => (await fetchProductGs6933FromDb()) ?? defaultProductGs6933,
  ["cms-product-gs6933"],
  { revalidate: 60 }
);

export const getHomepageSlides = cache(async (): Promise<HomepageSlide[]> => {
  return getCachedHomepageSlides();
});

export const getHotProducts = cache(async (): Promise<HotProductItem[]> => {
  return getCachedHotProducts();
});

export const getContactContent = cache(async (): Promise<ContactContent> => {
  return getCachedContact();
});

export const getProductGs6933 = cache(async (): Promise<ProductContent> => {
  return getCachedProductGs6933();
});

export type HomepageNewsCard = {
  category: string;
  title: string;
  date: string;
  href: string;
  image: string;
};

export type HomepageStoryCard = {
  tag: string;
  title: string;
  href: string;
  image: string;
};

function formatNewsDate(date: string) {
  return date.replaceAll("-", ".");
}

export const getHomepageNewsCards = cache(async (): Promise<HomepageNewsCard[]> => {
  const articles = await getPublishedNewsList();
  if (articles.length === 0) {
    return newsItems.map((item) => ({ ...item }));
  }

  return articles.slice(0, 4).map((article, index) => {
    const imageBlock = article.blocks.find((block) => block.type === "image");
    const image =
      article.coverImage ||
      (imageBlock && imageBlock.type === "image" ? imageBlock.image?.url : null) ||
      newsItems[index % newsItems.length]?.image ||
      "/images/home/news-1.jpg";

    return {
      category: "新闻",
      title: article.title,
      date: formatNewsDate(article.date),
      href: newsDetailPath(article.slug),
      image,
    };
  });
});

export const getHomepageStoryCards = cache(async (): Promise<HomepageStoryCard[]> => {
  const articles = await getPublishedNewsList();
  if (articles.length === 0) {
    return storyItems.map((item) => ({ ...item }));
  }

  const tags = ["公司新闻", "产品方向", "行业观察"];
  return articles.slice(0, 3).map((article, index) => {
    const imageBlock = article.blocks.find((block) => block.type === "image");
    const image =
      article.coverImage ||
      (imageBlock && imageBlock.type === "image" ? imageBlock.image?.url : null) ||
      storyItems[index % storyItems.length]?.image ||
      "/images/home/story-1.jpg";

    return {
      tag: tags[index] ?? "公司新闻",
      title: article.title,
      href: newsDetailPath(article.slug),
      image,
    };
  });
});
