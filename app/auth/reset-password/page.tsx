/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { passwordRecoverySchema } from "@/validators/auth.validator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/button";
import ErrorMessage from "@/components/ui/error-message";
import Image from "next/image";
import styles from "@/styles/userAuth.module.css";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

type FormData = z.infer<typeof passwordRecoverySchema>;

enum ResetStep {
  IDENTIFY_USER = "IDENTIFY_USER",
  OTP_VERIFICATION = "OTP_VERIFICATION",
  PASSWORD_RESET = "PASSWORD_RESET",
}

enum VerificationMethod {
  EMAIL = "EMAIL",
  PHONE = "PHONE",
}

export default function PasswordReset() {
  const router = useRouter();
  const [step, setStep] = useState<ResetStep>(ResetStep.IDENTIFY_USER);
  const [method, setMethod] = useState<VerificationMethod>(
    VerificationMethod.EMAIL
  );
  const [otpValue, setOtpValue] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [isCheckingUser, setIsCheckingUser] = useState(false);

  const {
    register,
    setError,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(passwordRecoverySchema),
  });

  const email = watch("email");
  const phoneNumber = watch("phoneNumber");

  // Check if user exists in DB
  const checkUserExists = async () => {
    setIsCheckingUser(true);
    try {
      // Simulate API call to check user existence

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock response
      const userExists =
        method === VerificationMethod.EMAIL
          ? email !== "123user@example.com"
          : phoneNumber !== 260988123456;

      if (userExists) {
        setUserExists(true);
        setOtpSent(true);
        setStep(ResetStep.OTP_VERIFICATION);
      } else {
        setError(
          method === VerificationMethod.EMAIL ? "email" : "phoneNumber",
          {
            type: "manual",
            message:
              method === VerificationMethod.EMAIL
                ? "Email not found"
                : "Phone number not found",
          }
        );
      }
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsCheckingUser(false);
    }
  };

  const handleVerifyOtp = () => {
    if (otpValue.length === 6) {
      setStep(ResetStep.PASSWORD_RESET);
    } else {
      setError("root", {
        type: "manual",
        message: "Please enter a valid 6-digit OTP",
      });
    }
  };

  const handleMethodChange = (newMethod: VerificationMethod) => {
    setMethod(newMethod);
    reset({
      [newMethod === VerificationMethod.EMAIL ? "phoneNumber" : "email"]:
        undefined,
      password: "",
      confirmPassword: "",
    });
  };

  // Handle password reset submission
  const onSubmit = (data: FormData) => {
    // In a real app, call your API to reset password
    console.log("Password reset data:", data);
    router.push("/auth/signin"); // Redirect to login after reset
  };

  return (
    <section className="flex px-6 md:px-12 font-Montserrat">
      <div className="flex flex-col justify-center mx-auto lg:w-[50%] w-full max-w-[600px] sm:w-10/12 px-5 md:py-2 py-12">
        <div className="flex flex-col items-center py-3 gap-1">
          <p className="font-bold sm:text-xl text-purple-200 text-center">
            Reset Your Password
          </p>
          <p className="text-sm text-center">
            {step === ResetStep.IDENTIFY_USER &&
              "Enter your email or phone to reset password"}
            {step === ResetStep.OTP_VERIFICATION &&
              "Verify your identity with OTP"}
            {step === ResetStep.PASSWORD_RESET && "Create a new password"}
          </p>
        </div>

        {/* Method Tabs - Only shown in first step */}
        {step === ResetStep.IDENTIFY_USER && (
          <div className="flex justify-center gap-8 border-b border-gray-200 mb-4">
            <button
              type="button"
              className={`py-2 px-4 font-medium text-sm ${
                method === VerificationMethod.EMAIL
                  ? "border-b-2 border-purple-800 text-purple-800"
                  : "text-gray-500"
              }`}
              onClick={() => {
                handleMethodChange(VerificationMethod.EMAIL);
              }}
            >
              Email
            </button>
            <button
              type="button"
              className={`py-2 px-4 font-medium text-sm ${
                method === VerificationMethod.PHONE
                  ? "border-b-2 border-purple-800 text-purple-800"
                  : "text-gray-500"
              }`}
              onClick={() => {
                handleMethodChange(VerificationMethod.PHONE);
              }}
            >
              Phone
            </button>
          </div>
        )}

        {/* Step 1: Identify User */}
        {step === ResetStep.IDENTIFY_USER && (
          <div className="flex flex-col gap-4">
            {method === VerificationMethod.EMAIL ? (
              <div>
                <label className="font-semibold sm:text-[16px] text-sm">
                  Email
                </label>
                <Input
                  type="email"
                  {...register("email")}
                  placeholder="abc@mail.com"
                />
                <ErrorMessage message={errors.email?.message} />
              </div>
            ) : (
              <div>
                <label className="font-semibold sm:text-[16px] text-sm">
                  Phone Number
                </label>
                <Input
                  className="loan-number-input"
                  type="number"
                  inputMode="numeric"
                  {...register("phoneNumber", {
                    valueAsNumber: true, // Convert to number automatically
                    validate: (value) =>
                      (value !== null &&
                        value !== undefined &&
                        !isNaN(value)) ||
                      "Please enter a valid number",
                  })}
                  placeholder="0978236744"
                />
                <ErrorMessage message={errors.phoneNumber?.message} />
              </div>
            )}

            <Button
              onClick={checkUserExists}
              disabled={
                isCheckingUser ||
                (method === VerificationMethod.EMAIL ? !email : !phoneNumber)
              }
              className="w-full py-2 mt-4 text-center bg-purple-800 hover:bg-purple-700 rounded text-white font-bold"
            >
              {isCheckingUser ? "Checking..." : "Continue"}
            </Button>
          </div>
        )}

        {/* Step 2: OTP Verification */}
        {step === ResetStep.OTP_VERIFICATION && (
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <p className="text-sm mb-2">
                We sent a 6-digit code to your{" "}
                {method === VerificationMethod.EMAIL ? "email" : "phone"}
              </p>
              <p className="font-semibold">
                {method === VerificationMethod.EMAIL ? email : phoneNumber}
              </p>
            </div>

            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                value={otpValue}
                onChange={(value) => setOtpValue(value)}
              >
                <InputOTPGroup>
                  {[...Array(6)].map((_, index) => (
                    <InputOTPSlot key={index} index={index} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            <ErrorMessage message={errors.root?.message} />

            <div className="flex justify-between mt-4">
              <Button
                variant="ghost"
                onClick={() => {
                  setOtpValue("");
                  setStep(ResetStep.IDENTIFY_USER);
                }}
              >
                &larr; Back
              </Button>
              <Button
                onClick={handleVerifyOtp}
                disabled={otpValue.length !== 6 || isSubmitting}
                className="py-2 px-6 bg-purple-800 hover:bg-purple-700 text-[13px] sm:text-[15px] rounded text-white font-bold"
              >
                Verify OTP
              </Button>
            </div>

            <div className="text-center mt-4">
              <p className="text-sm">
                Didn`t receive the code?{" "}
                <Button
                  variant="ghost"
                  onClick={checkUserExists}
                  className="text-purple-800 p-0 h-auto"
                >
                  Resend
                </Button>
              </p>
            </div>
          </div>
        )}

        {/* Step 3: Password Reset */}
        {step === ResetStep.PASSWORD_RESET && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="font-semibold sm:text-[16px] text-sm">
                New Password
              </label>
              <Input
                type="password"
                {...register("password")}
                placeholder="Enter new password"
              />
              <ErrorMessage message={errors.password?.message} />
            </div>

            <div>
              <label className="font-semibold sm:text-[16px] text-sm">
                Confirm Password
              </label>
              <Input
                type="password"
                {...register("confirmPassword")}
                placeholder="Confirm new password"
              />
              <ErrorMessage message={errors.confirmPassword?.message} />
            </div>

            <div className="flex justify-between mt-4">
              <Button
                variant="ghost"
                onClick={() => setStep(ResetStep.OTP_VERIFICATION)}
              >
                &larr; Back
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="py-2 px-6 bg-purple-800 hover:bg-purple-700 rounded text-[13px] sm:text-[15px] text-white font-bold"
              >
                {isSubmitting ? "Resetting..." : "Reset Password"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
