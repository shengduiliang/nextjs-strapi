"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  FileCheck,
  Globe,
  Handshake,
  List,
  Newspaper,
  Phone,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import { useState, type MouseEvent } from "react";

import {
  aboutMenuFeatured,
  aboutMenuItems,
  type AboutMenuItem,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

const iconMap: Record<AboutMenuItem["icon"], LucideIcon> = {
  building: Building2,
  "user-plus": UserPlus,
  newspaper: Newspaper,
  list: List,
  globe: Globe,
  "book-open": BookOpen,
  "file-check": FileCheck,
  handshake: Handshake,
  phone: Phone,
};

type AboutMegaMenuProps = {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

function externalLinkProps(href: string) {
  if (href.startsWith("/")) return {};
  return { target: "_blank" as const, rel: "noopener noreferrer" };
}

function AboutNavItem({ item }: { item: AboutMenuItem }) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[item.icon];
  const hasChildren = Boolean(item.children?.length);
  const active = hovered && hasChildren;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={item.href}
        {...externalLinkProps(item.href)}
        className={cn(
          "group flex w-full items-center gap-3 transition-colors",
          active && "rounded-sm bg-[#f6f7f9]"
        )}
      >
        <span className="flex size-7 shrink-0 items-center justify-center">
          <Icon
            className={cn(
              "size-7 stroke-[1.25] transition-colors",
              active ? "text-[#0068b7]" : "text-[#637381] group-hover:text-[#0068b7]"
            )}
          />
        </span>
        <span
          className={cn(
            "text-lg leading-[1.5] transition-colors",
            active ? "text-[#0068b7]" : "text-[#637381] group-hover:text-[#0068b7]"
          )}
        >
          {item.label}
        </span>
      </Link>

      {hasChildren && active && (
        <div className="mt-3 border-t border-[#eaeaea] pt-2 pl-[40px]">
          <ul className="space-y-0.5">
            {item.children!.map((child, index) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  {...externalLinkProps(child.href)}
                  className={cn(
                    "block text-base leading-7 transition-colors hover:text-[#0068b7]",
                    index === 0 ? "text-[#0068b7]" : "text-[#666]"
                  )}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function AboutMegaMenu({ open, onMouseEnter, onMouseLeave, onClick }: AboutMegaMenuProps) {
  return (
    <div
      className={cn(
        "absolute top-full left-1/2 z-50 w-screen max-w-none -translate-x-1/2 overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
        open ? "max-h-[520px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
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
        <div className="mx-auto flex min-h-[360px] w-full max-w-[1920px]">
          <aside className="relative hidden w-[35%] min-w-[280px] shrink-0 bg-[#f7f9fc] lg:block">
            <div className="absolute top-[10%] bottom-[10%] right-0 w-px bg-[#eaeaea]" aria-hidden />
            <Link
              href={aboutMenuFeatured.href}
              className="flex h-full items-start gap-6 px-8 py-10 transition-opacity hover:opacity-90 lg:gap-8 lg:px-10 lg:py-[42px] xl:pl-[60px] xl:pr-10"
            >
              <div className="min-w-0 flex-1">
                <p className="text-xl font-bold leading-[1.75] text-[#0068b7]">
                  {aboutMenuFeatured.title}
                </p>
                <p className="mt-2.5 text-base leading-[1.75] text-[#666]">
                  {aboutMenuFeatured.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-base text-[#0e68ae]">
                  查看更多
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
              <div className="relative mt-1 aspect-[169/99] w-[42%] min-w-[140px] max-w-[200px] shrink-0 overflow-hidden rounded-sm">
                <Image
                  src={aboutMenuFeatured.image}
                  alt={aboutMenuFeatured.description}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </Link>
          </aside>

          <div className="flex min-w-0 w-full items-start py-10 pl-8 pr-6 sm:pl-14 lg:w-[65%] lg:py-[53px] lg:pl-16 lg:pr-[112px]">
            <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-6">
              {aboutMenuItems.map((item) => (
                <li key={item.label}>
                  <AboutNavItem item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
