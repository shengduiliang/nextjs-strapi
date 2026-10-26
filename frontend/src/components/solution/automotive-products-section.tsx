import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { automotiveRelatedProducts } from "@/lib/site-config";

export function AutomotiveProductsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7]">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] lg:block" aria-hidden>
        <Image
          src="/images/solution/automotive/products-bg.jpg"
          alt=""
          fill
          className="object-cover object-left"
          sizes="55vw"
        />
      </div>

      <Container className="relative py-14 sm:py-[70px]">
        <h2 className="text-[28px] font-bold leading-tight text-[#0b254b] sm:text-[40px] sm:leading-[60px]">
          相关产品推荐
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden bg-[#e8eef3] sm:mt-10 sm:grid-cols-2 lg:max-w-[62%] lg:grid-cols-4">
          {automotiveRelatedProducts.map((product) => (
            <li key={product.title} className="bg-white">
              <Link
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[136px] flex-col justify-between gap-6 px-6 py-7 transition-colors hover:bg-[#fafbfd] sm:px-[25px] sm:py-[30px]"
              >
                <h3 className="text-base font-bold leading-7 text-[#0b254b] transition-colors group-hover:text-[#0068b7] sm:text-lg sm:leading-[30px]">
                  {product.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm text-[#0e68ae]">
                  查看更多
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
