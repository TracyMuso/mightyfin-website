/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import NextButton from "../steppedForm/nextButton";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import ErrorMessage from "@/components/ui/error-message";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { useFormContext } from "react-hook-form";
import {
  getInterestRate,
  getNextRepaymentDate,
} from "@/hooks/calculate-loan-details";
import { z } from "zod";
import { CombinedCheckoutSchema } from "@/validators/application-flow.validator";
import PrevButton from "../steppedForm/prevButton";

const Step1 = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedCheckoutSchema>>();

  const { nextStep } = useMultiStepForm();

  const handleStepSubmit = async () => {
    nextStep();
  };

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  // Watch loanAmount changes in real-time
  const watchedLoanAmount = watch("loanAmount");
  const watchedLoanTerm = watch("loanTermMonths");

  const calculatePayment = (amount: number, term: number) => {
    const interestRate = getInterestRate(term);
    const monthlyRate = interestRate / term; // Divide total interest by number of months

    // Simple interest calculation (interest is spread evenly across payments)
    const totalInterestAmount = amount * interestRate;
    const payment = (amount + totalInterestAmount) / term;

    setMonthlyPayment(parseFloat(payment.toFixed(2)));
    setTotalPayment(parseFloat((amount + totalInterestAmount).toFixed(2)));
    setTotalInterest(parseFloat(totalInterestAmount.toFixed(2)));
  };

  useEffect(() => {
    if (watchedLoanAmount) {
      calculatePayment(watchedLoanAmount, watchedLoanTerm);
    }
  }, [watchedLoanAmount, watchedLoanTerm]);

  return (
    <div className="flex flex-col gap-1 pt-4 pb-8">
      <div className="space-y-2">
        <fieldset>
          <legend className="font-semibold">Loan Type</legend>
          <div className="flex flex-col items-start gap-3 pt-2">
            <div className="flex items-center">
              <input
                id="personal-loan"
                type="radio"
                value="personal"
                {...register("loanType")}
                className="h-4 w-4 text-purple-600 focus:ring-purple-600"
              />
              <label
                htmlFor="personal-loan"
                className="pl-2 sm:text-[16px] text-[13px]"
              >
                Civil Servant Loan
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="business-loan"
                type="radio"
                value="business"
                {...register("loanType")}
                className="h-4 w-4 text-purple-600 focus:ring-purple-600"
              />
              <label
                htmlFor="business-loan"
                className="pl-2 sm:text-[16px] text-[13px]"
              >
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
      <div className="flex items-center w-full justify-between pb-4">
        <div>
          <span className="text-purple-700 sm:text-[17px] text-sm">
            Payback amount
          </span>
          <p className="sm:text-[15px] text-[12px]">{totalPayment}</p>
        </div>
        <div>
          <span className="text-purple-700 sm:text-[17px] text-sm">
            Monthly deduction
          </span>
          <p className="sm:text-[15px] text-[12px]">{monthlyPayment}</p>
        </div>
        <div>
          <span className="text-purple-700 sm:text-[17px] text-sm">
            Next Payment date
          </span>
          <p className="sm:text-[15px] text-[12px]">{getNextRepaymentDate()}</p>
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
