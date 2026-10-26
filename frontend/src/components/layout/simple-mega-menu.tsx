"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Car,
  Cpu,
  Factory,
  FileSearch,
  Globe2,
  HardDrive,
  Leaf,
  type LucideIcon,
  MemoryStick,
  Microchip,
  Network,
  Radio,
  Scale,
  Shield,
  ShieldCheck,
  Smartphone,
  Users,
  Wrench,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { MouseEvent } from "react";

export type SimpleMegaMenuItem = {
  label: string;
  href: string;
  icon: keyof typeof simpleMegaIcons;
  children?: readonly { label: string; href: string }[];
};

export type SimpleMegaMenuFeatured = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export type SimpleMegaMenuProps = {
  open: boolean;
  featured: SimpleMegaMenuFeatured;
  items: readonly SimpleMegaMenuItem[];
  /** 推荐区位置：应用领域在左，技术资源在右，以此类推 */
  featuredPosition?: "left" | "right";
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

export const simpleMegaIcons = {
  car: Car,
  factory: Factory,
  bot: Bot,
  consumer: HardDrive,
  pc: Cpu,
  iot: Radio,
  network: Network,
  mobile: Smartphone,
  tech: Shield,
  flash: MemoryStick,
  mcu: Microchip,
  dram: HardDrive,
  analog: Cpu,
  eeprom: MemoryStick,
  tools: Wrench,
  resources: FileSearch,
  programmer: Scale,
  esg: Leaf,
  environment: Globe2,
  social: Users,
  governance: ShieldCheck,
} as const satisfies Record<string, LucideIcon>;

function externalLinkProps(href: string) {
  if (href.startsWith("/") || href.startsWith("#")) return {};
  return { target: "_blank" as const, rel: "noopener noreferrer" };
}

export function SimpleMegaMenu({
  open,
  featured,
  items,
  featuredPosition = "left",
  onMouseEnter,
  onMouseLeave,
  onClick,
}: SimpleMegaMenuProps) {
  const featuredOnLeft = featuredPosition === "left";

  const featuredPanel = (
    <aside
      className={cn(
        "relative hidden w-[35%] min-w-[280px] shrink-0 bg-[#f7f9fc] lg:block",
        featuredOnLeft ? "" : "order-2"
      )}
    >
      <div
        className={cn(
          "absolute top-[10%] bottom-[10%] w-px bg-[#eaeaea]",
          featuredOnLeft ? "right-0" : "left-0"
        )}
        aria-hidden
      />
      <Link
        href={featured.href}
        {...externalLinkProps(featured.href)}
        className={cn(
          "flex h-full items-start gap-6 px-8 py-10 transition-opacity hover:opacity-90 lg:gap-8 lg:px-10 lg:py-[42px]",
          featuredOnLeft ? "xl:pl-[60px] xl:pr-10" : "xl:pl-10 xl:pr-[60px]"
        )}
      >
        <div className="min-w-0 flex-1">
          <p className="text-xl font-bold leading-[1.75] text-[#0068b7]">{featured.title}</p>
          {featured.description ? (
            <p className="mt-2.5 text-base leading-[1.75] text-[#666]">{featured.description}</p>
          ) : null}
          <span className="mt-8 inline-flex items-center gap-2 text-base text-[#0e68ae]">
            查看更多
            <ArrowRight className="size-3.5" />
          </span>
        </div>
        <div className="relative mt-1 aspect-[4/3] w-[48%] min-w-[160px] max-w-[240px] shrink-0 overflow-hidden rounded-sm bg-white">
          <Image
            src={featured.image}
            alt={featured.description || featured.title}
            fill
            className="object-cover"
            sizes="240px"
          />
        </div>
      </Link>
    </aside>
  );

  const linksPanel = (
    <div
      className={cn(
        "flex min-w-0 w-full items-start px-8 py-10 sm:px-14 lg:w-[65%] lg:py-[53px]",
        featuredOnLeft ? "lg:pl-[80px] lg:pr-[112px]" : "order-1 lg:pl-[112px] lg:pr-[80px]"
      )}
    >
      <ul className="grid w-full grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = simpleMegaIcons[item.icon] ?? Globe2;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                {...externalLinkProps(item.href)}
                className="group flex items-center gap-3"
              >
                <span className="flex size-7 shrink-0 items-center justify-center text-[#637381] transition-colors group-hover:text-[#0068b7]">
                  <Icon className="size-7" strokeWidth={1.25} />
                </span>
                <span className="text-lg leading-[1.5] text-[#637381] transition-colors group-hover:text-[#0068b7]">
                  {item.label}
                </span>
              </Link>
              {item.children && item.children.length > 0 ? (
                <ul className="mt-2 space-y-1 border-t border-[#eaeaea] pt-2 pl-[40px]">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        {...externalLinkProps(child.href)}
                        className="block text-base leading-7 text-[#666] transition-colors hover:text-[#0068b7]"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div
      className={cn(
        "absolute top-full left-1/2 z-50 w-screen max-w-none -translate-x-1/2 overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
        open ? "max-h-[480px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div
        className={cn(
          "w-full overflow-hidden rounded-b-md bg-white shadow-[0_0_8px_rgba(19,60,91,0.17)]",
          "transition-transform duration-300 ease-out",
          open ? "translate-y-0" : "-translate-y-2"
        )}
      >
        <div className="mx-auto flex min-h-[288px] w-full max-w-[1920px]">
          {featuredOnLeft ? (
            <>
              {featuredPanel}
              {linksPanel}
            </>
          ) : (
            <>
              {linksPanel}
              {featuredPanel}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
