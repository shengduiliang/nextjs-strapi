import type { ProductContent } from "@/lib/cms/types";

export type ProductPublishStatus = "draft" | "published";

/** 可管理的产品实体：挂到菜单二级种类下，自动作为三级链接出现 */
export type ProductRecord = ProductContent & {
  id: string;
  slug: string;
  publishStatus: ProductPublishStatus;
  /** 一级大类 slug，如 sensor / mcu */
  categorySlug: string;
  /** 二级种类 id */
  groupId: string;
  coverImage: string;
  sortOrder: number;
  updatedAt: string;
};

export type ProductListItem = Pick<
  ProductRecord,
  | "id"
  | "slug"
  | "name"
  | "tagline"
  | "publishStatus"
  | "categorySlug"
  | "groupId"
  | "coverImage"
  | "sortOrder"
  | "updatedAt"
  | "status"
>;
