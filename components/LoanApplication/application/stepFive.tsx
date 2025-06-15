"use client";

import NextButton from "../steppedForm/nextButton";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { CombinedCheckoutSchema } from "@/validators/application-flow.validator";
import { FileUpload } from "@/components/ui/file-upload";
import { documentFields } from "@/utils/profile-upload-fields";
import ErrorMessage from "@/components/ui/error-message";
import Link from "next/link";

const Step5 = () => {
  const {
    formState: { errors },
    setValue,
    register,
  } = useFormContext<z.infer<typeof CombinedCheckoutSchema>>();

  const SubmitForm = async () => {
    console.log("submitted!");
  };

  const handleFileChange =
    (fieldName: keyof z.infer<typeof CombinedCheckoutSchema>) =>
    (file: File | null) => {
      setValue(fieldName, file);
    };

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Document Uploads</h3>
        <div className="grid grid-cols-2">
          {documentFields.map((field) => (
            <FileUpload
              key={field.name}
              label={field.label}
              name={field.name}
              accept={field.accept}
              error={errors[field.name]?.message as string}
              onChange={handleFileChange(field.name)}
            />
          ))}
        </div>
        {/* Consent Checkbox */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="consent"
              type="checkbox"
              {...register("consent")}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
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
        <ErrorMessage message={errors.consent?.message} />
      </div>

      <NextButton type="submit" onClick={SubmitForm} />
    </div>
  );
};

export default Step5;
