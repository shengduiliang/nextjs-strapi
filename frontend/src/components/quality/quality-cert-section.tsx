import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type CertItem = {
  title: string;
  href: string;
};

type QualityCertSectionProps = {
  id: string;
  title: string;
  intro: string;
  items: readonly CertItem[];
  variant?: "dark" | "light";
  backgroundImage?: string;
};

function CertDownloadCard({ title, href }: CertItem) {
  return (
    <div className="flex items-center gap-4 rounded-[10px] border border-[#e8eef5] bg-white px-5 py-4 shadow-[0_4px_16px_rgba(11,37,75,0.06)] transition-shadow hover:shadow-[0_8px_24px_rgba(11,37,75,0.1)]">
      <Image
        src="/images/quality/cert-pdf.png"
        alt=""
        width={48}
        height={48}
        className="size-12 shrink-0 object-contain"
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-medium text-[#333]">{title}</p>
        <Link
          href={href}
          className="mt-1 inline-block text-sm text-[#2a7de1] hover:underline"
        >
          [ 下载 ]
        </Link>
      </div>
    </div>
  );
}

export function QualityCertSection({
  id,
  title,
  intro,
  items,
  variant = "light",
  backgroundImage,
}: QualityCertSectionProps) {
  const useLightText = variant === "dark" || Boolean(backgroundImage);

  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-28 overflow-hidden py-[70px] sm:scroll-mt-32 sm:py-[90px]",
        !backgroundImage && (variant === "dark" ? "bg-[#1a1f2a]" : "bg-[#f4f8fb]")
      )}
    >
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
      ) : null}
      {backgroundImage ? (
        <div className="absolute inset-0 bg-[#0b254b]/25" aria-hidden />
      ) : null}

      <Container className="relative">
        <h2
          className={cn(
            "text-center text-[26px] leading-[1.4] sm:text-[30px]",
            useLightText ? "text-white" : "text-[#333]"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "mx-auto mt-6 max-w-[920px] text-center text-base leading-8",
            useLightText ? "text-white/90" : "text-[#666]"
          )}
        >
          {intro}
        </p>
        <ul className="mx-auto mt-10 grid max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <li key={`${item.title}-${index}`}>
              <CertDownloadCard title={item.title} href={item.href} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
