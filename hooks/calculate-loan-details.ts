import { addMonths, format } from "date-fns";

export const getFinalRepaymentDate = (term: number): string => {
  if (!term || term <= 0) term = 1; // Default to 1 month if invalid
  return format(addMonths(new Date(), term), "yyyy-MM-dd");
};

export const getNextRepaymentDate = (): string => {
  return format(addMonths(new Date(), 1), "yyyy-MM-dd");
};
