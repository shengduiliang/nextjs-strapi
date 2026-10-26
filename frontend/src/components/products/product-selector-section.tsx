"use client";

import {
  ChevronUp,
  ChevronDown,
  Download,
  Lock,
  RotateCcw,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { ProductContainer } from "@/components/products/product-container";
import type { ProductTableRow } from "@/lib/site-config";
import {
  serialNorFlashDensityOptions,
  serialNorFlashProducts,
  serialNorFlashVoltageOptions,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

const tableColumns = [
  { key: "partNumber", label: "Part No", width: "min-w-[220px]", sticky: true, sortable: false },
  { key: "status", label: "状态", width: "min-w-[100px]", sortable: true },
  { key: "voltage", label: "电压", width: "min-w-[140px]", sortable: true },
  { key: "density", label: "容量", width: "min-w-[100px]", sortable: true },
  { key: "temperature", label: "温度(工规)", width: "min-w-[273px]", sortable: true },
  { key: "frequency", label: "频率(MHz)", width: "min-w-[228px]", sortable: true },
  { key: "features", label: "主要特性", width: "min-w-[527px]", sortable: true },
  { key: "package", label: "主要封装", width: "min-w-[1125px]", sortable: true },
] as const;

function FilterOption({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center rounded-[2px] border border-[#e3e3e3] px-4 py-2 sm:px-[31px]",
        active && "border-[#0068b7] bg-[#0068b7]/5"
      )}
    >
      <span
        className={cn(
          "mr-2 flex size-[13px] items-center justify-center rounded-full border border-[#666]",
          active && "border-[#0068b7]"
        )}
      >
        {active && <span className="size-[7px] rounded-full bg-[#0068b7]" />}
      </span>
      <span className="text-[16px] leading-5 text-[#666]">{label}</span>
    </button>
  );
}

function getCellValue(row: ProductTableRow, key: (typeof tableColumns)[number]["key"]) {
  return row[key as keyof ProductTableRow] ?? "";
}

export function ProductSelectorSection() {
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [selectedVoltages, setSelectedVoltages] = useState<string[]>([]);
  const [selectedDensities, setSelectedDensities] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const toggleVoltage = (value: string) => {
    setSelectedVoltages((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleDensity = (value: string) => {
    setSelectedDensities((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const resetFilters = () => {
    setSelectedVoltages([]);
    setSelectedDensities([]);
    setQuery("");
  };

  const filtered = useMemo(() => {
    return serialNorFlashProducts.filter((row) => {
      if (selectedVoltages.length > 0 && !selectedVoltages.includes(row.voltage)) return false;
      if (selectedDensities.length > 0 && !selectedDensities.includes(row.density)) return false;
      if (query.trim()) {
        const q = query.trim().toLowerCase();
        if (!row.partNumber.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [selectedVoltages, selectedDensities, query]);

  return (
    <section className="bg-white pb-12 sm:pb-[46px]">
      <h2 className="mb-[45px] text-center text-[40px] font-bold leading-[60px] text-[#333] sm:text-[48px] sm:leading-[72px]">
        产品选择器
      </h2>

      <ProductContainer>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-y-3">
            <button
              type="button"
              onClick={() => setFiltersVisible((v) => !v)}
              className="flex items-center text-[14px] leading-[19.6px] text-[#333]"
            >
              <SlidersHorizontal className="mr-[6px] size-[19px]" aria-hidden />
              {filtersVisible ? "隐藏筛选" : "显示筛选"}
            </button>
            <button
              type="button"
              onClick={resetFilters}
              className="ml-[35px] flex items-center text-[14px] leading-[21px] text-[#333]"
            >
              <RotateCcw className="mr-[6px] size-4" aria-hidden />
              重置
            </button>
            <p className="ml-10 text-[14px] leading-[21px] text-[#333]">
              <span className="text-[14px]">{filtered.length}</span>
              <span> 个结果</span>
            </p>
            <div className="ml-0 mt-2 w-full sm:ml-10 sm:mt-0 sm:w-auto">
              <div className="relative h-[50px] w-full rounded-[5px] bg-[#f4f4f4] sm:w-[320px]">
                <input
                  type="search"
                  placeholder="Filter by Part No."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-full w-full bg-transparent py-[10px] pl-5 pr-16 text-[15px] text-[#333] outline-none placeholder:text-[#999]"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-10 top-1/2 -translate-y-1/2 text-[#999]"
                    aria-label="清除搜索"
                  >
                    <X className="size-4" />
                  </button>
                )}
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666]"
                  aria-label="搜索"
                >
                  <Search className="size-6" />
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center text-[14px] leading-[21px] text-[#0068b7]"
          >
            <Download className="mr-[10px] size-[15px]" aria-hidden />
            导出
          </button>
        </div>

        {filtersVisible && (
          <div className="mt-[7px] border-t border-[#e6e6e6] pt-[9px]">
            <ul className="space-y-7">
              <li className="flex flex-col items-start px-0 sm:flex-row sm:px-[11px]">
                <p className="w-auto shrink-0 pt-4 pr-6 text-[18px] leading-7 text-[#333] sm:w-[84px] sm:pt-[22px] sm:pr-[44px] sm:text-[20px] sm:leading-[28px]">
                  电压
                </p>
                <div className="flex flex-wrap gap-2 pt-2 sm:gap-0 sm:pt-[22px]">
                  {serialNorFlashVoltageOptions.map((opt) => (
                    <FilterOption
                      key={opt}
                      label={opt}
                      active={selectedVoltages.includes(opt)}
                      onClick={() => toggleVoltage(opt)}
                    />
                  ))}
                </div>
              </li>
              <li className="flex flex-col items-start px-0 sm:flex-row sm:px-[11px]">
                <p className="w-auto shrink-0 pt-4 pr-6 text-[18px] leading-7 text-[#333] sm:w-[84px] sm:pt-[22px] sm:pr-[44px] sm:text-[20px] sm:leading-[28px]">
                  容量
                </p>
                <div className="flex flex-wrap gap-2 pt-2 sm:gap-0 sm:pt-[22px]">
                  {serialNorFlashDensityOptions.map((opt) => (
                    <FilterOption
                      key={opt}
                      label={opt}
                      active={selectedDensities.includes(opt)}
                      onClick={() => toggleDensity(opt)}
                    />
                  ))}
                </div>
              </li>
            </ul>
          </div>
        )}

        <div className="relative mt-5 overflow-x-auto">
          <table className="w-full min-w-[2713px] border-collapse text-left">
            <thead>
              <tr className="h-[50px] bg-[#d7dfea]">
                {tableColumns.map((col) => (
                  <th
                    key={col.key}
                    className={cn(
                      "bg-[#0e68ae] px-6 py-[11px] text-[16px] font-normal leading-[28px] text-white",
                      col.width,
                      "sticky" in col &&
                        col.sticky &&
                        "sticky left-0 z-20 shadow-[13px_0_15.5px_1px_rgba(0,0,0,0.07)]"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span>{col.label}</span>
                      {col.sortable && (
                        <span className="flex shrink-0 flex-col opacity-50" aria-hidden>
                          <ChevronUp className="size-3" />
                          <ChevronDown className="-mt-1 size-3" />
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.partNumber} className="h-10 border-b border-[#edf0f1]">
                  {tableColumns.map((col) => (
                    <td
                      key={col.key}
                      className={cn(
                        "border-r border-[#e1e1e1] px-5 py-[8px] text-[14px] leading-[21px] text-[#666] last:border-r-0",
                        "sticky" in col &&
                          col.sticky &&
                          "sticky left-0 z-10 bg-white shadow-[13px_0_15.5px_1px_rgba(0,0,0,0.07)]"
                      )}
                    >
                      {col.key === "partNumber" ? (
                        <div className="flex items-center justify-between gap-2">
                          {row.href ? (
                            <Link
                              href={row.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[16px] leading-[28px] text-[#0e68ae] hover:underline"
                            >
                              {row.partNumber}
                            </Link>
                          ) : (
                            <span className="text-[16px] leading-[28px] text-[#0e68ae]">
                              {row.partNumber}
                            </span>
                          )}
                          <Lock className="size-5 shrink-0 text-[#5a5a68]" aria-hidden />
                        </div>
                      ) : col.key === "status" ? (
                        <span className="text-[14px] font-bold leading-[14px] text-[#666]">
                          {getCellValue(row, col.key)}
                        </span>
                      ) : (
                        getCellValue(row, col.key)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={tableColumns.length}
                    className="px-5 py-12 text-center text-[14px] text-[#999]"
                  >
                    未找到匹配产品，请调整筛选条件
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-[14px] leading-[14px] text-[#666]">
          状态说明：MP：量产阶段，UD：开发中，S：样品阶段，NR：不推荐
        </p>
      </ProductContainer>
    </section>
  );
}
