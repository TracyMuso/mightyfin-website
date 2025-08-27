"use client";

import NextButton from "../steppedForm/nextButton";
import ErrorMessage from "@/components/ui/error-message";
import { Input } from "@/components/ui/input";
import { useMultiStepForm } from "@/hooks/use-kyc-stepped-form";
import { CombinedKycSchema } from "@/validators/application-flow.validator";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import PrevButton from "../steppedForm/prevButton";

const Step2 = () => {
  const {
    register,
    // getValues,
    // setError,
    formState: { errors },
  } = useFormContext<z.infer<typeof CombinedKycSchema>>();

  const { nextStep } = useMultiStepForm();

  const handleStepSubmit = async () => {
    nextStep();
  };

  return (
    <div className="pt-4 pb-8">
      <div className="grid sm:grid-cols-2 sm:gap-3">
        <div>
          <label className="font-semibold">Job Title</label>
          <Input {...register("jobTitle")} placeholder="e.g Accountant" />
          <ErrorMessage message={errors.jobTitle?.message} />
        </div>
        <div>
          <label className="font-semibold">Ministry</label>
          <Input
            {...register("ministry")}
            placeholder="e.g Ministry of Finance"
          />
          <ErrorMessage message={errors.ministry?.message} />
        </div>
        <div>
          <label className="font-semibold">Department</label>
          <Input {...register("department")} placeholder="e.g Finance" />
          <ErrorMessage message={errors.department?.message} />
        </div>
        <div>
          <label className="font-semibold">Employee Number</label>
          <Input {...register("employeeNumber")} placeholder="e.g 10336622" />
          <ErrorMessage message={errors.employeeNumber?.message} />
        </div>
      </div>
      {/* references */}
      <div className="py-4">
        <h2 className="text-center font-semibold text-primary">
          References
        </h2>
        <h3 className="font-semibold py-3">Human Resource Manager</h3>
        <div className="flex sm:flex-row flex-col sm:justify-between sm:flex-wrap md:flex-nowrap">
          <div>
            <label className="font-semibold">First Name</label>
            <Input {...register("hrmFirstName")} placeholder="Simon" />
            <ErrorMessage message={errors.hrmFirstName?.message} />
          </div>
          <div>
            <label className="font-semibold">Last Name</label>
            <Input {...register("hrmLastName")} placeholder="Mwansa" />
            <ErrorMessage message={errors.hrmLastName?.message} />
          </div>
          <div>
            <label className="font-semibold">Phone Number</label>
            <Input
              className="loan-number-input"
              type="number"
              inputMode="numeric"
              {...register("hrmPhoneNumber", {
                valueAsNumber: true, // Convert to number automatically
                validate: (value) =>
                  !isNaN(value) || "Please enter a valid number",
              })}
              placeholder="0978236744"
            />
            <ErrorMessage message={errors.hrmPhoneNumber?.message} />
          </div>
        </div>
        <h3 className="font-semibold py-3">Supervisor</h3>
        <div className="flex sm:flex-row flex-col sm:justify-between sm:flex-wrap md:flex-nowrap">
          <div>
            <label className="font-semibold">First Name</label>
            <Input {...register("supervisorFirstName")} placeholder="Simon" />
            <ErrorMessage message={errors.supervisorFirstName?.message} />
          </div>
          <div>
            <label className="font-semibold">Last Name</label>
            <Input {...register("supervisorLastName")} placeholder="Mwansa" />
            <ErrorMessage message={errors.supervisorLastName?.message} />
          </div>
          <div>
            <label className="font-semibold">Phone Number</label>
            <Input
              className="loan-number-input"
              type="number"
              inputMode="numeric"
              {...register("supervisorPhoneNumber", {
                valueAsNumber: true, // Convert to number automatically
                validate: (value) =>
                  !isNaN(value) || "Please enter a valid number",
              })}
              placeholder="0978236744"
            />
            <ErrorMessage message={errors.supervisorPhoneNumber?.message} />
          </div>
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
