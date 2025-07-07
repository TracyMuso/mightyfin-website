"use client";

import NextButton from "../steppedForm/nextButton";
import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import { FormSelect } from "../ui/form-select";
import { useMultiStepForm } from "@/hooks/use-stepped-form";
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
          <label className="font-semibold">Date of Birth (DD/MM/YYYY)</label>
          <Input
            type="date"
            {...register("dob", {
              valueAsDate: true,
            })}
            max={
              new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                .toISOString()
                .split("T")[0]
            }
          />
          <ErrorMessage message={errors.dob?.message} />
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
