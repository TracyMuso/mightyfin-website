"use client";

import NextButton from "../steppedForm/nextButton";
import { useEffect, useState } from "react";
import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import { FormSelect } from "../ui/form-select";
import { useMultiStepForm } from "@/hooks/use-kyc-stepped-form";
import { CombinedKycSchema } from "@/validators/application-flow.validator";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import PrevButton from "../steppedForm/prevButton";
import { provinces, genderOptions } from "@/constants/data/loan";

const Step1 = () => {
  const {
    register,
    getValues,
    setError,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedKycSchema>>();

  const { nextStep } = useMultiStepForm();

  const handleStepSubmit = async () => {
    const { email } = getValues();

    if (email === "test2356@test.com") {
      setError("email", {
        type: "manual",
        message:
          "Email already exists in the database. Please use a different email.",
      });
      return;
    }

    nextStep();
  };
  const [localDate, setLocalDate] = useState("");

  // Convert between MM-DD-YYYY and YYYY-MM-DD (for native date input)
  const formatForInput = (mmddyyyy: string) => {
    const [month, day, year] = mmddyyyy.split("-");
    return `${year}-${month}-${day}`; // Convert to YYYY-MM-DD for input[type="date"]
  };

  const formatForStorage = (yyyymmdd: string) => {
    const [year, month, day] = yyyymmdd.split("-");
    return `${month}-${day}-${year}`; // Convert back to MM-DD-YYYY
  };

  // Initialize from form values
  useEffect(() => {
    const dob = watch("dob");
    if (dob) {
      setLocalDate(formatForInput(dob));
    }
  }, []);

  return (
    <div className="pt-4 pb-8">
      <div className="grid sm:grid-cols-2 sm:gap-3">
        <div>
          <label className="font-semibold">First Name</label>
          <Input {...register("firstName")} placeholder="Simon" />
          <ErrorMessage message={errors.firstName?.message} />
        </div>
        <div>
          <label className="font-semibold sm:text-[16px] text-sm">
            Last Name
          </label>
          <Input {...register("lastName")} placeholder="Mwansa" />
          <ErrorMessage message={errors.lastName?.message} />
        </div>
        <div>
          <label className="font-semibold">Email</label>
          <Input
            type="email"
            {...register("email")}
            placeholder="sim@mail.com"
          />
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
              validate: (value) =>
                !isNaN(value) || "Please enter a valid number",
            })}
            placeholder="0978236744"
          />
          <ErrorMessage message={errors.phoneNumber?.message} />
        </div>
        <div className="space-y-2">
          <label className="font-semibold">Date of Birth (MM-DD-YYYY)</label>
          <Input
            type="date"
            value={localDate}
            onChange={(e) => {
              const yyyymmdd = e.target.value;
              setLocalDate(yyyymmdd);
              setValue("dob", formatForStorage(yyyymmdd), {
                shouldValidate: true,
              });
            }}
            max={
              new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                .toISOString()
                .split("T")[0]
            }
          />
          <ErrorMessage message={errors.dob?.message} />
          {localDate && (
            <p className="text-sm text-gray-500">
              Selected: {formatForStorage(localDate)}
            </p>
          )}
        </div>
        <div>
          <label className="font-semibold">NRC number</label>
          <Input type="text" {...register("nrc")} placeholder="123456/78/9" />
          <ErrorMessage message={errors.nrc?.message} />
        </div>
        <FormSelect
          name="gender"
          label="Gender"
          control={control}
          errors={errors.gender}
          options={genderOptions}
          placeholder="Select your gender"
        />
        <div>
          <label className="font-semibold">Address</label>
          <Input
            {...register("address")}
            placeholder="Plot 46, Chikuni road, Kabwata"
          />
          <ErrorMessage message={errors.address?.message} />
        </div>
        <div>
          <label className="font-semibold">Town</label>
          <Input {...register("town")} placeholder="Kitwe" />
          <ErrorMessage message={errors.town?.message} />
        </div>
        <div className="space-y-2">
          <FormSelect
            name="province"
            label="Province"
            control={control}
            errors={errors.province}
            options={provinces}
            placeholder="Select your province"
          />
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
