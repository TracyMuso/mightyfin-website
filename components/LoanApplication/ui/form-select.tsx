/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ErrorMessage from "@/components/ui/error-message";
import { Controller, FieldError } from "react-hook-form";

interface FormSelectProps {
  name: string;
  label: string;
  control: any;
  errors?: FieldError;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

export const FormSelect = ({
  name,
  label,
  control,
  errors,
  options,
  placeholder = "Select an option",
  className = "",
}: FormSelectProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="font-semibold">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <ErrorMessage message={errors?.message} />
    </div>
  );
};
