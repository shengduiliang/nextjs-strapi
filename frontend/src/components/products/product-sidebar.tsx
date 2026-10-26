"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

import {
  isInternalProductHref,
  productSidebarTree,
  type ProductSidebarNode,
} from "@/lib/product-sidebar";
import { cn } from "@/lib/utils";

type ProductSidebarProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  tree?: ProductSidebarNode[];
};

function SidebarNavItem({
  node,
  depth,
  pathname,
  defaultOpen,
}: {
  node: ProductSidebarNode;
  depth: number;
  pathname: string;
  defaultOpen?: boolean;
}) {
  const hasChildren = Boolean(node.children?.length);
  const isActive =
    isInternalProductHref(node.href) &&
    (pathname === node.href || pathname.startsWith(`${node.href}/`));
  const childActive = node.children?.some(
    (c) =>
      isInternalProductHref(c.href) &&
      (pathname === c.href || pathname.startsWith(`${c.href}/`))
  );
  const [open, setOpen] = useState(defaultOpen ?? depth < 2);
  const external = !isInternalProductHref(node.href);

  if (!hasChildren) {
    const paddingLeft = depth === 0 ? 38 : depth === 1 ? 78 : 78;
    return (
      <div className="border-b border-[#ececec]">
        <Link
          href={node.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={cn(
            "block py-[6px] text-[16px] leading-6 text-[#333] transition-colors hover:text-[#0068b7]",
            isActive && "font-bold text-[#0068b7]",
            depth === 2 && "bg-[#f6f8fd]"
          )}
          style={{ paddingLeft: `${paddingLeft}px`, paddingRight: depth === 0 ? "15px" : "32px" }}
        >
          {node.label}
        </Link>
      </div>
    );
  }

  return (
    <div className="border-b border-[#ececec]">
      <div className={cn(depth === 0 && "bg-[#f9f9f9]")}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex w-full items-start px-[15px] py-[6px] text-left text-[16px] leading-6 text-[#333] hover:text-[#0068b7]",
            (isActive || childActive) && "text-[#0068b7]"
          )}
        >
          <ChevronRight
            className={cn(
              "mr-[10px] mt-[8px] size-3 shrink-0 transition-transform",
              open && "rotate-90"
            )}
            aria-hidden
          />
          <span>{node.label}</span>
        </button>
      </div>
      {open && (
        <div className={cn(depth === 0 && "border-t border-[#ececec] bg-[#f6f8fd]")}>
          {node.children!.map((child) => (
            <SidebarNavItem
              key={child.label}
              node={child}
              depth={depth + 1}
              pathname={pathname}
              defaultOpen={depth < 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProductSidebar({
  open,
  onOpen,
  onClose,
  tree = productSidebarTree,
}: ProductSidebarProps) {
  const pathname = usePathname();
  const primary = tree[0];
  const rest = tree.slice(1);

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="fixed left-0 top-[100px] z-30 flex size-[30px] items-center justify-center bg-white"
        aria-label="打开产品目录"
      >
        <ChevronLeft className="size-[20px] text-[#666]" />
      </button>

      {open && (
        <div className="fixed inset-0 z-40">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            aria-label="关闭产品目录"
          />
          <aside className="absolute left-0 top-0 flex h-full w-[330px] flex-col border-r border-[#d7dfea] bg-white">
            <div className="relative flex flex-col gap-3 px-3 pb-6 pt-[90px]">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-10 top-12 text-[#666]"
                aria-label="关闭"
              >
                <X className="size-4" />
              </button>
              <p className="w-[287px] pl-3">
                <Link
                  href={primary?.href ?? "/products"}
                  className="text-[16px] font-bold leading-4 text-[#666] hover:text-[#0068b7]"
                >
                  {primary?.label ?? "产品中心"}
                </Link>
              </p>
              <nav className="max-h-[960px] w-full overflow-y-auto border border-[#ececec]">
                {primary?.children?.map((node) => (
                  <SidebarNavItem
                    key={node.label}
                    node={node}
                    depth={0}
                    pathname={pathname}
                    defaultOpen
                  />
                ))}
                {rest.map((node) => (
                  <SidebarNavItem
                    key={node.label}
                    node={node}
                    depth={0}
                    pathname={pathname}
                  />
                ))}
              </nav>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
