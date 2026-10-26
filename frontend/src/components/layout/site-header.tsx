"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { ChevronDown, Globe, Menu, Search, User } from "lucide-react";

import { AboutMegaMenu } from "@/components/layout/about-mega-menu";
import { ProductMegaMenu } from "@/components/layout/product-mega-menu";
import { SimpleMegaMenu } from "@/components/layout/simple-mega-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  aboutMenuItems,
  aboutMenuFeatured,
  mainNavItems,
  ROUTES,
  solutionMegaMenu,
  sustainabilityMegaMenu,
  techMegaMenu,
} from "@/lib/site-config";
import type { ProductMenuCategory } from "@/lib/products/menu-types";
import { cn } from "@/lib/utils";

const PRODUCT_CENTER_LABEL = "产品中心";
const SOLUTION_LABEL = "应用领域";
const TECH_LABEL = "技术资源";
const SUSTAINABILITY_LABEL = "可持续发展";
const ABOUT_US_LABEL = "关于我们";

type MenuKey = "products" | "solutions" | "tech" | "sustainability" | "about";

type SiteHeaderProps = {
  productMenuCategories: ProductMenuCategory[];
};

export function SiteHeader({ productMenuCategories }: SiteHeaderProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const showMenu = useCallback(
    (key: MenuKey) => {
      clearHideTimer();
      setActiveMenu(key);
    },
    [clearHideTimer]
  );

  const scheduleHideMenu = useCallback(() => {
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => setActiveMenu(null), 180);
  }, [clearHideTimer]);

  const hideMenuImmediate = useCallback(() => {
    clearHideTimer();
    setActiveMenu(null);
  }, [clearHideTimer]);

  // 路由变化后关闭下拉（布局复用导致状态会残留）
  useEffect(() => {
    hideMenuImmediate();
    setSheetOpen(false);
  }, [pathname, hideMenuImmediate]);

  const handleMegaMenuClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("a")) {
        hideMenuImmediate();
      }
    },
    [hideMenuImmediate]
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/")) return pathname === href || pathname.startsWith(`${href}/`);
    return false;
  };

  const navItemClass = (active: boolean) =>
    cn(
      "text-base transition-colors hover:text-[#0068b7]",
      active ? "font-medium text-[#0068b7]" : "text-[#45596a]"
    );

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-border/60 bg-white shadow-sm">
      <div className="relative">
        <div className="mx-auto flex h-16 max-w-[1920px] items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-[53px]">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 sm:gap-3"
            onMouseEnter={hideMenuImmediate}
          >
            <span className="relative block h-10 w-[142px] sm:h-12 sm:w-[170px]">
              <Image
                src="/images/layout/logo.png"
                alt="荣芯半导体 Glorysemi"
                fill
                className="object-contain object-left"
                sizes="170px"
                priority
              />
            </span>
            <span className="hidden border-l border-[#d7e0ea] pl-3 text-[15px] font-medium leading-none text-[#0b254b] xl:block">
              荣芯半导体
            </span>
          </Link>

          <nav className="hidden items-center gap-8 xl:flex xl:gap-[60px]">
            {mainNavItems.map((item) => {
              if (item.label === PRODUCT_CENTER_LABEL) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    className={navItemClass(
                      activeMenu === "products" || isActive(ROUTES.products)
                    )}
                    aria-expanded={activeMenu === "products"}
                    aria-haspopup="true"
                    onMouseEnter={() => showMenu("products")}
                    onMouseLeave={scheduleHideMenu}
                    onFocus={() => showMenu("products")}
                    onBlur={scheduleHideMenu}
                  >
                    {item.label}
                  </button>
                );
              }

              if (item.label === SOLUTION_LABEL) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={navItemClass(
                      activeMenu === "solutions" || isActive(ROUTES.solution)
                    )}
                    aria-expanded={activeMenu === "solutions"}
                    aria-haspopup="true"
                    onMouseEnter={() => showMenu("solutions")}
                    onMouseLeave={scheduleHideMenu}
                    onFocus={() => showMenu("solutions")}
                    onBlur={scheduleHideMenu}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.label === TECH_LABEL) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    className={navItemClass(activeMenu === "tech")}
                    aria-expanded={activeMenu === "tech"}
                    aria-haspopup="true"
                    onMouseEnter={() => showMenu("tech")}
                    onMouseLeave={scheduleHideMenu}
                    onFocus={() => showMenu("tech")}
                    onBlur={scheduleHideMenu}
                  >
                    {item.label}
                  </button>
                );
              }

              if (item.label === SUSTAINABILITY_LABEL) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={navItemClass(
                      activeMenu === "sustainability" || isActive(ROUTES.sustainability)
                    )}
                    aria-expanded={activeMenu === "sustainability"}
                    aria-haspopup="true"
                    onMouseEnter={() => showMenu("sustainability")}
                    onMouseLeave={scheduleHideMenu}
                    onFocus={() => showMenu("sustainability")}
                    onBlur={scheduleHideMenu}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.label === ABOUT_US_LABEL) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    className={navItemClass(
                      activeMenu === "about" || isActive(ROUTES.about)
                    )}
                    aria-expanded={activeMenu === "about"}
                    aria-haspopup="true"
                    onMouseEnter={() => showMenu("about")}
                    onMouseLeave={scheduleHideMenu}
                    onFocus={() => showMenu("about")}
                    onBlur={scheduleHideMenu}
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={hideMenuImmediate}
                  className={navItemClass(isActive(item.href))}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5" onMouseEnter={hideMenuImmediate}>
            <Button
              variant="ghost"
              size="icon"
              className="hidden text-[#45596a] hover:text-[#0068b7] sm:inline-flex"
              aria-label="搜索"
            >
              <Search className="size-5" />
            </Button>

            <Link
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-[#337ab7] sm:flex"
            >
              <User className="size-5" />
              <span className="text-sm">登录</span>
            </Link>

            <button
              type="button"
              className="hidden items-center gap-1 text-[#0068b7] sm:flex"
              aria-label="切换语言"
            >
              <Globe className="size-[26px]" />
              <span className="text-base">中文</span>
              <ChevronDown className="size-2.5 text-[#45596a]" />
            </button>

            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="xl:hidden"
                    aria-label="打开菜单"
                  />
                }
              >
                <Menu className="size-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(100vw,320px)]">
                <SheetHeader>
                  <SheetTitle>导航菜单</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-1">
                  <details className="group rounded-md">
                    <summary className="cursor-pointer list-none rounded-md px-3 py-3 text-base text-[#45596a] marker:content-none hover:bg-muted hover:text-[#0068b7] [&::-webkit-details-marker]:hidden">
                      {PRODUCT_CENTER_LABEL}
                    </summary>
                    <ul className="ml-3 border-l border-[#eee] pl-3">
                      {productMenuCategories.map((category) => (
                        <li key={category.id}>
                          <Link
                            href={category.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setSheetOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-[#666] hover:text-[#0068b7]"
                          >
                            {category.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                  <details className="group rounded-md">
                    <summary className="cursor-pointer list-none rounded-md px-3 py-3 text-base text-[#45596a] marker:content-none hover:bg-muted hover:text-[#0068b7] [&::-webkit-details-marker]:hidden">
                      {SOLUTION_LABEL}
                    </summary>
                    <ul className="ml-3 border-l border-[#eee] pl-3">
                      {solutionMegaMenu.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setSheetOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-[#666] hover:text-[#0068b7]"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                  <details className="group rounded-md">
                    <summary className="cursor-pointer list-none rounded-md px-3 py-3 text-base text-[#45596a] marker:content-none hover:bg-muted hover:text-[#0068b7] [&::-webkit-details-marker]:hidden">
                      {TECH_LABEL}
                    </summary>
                    <ul className="ml-3 border-l border-[#eee] pl-3">
                      {techMegaMenu.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setSheetOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-[#666] hover:text-[#0068b7]"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                  <details className="group rounded-md">
                    <summary className="cursor-pointer list-none rounded-md px-3 py-3 text-base text-[#45596a] marker:content-none hover:bg-muted hover:text-[#0068b7] [&::-webkit-details-marker]:hidden">
                      {SUSTAINABILITY_LABEL}
                    </summary>
                    <ul className="ml-3 border-l border-[#eee] pl-3">
                      {sustainabilityMegaMenu.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setSheetOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-[#666] hover:text-[#0068b7]"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                  <details className="group rounded-md">
                    <summary className="cursor-pointer list-none rounded-md px-3 py-3 text-base text-[#45596a] marker:content-none hover:bg-muted hover:text-[#0068b7] [&::-webkit-details-marker]:hidden">
                      {ABOUT_US_LABEL}
                    </summary>
                    <ul className="ml-3 border-l border-[#eee] pl-3">
                      {aboutMenuItems.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setSheetOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-[#666] hover:text-[#0068b7]"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                  {mainNavItems
                    .filter(
                      (item) =>
                        item.label !== PRODUCT_CENTER_LABEL &&
                        item.label !== SOLUTION_LABEL &&
                        item.label !== TECH_LABEL &&
                        item.label !== SUSTAINABILITY_LABEL &&
                        item.label !== ABOUT_US_LABEL
                    )
                    .map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setSheetOpen(false)}
                        className={cn(
                          "rounded-md px-3 py-3 text-base hover:bg-muted hover:text-[#0068b7]",
                          isActive(item.href)
                            ? "bg-muted font-medium text-[#0068b7]"
                            : "text-[#45596a]"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  <div className="mt-4 flex items-center gap-4 border-t pt-4">
                    <Button variant="ghost" size="icon" aria-label="搜索">
                      <Search className="size-5" />
                    </Button>
                    <Link
                      href="/about"
                      className="flex items-center gap-2 text-[#337ab7]"
                    >
                      <User className="size-5" />
                      登录
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <ProductMegaMenu
          open={activeMenu === "products"}
          categories={productMenuCategories}
          onMouseEnter={() => showMenu("products")}
          onMouseLeave={scheduleHideMenu}
          onClick={handleMegaMenuClick}
        />
        <SimpleMegaMenu
          open={activeMenu === "solutions"}
          featured={solutionMegaMenu.featured}
          items={[...solutionMegaMenu.items]}
          featuredPosition="left"
          onMouseEnter={() => showMenu("solutions")}
          onMouseLeave={scheduleHideMenu}
          onClick={handleMegaMenuClick}
        />
        <SimpleMegaMenu
          open={activeMenu === "tech"}
          featured={techMegaMenu.featured}
          items={[...techMegaMenu.items]}
          featuredPosition="right"
          onMouseEnter={() => showMenu("tech")}
          onMouseLeave={scheduleHideMenu}
          onClick={handleMegaMenuClick}
        />
        <SimpleMegaMenu
          open={activeMenu === "sustainability"}
          featured={sustainabilityMegaMenu.featured}
          items={[...sustainabilityMegaMenu.items]}
          featuredPosition="left"
          onMouseEnter={() => showMenu("sustainability")}
          onMouseLeave={scheduleHideMenu}
          onClick={handleMegaMenuClick}
        />
        <AboutMegaMenu
          open={activeMenu === "about"}
          onMouseEnter={() => showMenu("about")}
          onMouseLeave={scheduleHideMenu}
          onClick={handleMegaMenuClick}
        />
      </div>
    </header>
  );
}
