/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "@/components/ui/input";
import ErrorMessage from "@/components/ui/error-message";
import { FieldError, UseFormRegister } from "react-hook-form";

interface FormInputProps {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  errors?: FieldError;
  placeholder?: string;
  type?: string;
  className?: string;
  inputMode?: "numeric" | "text" | "email" | "tel" | "url";
  valueAsNumber?: boolean;
  valueAsDate?: boolean;
  max?: string;
  validate?: (value: any) => boolean | string;
}

export const FormInput = ({
  name,
  label,
  register,
  errors,
  placeholder = "",
  type = "text",
  className = "",
  inputMode,
  valueAsNumber,
  valueAsDate,
  max,
  validate,
}: FormInputProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="font-semibold">{label}</label>
      {/* <Input
        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        {...register(name, {
          valueAsNumber,
          valueAsDate,
          validate,
        })}
        max={max}
      /> */}
      <ErrorMessage message={errors?.message} />
    </div>
  );
};

/* Use as shown Below

<FormInput
  name="address"
  label="Address"
  register={register}
  errors={errors.address}
  placeholder="Plot 46, Chikuni road, Kabwata"
/>

**/
