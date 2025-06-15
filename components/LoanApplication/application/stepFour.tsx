"use client";

import NextButton from "../steppedForm/nextButton";
import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { CombinedCheckoutSchema } from "@/validators/application-flow.validator";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import PrevButton from "../steppedForm/prevButton";

const Step4 = () => {
  const {
    register,
    // getValues,
    // setError,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedCheckoutSchema>>();

  const { nextStep } = useMultiStepForm();

  const handleStepSubmit = async () => {
    nextStep();
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="font-semibold">First Name</label>
          <Input {...register("kinFirstName")} placeholder="Simon" />
          <ErrorMessage message={errors.kinFirstName?.message} />
        </div>
        <div>
          <label className="font-semibold">Last Name</label>
          <Input {...register("kinLastName")} placeholder="Mwansa" />
          <ErrorMessage message={errors.kinLastName?.message} />
        </div>
        <div>
          <label className="font-semibold">Phone Number</label>
          <Input
            className="loan-number-input"
            type="number"
            inputMode="numeric"
            {...register("kinPhoneNumber", {
              valueAsNumber: true, // Convert to number automatically
              validate: (value) =>
                !isNaN(value) || "Please enter a valid number",
            })}
            placeholder="0978236744"
          />
          <ErrorMessage message={errors.kinPhoneNumber?.message} />
        </div>
        <div>
          <label className="font-semibold">Relationship</label>
          <Input {...register("relationship")} placeholder="e.g Brother" />
          <ErrorMessage message={errors.relationship?.message} />
        </div>
        <div>
          <label className="font-semibold">Address</label>
          <Input
            {...register("kinAddress")}
            placeholder="e.g Plot 451 Kabwata, Lusaka"
          />
          <ErrorMessage message={errors.kinAddress?.message} />
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <PrevButton />
        <NextButton onClick={handleStepSubmit} />
      </div>
    </div>
  );
};

export default Step4;
