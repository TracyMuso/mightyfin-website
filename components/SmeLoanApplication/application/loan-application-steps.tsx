"use client";

import { SmeFormStep } from "@/types/loan";
import Step1 from "./step-one";
import Step2 from "./step-two";
import Step3 from "./step-three";
import {
  step1Schema,
  SmeInfoSchema,
  smeDocschema,
} from "@/validators/application-flow.validator";
import { UserIcon, HandshakeIcon } from "lucide-react";

export const checkoutSteps: SmeFormStep[] = [
  {
    title: "Confirm Directors Details",
    component: <Step1 />,
    icon: UserIcon,
    position: 1,
    validationSchema: step1Schema,
    fields: [
      "email",
      "firstName",
      "lastName",
      "address",
      "town",
      "dob",
      "gender",
      "province",
      "nrc",
      "phoneNumber",
    ],
  },
  {
    title: "Company Details",
    component: <Step2 />,
    icon: HandshakeIcon,
    position: 2,
    validationSchema: SmeInfoSchema,
    fields: [
      "businessName",
      "businessType",
      "businessTown",
      "businessAddress",
      "businessProvince",
    ],
  },
  {
    title: "Required Documents",
    component: <Step3 />,
    icon: HandshakeIcon,
    position: 3,
    validationSchema: smeDocschema,
    fields: ["pacra", "taxClearance", "bankStatement", "tpin", "consent"],
  },
];
