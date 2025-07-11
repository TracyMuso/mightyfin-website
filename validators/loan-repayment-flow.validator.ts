import { z } from "zod";

export const MethodSchema = z.object({
  paymentMethod: z.enum(["mobile money", "card", "bank transfer", "cash"], {
    required_error: "Please select a payment method",
    invalid_type_error: "Payment method is required",
  }),
  amount: z
    .number({
      required_error: "Payment amount is required",
      invalid_type_error: "Payment amount must be a number",
    })
    .min(10, "Minimum repayment amount is k10")
    .max(100000, "Maximum repayment amount is k100,000"),
});

const mnos = ["airtel", "mtn", "zamtel"] as const;

export const zambianBanks = [
  "Access Bank Zambia",
  "Atlas Mara Zambia",
  "Bank of China Zambia",
  "Barclays Bank Zambia (now Absa Bank Zambia)",
  "Cavmont Bank",
  "Citibank Zambia",
  "Ecobank Zambia",
  "First Capital Bank Zambia",
  "First National Bank Zambia (FNB)",
  "Indo-Zambia Bank",
  "Investrust Bank",
  "Stanbic Bank Zambia",
  "Standard Chartered Bank Zambia",
  "Zambia Industrial Commercial Bank (ZICB)",
  "Zambia National Commercial Bank (ZANACO)",
  "ABSA Bank Zambia",
  "Finance Bank Zambia",
  "National Savings and Credit Bank (NATSAVE)",
  "African Banking Corporation Zambia (BancABC)",
  "United Bank for Africa Zambia (UBA)",
  "Demand African Bank",
  "First Alliance Bank Zambia",
  "Leopard Capital Zambia",
  "Mukuba Bank",
  "NBS Bank Zambia",
  "Prime Bank Zambia",
  "Sovereign Bank Zambia",
  "Tongabezi Bank",
  "Union Bank Zambia",
] as const;

export type ZambianBank = (typeof zambianBanks)[number];

export const BankStep1Schema = z.object({
  accountName: z
    .string({
      required_error: "Account name is required",
    })
    .min(5, {
      message: "Must be at least 3 characters",
    })
    .max(100, {
      message: "Must be less than 100 characters",
    }),
  bank: z.enum(zambianBanks, {
    required_error: "Bank is required",
  }),
  branch: z
    .string({
      required_error: "Branch is required",
    })
    .min(4, {
      message: "Must be at least 4 characters",
    })
    .max(100, {
      message: "Must be less than 100 characters",
    }),

  accountnumber: z
    .string({
      required_error: "Account number is required",
    })
    .regex(/^[0-9]+$/, "Card number must contain only numbers")
    .min(10, {
      message: "Must be at least 10 characters",
    })
    .max(20, {
      message: "Must be less than 20 characters",
    }),
  consent: z.boolean({
    message: "To proceed, please agree to the T's and C's",
  }),
});

export const CardStep1Schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  cardNumber: z
    .string()
    .min(13, "Card number must be at least 13 digits")
    .max(19, "Card number must not exceed 19 digits")
    .regex(/^[0-9]+$/, "Card number must contain only numbers"),
  cvv: z
    .string()
    .length(3, "CVV must be exactly 3 digits")
    .regex(/^[0-9]+$/, "CVV must contain only numbers"),
  expiry: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
      "Expiry must be in MM/YYYY or MM/YY format"
    )
    .refine(
      (val) => {
        const [month, year] = val.split("/");
        const expiryDate = new Date(
          parseInt(year.length === 2 ? `20${year}` : year),
          parseInt(month) - 1
        );
        return expiryDate > new Date();
      },
      {
        message: "Card has expired",
      }
    ),
  saveCard: z.boolean(),
});

export const mobileMoneyStep1Schema = z.object({
  operator: z.enum(mnos, {
    required_error: "mno is required",
  }),
  phoneNumber: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Must be a number",
    })
    .regex(/^[0-9]+$/, "must contain only numbers"),
  saveNumber: z.boolean(),
});

export type MethodSchemaType = z.infer<typeof MethodSchema>;
export type BankMethodType = z.infer<typeof BankStep1Schema>;
export type CardMethodType = z.infer<typeof CardStep1Schema>;
export type MobileMoneyMethodType = z.infer<typeof mobileMoneyStep1Schema>;
