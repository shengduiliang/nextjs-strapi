"use client";

import { cn } from "@/lib/utils";

type NewsPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function PageButton({
  children,
  active,
  disabled,
  onClick,
  ariaLabel,
}: {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex size-10 items-center justify-center rounded-[2px] text-base leading-10 text-[#333] transition-colors",
        active && "bg-[#0e68ae] text-white",
        disabled && "cursor-not-allowed opacity-40",
        !active && !disabled && "hover:text-[#0068b7]"
      )}
    >
      {children}
    </button>
  );
}

export function NewsPagination({ currentPage, totalPages, onPageChange }: NewsPaginationProps) {
  const visiblePages = Array.from({ length: Math.min(11, totalPages) }, (_, i) => i + 1);

  return (
    <nav aria-label="分页" className="mt-12 flex justify-center px-4">
      <div className="flex flex-wrap items-center justify-center gap-0">
        <PageButton
          ariaLabel="第一页"
          disabled={currentPage === 1}
          onClick={() => onPageChange(1)}
        >
          {"<<"}
        </PageButton>
        <PageButton
          ariaLabel="上一页"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {"<"}
        </PageButton>

        {visiblePages.map((page) => (
          <PageButton
            key={page}
            active={page === currentPage}
            ariaLabel={`第 ${page} 页`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        ))}

        <PageButton
          ariaLabel="下一页"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {">"}
        </PageButton>
        <PageButton
          ariaLabel="最后一页"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          {">>"}
        </PageButton>
      </div>
    </nav>
  );
}
