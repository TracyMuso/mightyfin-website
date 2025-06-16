import { format, addMonths } from "date-fns";

// Calculate interest rate based on term (linear interpolation between 10% and 42%)
export const getInterestRate = (term: number) => {
  if (term <= 1) return 0.1; // 10% for 1 month
  if (term >= 9) return 0.42; // 42% for 9 months

  // Linear interpolation between 1-9 months
  return 0.1 + (0.32 * (term - 1)) / 8;
};

export const getNextRepaymentDate = (): string => {
  return format(addMonths(new Date(), 1), "yyyy-MM-dd");
};
