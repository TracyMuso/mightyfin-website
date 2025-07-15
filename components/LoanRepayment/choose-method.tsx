/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../button";
import React, { useState, useEffect } from "react";
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
    handleSubmit,
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
    "select-method" | "payment-details" | "confirmation"
  >("select-method");
  const [chosenMethod, setChosenMethod] = useState("mobile money");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "processing" | "success" | "failed"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleStepSubmit = handleSubmit((data) => {
    // This will only be called if validation passes
    const { paymentMethod: method, amount } = data;

    setLoanRepayment({
      amount: amount,
      paymentMethod: method,
    });

    setChosenMethod(method);
    setCurrentStep("payment-details");
  });

  const handleBackToMethodSelection = () => {
    setCurrentStep("select-method");
  };

  const [newBalance, setNewBalance] = useState<number>(0);

  const watchedAmount = watch("amount");

  const calculateBalanceAfterPay = (amount: number, currentbalance: number) => {
    const balanceAfterPay = currentbalance - watchedAmount;
    setNewBalance(parseFloat(balanceAfterPay.toFixed(2)));
  };

  useEffect(() => {
    if (watchedAmount) {
      calculateBalanceAfterPay(watchedAmount, 10000);
    }
  }, [watchedAmount]);

  const handlePaymentSubmit = handleSubmit(async (data) => {
    // This will only be called if validation passes
    const { amount } = data;

    setCurrentStep("confirmation");
    setIsProcessing(true);
    setPaymentStatus("processing");

    // Simulate API call with timeout
    setTimeout(() => {
      const shouldSucceed = Math.random() > 0.1;

      if (shouldSucceed) {
        setPaymentStatus("success");
      } else {
        setPaymentStatus("failed");
        // Method-specific error messages for testing
        let errorMsg = "Payment failed. Please try again.";

        switch (chosenMethod) {
          case "mobile money":
            errorMsg =
              "Mobile money transaction timed out. Please check your mobile device.";
            break;
          case "bank transfer":
            errorMsg =
              "Bank transfer failed. Insufficient funds or network error.";
            break;
          case "card":
            errorMsg =
              "Card declined. Please check your card details or try another card.";
            break;
        }

        setErrorMessage(errorMsg);
      }
      setIsProcessing(false);
    }, 5000);
  });

  const renderConfirmationMessage = () => {
    switch (chosenMethod) {
      case "mobile money":
        return (
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Image
              src={"/Icons/Time-past.png"}
              width={40}
              height={40}
              alt="clock"
            />
            <h3 className="md:text-lg font-semibold py-4 text-purple-500">
              Do Not Leave This Page
            </h3>
            <p className="text-center pb-6">
              Please enter your mobile money PIN on your phone to complete the
              payment.
            </p>
            {isProcessing && (
              <div className="animate-pulse text-purple-600">
                Processing your payment...
              </div>
            )}
          </div>
        );
      case "bank transfer":
        return (
          <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
            <Image
              src={"/Icons/Time-past.png"}
              width={40}
              height={40}
              alt="clock"
            />
            <h3 className="md:text-lg font-semibold pb-4 text-purple-500">
              Do Not Leave This Page
            </h3>
            <p className="text-center pb-6">
              Please enter the OTP you`ll receive shortly to complete the
              transfer.
            </p>
            {isProcessing && (
              <div className="animate-pulse text-purple-600">
                Processing your transfer...
              </div>
            )}
          </div>
        );
      case "card":
        return (
          <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
            <Image
              src={"/Icons/Time-past.png"}
              width={40}
              height={40}
              alt="clock"
            />
            <h3 className="md:text-lg font-semibold pb-4 text-purple-500">
              Do Not Leave This Page
            </h3>
            <p className="text-center pb-6">
              Please enter your card PIN to complete the transaction.
            </p>
            {isProcessing && (
              <div className="animate-pulse text-purple-600">
                Processing your card payment...
              </div>
            )}
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
            <Image
              src={"/Icons/Time-past.png"}
              width={40}
              height={40}
              alt="clock"
            />
            <h3 className="md:text-lg font-semibold pb-4 text-purple-500">
              Do Not Leave This Page
            </h3>
            <p className="text-center pb-6">
              Please wait while we process your payment.
            </p>
            {isProcessing && (
              <div className="animate-pulse text-purple-600">
                Processing your payment...
              </div>
            )}
          </div>
        );
    }
  };

  const renderPaymentStatus = () => {
    switch (paymentStatus) {
      case "success":
        return (
          <div className="p-6 bg-gray-50 flex flex-col items-center rounded-lg text-center">
            <Image
              src={"/Icons/Checkmark.png"}
              width={50}
              height={50}
              alt="checkmark"
            />
            <h3 className="text-lg font-semibold text-green-600 pb-2">
              Payment Successful!
            </h3>
            <p className="text-purple-600 pb-4">
              Your payment of k{watchedAmount} via {chosenMethod} has been
              processed.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                className=""
                onClick={() => {
                  setPaymentStatus("idle");
                  setCurrentStep("select-method");
                }}
                text="Make Another Payment"
              />
              <Button
                variant="secondary"
                type="submit"
                text="Exit"
                className="text-white font-semibold"
              />
            </div>
          </div>
        );

      case "failed":
        return (
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <span className="text-xl text-center text-red-500 font-bold px-[10px] pb-1 size-4 rounded-[50%] border border-red-600">
              x
            </span>
            <h3 className="text-lg font-semibold text-red-600 py-2">
              Payment Failed
            </h3>
            <p className="text-purple-600 pb-4">
              {errorMessage || "Payment could not be processed."}
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => {
                  setPaymentStatus("idle");
                  setCurrentStep("select-method");
                }}
                text="Change Method"
              />
              <Button
                variant="secondary"
                type="submit"
                text="Exit"
                className="text-white font-semibold"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderPaymentStep = () => {
    if (paymentStatus === "success" || paymentStatus === "failed") {
      return renderPaymentStatus();
    }

    if (currentStep === "confirmation") {
      return renderConfirmationMessage();
    }

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
                    disabled
                    value="bank transfer"
                    {...register("paymentMethod")}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-600"
                  />
                  <label
                    htmlFor="bank-transfer"
                    className="pl-2 text-gray-400 sm:text-[16px] text-[13px]"
                  >
                    Bank Transfer (Coming Soon)
                  </label>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 pt-2">
                <div className="flex items-center">
                  <input
                    id="card"
                    type="radio"
                    disabled
                    value="card"
                    {...register("paymentMethod")}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-600"
                  />
                  <label
                    htmlFor="card"
                    className="pl-2 text-gray-400 sm:text-[16px] text-[13px]"
                  >
                    Card (Coming Soon)
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
          <div className="w-full flex gap-5 items-center justify-center">
            <Button
              variant="primary"
              text="proceed"
              onClick={handleStepSubmit}
            />
            <Button
              variant="secondary"
              type="submit"
              text="Exit"
              className="text-white font-semibold"
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
              onSubmit={handlePaymentSubmit}
            />
          );
        case "bank transfer":
          return (
            <BankTransfer
              amount={watchedAmount}
              onBack={handleBackToMethodSelection}
              onSubmit={handlePaymentSubmit}
            />
          );
        case "card":
          return (
            <Card
              amount={watchedAmount}
              onBack={handleBackToMethodSelection}
              onSubmit={handlePaymentSubmit}
            />
          );
        case "confirmation":
          return renderConfirmationMessage();
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-1 px-12 py-8 lg:w-[700px] w-full">
      {renderPaymentStep()}
    </div>
  );
};

export default ChoosePaymentMethod;
