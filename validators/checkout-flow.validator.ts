import { z } from "zod";

export const step1Schema = z.object({
  loanType: z.enum(["personal", "business"], {
    required_error: "Please select a loan type",
    invalid_type_error: "Loan type must be either personal or business",
  }),

  loanAmount: z
    .number({
      required_error: "Loan amount is required",
      invalid_type_error: "Loan amount must be a number",
    })
    .min(10000, "Minimum loan amount is k10,000")
    .max(1000000, "Maximum loan amount is k1,000,000"),

  loanTermMonths: z
    .number({
      required_error: "Loan term is required",
      invalid_type_error: "Loan term must be a number",
    })
    .min(1, "Minimum term is 1 months")
    .max(9, "Maximum term is 9 months"),
});

export const step2Schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  fullName: z.string().min(5, "Full name must be at least 5 characters"),
  phoneNumber: z.number({
    required_error: "Phone number is required",
    invalid_type_error: "Loan amount must be a number",
  }),
});

export const step3Schema = z.object({
  consent: z.boolean({
    message: "To proceed, please agree to the T's and C's",
  }),
});

export const CombinedCheckoutSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema);

export type CombinedCheckoutType = z.infer<typeof CombinedCheckoutSchema>;
