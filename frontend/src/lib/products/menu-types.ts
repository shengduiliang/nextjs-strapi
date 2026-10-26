export type ProductMenuLink = {
  label: string;
  href: string;
};

export type ProductMenuGroup = {
  /** 二级种类稳定 id，用于挂接具体产品 */
  id: string;
  title: string;
  href: string;
  /** 运行时由已发布产品填充，菜单编辑不维护 */
  children?: ProductMenuLink[];
};

export type ProductMenuFeatured = {
  title: string;
  productName: string;
  image: string;
  href: string;
};

export type ProductMenuCategory = {
  id: string;
  label: string;
  href: string;
  columns: ProductMenuGroup[][];
  featured?: ProductMenuFeatured;
};

export type ProductMenuCategoryRecord = {
  id: string;
  slug: string;
  label: string;
  href: string;
  columns: ProductMenuGroup[][];
  featured: ProductMenuFeatured | null;
  sortOrder: number;
  status: string;
};
