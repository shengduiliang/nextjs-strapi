import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductContainer } from "@/components/products/product-container";
import { ROUTES } from "@/lib/site-config";

export function ProductContactSection() {
  return (
    <section className="bg-[#f6f8fd] py-[60px] sm:py-[90px]">
      <ProductContainer>
        <div className="px-4 py-10 sm:px-[60px] sm:py-[46px]">
          <h2 className="max-w-[900px] text-[28px] font-bold leading-[1.75] text-[#0b254b] sm:text-[34px] sm:leading-[59.5px]">
            如需获取更多产品信息或技术支持，欢迎联系我们。
          </h2>
          <div className="mt-8">
            <Link
              href={ROUTES.contact}
              className="inline-flex h-11 items-center gap-2 rounded-[3px] bg-[#0068b7] px-[34px] text-sm text-white transition-colors hover:bg-[#0056a0]"
            >
              联系我们
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </ProductContainer>
    </section>
  );
}
