import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ViewMoreLinkProps = {
  href?: string;
  className?: string;
};

export function ViewMoreLink({ href = "#", className }: ViewMoreLinkProps) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 border border-[#0068b7] px-5 py-2 text-base text-[#0068b7] transition-colors hover:bg-[#0068b7] hover:text-white",
        className
      )}
    >
      查看更多
      <ArrowRight className="size-4" />
    </Link>
  );
}
