/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import ErrorMessage from "@/components/ui/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  MobileMoneyMethodType,
  mobileMoneyStep1Schema,
} from "@/validators/loan-repayment-flow.validator";

interface Props {
  amount: number;
  onBack: () => void;
  onSubmit: () => void;
}

const MobileMoney = ({ amount, onBack, onSubmit }: Props) => {
  const {
    register,
    watch,
    setError,
    formState: { errors },
  } = useForm<MobileMoneyMethodType>({
    resolver: zodResolver(mobileMoneyStep1Schema),
    defaultValues: {
      operator: "airtel",
      saveNumber: false,
      phoneNumber: "",
    },
  });

  const watchedNumber = watch("phoneNumber");
  const regex = /^[0-9]+$/;
  const onPnFocusOut = async () => {
    if (!watchedNumber || !watchedNumber.match(regex)) {
      setError("phoneNumber", {
        type: "manual",
        message: "Please add a number",
      });
      return;
    }
  };

  return (
    <div>
      <h4 className="font-light text-gray-400">
        You are paying <span className="font-bold">K{amount}</span>
      </h4>
      <span className="font-semibold md:text-xl py-1">
        Choose Mobile Wallet
      </span>
      <div className="flex flex-col items-start gap-2 lg:pt-5 pt-3">
        <fieldset className="flex flex-col gap-2">
          <div className="flex items-center">
            <input
              id="airtel-money"
              type="radio"
              value="airtel"
              {...register("operator")}
              className="h-4 w-4 text-purple-600 focus:ring-purple-600"
            />
            <label
              htmlFor="airtel-money"
              className="pl-2 flex gap-1 sm:text-[16px] text-[13px]"
            >
              <Image
                src={"/Icons/airtel.png"}
                width={71}
                height={24}
                alt="airtel logo"
              />
              Airtel money
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="mtn-momo"
              type="radio"
              value="mtn"
              {...register("operator")}
              className="h-4 w-4 text-purple-600 focus:ring-purple-600"
            />
            <label
              htmlFor="mtn-momo"
              className="pl-2 flex gap-1 sm:text-[16px] text-[13px]"
            >
              <Image
                src={"/Icons/mtn.png"}
                width={32}
                height={24}
                alt="mtn logo"
              />
              MTN MoMo
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="zoona"
              type="radio"
              value="zamtel"
              {...register("operator")}
              className="h-4 w-4 text-purple-600 focus:ring-purple-600"
            />
            <label
              htmlFor="zoona"
              className="pl-2 flex gap-1 sm:text-[16px] text-[13px]"
            >
              <Image
                src={"/Icons/zamtel-logo.png"}
                width={25}
                height={25}
                alt="zamtel logo"
              />
              Zoona
            </label>
          </div>
          <ErrorMessage message={errors.operator?.message} />
        </fieldset>
        <div>
          <label className="font-semibold">Number</label>
          <Input
            className="loan-number-input"
            inputMode="numeric"
            placeholder="260"
            {...register("phoneNumber")}
          />
          <ErrorMessage message={errors.phoneNumber?.message} />
        </div>
        <div className="flex items-center">
          <input
            id="payment-number"
            onBlurCapture={onPnFocusOut}
            type="checkbox"
            value="false"
            {...register("saveNumber")}
            className="h-4 w-4 text-purple-600 focus:ring-purple-600"
          />
          <label
            htmlFor="payment-number"
            className="pl-2 sm:text-[16px] text-[13px]"
          >
            Save number as default
          </label>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <Button
          className="bg-yellow-500 text-white hover:bg-yellow-400"
          onClick={onBack}
        >
          Previous
        </Button>
        <Button
          onClick={onSubmit}
          className="bg-purple-500 text-white hover:bg-purple-400"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default MobileMoney;
