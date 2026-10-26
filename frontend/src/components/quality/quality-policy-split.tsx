import Image from "next/image";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type PolicyPoint = {
  label: string;
  text: string;
};

type QualityPolicySplitProps = {
  id: string;
  title: string;
  slogan?: string;
  description?: string;
  points: readonly PolicyPoint[];
  image: string;
  imagePosition: "left" | "right";
};

export function QualityPolicySplit({
  id,
  title,
  slogan,
  description,
  points,
  image,
  imagePosition,
}: QualityPolicySplitProps) {
  const textBlock = (
    <div
      className={cn(
        "flex w-full flex-col justify-center lg:w-[52%]",
        imagePosition === "right" ? "lg:pr-10" : "lg:order-2 lg:pl-10"
      )}
    >
      <h2 className="text-[26px] leading-[1.4] text-[#333] sm:text-[30px]">{title}</h2>
      {slogan ? (
        <p className="mt-5 text-base leading-8 text-[#666]">{slogan}</p>
      ) : null}
      {description ? (
        <p className="mt-5 text-base leading-8 text-[#666]">{description}</p>
      ) : null}
      <ul className="mt-8 space-y-5">
        {points.map((point) => (
          <li key={point.label}>
            <p className="text-base leading-8 text-[#666]">
              <span className="font-medium text-[#333]">{point.label}：</span>
              {point.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );

  const imageBlock = (
    <figure
      className={cn(
        "relative mt-8 aspect-[652/426] w-full overflow-hidden rounded-[10px] lg:mt-0 lg:w-[48%]",
        imagePosition === "left" && "lg:order-1"
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 48vw"
      />
    </figure>
  );

  return (
    <section id={id} className="scroll-mt-28 bg-white py-[70px] sm:scroll-mt-32 sm:py-[90px]">
      <Container
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
      </Container>
    </section>
  );
}
