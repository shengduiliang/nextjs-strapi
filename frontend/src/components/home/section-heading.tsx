import { cn } from "@/lib/utils";
import { ViewMoreLink } from "@/components/home/view-more-link";

type SectionHeadingProps = {
  title: string;
  showMore?: boolean;
  moreHref?: string;
  className?: string;
  dark?: boolean;
};

export function SectionHeading({
  title,
  showMore,
  moreHref,
  className,
  dark,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
          <h2
        className={cn(
          "text-3xl font-bold leading-tight sm:text-[40px] sm:leading-[60px]",
          dark ? "text-white" : "text-[#333]"
        )}
      >
        {title}
      </h2>
      {showMore && <ViewMoreLink href={moreHref} />}
    </div>
  );
}
