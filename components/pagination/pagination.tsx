"use client";

import { Button } from "../ui/button";

interface NotificationPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function NotificationPagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: NotificationPaginationProps) {
  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
  const safeTotalPages = Math.max(1, totalPages);

  const handlePageChange = (newPage: number) => {
    const clampedPage = Math.max(1, Math.min(newPage, safeTotalPages));
    onPageChange?.(clampedPage);
  };

  return (
    <div className="flex w-full sm:w-auto items-center sm:justify-center justify-between gap-2 mt-4 mx-auto">
      <Button
        variant="outline"
        disabled={safeCurrentPage === 1}
        onClick={() => handlePageChange(safeCurrentPage - 1)}
        aria-label="Previous page"
      >
        Previous
      </Button>

      <span className="text-sm">
        Page {safeCurrentPage} of {safeTotalPages}
      </span>

      <Button
        variant="outline"
        disabled={safeCurrentPage === safeTotalPages}
        onClick={() => handlePageChange(safeCurrentPage + 1)}
        aria-label="Next page"
      >
        Next
      </Button>
    </div>
  );
}
