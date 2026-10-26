import { Home } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageBanner } from "@/components/layout/page-banner";
import { ROUTES } from "@/lib/site-config";

type LegalDocumentProps = {
  title: string;
  paragraphs: readonly string[];
};

export function LegalDocument({ title, paragraphs }: LegalDocumentProps) {
  return (
    <>
      <PageBanner
        title={title}
        imageSrc="/images/solution/banner.jpg"
        imageAlt={title}
        className="[&_h1]:text-center"
      />

      <nav
        aria-label="面包屑"
        className="border-b border-[#e8eef5] bg-[#f4f8fb]"
      >
        <Container className="flex h-12 items-center sm:h-[52px]">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#667788]">
            <li>
              <Link
                href={ROUTES.home}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#0068b7]"
              >
                <Home className="size-3.5 shrink-0" aria-hidden />
                首页
              </Link>
            </li>
            <li aria-hidden className="text-[#99b2df]">
              &gt;
            </li>
            <li className="font-medium text-[#0b254b]">{title}</li>
          </ol>
        </Container>
      </nav>

      <section className="bg-[#f4f8fb] py-10 sm:py-14">
        <Container>
          <article className="rounded-md bg-white px-6 py-8 shadow-[0_4px_16px_rgba(11,37,75,0.05)] sm:px-10 sm:py-12">
            <h2 className="text-[24px] font-bold text-[#0b254b] sm:text-[28px]">{title}</h2>
            <div className="mt-6 space-y-5 border-t border-[#eef2f7] pt-6 text-base leading-8 text-[#555] sm:text-[17px] sm:leading-9">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
