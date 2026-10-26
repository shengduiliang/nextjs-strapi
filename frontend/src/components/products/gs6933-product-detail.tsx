"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, ShoppingBag } from "lucide-react";

import { ProductContainer } from "@/components/products/product-container";
import type { ProductContent } from "@/lib/cms/types";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "description", label: "产品描述" },
  { id: "documents", label: "文档" },
  { id: "tools", label: "工具" },
  { id: "applications", label: "应用领域" },
] as const;

type TabId = (typeof tabs)[number]["id"];

type Gs6933ProductDetailProps = {
  product: ProductContent;
};

export function Gs6933ProductDetail({ product }: Gs6933ProductDetailProps) {
  const [activeTab, setActiveTab] = useState<TabId>("description");

  return (
    <section className="bg-[#f4f7fb] pb-16 sm:pb-24">
      <ProductContainer className="pt-8 sm:pt-10">
        <div className="overflow-hidden rounded-2xl border border-[#d9e4f2] bg-white shadow-[0_12px_40px_rgba(15,55,110,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="bg-gradient-to-br from-[#0b254b] via-[#123a6b] to-[#0e68ae] px-6 py-8 text-white sm:px-10 sm:py-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">
                    {product.name}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/85 sm:text-base">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-200">
                      <CheckCircle2 className="size-4" aria-hidden />
                      {product.status}
                    </span>
                    <span className="max-w-xl leading-7 text-white/80">
                      {product.tagline}
                    </span>
                  </div>
                </div>
                <Link
                  href={product.sampleHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2f8dff] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1f7aeb]"
                >
                  <ShoppingBag className="size-4" aria-hidden />
                  样品采购
                </Link>
              </div>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-sm text-white/60">规格书下载</p>
                <ul className="mt-3 space-y-2.5">
                  {product.datasheets.map((item) => (
                    <li key={item.lang}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 text-sm text-[#9fd0ff] transition-colors hover:text-white sm:text-base"
                      >
                        <Image
                          src={item.badge}
                          alt={item.lang}
                          width={19}
                          height={16}
                          className="shrink-0"
                        />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative flex min-h-[240px] items-center justify-center bg-[#eef4fb] p-8 sm:min-h-[320px]">
              <div className="relative aspect-[3/2] w-full max-w-[420px]">
                <Image
                  src={product.heroImage}
                  alt={`${product.name} 产品图`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 420px"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="border-t border-[#e6eef8] bg-white px-4 sm:px-8">
            <div
              role="tablist"
              aria-label="产品详情分类"
              className="flex gap-1 overflow-x-auto"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative shrink-0 px-4 py-4 text-sm transition-colors sm:px-6 sm:text-base",
                    activeTab === tab.id
                      ? "font-medium text-[#0e68ae]"
                      : "text-[#667788] hover:text-[#0e68ae]"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.id ? (
                    <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[#0e68ae]" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[#eef2f7] bg-white px-6 py-8 sm:px-10 sm:py-10">
            {activeTab === "description" ? (
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div
                  className="product-prose space-y-4 text-[15px] leading-8 text-[#555] sm:text-base sm:leading-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#0b254b] [&_img]:my-4 [&_img]:rounded-lg [&_li]:my-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5"
                  dangerouslySetInnerHTML={{
                    __html:
                      product.descriptionHtml?.trim() ||
                      product.description.map((p) => `<p>${p}</p>`).join(""),
                  }}
                />
                <figure className="overflow-hidden rounded-xl border border-[#e4ecf6] bg-[#f8fbff] p-4">
                  <div className="relative aspect-[613/386] w-full">
                    <Image
                      src={product.blockDiagram}
                      alt="功能框图"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 90vw, 520px"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-sm text-[#8899aa]">
                    功能框图
                  </figcaption>
                </figure>
              </div>
            ) : null}

            {activeTab === "documents" ? (
              <div className="space-y-8">
                {product.documentSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-base font-semibold text-[#0b254b]">
                      {section.title}
                    </h3>
                    <div className="mt-4 overflow-x-auto rounded-xl border border-[#e4ecf6]">
                      <table className="w-full table-fixed text-left text-sm">
                        <colgroup>
                          <col className="w-[30%]" />
                          <col className="w-[12%]" />
                          <col className="w-[16%]" />
                          <col className="w-[21%]" />
                          <col className="w-[21%]" />
                        </colgroup>
                        <thead className="bg-[#f3f7fc] text-[#556677]">
                          <tr>
                            <th className="px-4 py-3 font-medium">文档名称</th>
                            <th className="px-4 py-3 font-medium">版本</th>
                            <th className="px-4 py-3 font-medium">日期</th>
                            <th className="px-4 py-3 font-medium">中文版本</th>
                            <th className="px-4 py-3 font-medium">英文版本</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.rows.map((row) => (
                            <tr
                              key={row.name}
                              className="border-t border-[#eef2f7] bg-white"
                            >
                              <td className="px-4 py-3 text-[#334455]">
                                {row.name}
                              </td>
                              <td className="px-4 py-3 text-[#667788]">
                                {row.version}
                              </td>
                              <td className="px-4 py-3 text-[#667788]">
                                {row.date}
                              </td>
                              <td className="px-4 py-3">
                                {row.cnHref ? (
                                  <a
                                    href={row.cnHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[#0e68ae] hover:underline"
                                  >
                                    <Image
                                      src="/images/products/badge-cn.png"
                                      alt="CN"
                                      width={19}
                                      height={16}
                                    />
                                    中文版本
                                  </a>
                                ) : (
                                  <span className="text-[#99a6b5]">即将上线</span>
                                )}
                              </td>
                              <td className="px-4 py-3">
                                {row.enHref ? (
                                  <a
                                    href={row.enHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[#0e68ae] hover:underline"
                                  >
                                    <Image
                                      src="/images/products/badge-en.png"
                                      alt="EN"
                                      width={19}
                                      height={16}
                                    />
                                    英文版本
                                  </a>
                                ) : (
                                  <span className="text-[#99a6b5]">即将上线</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {activeTab === "tools" ? (
              <ul className="space-y-4">
                {product.tools.map((tool) => (
                  <li
                    key={tool.label}
                    className="flex flex-col gap-3 rounded-xl border border-[#e4ecf6] bg-[#f8fbff] p-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-medium text-[#0b254b]">{tool.label}</p>
                      <p className="mt-1 text-sm text-[#667788]">{tool.note}</p>
                    </div>
                    <Link
                      href={tool.href}
                      className="inline-flex items-center justify-center rounded-full border border-[#0e68ae] px-5 py-2 text-sm text-[#0e68ae] transition-colors hover:bg-[#0e68ae] hover:text-white"
                    >
                      联系我们
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            {activeTab === "applications" ? (
              (() => {
                const items =
                  product.applications.length > 0
                    ? product.applications
                    : [];
                if (items.length > 0) {
                  return (
                    <ul className="grid gap-4 sm:grid-cols-3">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="rounded-xl border border-[#e4ecf6] bg-[#f8fbff] px-5 py-6 text-[15px] leading-7 text-[#334455]"
                        >
                          <span className="mb-3 block size-2 rounded-full bg-[#0e68ae]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (product.applicationsHtml?.trim()) {
                  return (
                    <div
                      className="product-prose text-[15px] leading-8 text-[#555] [&_li]:my-2 [&_ul]:grid [&_ul]:list-none [&_ul]:gap-4 sm:[&_ul]:grid-cols-3 [&_ul>li]:rounded-xl [&_ul>li]:border [&_ul>li]:border-[#e4ecf6] [&_ul>li]:bg-[#f8fbff] [&_ul>li]:px-5 [&_ul>li]:py-6"
                      dangerouslySetInnerHTML={{ __html: product.applicationsHtml }}
                    />
                  );
                }
                return (
                  <p className="text-sm text-[#8899aa]">暂无应用领域说明</p>
                );
              })()
            ) : null}
          </div>
        </div>
      </ProductContainer>
    </section>
  );
}
