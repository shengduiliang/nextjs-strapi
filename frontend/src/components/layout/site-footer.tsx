import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  footerColumns,
  footerQuickLinks,
  footerSocialItems,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

function FooterAnchor({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#2b303e] text-white">
      <Container className="max-w-[1748px] px-4 pb-10 pt-5 sm:px-[86px] sm:pb-[50px] sm:pt-6">
        <div className="flex flex-col gap-5 border-b border-[rgba(34,105,224,0.24)] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="relative block h-[48px] w-[170px]">
            <Image
              src="/images/layout/logo-footer-1.png"
              alt="荣芯半导体"
              fill
              sizes="170px"
              className="object-contain object-left"
            />
          </Link>
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {footerSocialItems.map((item) => {
              const content = (
                <span className="relative block size-9 sm:size-10">
                  <Image
                    src={item.icon}
                    alt=""
                    fill
                    className="object-contain opacity-80 transition-opacity group-hover:opacity-100"
                    sizes="40px"
                  />
                </span>
              );

              if ("href" in item && item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.label}
                    className="group inline-flex"
                    aria-label={item.label}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={item.label}
                  className="group relative inline-flex"
                  title={item.label}
                >
                  <button
                    type="button"
                    className="inline-flex"
                    aria-label={item.label}
                  >
                    {content}
                  </button>
                  {"qr" in item && item.qr ? (
                    <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 hidden w-[120px] -translate-x-1/2 rounded-sm bg-white p-2 shadow-lg group-hover:block">
                      <span className="relative block aspect-square w-full">
                        <Image
                          src={item.qr}
                          alt={`${item.label}二维码`}
                          fill
                          className="object-contain"
                          sizes="104px"
                        />
                      </span>
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_260px] lg:items-center lg:gap-12">
          <div className="space-y-8">
            <nav className="flex flex-wrap gap-6 text-lg sm:gap-16 xl:gap-20">
              {footerQuickLinks.map((link) => (
                <FooterAnchor
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-[#0068b7]"
                >
                  {link.label}
                </FooterAnchor>
              ))}
            </nav>

            <form
              className="flex max-w-[780px] flex-col gap-0 sm:flex-row"
              action="/products"
              method="get"
            >
              <Input
                type="search"
                name="wd"
                placeholder="请输入产品型号"
                required
                className="h-[52px] flex-1 rounded-none border border-white/50 bg-transparent px-6 text-base text-white placeholder:text-[#999] focus-visible:border-white/70 focus-visible:ring-0"
              />
              <Button
                type="submit"
                className="h-[52px] rounded-none bg-[#0068b7] px-10 text-base hover:bg-[#0056a0] sm:min-w-[120px]"
              >
                搜索
              </Button>
            </form>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <p className="mb-4 text-base text-white">
                    {column.titleHref ? (
                      <FooterAnchor
                        href={column.titleHref}
                        className="transition-colors hover:text-[#0068b7]"
                      >
                        {column.title}
                      </FooterAnchor>
                    ) : (
                      column.title
                    )}
                  </p>
                  <ul className="space-y-2.5 text-xs leading-[18px] text-white/60">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <FooterAnchor
                          href={link.href}
                          className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                        >
                          {link.label}
                          {link.badge ? (
                            <Image
                              src="/images/layout/footer-new-badge.jpg"
                              alt="NEW"
                              width={27}
                              height={14}
                              className="inline-block"
                            />
                          ) : null}
                        </FooterAnchor>
                      </li>
                    ))}
                  </ul>
                  {column.secondary ? (
                    <p className={cn("mt-6 text-base text-white")}>
                      <FooterAnchor
                        href={column.secondary.href}
                        className="transition-colors hover:text-[#0068b7]"
                      >
                        {column.secondary.title}
                      </FooterAnchor>
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <FooterAnchor
            href="/products"
            className="relative mx-auto hidden h-[200px] w-full max-w-[260px] overflow-hidden lg:block"
          >
            <Image
              src="/images/home/app-watch.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="260px"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/35 text-2xl font-bold text-white">
              产品中心
            </span>
          </FooterAnchor>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs leading-relaxed text-white/60 sm:text-sm">
          Copyright©2026 深圳市荣芯半导体有限公司　
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            粤ICP备2026034744号-1
          </a>
        </p>
      </Container>
    </footer>
  );
}
