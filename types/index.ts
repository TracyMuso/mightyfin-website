import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface HeroPointType {
  title: string;
  text: string;
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  NRCNumber: string;
  gender: "male" | "female";
  employeeNumber: string;
  jobTitle: string;
  department: string;
  ministry: string;
  city: string;
  country: string;
};

export type LoanType = {
  id: string;
  loanType: string;
  amount: string | number;
  duration: string | number;
  totalRepayment: string;
  monthlyRepayment: string;
  nextRepaymentDate: string;
};

export interface PartnershipDataType {
  alt: string;
  url: string;
}

export interface HeroPointType {
  title: string;
  text: string;
}

export interface LoanStepDataType {
  step: number;
  icon: string;
  title: string;
  text: string;
}

export interface BlogDataType {
  title: string;
  content: string;
}

export interface MiniBlogDataType {
  postType: string;
  title: string;
  author: string;
  image: string;
}

export interface BlogCategoriesDataType {
  category: string;
  url: string;
}

export interface NavItem {
  label: string;
  link: string;
  active?: boolean;
  disabled?: boolean;
}

export type inputDataType = {
  label: string;
  placeholder: string;
  htmlFor: string;
  inputType: string;
};

export type authInputDataType = {
  id: string;
  label: string;
  placeholder: string;
  htmlFor: string;
  inputType: string;
};

export type sidebarDataType = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  alt: string;
  title: string;
  onClick: () => void;
};

export interface TransactionTable {
  txnId: string;
  date: string;
  amount: string;
  status: string;
  receipt: string;
}

export interface ProductCardType {
  icon: string;
  title: string;
  text: string;
  productDetails: string;
}

export interface WhyUsCardType {
  title: string;
  icon: string;
  text: string;
}

export type Product = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  ctaPrimary: {
    text: string;
    action: string;
  };
  ctaSecondary: {
    text: string;
    action: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
};

export type CsProduct = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  ctaPrimary: {
    text: string;
    action: string;
  };
  ctaSecondary: {
    text: string;
    action: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
  status?: "active" | "coming-soon" | "beta"; // Optional status flag
};

export interface FormType {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  id: string;
  for: string;
  name: string;
}

export interface AboutFeatureCard {
  icon: string;
  text1: string;
  text2: string;
  title: string;
}

export type StoredFormState = {
  currentStepIndex: number;
  formValues: Record<string, unknown>;
};
