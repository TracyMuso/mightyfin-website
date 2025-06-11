/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import {
  getInterestRate,
  getNextRepaymentDate,
} from "@/hooks/calculate-loan-details";
import { CombinedCheckoutSchema } from "@/validators/checkout-flow.validator";
import NextButton from "../steppedForm/nextButton";
import ErrorMessage from "@/components/ui/error-message";
import PrevButton from "../steppedForm/prevButton";
import Link from "next/link";
import styles from "@/styles/loanApplication.module.css";

const Step3 = () => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedCheckoutSchema>>();

  const handleStepSubmit = async () => {
    console.log(localStorage.getItem("checkout-form"));
    return;
  };

  const { loanAmount, loanTermMonths, loanType } = getValues();

  // const [loanAmount, setLoanAmount] = useState<string>("");
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

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
    if (loanAmount) {
      calculatePayment(loanAmount, loanTermMonths);
    }
  }, [loanAmount, loanTermMonths]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col pt-3">
        <div className="flex flex-col items-center gap-2 pb-6">
          <span className="border-b border-gray-400 p-1 w-2/3 flex justify-center">
            <strong className="pr-2">Loan Type: </strong> {loanType}
          </span>
          <span className="border-b border-gray-400 p-1 w-2/3 flex justify-center">
            <strong className="pr-2">Loan Term: </strong> {loanTermMonths}{" "}
            months
          </span>
          <span className="border-b border-gray-400 p-1 w-2/3 flex justify-center">
            <strong className="pr-2">Loan Amount: </strong> K{loanAmount}
          </span>
          <span className="border-b border-gray-400 p-1 w-2/3 flex justify-center">
            <strong className="pr-2">Total Amount: </strong> K{totalPayment}
          </span>
          <span className="border-b border-gray-400 p-1 w-2/3 flex justify-center">
            <strong className="pr-2">Monthly Deduction: </strong> K
            {monthlyPayment}
          </span>
          <span>
            <strong className="pr-2">Due Date: </strong>{" "}
            {getNextRepaymentDate()}
          </span>
        </div>
      </div>
      <div className="self-center">
        <label className={`${styles.consentContainer} font-light text-sm`}>
          I agree with the{" "}
          <Link className="text-purple-700 text-sm" href={"#"}>
            Terms and Conditions
          </Link>
          <Input type="checkbox" {...register("consent")} />
          <span className={`${styles.checkmark}`}></span>
        </label>
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
