"use client";

import { FormStep } from "@/types/loan";
import Step1 from "./stepOne";
import Step2 from "./stepTwo";
import Step3 from "./stepThree";
import Step4 from "./stepFour";
import Step5 from "./stepFive";
import {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
} from "@/validators/application-flow.validator";
import { UserIcon, HandshakeIcon, CircleDollarSignIcon } from "lucide-react";

export const checkoutSteps: FormStep[] = [
  {
    title: "Fill in Loan Information",
    component: <Step1 />,
    icon: CircleDollarSignIcon,
    position: 1,
    validationSchema: step1Schema,
    fields: ["loanType", "loanTermMonths", "loanAmount"],
  },
  {
    title: "Confirm Personal Details",
    component: <Step2 />,
    icon: UserIcon,
    position: 2,
    validationSchema: step2Schema,
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
    title: "Employment Details",
    component: <Step3 />,
    icon: HandshakeIcon,
    position: 3,
    validationSchema: step3Schema,
    fields: [
      "department",
      "jobTitle",
      "ministry",
      "employeeNumber",
      "hrmFirstName",
      "hrmLastName",
      "hrmPhoneNumber",
      "supervisorFirstName",
      "supervisorLastName",
      "supervisorPhoneNumber",
    ],
  },
  {
    title: "Next of Kin",
    component: <Step4 />,
    icon: HandshakeIcon,
    position: 4,
    validationSchema: step4Schema,
    fields: [
      "kinAddress",
      "kinFirstName",
      "kinLastName",
      "kinPhoneNumber",
      "relationship",
    ],
  },
  {
    title: "Required Documents",
    component: <Step5 />,
    icon: HandshakeIcon,
    position: 5,
    validationSchema: step5Schema,
    fields: [
      "preApprovalDoc",
      "proofOfIncome",
      "bankStatement",
      "idCopy",
      "photo",
      "tpin",
      "consent",
    ],
  },
];
