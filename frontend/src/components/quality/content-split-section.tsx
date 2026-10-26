import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ContentSplitSectionProps = {
  title: string;
  paragraphs: readonly string[];
  href: string;
  image: string;
  imagePosition: "left" | "right";
};

export function ContentSplitSection({
  title,
  paragraphs,
  href,
  image,
  imagePosition,
}: ContentSplitSectionProps) {
  const textBlock = (
    <article
      className={cn(
        "flex w-full flex-col justify-center lg:w-1/2",
        imagePosition === "right" ? "lg:pr-[75px]" : "lg:order-2 lg:pl-[75px]"
      )}
    >
      <h2 className="text-[28px] font-bold leading-[1.5] text-[#0b254b] sm:text-[40px]">
        {title}
      </h2>
      <div className="mt-5 space-y-2.5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-base leading-8 text-[#666]">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-[30px]">
        <Link
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex h-[50px] items-center rounded-[3px] bg-[#0068b7] px-[37px] text-sm text-white transition-colors hover:bg-[#0056a0]"
        >
          <span className="pr-[46px]">查看更多</span>
          <Image
            src="/images/quality/arrow-right.svg"
            alt=""
            width={19}
            height={19}
            className="size-[19px] brightness-0 invert"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );

  const imageBlock = (
    <figure
      className={cn(
        "relative mt-8 aspect-[700/400] w-full overflow-hidden rounded-[3px] lg:mt-0 lg:w-1/2",
        imagePosition === "left" && "lg:order-1"
      )}
    >
      <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    </figure>
  );

  return (
    <section
      className={cn(
        "flex flex-col lg:flex-row lg:items-center",
        imagePosition === "left" && "lg:flex-row"
      )}
    >
      {imagePosition === "right" ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </section>
  );
}
