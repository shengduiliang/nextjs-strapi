import { ROUTES } from "@/lib/site-config";

export type ProductSidebarNode = {
  label: string;
  href: string;
  children?: ProductSidebarNode[];
};

export const productSidebarTree: ProductSidebarNode[] = [
  {
    label: "传感器",
    href: ROUTES.products,
    children: [
      {
        label: "健康传感器",
        href: ROUTES.products,
        children: [
          { label: "GS6933", href: "/products/gs6933" },
          { label: "生物电传感器", href: "/products/bioelectric-sensor" },
        ],
      },
      {
        label: "温度传感器",
        href: ROUTES.products,
      },
      {
        label: "温湿度传感器",
        href: ROUTES.products,
      },
    ],
  },
  {
    label: "MCU",
    href: ROUTES.products,
    children: [
      { label: "电机控制MCU", href: ROUTES.products },
      { label: "低功耗MCU", href: ROUTES.products },
    ],
  },
];

export function isInternalProductHref(href: string) {
  return href.startsWith("/");
}
