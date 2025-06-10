"use client";

import { FormStep } from "@/types/loan";
import Step1 from "./stepOne";
import Step2 from "./stepTwo";
import Step3 from "./stepThree";
import {
  step1Schema,
  step2Schema,
  step3Schema,
} from "@/validators/checkout-flow.validator";
import { UserIcon, HandshakeIcon, CircleDollarSignIcon } from "lucide-react";

export const checkoutSteps: FormStep[] = [
  {
    title: "Step 1: Loan Information",
    component: <Step1 />,
    icon: CircleDollarSignIcon,
    position: 1,
    validationSchema: step1Schema,
    fields: ["loanType", "loanTermMonths", "loanAmount"],
  },
  {
    title: "Step 2: Personal Details",
    component: <Step2 />,
    icon: UserIcon,
    position: 2,
    validationSchema: step2Schema,
    fields: ["email", "fullName", "phoneNumber"],
  },
  {
    title: "Step 3: Consent",
    component: <Step3 />,
    icon: HandshakeIcon,
    position: 3,
    validationSchema: step3Schema,
    fields: ["consent"],
  },
];
