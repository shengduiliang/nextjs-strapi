import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BackToTop } from "@/components/home/back-to-top";
import { NewsArticleBody } from "@/components/news/news-article-body";
import { NewsBreadcrumbs } from "@/components/news/news-breadcrumbs";
import { NewsDetailNavigation } from "@/components/news/news-detail-navigation";
import { NewsDetailSidebar } from "@/components/news/news-detail-sidebar";
import { getPublishedNewsArticle, getPublishedNewsList } from "@/lib/news/get-news";
import { getAllNewsSlugs } from "@/lib/news-articles";
import { newsBreadcrumbs } from "@/lib/site-config";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedNewsArticle(slug);

  if (!article) {
    return { title: "新闻未找到 | 荣芯半导体" };
  }

  return {
    title: `${article.title} | 荣芯半导体`,
    description: article.excerpt.slice(0, 120),
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = await getPublishedNewsArticle(slug);

  if (!article) {
    notFound();
  }

  const allArticles = await getPublishedNewsList();

  const relatedNews = allArticles
    .filter((item) => item.slug !== slug)
    .slice(0, 4)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      date: item.date,
    }));

  const currentIndex = allArticles.findIndex((item) => item.slug === slug);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex >= 0 && currentIndex < allArticles.length - 1
      ? allArticles[currentIndex + 1]
      : null;

  return (
    <>
      <section className="border-b border-[#f0f0f0] bg-white pt-[18px]">
        <div className="mx-auto w-full max-w-[1400px]">
          <NewsBreadcrumbs items={newsBreadcrumbs} />
        </div>
      </section>

      <section className="bg-white pb-[110px] pt-20">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-10">
            <article className="min-w-0 flex-1 lg:max-w-[912px]">
              <h1 className="text-[39.5px] font-bold leading-[60px] text-[#0b254b]">
                {article.title}
              </h1>

              <div className="mt-7">
                <NewsArticleBody blocks={article.blocks} />
              </div>

              <NewsDetailNavigation
                prev={
                  prevArticle
                    ? { slug: prevArticle.slug, title: prevArticle.title }
                    : null
                }
                next={
                  nextArticle
                    ? { slug: nextArticle.slug, title: nextArticle.title }
                    : null
                }
              />
            </article>

            <NewsDetailSidebar items={relatedNews} />
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  );
}
