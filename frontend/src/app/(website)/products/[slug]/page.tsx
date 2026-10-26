import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageBanner } from "@/components/layout/page-banner";
import { Gs6933ProductDetail } from "@/components/products/gs6933-product-detail";
import { ProductContainer } from "@/components/products/product-container";
import { getProductMenuCategories } from "@/lib/products/get-product-menu";
import { fetchPublishedProductBySlug } from "@/lib/products/product-repository";
import { ROUTES } from "@/lib/site-config";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await fetchPublishedProductBySlug(slug);
  if (!product) {
    return { title: "产品中心 | 荣芯半导体" };
  }
  return {
    title: `${product.name} | 产品中心 | 荣芯半导体`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await fetchPublishedProductBySlug(slug);
  if (!product) notFound();

  const menu = await getProductMenuCategories();
  const category = menu.find((item) => item.id === product.categorySlug);
  const group = category?.columns
    .flat()
    .find((item) => item.id === product.groupId);

  const breadcrumbs = [
    { label: "首页", href: ROUTES.home },
    { label: "产品中心", href: ROUTES.products },
    ...(category ? [{ label: category.label, href: category.href }] : []),
    ...(group ? [{ label: group.title, href: group.href }] : []),
    { label: product.name },
  ];

  return (
    <>
      <PageBanner
        title="产品中心"
        imageSrc={product.bannerImage}
        imageAlt={product.name}
        className="max-h-[320px] [&_img]:max-h-[320px] [&_img]:object-cover"
      />

      <div className="border-b border-[#e8eef5] bg-white">
        <ProductContainer className="py-3.5">
          <nav aria-label="面包屑" className="text-sm text-[#8899aa]">
            <ol className="flex flex-wrap items-center gap-1">
              {breadcrumbs.map((item, index) => (
                <li key={`${item.label}-${index}`} className="flex items-center gap-1">
                  {index > 0 ? <span className="text-[#99b2df]">&gt;</span> : null}
                  {"href" in item && item.href ? (
                    <Link href={item.href} className="hover:text-[#0e68ae]">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#556677]">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </ProductContainer>
      </div>

      <Gs6933ProductDetail product={product} />
    </>
  );
}
