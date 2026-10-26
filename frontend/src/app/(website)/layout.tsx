import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getProductMenuCategories } from "@/lib/products/get-product-menu";

export default async function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const productMenuCategories = await getProductMenuCategories();

  return (
    <>
      <SiteHeader productMenuCategories={productMenuCategories} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
