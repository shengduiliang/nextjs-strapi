import { gs6933Product } from "@/lib/gs6933-product";
import type { ProductRecord } from "@/lib/products/product-types";

function paragraphsToHtml(paragraphs: string[]): string {
  return paragraphs.map((p) => `<p>${p}</p>`).join("");
}

function listItemsToHtml(items: string[]): string {
  return `<ul>${items.map((i) => `<li><p>${i}</p></li>`).join("")}</ul>`;
}

function baseFromGs6933(): Omit<
  ProductRecord,
  "id" | "slug" | "publishStatus" | "categorySlug" | "groupId" | "coverImage" | "sortOrder" | "updatedAt"
> {
  const description = [...gs6933Product.description];
  const applications = [...gs6933Product.applications];
  return {
    name: gs6933Product.name,
    status: gs6933Product.status,
    tagline: gs6933Product.tagline,
    sampleHref: gs6933Product.sampleHref,
    heroImage: gs6933Product.heroImage,
    blockDiagram: gs6933Product.blockDiagram,
    bannerImage: gs6933Product.bannerImage,
    description,
    descriptionHtml: paragraphsToHtml(description),
    datasheets: gs6933Product.datasheets.map((item) => ({ ...item })),
    documentSections: gs6933Product.documentSections.map((section) => ({
      title: section.title,
      rows: section.rows.map((row) => ({ ...row })),
    })),
    tools: gs6933Product.tools.map((tool) => ({ ...tool })),
    applications,
    applicationsHtml: listItemsToHtml(applications),
  };
}

function emptyContent(): Omit<
  ProductRecord,
  "id" | "slug" | "publishStatus" | "categorySlug" | "groupId" | "coverImage" | "sortOrder" | "updatedAt" | "name" | "tagline"
> {
  return {
    status: "规划中",
    sampleHref: "/about/contact",
    heroImage: "/images/products/gs6933-hero.png",
    blockDiagram: "/images/products/gs6933-block.png",
    bannerImage: "/images/products/banner.jpg",
    description: [""],
    descriptionHtml: "<p></p>",
    datasheets: [],
    documentSections: [],
    tools: [{ label: "评估工具包", note: "请联系销售获取支持", href: "/about/contact" }],
    applications: [""],
    applicationsHtml: "<ul><li><p></p></li></ul>",
  };
}

/** 供新建表单复用的默认内容字段 */
export function emptyContentDefaults() {
  return {
    ...emptyContent(),
    name: "",
    tagline: "",
  };
}

/** 预览模式 / 默认种子：对应菜单二级种类下的具体产品 */
export const defaultProductCatalog: ProductRecord[] = [
  {
    id: "local-gs6933",
    slug: "gs6933",
    publishStatus: "published",
    categorySlug: "sensor",
    groupId: "health-sensor",
    coverImage: "/images/home/product-gs6933.png",
    sortOrder: 0,
    updatedAt: "2026-03-26",
    ...baseFromGs6933(),
  },
  {
    id: "local-bioelectric",
    slug: "bioelectric-sensor",
    name: "生物电传感器",
    tagline: "高精度生物电信号采集方案",
    publishStatus: "published",
    categorySlug: "sensor",
    groupId: "health-sensor",
    coverImage: "/images/home/product-gs6933.png",
    sortOrder: 1,
    updatedAt: "2026-03-26",
    ...emptyContent(),
  },
  {
    id: "local-cgm",
    slug: "cgm",
    name: "连续血糖检测 CGM",
    tagline: "连续血糖监测模拟前端",
    publishStatus: "draft",
    categorySlug: "sensor",
    groupId: "health-sensor",
    coverImage: "/images/home/product-gs6933.png",
    sortOrder: 2,
    updatedAt: "2026-03-26",
    ...emptyContent(),
  },
  {
    id: "local-eeg",
    slug: "eeg",
    name: "脑电 EEG",
    tagline: "脑电信号采集前端",
    publishStatus: "draft",
    categorySlug: "sensor",
    groupId: "health-sensor",
    coverImage: "/images/home/product-gs6933.png",
    sortOrder: 3,
    updatedAt: "2026-03-26",
    ...emptyContent(),
  },
];

export function productDetailPath(slug: string) {
  return `/products/${slug}`;
}
