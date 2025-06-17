import { type authInputDataType } from "@/types";

export const signUpDets: authInputDataType[] = [
  {
    label: "First Name",
    placeholder: "Jane",
    htmlFor: "first-name",
    inputType: "text",
    id: "first-name",
  },
  {
    label: "Last Name",
    placeholder: "Mwae",
    htmlFor: "last-name",
    inputType: "text",
    id: "last-name",
  },
  {
    label: "Email Address",
    placeholder: "example@mail.com",
    htmlFor: "email",
    inputType: "email",
    id: "email",
  },
  {
    label: "Phone Number",
    placeholder: "0978123456",
    htmlFor: "phone-number",
    inputType: "numeric",
    id: "phone-number",
  },
  {
    label: "Password",
    placeholder: "",
    htmlFor: "password",
    inputType: "password",
    id: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "",
    htmlFor: "confirm-password",
    inputType: "password",
    id: "confirm-password",
  },
];

export const SignInDets: authInputDataType[] = [
  {
    label: "Email Address",
    placeholder: "example@mail.com",
    htmlFor: "email",
    inputType: "email",
    id: "email",
  },
  {
    label: "Password",
    placeholder: "password",
    htmlFor: "password",
    inputType: "password",
    id: "password",
  },
];
