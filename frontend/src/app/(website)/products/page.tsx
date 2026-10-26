import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageBanner } from "@/components/layout/page-banner";
import { ProductContainer } from "@/components/products/product-container";
import { productDetailPath } from "@/lib/products/default-catalog";
import { fetchPublishedProducts } from "@/lib/products/product-repository";
import { getProductMenuCategories } from "@/lib/products/get-product-menu";
import { ROUTES } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "产品中心 | 荣芯半导体",
  description: "荣芯半导体传感器与 MCU 产品系列",
};

export default async function ProductsPage() {
  const [products, menu] = await Promise.all([
    fetchPublishedProducts(),
    getProductMenuCategories(),
  ]);

  const banner =
    products[0]?.bannerImage || "/images/products/banner.jpg";

  const labelMap = new Map(
    menu.flatMap((category) =>
      category.columns.flat().map((group) => [
        `${category.id}:${group.id}`,
        `${category.label} · ${group.title}`,
      ])
    )
  );

  return (
    <>
      <PageBanner
        title="产品中心"
        imageSrc={banner}
        imageAlt="产品中心"
        className="max-h-[320px] [&_img]:max-h-[320px] [&_img]:object-cover"
      />

      <div className="border-b border-[#e8eef5] bg-white">
        <ProductContainer className="py-3.5">
          <nav aria-label="面包屑" className="text-sm text-[#8899aa]">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href={ROUTES.home} className="hover:text-[#0e68ae]">
                  首页
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-[#99b2df]">&gt;</span>
                <span className="text-[#556677]">产品中心</span>
              </li>
            </ol>
          </nav>
        </ProductContainer>
      </div>

      <section className="bg-[#f4f7fb] py-12 sm:py-16">
        <ProductContainer>
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-[#0b254b] sm:text-3xl">产品列表</h1>
            <p className="mt-2 text-sm text-[#667788] sm:text-base">
              选择产品查看详情、文档与应用方案
            </p>
          </div>

          {products.length === 0 ? (
            <p className="rounded-xl border border-dashed border-[#d7e0ea] bg-white px-6 py-16 text-center text-[#8899aa]">
              暂无已发布产品
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={productDetailPath(product.slug)}
                  className="group overflow-hidden rounded-2xl border border-[#d9e4f2] bg-white shadow-[0_8px_28px_rgba(15,55,110,0.06)] transition hover:-translate-y-0.5 hover:border-[#0068b7]/40 hover:shadow-[0_12px_36px_rgba(15,55,110,0.1)]"
                >
                  <div className="relative aspect-[16/10] bg-[#f3f7fb]">
                    <Image
                      src={product.coverImage || product.heroImage}
                      alt={product.name}
                      fill
                      className="object-contain p-6 transition duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="border-t border-[#eef2f7] px-5 py-4">
                    <p className="text-xs text-[#8899aa]">
                      {labelMap.get(`${product.categorySlug}:${product.groupId}`) ?? "产品"}
                    </p>
                    <h2 className="mt-1 text-lg font-semibold text-[#0b254b] group-hover:text-[#0068b7]">
                      {product.name}
                    </h2>
                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#667788]">
                      {product.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </ProductContainer>
      </section>
    </>
  );
}
