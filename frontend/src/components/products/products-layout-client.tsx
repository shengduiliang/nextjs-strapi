"use client";

import { useState } from "react";

import { ProductSidebar } from "@/components/products/product-sidebar";
import type { ProductSidebarNode } from "@/lib/product-sidebar";

type ProductsLayoutClientProps = {
  children: React.ReactNode;
  tree: ProductSidebarNode[];
};

export function ProductsLayoutClient({ children, tree }: ProductsLayoutClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative w-full bg-white">
      <ProductSidebar
        open={sidebarOpen}
        onOpen={() => setSidebarOpen(true)}
        onClose={() => setSidebarOpen(false)}
        tree={tree}
      />
      <div className="min-w-0">{children}</div>
    </div>
  );
}
