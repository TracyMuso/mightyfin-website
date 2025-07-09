"use client";

import NextButton from "../steppedForm/nextButton";
import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import { FormSelect } from "@/components/LoanApplication/ui/form-select";
import { useMultiStepForm } from "@/hooks/use-kyb-stepped-form";
import { CombinedKybSchema } from "@/validators/application-flow.validator";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import PrevButton from "../steppedForm/prevButton";
import { provinces } from "@/constants/data/loan";

const Step2 = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedKybSchema>>();

  const { nextStep } = useMultiStepForm();

  const handleStepSubmit = async () => {
    nextStep();
  };

  return (
    <div className="pt-4 pb-8">
      <div className="grid sm:grid-cols-2 sm:gap-3">
        <div>
          <label className="font-semibold">Business Name</label>
          <Input {...register("businessName")} placeholder="Jerry Boutique" />
          <ErrorMessage message={errors.businessName?.message} />
        </div>
        <div>
          <label className="font-semibold sm:text-[16px] text-sm">
            Business Type
          </label>
          <Input
            {...register("businessType")}
            placeholder="Clothes and Shoes"
          />
          <ErrorMessage message={errors.businessType?.message} />
        </div>
        <div>
          <label className="font-semibold">Address</label>
          <Input
            {...register("businessAddress")}
            placeholder="Plot 46, Chikuni road, Kabwata"
          />
          <ErrorMessage message={errors.businessAddress?.message} />
        </div>
        <div>
          <label className="font-semibold">Town</label>
          <Input {...register("businessTown")} placeholder="Kitwe" />
          <ErrorMessage message={errors.businessTown?.message} />
        </div>
        <div className="space-y-2">
          <FormSelect
            name="businessProvince"
            label="Province"
            control={control}
            errors={errors.businessProvince}
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

export default Step2;
