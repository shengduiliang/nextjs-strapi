import Image from "next/image";

import { ProductContainer } from "@/components/products/product-container";
import { serialNorFlashIntro } from "@/lib/site-config";

export function ProductIntroSection() {
  const { paragraphs, image } = serialNorFlashIntro;

  return (
    <section className="bg-white py-16 sm:py-20">
      <ProductContainer className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-0">
        <div className="w-full text-[16px] leading-[28px] text-[#666] lg:max-w-[698px] lg:flex-1 lg:pr-[86px]">
          {paragraphs.map((text) => (
            <p key={text.slice(0, 24)} className="mb-[15px] last:mb-0">
              {text}
            </p>
          ))}
        </div>
        <div className="w-full shrink-0 overflow-hidden rounded-[6px] shadow-[0px_3px_18px_0px_rgba(165,181,211,0.27)] lg:w-[477px]">
          <div className="relative aspect-[477/276] w-full">
            <Image
              src={image}
              alt="Serial NOR Flash 产品"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 477px"
              priority
            />
          </div>
        </div>
      </ProductContainer>
    </section>
  );
}
