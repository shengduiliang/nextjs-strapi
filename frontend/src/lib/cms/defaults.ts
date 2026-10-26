import { contactPageContent } from "@/lib/about-pages";
import { gs6933Product } from "@/lib/gs6933-product";
import { hotProducts } from "@/lib/site-config";

import type {
  ContactContent,
  HomepageSlide,
  HotProductItem,
  ProductContent,
} from "./types";

export const defaultHomepageSlides: HomepageSlide[] = [
  {
    src: "/images/home/banner-1.jpg",
    alt: "荣芯半导体健康监测芯片",
    title: "健康监测芯未来",
    subtitle: "高性能人体健康传感器，赋能智能可穿戴",
    href: "/products",
  },
  {
    src: "/images/home/banner-2.jpg",
    alt: "荣芯半导体主动健康监测",
    title: "主动健康监测",
    subtitle: "差异化芯片方案，服务大众健康生活",
    href: "/solution",
  },
  {
    src: "/images/home/banner-3.jpg",
    alt: "荣芯半导体创新驱动品质引领",
    title: "创新驱动，品质引领",
    subtitle: "深圳市荣芯半导体有限公司",
    href: "/about",
  },
];

export const defaultHotProducts: HotProductItem[] = hotProducts.map((item) => ({
  name: item.name,
  description: item.description,
  image: item.image,
  href: item.href,
}));

export const defaultContactContent: ContactContent = {
  company: contactPageContent.company,
  address: contactPageContent.address,
  phone: contactPageContent.phone,
  email: contactPageContent.email,
  formTitle: contactPageContent.formTitle,
  formIntro: contactPageContent.formIntro,
};

export const defaultProductGs6933: ProductContent = {
  name: gs6933Product.name,
  status: gs6933Product.status,
  tagline: gs6933Product.tagline,
  sampleHref: gs6933Product.sampleHref,
  heroImage: gs6933Product.heroImage,
  blockDiagram: gs6933Product.blockDiagram,
  bannerImage: gs6933Product.bannerImage,
  description: [...gs6933Product.description],
  datasheets: gs6933Product.datasheets.map((item) => ({ ...item })),
  documentSections: gs6933Product.documentSections.map((section) => ({
    title: section.title,
    rows: section.rows.map((row) => ({ ...row })),
  })),
  tools: gs6933Product.tools.map((tool) => ({ ...tool })),
  applications: [...gs6933Product.applications],
};
