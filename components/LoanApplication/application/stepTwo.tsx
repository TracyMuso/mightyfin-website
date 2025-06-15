"use client";

import NextButton from "../steppedForm/nextButton";
import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { CombinedCheckoutSchema } from "@/validators/application-flow.validator";
import { useFormContext, Controller } from "react-hook-form";
import { z } from "zod";
import PrevButton from "../steppedForm/prevButton";

const Step2 = () => {
  const {
    register,
    getValues,
    setError,
    control,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedCheckoutSchema>>();

  const { nextStep } = useMultiStepForm();

  const handleStepSubmit = async () => {
    const { email } = getValues();

    if (email === "test@test.com") {
      setError("email", {
        type: "manual",
        message:
          "Email already exists in the database. Please use a different email.",
      });
      return;
    }

    nextStep();
  };

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
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="font-semibold">First Name</label>
          <Input {...register("firstName")} placeholder="Simon" />
          <ErrorMessage message={errors.firstName?.message} />
        </div>
        <div>
          <label className="font-semibold">Last Name</label>
          <Input {...register("lastName")} placeholder="Mwansa" />
          <ErrorMessage message={errors.lastName?.message} />
        </div>
        <div>
          <label className="font-semibold">Email</label>
          <Input
            type="email"
            {...register("email")}
            placeholder="sim@mail.com"
          />
          <ErrorMessage message={errors.email?.message} />
        </div>
        <div>
          <label className="font-semibold">Phone Number</label>
          <Input
            className="loan-number-input"
            type="number"
            inputMode="numeric"
            {...register("phoneNumber", {
              valueAsNumber: true, // Convert to number automatically
              validate: (value) =>
                !isNaN(value) || "Please enter a valid number",
            })}
            placeholder="0978236744"
          />
          <ErrorMessage message={errors.phoneNumber?.message} />
        </div>
        <div className="space-y-2">
          <label className="font-semibold">Date of Birth (DD/MM/YYYY)</label>
          <Input
            type="date"
            {...register("dob", {
              valueAsDate: true,
            })}
            max={
              new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                .toISOString()
                .split("T")[0]
            }
          />
          <ErrorMessage message={errors.dob?.message} />
        </div>
        <div>
          <label className="font-semibold">NRC number</label>
          <Input type="text" {...register("nrc")} placeholder="123456/78/9" />
          <ErrorMessage message={errors.nrc?.message} />
        </div>
        <div className="space-y-2">
          <label className="font-semibold">Gender</label>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="prefer-not-to-say">
                    Prefer not to say
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <ErrorMessage message={errors.gender?.message} />
        </div>
        <div>
          <label className="font-semibold">Address</label>
          <Input
            {...register("address")}
            placeholder="Plot 46, Chikuni road, Kabwata"
          />
          <ErrorMessage message={errors.address?.message} />
        </div>
        <div>
          <label className="font-semibold">Town</label>
          <Input {...register("town")} placeholder="Kitwe" />
          <ErrorMessage message={errors.town?.message} />
        </div>
        <div className="space-y-2">
          <label className="font-semibold">Province</label>
          <Controller
            name="province"
            control={control}
            rules={{ required: "Province is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your province" />
                </SelectTrigger>
                <SelectContent>
                  {provinces.map((province) => (
                    <SelectItem key={province} value={province}>
                      {province}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <ErrorMessage message={errors.province?.message} />
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <PrevButton />
        <NextButton onClick={handleStepSubmit} />
      </div>
    </div>
  );
};

export default Step2;
