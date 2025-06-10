"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { CombinedCheckoutSchema } from "@/validators/checkout-flow.validator";
import NextButton from "../steppedForm/nextButton";
import ErrorMessage from "@/components/ui/error-message";
import PrevButton from "../steppedForm/prevButton";

const Step3 = () => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedCheckoutSchema>>();

  const handleStepSubmit = async () => {
    return;
  };

  const { loanAmount, loanTermMonths, loanType } = getValues();

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h3>Loan Summary</h3>
        <span>
          <p>
            <strong>Loan Type: </strong> {loanType}
          </p>
          <p>
            <strong>Loan Term: </strong> {loanTermMonths}
          </p>
          <p>
            <strong>Loan Amount: </strong> {loanAmount}
          </p>
          <p>
            <strong>Monthly Deduction: </strong> {loanAmount}
          </p>
          <p>
            <strong>Due Date: </strong> {loanAmount}
          </p>
        </span>
      </div>
      <div>
        <Input type="checkbox" {...register("consent")} placeholder="Consent" />
        <ErrorMessage message={errors.consent?.message} />
      </div>
      <div className="w-full flex items-center justify-between">
        <PrevButton />
        <NextButton onClick={handleStepSubmit} />
      </div>
    </div>
  );
};

export default Step3;
