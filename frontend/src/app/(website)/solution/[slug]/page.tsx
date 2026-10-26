import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BackToTop } from "@/components/home/back-to-top";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { PageBanner } from "@/components/layout/page-banner";
import { ROUTES } from "@/lib/site-config";
import {
  getAdjacentSolutionScenes,
  getSolutionScene,
  solutionScenes,
} from "@/lib/solution-scenes";

type SolutionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutionScenes.map((scene) => ({ slug: scene.slug }));
}

export async function generateMetadata({
  params,
}: SolutionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const scene = getSolutionScene(slug);
  if (!scene) {
    return { title: "应用方案未找到 | 荣芯半导体" };
  }
  return {
    title: `${scene.title} | 应用领域 | 荣芯半导体`,
    description: scene.excerpt,
  };
}

export default async function SolutionDetailPage({ params }: SolutionDetailPageProps) {
  const { slug } = await params;
  const scene = getSolutionScene(slug);

  if (!scene) {
    notFound();
  }

  const { prev, next } = getAdjacentSolutionScenes(slug);

  return (
    <>
      <PageBanner
        title="应用领域"
        imageSrc="/images/solution/banner.jpg"
        imageAlt="应用领域"
        className="[&_h1]:text-center"
      />

      <Container className="py-4 sm:py-[18px]">
        <Breadcrumbs
          items={[
            { label: "首页", href: ROUTES.home },
            { label: "应用领域", href: ROUTES.solution },
            { label: scene.title },
          ]}
        />
      </Container>

      <section className="bg-white pb-16 sm:pb-[90px]">
        <Container className="max-w-[980px]">
          <div className="overflow-hidden rounded-md">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={scene.image}
                alt={scene.title}
                fill
                className="object-cover"
                sizes="(max-width: 980px) 100vw, 980px"
                priority
              />
            </div>
          </div>

          <h1 className="mt-8 text-[28px] font-bold leading-[1.4] text-[#0b254b] sm:text-[36px]">
            {scene.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#999]">
            <span>发布时间：{scene.publishedAt}</span>
            <Link
              href={ROUTES.solution}
              className="rounded-full bg-[#f4f8fb] px-3 py-1 text-[#0068b7] transition-colors hover:bg-[#e8f1fa]"
            >
              应用领域
            </Link>
          </div>

          <div className="mt-10 border-t border-[#eaeaea] pt-10">
            <h2 className="text-2xl font-bold text-[#0b254b]">{scene.featuresTitle}</h2>
            <ol className="mt-6 space-y-6">
              {scene.features.map((feature, index) => (
                <li key={feature.title} className="text-base leading-8 text-[#666]">
                  <span className="font-medium text-[#333]">
                    {index + 1}、{feature.title}
                  </span>
                  <span className="mt-1 block sm:mt-0 sm:inline sm:before:content-['\00a0']">
                    {feature.description}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-[#eaeaea] pt-8 text-base sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                href={`/solution/${prev.slug}`}
                className="text-[#666] transition-colors hover:text-[#0068b7]"
              >
                上一篇：{prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/solution/${next.slug}`}
                className="text-[#666] transition-colors hover:text-[#0068b7] sm:text-right"
              >
                下一篇：{next.title}
              </Link>
            ) : null}
          </div>

          <div className="mt-8">
            <Link
              href={ROUTES.solution}
              className="inline-flex items-center text-base text-[#0068b7] hover:underline"
            >
              ← 返回应用领域
            </Link>
          </div>
        </Container>
      </section>

      <BackToTop />
    </>
  );
}
