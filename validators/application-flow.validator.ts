import { z } from "zod";

const isValidMMDDYYYY = (str: string) => {
  const parts = str.split("-");
  if (parts.length !== 3) return false;

  const [month, day, year] = parts.map(Number);
  if (isNaN(month) || isNaN(day) || isNaN(year)) return false;

  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};

export const LoanDetailsSchema = z.object({
  loanType: z.enum(["Civil Servant Loan", "Business Loan"], {
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

const provinces = [
  "Northern",
  "Western",
  "Southern",
  "Eastern",
  "Lusaka",
  "Central",
  "North Western",
  "Copperbelt",
  "Muchinga",
  "Luapula",
] as const;
export type Province = (typeof provinces)[number];

export const step1Schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z.number({
    required_error: "Phone number is required",
    invalid_type_error: "Must be a number",
  }),
  dob: z
    .string()
    .refine((val) => isValidMMDDYYYY(val), {
      message: "Please enter a valid date in MM-DD-YYYY format",
    })
    .refine(
      (val) => {
        const [month, day, year] = val.split("-").map(Number);
        const birthDate = new Date(year, month - 1, day);
        const minAgeDate = new Date();
        minAgeDate.setFullYear(minAgeDate.getFullYear() - 18);
        return birthDate <= minAgeDate;
      },
      {
        message: "You must be at least 18 years old",
      }
    )
    .refine(
      (val) => {
        const [month, day, year] = val.split("-").map(Number);
        return new Date(year, month - 1, day) >= new Date(1910, 0, 1);
      },
      {
        message: "Please enter a valid date (after 01-01-1910)",
      }
    )
    .transform((val) => {
      // Store in MM-DD-YYYY format
      return val;
    }),
  gender: z.enum(["male", "female", "other", "prefer-not-to-say"], {
    required_error: "Gender is required",
    invalid_type_error: "Please select a valid gender",
  }),
  nrc: z
    .string({
      required_error: "NRC number is required",
    })
    .regex(/^[0-9]{6}\/[0-9]{2}\/[0-9]{1}$/, {
      message: "NRC must be in format 123456/78/9",
    }),
  address: z
    .string({
      required_error: "Address is required",
    })
    .min(5, {
      message: "Address must be at least 5 characters",
    })
    .max(100, {
      message: "Address must be less than 100 characters",
    }),
  town: z
    .string({
      required_error: "Town is required",
    })
    .min(2, {
      message: "Town name must be at least 2 characters",
    })
    .max(50, {
      message: "Town name must be less than 50 characters",
    }),
  province: z.enum(provinces, {
    required_error: "Province is required",
  }),
});

export const step2Schema = z.object({
  jobTitle: z.string({ message: "Title name must be at least 3 characters" }),
  ministry: z.string({ message: "Title name must be at least 5 characters" }),
  department: z.string({ message: "Title name must be at least 3 characters" }),
  employeeNumber: z.string({
    message: "Title name must be at least 3 characters",
  }),
  hrmFirstName: z.string().min(2, "First name must be at least 2 characters"),
  hrmLastName: z.string().min(2, "Last name must be at least 2 characters"),
  hrmPhoneNumber: z.number({
    required_error: "Phone number is required",
    invalid_type_error: "Must be a number",
  }),
  supervisorFirstName: z
    .string()
    .min(2, "First name must be at least 2 characters"),
  supervisorLastName: z
    .string()
    .min(2, "Last name must be at least 2 characters"),
  supervisorPhoneNumber: z.number({
    required_error: "Phone number is required",
    invalid_type_error: "Must be a number",
  }),
});

const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/msword", // .doc
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const step3Schema = z.object({
  kinFirstName: z.string().min(2, "First name must be at least 2 characters"),
  kinLastName: z.string().min(2, "Last name must be at least 2 characters"),
  kinPhoneNumber: z.number({
    required_error: "Phone number is required",
    invalid_type_error: "Must be a number",
  }),
  relationship: z
    .string({
      required_error: "Relationship is required",
    })
    .min(3, "Relationship must be at least 3 characters"),
  kinAddress: z.string().min(5, "Address must be at least 5 characters"),
});

export const step4Schema = z.object({
  idCopy: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF, JPEG, PNG, or Word files are accepted",
    })
    .nullable(),

  proofOfIncome: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF, JPEG, PNG, or Word files are accepted",
    })
    .nullable(),

  bankStatement: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF, JPEG, PNG, or Word files are accepted",
    })
    .nullable(),
  photo: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF, JPEG, PNG, or Word files are accepted",
    })
    .nullable(),
  preApprovalDoc: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF, JPEG, PNG, or Word files are accepted",
    })
    .nullable(),
  tpin: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF, JPEG, PNG, or Word files are accepted",
    })
    .nullable(),
  consent: z.boolean({
    message: "To proceed, please agree to the T's and C's",
  }),
});

export const SmeInfoSchema = z.object({
  businessType: z
    .string()
    .min(3, "Business type must be at least 2 characters"),
  businessName: z
    .string()
    .min(2, "Business name must be at least 2 characters"),
  businessAddress: z
    .string({
      required_error: "Address is required",
    })
    .min(5, {
      message: "Address must be at least 5 characters",
    })
    .max(100, {
      message: "Address must be less than 100 characters",
    }),
  businessTown: z
    .string({
      required_error: "Town is required",
    })
    .min(2, {
      message: "Town name must be at least 2 characters",
    })
    .max(50, {
      message: "Town name must be less than 50 characters",
    }),
  businessProvince: z.enum(provinces, {
    required_error: "Province is required",
  }),
});

export const smeDocschema = z.object({
  pacra: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF, JPEG, PNG, or Word files are accepted",
    })
    .nullable(),

  taxClearance: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF, JPEG, PNG, or Word files are accepted",
    })
    .nullable(),

  bankStatement: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF, JPEG, PNG, or Word files are accepted",
    })
    .nullable(),

  tpin: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF, JPEG, PNG, or Word files are accepted",
    })
    .nullable(),
  consent: z.boolean({
    message: "To proceed, please agree to the T's and C's",
  }),
  photo: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF, JPEG, PNG, or Word files are accepted",
    })
    .nullable(),
  idCopy: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF, JPEG, PNG, or Word files are accepted",
    })
    .nullable(),
});

export const CombinedKycSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema);

export const CombinedKybSchema = step1Schema
  .merge(SmeInfoSchema)
  .merge(smeDocschema);
export type CombinedKybType = z.infer<typeof CombinedKybSchema>;
export type CombinedCheckoutType = z.infer<typeof CombinedKycSchema>;
export type LoanDetsType = z.infer<typeof LoanDetailsSchema>;
