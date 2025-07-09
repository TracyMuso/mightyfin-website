"use client";

import { FormStep } from "@/types/loan";
import Step1 from "./stepOne";
import Step2 from "./stepTwo";
import Step3 from "./stepThree";
import Step4 from "./stepFour";
import {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
} from "@/validators/application-flow.validator";
import { UserIcon, HandshakeIcon } from "lucide-react";

export const checkoutSteps: FormStep[] = [
  {
    title: "Confirm Personal Details",
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
    title: "Employment Details",
    component: <Step2 />,
    icon: HandshakeIcon,
    position: 2,
    validationSchema: step2Schema,
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
    component: <Step3 />,
    icon: HandshakeIcon,
    position: 3,
    validationSchema: step3Schema,
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
    component: <Step4 />,
    icon: HandshakeIcon,
    position: 4,
    validationSchema: step4Schema,
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
