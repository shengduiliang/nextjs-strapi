import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ProductContainerProps = {
  children: ReactNode;
  className?: string;
};

/** 官网 ys_cont1400：居中 1400 内容宽 */
export function ProductContainer({ children, className }: ProductContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-0", className)}>
      {children}
    </div>
  );
}
