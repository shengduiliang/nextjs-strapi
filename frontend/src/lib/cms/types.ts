export type HomepageSlide = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  href: string;
};

export type HotProductItem = {
  name: string;
  description: string;
  image: string;
  href: string;
};

export type ContactContent = {
  company: string;
  address: string;
  phone: string;
  email: string;
  formTitle: string;
  formIntro: string;
};

export type ProductDocumentRow = {
  name: string;
  version: string;
  date: string;
  cnHref: string | null;
  enHref: string | null;
};

export type ProductDocumentSection = {
  title: string;
  rows: ProductDocumentRow[];
};

export type ProductDatasheet = {
  label: string;
  lang: string;
  href: string;
  badge: string;
};

export type ProductContent = {
  name: string;
  status: string;
  tagline: string;
  sampleHref: string;
  heroImage: string;
  blockDiagram: string;
  bannerImage: string;
  /** 纯文本段落（兼容旧数据 / 摘要） */
  description: string[];
  /** 产品介绍富文本 HTML */
  descriptionHtml?: string;
  datasheets: ProductDatasheet[];
  documentSections: ProductDocumentSection[];
  tools: { label: string; note: string; href: string }[];
  /** 应用场景纯文本列表（兼容旧数据） */
  applications: string[];
  /** 应用领域富文本 HTML */
  applicationsHtml?: string;
};

export const CMS_KEYS = {
  homepageSlides: "homepage_slides",
  hotProducts: "hot_products",
  contact: "contact",
  productGs6933: "product_gs6933",
} as const;

export type CmsKey = (typeof CMS_KEYS)[keyof typeof CMS_KEYS];
