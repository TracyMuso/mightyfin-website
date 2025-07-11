/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../button";
import { useState, useEffect } from "react";
import ErrorMessage from "@/components/ui/error-message";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "@mantine/hooks";
import MobileMoney from "./methods/mobile-money";
import BankTransfer from "./methods/bank-transfer";
import Card from "./methods/card";
import {
  MethodSchema,
  MethodSchemaType,
} from "@/validators/loan-repayment-flow.validator";

const ChoosePaymentMethod = () => {
  const {
    register,
    getValues,
    watch,
    formState: { errors },
  } = useForm<MethodSchemaType>({
    resolver: zodResolver(MethodSchema),
    defaultValues: {
      amount: 10,
      paymentMethod: "mobile money",
    },
  });

  const [loanRepayment, setLoanRepayment] = useLocalStorage<MethodSchemaType>({
    key: "loan repayment",
    defaultValue: {
      amount: 0,
      paymentMethod: "mobile money",
    },
  });

  const [currentStep, setCurrentStep] = useState<
    "select-method" | "payment-details"
  >("select-method");
  const [chosenMethod, setChosenMethod] = useState("mobile money");

  const router = useRouter();

  const handleStepSubmit = async () => {
    const method = getValues("paymentMethod");
    const amount = getValues("amount");

    setLoanRepayment({
      amount: amount,
      paymentMethod: method,
    });

    if (!amount) {
      console.error("Please add amount");
      return;
    }

    setChosenMethod(method);
    setCurrentStep("payment-details");
  };

  const handleBackToMethodSelection = () => {
    setCurrentStep("select-method");
  };

  const [newBalance, setNewBalance] = useState<number>(0);

  const watchedAmount = watch("amount");
  const watchedMethod = watch("paymentMethod");

  const calculateBalanceAfterPay = (amount: number, currentbalance: number) => {
    const balanceAfterPay = currentbalance - watchedAmount;
    setNewBalance(parseFloat(balanceAfterPay.toFixed(2)));
  };

  useEffect(() => {
    if (watchedAmount) {
      calculateBalanceAfterPay(watchedAmount, 10000);
    }
  }, [watchedAmount]);

  // Render the appropriate component based on current step and method
  const renderPaymentStep = () => {
    if (currentStep === "select-method") {
      return (
        <>
          <div className="space-y-2">
            <fieldset>
              <legend className="font-semibold self-center">
                Choose Payment Method
              </legend>
              <span className="sm:py-4 font-light py-2 text-sm sm:text-base">
                Please visit our offices to pay with cash
              </span>
              <div className="flex flex-col items-start gap-3 pt-2">
                <div className="flex items-center">
                  <input
                    id="mobile-money"
                    type="radio"
                    value="mobile money"
                    {...register("paymentMethod")}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-600"
                  />
                  <label
                    htmlFor="mobile-money"
                    className="pl-2 sm:text-[16px] text-[13px]"
                  >
                    Mobile money
                  </label>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 pt-2">
                <div className="flex items-center">
                  <input
                    id="bank-transfer"
                    type="radio"
                    value="bank transfer"
                    {...register("paymentMethod")}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-600"
                  />
                  <label
                    htmlFor="bank-transfer"
                    className="pl-2 sm:text-[16px] text-[13px]"
                  >
                    Bank Transfer
                  </label>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 pt-2">
                <div className="flex items-center">
                  <input
                    id="card"
                    type="radio"
                    value="card"
                    {...register("paymentMethod")}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-600"
                  />
                  <label
                    htmlFor="card"
                    className="pl-2 sm:text-[16px] text-[13px]"
                  >
                    Card
                  </label>
                </div>
              </div>
            </fieldset>
            <ErrorMessage message={errors.paymentMethod?.message} />
          </div>
          <div>
            <label className="font-semibold">Amount</label>
            <Input
              className="loan-number-input"
              inputMode="numeric"
              type="number"
              {...register("amount", {
                valueAsNumber: true,
                validate: (value) =>
                  !isNaN(value) || "Please enter a valid number",
              })}
              placeholder="10"
            />
            <ErrorMessage message={errors.amount?.message} />
          </div>
          <div className="flex sm:flex-row flex-col items-start justify-between w-full gap-2">
            <div className="flex flex-row sm:flex-col justify-between w-full sm:w-auto">
              <span className="text-purple-700 sm:text-[17px] text-sm">
                Current Balance
              </span>
              <p className="sm:text-[15px] text-[12px]">10000</p>
            </div>
            <div className="flex flex-row sm:flex-col justify-between w-full sm:w-auto">
              <span className="text-purple-700 sm:text-[17px] text-sm">
                Balance After pay
              </span>
              <p className="sm:text-[15px] text-[12px]">{newBalance}</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <Button
              variant="secondary"
              text="proceed"
              onClick={handleStepSubmit}
            />
          </div>
        </>
      );
    } else if (currentStep === "payment-details") {
      switch (chosenMethod) {
        case "mobile money":
          return (
            <MobileMoney
              amount={watchedAmount}
              onBack={handleBackToMethodSelection}
            />
          );
        case "bank transfer":
          return (
            <BankTransfer
              amount={watchedAmount}
              onBack={handleBackToMethodSelection}
            />
          );
        case "card":
          return (
            <Card amount={watchedAmount} onBack={handleBackToMethodSelection} />
          );
        default:
          return (
            <MobileMoney
              amount={watchedAmount}
              onBack={handleBackToMethodSelection}
            />
          );
      }
    }
  };

  return (
    <div className="flex flex-col gap-1 px-12 py-8 lg:w-[700px] w-full">
      {renderPaymentStep()}
    </div>
  );
};

export default ChoosePaymentMethod;
