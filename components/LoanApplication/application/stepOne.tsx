"use client";

import NextButton from "../steppedForm/nextButton";
import { Input } from "@/components/ui/input";
import ErrorMessage from "@/components/ui/error-message";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { useFormContext } from "react-hook-form";
import { format, addMonths } from "date-fns";
import { z } from "zod";
import { CombinedCheckoutSchema } from "@/validators/checkout-flow.validator";
import PrevButton from "../steppedForm/prevButton";

const Step1 = () => {
  const {
    register,
    getValues,
    // setError,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedCheckoutSchema>>();

  const { nextStep } = useMultiStepForm();

  const handleStepSubmit = async () => {
    // move to the next step
    nextStep();
  };

  const { loanAmount, loanTermMonths } = getValues();

  const getNextRepaymentDate = (): string => {
    return format(addMonths(new Date(), 1), "yyyy-MM-dd");
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="space-y-2">
        <fieldset>
          <legend className="font-semibold">Loan Type</legend>
          <div className="flex flex-col items-start gap-4 mt-2">
            <div className="flex items-center">
              <input
                id="personal-loan"
                type="radio"
                value="personal"
                {...register("loanType")}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="personal-loan" className="ml-2">
                Civil Servant Loan
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="business-loan"
                type="radio"
                value="business"
                {...register("loanType")}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="business-loan" className="ml-2">
                Business Loan
              </label>
            </div>
          </div>
        </fieldset>
        <ErrorMessage message={errors.loanType?.message} />
      </div>
      <div>
        <label className="font-semibold">Amount</label>
        <Input
          className="loan-number-input"
          inputMode="numeric"
          type="number"
          {...register("loanAmount", {
            valueAsNumber: true, // Convert to number automatically
            validate: (value) => !isNaN(value) || "Please enter a valid number",
          })}
          placeholder="10000"
        />
        <ErrorMessage message={errors.loanAmount?.message} />
      </div>
      <div>
        <label className="font-semibold">Duration (up to 9 months)</label>
        <Input
          min={1}
          max={9}
          inputMode="numeric"
          type="number"
          {...register("loanTermMonths", {
            valueAsNumber: true, // Convert to number automatically
            validate: (value) => !isNaN(value) || "Please enter a valid number",
          })}
          placeholder="1"
        />
        <ErrorMessage message={errors.loanTermMonths?.message} />
      </div>
      <div className="flex items-center w-full justify-between">
        <div>
          <span className="text-purple-700">Payback amount</span>
          <p>{loanAmount}</p>
        </div>
        <div>
          <span className="text-purple-700">Monthly deduction</span>
          <p>{loanAmount}</p>
        </div>
        <div>
          <span className="text-purple-700">Next Payment date</span>
          <p>{getNextRepaymentDate()}</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <PrevButton />
        <NextButton onClick={handleStepSubmit} />
      </div>
    </div>
  );
};

export default Step1;
