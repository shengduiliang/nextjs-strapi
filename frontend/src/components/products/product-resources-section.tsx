import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductContainer } from "@/components/products/product-container";
import { productResourceLinks } from "@/lib/site-config";

export function ProductResourcesSection() {
  return (
    <section className="bg-white py-16 sm:py-[90px]">
      <ProductContainer className="flex flex-col lg:flex-row">
        <div className="w-full shrink-0 lg:w-[420px] xl:w-[451px]">
          <h2 className="text-[40px] font-bold leading-[60px] text-[#333] sm:text-[48px] sm:leading-[72px]">
            资源中心
          </h2>
          <p className="mt-10 text-[16px] leading-[28px] text-[#666] lg:mt-[60px] xl:mt-[93px]">
            我们致力于为您的产品选型与开发提供高效支持。从前期选型到量产阶段，全程助力简化决策，加快项目落地。
          </p>
        </div>
        <div className="mt-10 w-full flex-1 lg:mt-0 lg:pl-12 xl:pl-[112px]">
          <ul>
            {productResourceLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-h-[100px] items-center border-t border-[#d0d0d0] py-6 last:border-b sm:min-h-[140px] sm:py-0"
                >
                  <span className="relative flex size-[56px] shrink-0 items-center justify-center sm:size-[70px]">
                    <Image
                      src={item.icon}
                      alt=""
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </span>
                  <h3 className="pl-4 text-[18px] font-bold leading-7 text-[#163d84] transition-colors group-hover:text-[#0e68ae] sm:text-[20px]">
                    {item.label}
                  </h3>
                  <span className="absolute right-0 hidden items-center text-[14px] leading-[21px] text-[#0e68ae] sm:flex">
                    查看更多
                    <ArrowRight className="ml-[9px] size-4" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </ProductContainer>
    </section>
  );
}
