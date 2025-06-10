"use client";

import NextButton from "../steppedForm/nextButton";
import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { CombinedCheckoutSchema } from "@/validators/checkout-flow.validator";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import PrevButton from "../steppedForm/prevButton";

const Step2 = () => {
  const {
    register,
    getValues,
    setError,
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

  return (
    <div className="flex flex-col gap-3">
      <div>
        <label className="font-semibold">Email</label>
        <Input type="email" {...register("email")} placeholder="Email" />
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
            validate: (value) => !isNaN(value) || "Please enter a valid number",
          })}
          placeholder=""
        />
        <ErrorMessage message={errors.phoneNumber?.message} />
      </div>
      <div>
        <label className="font-semibold">Full Name</label>
        <Input {...register("fullName")} placeholder="Full Name" />
        <ErrorMessage message={errors.fullName?.message} />
      </div>
      <div className="w-full flex items-center justify-between">
        <PrevButton />
        <NextButton onClick={handleStepSubmit} />
      </div>
    </div>
  );
};

export default Step2;
