import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AboutSubnav } from "@/components/about/about-subnav";
import { BackToTop } from "@/components/home/back-to-top";
import { Container } from "@/components/layout/container";
import { PageBanner } from "@/components/layout/page-banner";
import { getPublishedNewsList } from "@/lib/news/get-news";
import { newsDetailPath } from "@/lib/news-articles";

export const metadata: Metadata = {
  title: "新闻动态 | 荣芯半导体",
  description: "荣芯半导体最新新闻与动态",
};

export default async function NewsPage() {
  const articles = await getPublishedNewsList();

  return (
    <>
      <PageBanner
        title="关于我们"
        imageSrc="/images/solution/banner.jpg"
        imageAlt="关于我们"
        className="[&_h1]:text-center"
      />
      <AboutSubnav currentLabel="新闻动态" />

      <section className="bg-[#f4f8fb] py-12 sm:py-[70px]">
        <Container>
          <ul className="space-y-6">
            {articles.map((article) => {
              const imageBlock = article.blocks.find((block) => block.type === "image");
              const image =
                imageBlock && imageBlock.type === "image"
                  ? imageBlock.src
                  : "/images/home/news-1.jpg";
              return (
                <li key={article.slug}>
                  <article className="overflow-hidden rounded-md bg-white shadow-[0_4px_16px_rgba(11,37,75,0.06)] transition-shadow hover:shadow-[0_8px_24px_rgba(11,37,75,0.1)] sm:flex">
                    <Link
                      href={newsDetailPath(article.slug)}
                      className="relative block aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-auto sm:w-[280px] lg:w-[320px]"
                    >
                      <Image
                        src={image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 320px"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col px-5 py-5 sm:px-8 sm:py-7">
                      <Link
                        href={newsDetailPath(article.slug)}
                        className="text-xl font-bold leading-[1.4] text-[#0b254b] transition-colors hover:text-[#0068b7] sm:text-2xl"
                      >
                        {article.title}
                      </Link>
                      <p className="mt-2 text-sm text-[#999]">{article.date}</p>
                      <p className="mt-3 line-clamp-3 text-base leading-7 text-[#666]">
                        {article.excerpt}
                      </p>
                      <Link
                        href={newsDetailPath(article.slug)}
                        className="mt-5 inline-flex text-sm text-[#0068b7] hover:underline"
                      >
                        查看详情 &gt;&gt;
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <BackToTop />
    </>
  );
}
