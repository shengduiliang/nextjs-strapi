import Image from "next/image";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type PageBannerProps = {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
};

export function PageBanner({
  title,
  imageSrc,
  imageAlt = "",
  className,
}: PageBannerProps) {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <div className="relative w-full">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          width={1920}
          height={380}
          className="h-auto w-full object-cover"
          priority
          sizes="100vw"
        />
        <Container className="pointer-events-none absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[32px] font-bold leading-[1.5] text-white sm:text-[40px]">
            {title}
          </h1>
        </Container>
      </div>
    </section>
  );
}
