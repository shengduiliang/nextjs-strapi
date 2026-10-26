import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import type { HotProductItem } from "@/lib/cms/types";

type HotProductsSectionProps = {
  products: HotProductItem[];
};

export function HotProductsSection({ products }: HotProductsSectionProps) {
  return (
    <section id="products" className="bg-white py-16 sm:py-[110px]">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-6">
          <div className="shrink-0 lg:max-w-[456px] lg:pr-8">
            <h2 className="text-3xl font-bold leading-tight text-[#333] sm:text-[40px] sm:leading-[60px]">
              热门产品
            </h2>
            <p className="mt-3.5 text-base leading-6 text-[#666]">
              为您提供全面的产品，拥有前所未有的设计灵活性和兼容度
            </p>
          </div>
          <div className="grid flex-1 gap-0 sm:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group flex gap-4 rounded-md bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4f8fb] hover:shadow-[0_10px_28px_rgba(11,37,75,0.12)] sm:px-10 sm:py-8"
              >
                <div className="relative h-16 w-[92px] shrink-0 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain object-left transition-transform duration-500 group-hover:scale-105"
                    sizes="92px"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-mono text-[22px] leading-8 text-[#333] transition-colors group-hover:text-[#0068b7] sm:text-[26px] sm:leading-[39px]">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#666] sm:text-base sm:leading-7">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
