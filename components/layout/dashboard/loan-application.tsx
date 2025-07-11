/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/button";
import { useState, useEffect } from "react";
import ErrorMessage from "@/components/ui/error-message";
import { useForm } from "react-hook-form";
import {
  getInterestRate,
  getNextRepaymentDate,
} from "@/hooks/calculate-loan-details";
import { useLocalStorage } from "@mantine/hooks";
import {
  LoanDetsType,
  LoanDetailsSchema,
} from "@/validators/application-flow.validator";

const LoanApplication = () => {
  const {
    register,
    getValues,
    watch,
    formState: { errors },
  } = useForm<LoanDetsType>({
    resolver: zodResolver(LoanDetailsSchema),
    defaultValues: {
      loanAmount: 10000,
      loanTermMonths: 1,
      loanType: "personal",
    },
  });

  const [loanApplication, setLoanApplication] = useLocalStorage<LoanDetsType>({
    key: "personal-loan-application",
    defaultValue: {
      loanType: "personal",
      loanAmount: 0,
      loanTermMonths: 0,
    },
  });
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  // Watch loanAmount changes in real-time
  const watchedLoanAmount = watch("loanAmount");
  const watchedLoanTerm = watch("loanTermMonths");

  const handleStepSubmit = async () => {
    const loanType = getValues("loanType");
    const loanAmount = getValues("loanAmount");
    const loanTerm = getValues("loanTermMonths");

    setLoanApplication({
      loanType: loanType,
      loanAmount: loanAmount,
      loanTermMonths: loanTerm,
    });

    if (!watchedLoanAmount) {
      console.error("Please add loan amount");
      return;
    }
    if (!isChecked) {
      return;
    }
    console.log("applied");
  };

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
    <form className=" bg-white flex flex-col gap-1 md:px-12 sm:px-6 px-4 py-8 mx-auto sm:mt-6 md:mt-4 mt-16 lg:w-[700px] w-full border rounded-md shadow-md">
      <h3 className="font-semibold py-1 md:text-xl">
        Please fill in the details below
      </h3>
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
      <div className="flex sm:flex-row flex-col gap-2 sm:gap-0 items-start sm:items-center w-full justify-between pb-4">
        <div className="flex flex-row sm:flex-col justify-between w-full sm:w-auto">
          <span className="text-purple-700 sm:text-[17px] text-sm">
            Payback amount
          </span>
          <p className="sm:text-[15px] text-[12px]">{totalPayment}</p>
        </div>
        <div className="flex flex-row sm:flex-col justify-between w-full sm:w-auto">
          <span className="text-purple-700 sm:text-[17px] text-sm">
            Monthly deduction
          </span>
          <p className="sm:text-[15px] text-[12px]">{monthlyPayment}</p>
        </div>
        <div className="flex flex-row sm:flex-col justify-between w-full sm:w-auto">
          <span className="text-purple-700 sm:text-[17px] text-sm">
            Next Payment date
          </span>
          <p className="sm:text-[15px] text-[12px]">{getNextRepaymentDate()}</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="consent"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="consent" className="font-medium text-gray-700">
            <p className="text-gray-500">
              By checking this box, you consent to the{" "}
              <Link className="text-purple-700 text-sm" href={"#"}>
                terms and conditions
              </Link>
            </p>
          </label>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Button
          variant="secondary"
          type="submit"
          text="Submit"
          onClick={handleStepSubmit}
        />
      </div>
    </form>
  );
};

export default LoanApplication;
