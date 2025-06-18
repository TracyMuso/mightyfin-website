/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@mantine/hooks";
import { signUpSchema } from "@/validators/auth.validator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/button";
import ErrorMessage from "@/components/ui/error-message";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/userAuth.module.css";

type FormData = z.infer<typeof signUpSchema>;

export default function Signup() {
  const router = useRouter();
  const [users, setUsers] = useLocalStorage<
    Omit<FormData, "confirmPassword">[]
  >({
    key: "mighty-finance-users",
    defaultValue: [],
  });

  const {
    register,
    setError,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  const password = watch("password");
  const email = watch("email");

  const onSubmit = (data: FormData) => {
    // Remove confirmPassword before saving
    const { confirmPassword, ...userData } = data;

    if (email === "test@test.com") {
      setError("email", {
        type: "manual",
        message:
          "Email already exists in the database. Please use a different email.",
      });
      return;
    }

    // Save new user
    setUsers([...users, data]);

    // Store current user session
    localStorage.setItem("mighty-finance-current-user", JSON.stringify(data));

    // Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <section className="flex p-0 lg:h-[100vh] font-Montserrat">
      <div className={`${styles.leftCont} relative hidden md:block`}>
        <div className="text-left absolute top-[34px] left-[35px]">
          <Image
            src={"/Icons/mf-logo.png"}
            width={89}
            height={59}
            alt="mighty finance logo"
          />
          <p className="text-white">Financial inclusion for all</p>
        </div>
        <div className="absolute top-[270px] left-7">
          <div
            className={`${styles.phoneNotification} flex justify-center rounded-md w-[207px] h-[70px] py-2 px-3 text-sm text-white`}
          >
            <p className="leading-6">
              Look out for the reminders so you pay on time
            </p>
          </div>
          <Image
            src={"/Icons/Polygon-2.png"}
            width={34}
            height={34}
            alt="small polygon"
            className="ml-auto"
          />
        </div>
        <div className="lg:block hidden absolute top-[360px] left-72">
          <div
            className={`${styles.phoneNotification} flex justify-center rounded-md w-[207px] h-[70px] py-2 px-3 text-sm text-white`}
          >
            <p className="leading-6">
              Dear customer, your loan has been approved!
            </p>
          </div>
          <Image
            src={"/Icons/Polygon-2.png"}
            width={34}
            height={34}
            alt="small polygon"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center mx-auto md:w-[50%] w-full sm:w-10/12 px-5 md:py-2 py-12">
        <div className="flex flex-col items-center py-3 gap-1">
          <p className="font-bold sm:text-xl text-purple-200 text-center">
            Create an Account
          </p>
          <p className="text-sm">
            Welcome to Mighty Finance. Please fill in the details below.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 sm:gap-4">
              <div>
                <label className="font-semibold sm:text-[16px] text-sm">
                  First Name
                </label>
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
                <label className="font-semibold sm:text-[16px] text-sm">
                  Email
                </label>
                <Input
                  type="email"
                  {...register("email")}
                  placeholder="sim@mail.com"
                />
                <ErrorMessage message={errors.email?.message} />
              </div>
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
                      !isNaN(value) || "Please enter a valid number",
                  })}
                  placeholder="0978236744"
                />
                <ErrorMessage message={errors.phoneNumber?.message} />
              </div>
              <div>
                <label className="font-semibold sm:text-[16px] text-sm">
                  Password
                </label>
                <Input {...register("password")} placeholder="" />
                <ErrorMessage message={errors.password?.message} />
                {/* {password && password.length >= 8 && (
                  <div className="text-xs mt-1 text-gray-500">
                    Password strength:{" "}
                    {/[a-zA-Z]/.test(password) && /[0-9]/.test(password)
                      ? "Strong"
                      : "Weak (include letters and numbers)"}
                  </div>
                )} */}
              </div>
              <div>
                <label className="font-semibold sm:text-[16px] text-sm">
                  Confirm Password
                </label>
                <Input {...register("confirmPassword")} placeholder="" />
                <ErrorMessage message={errors.confirmPassword?.message} />
                {watch("confirmPassword") &&
                  watch("confirmPassword") === password && (
                    <p className="text-green-500 text-xs mt-1">
                      Passwords match!
                    </p>
                  )}
              </div>
            </div>
            <div>
              <div className="pt-5">
                <label
                  htmlFor="loan-processing-consent"
                  className="text-[13px] sm:text-sm"
                >
                  <input
                    id="loan-processing-consent"
                    type="checkbox"
                    {...register("consent")}
                    className="focus:ring-indigo-500 h-4 w-4 mr-2 text-indigo-600 border-gray-300 rounded"
                  />
                  By creating an account, you agree to Mighty Finance Solution
                  <Link href={"#"} className="text-yellow-300">
                    {" "}
                    Terms of Services
                  </Link>{" "}
                  and{" "}
                  <Link href={"#"} className="text-yellow-300">
                    {" "}
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>
            <div className="w-full py-2"> </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 mt-4 text-center bg-purple-800 hover:bg-purple-700 rounded text-white font-bold"
            >
              {isSubmitting ? "Creating account..." : "Create account"}
            </Button>
          </form>
          <small className="py-2 mx-auto md:w-1/3">
            Already have an account?{" "}
            <Link href={"/auth/sign-in"} className="text-yellow-400">
              Log In
            </Link>
          </small>
          <div className="pb-2">
            <div className="flex justify-between items-center pb-3">
              <span className={`${styles.gradDiv}`} />
              <p className="text-sm">or</p>
              <span className={`${styles.gradDiv}`} />
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between gap-3 sm:w-4/5 w-full mx-auto">
              <div className="bg-[#FAF1FF] flex justify-center items-center gap-3 py-2 px-5 rounded cursor-pointer">
                <Image
                  src={"/Icons/google.png"}
                  alt="google-icon"
                  width={25}
                  height={25}
                />
                <p className="text-sm">Continue with Google</p>
              </div>
              <div className="bg-[#FAF1FF] flex justify-center items-center gap-3 py-2 px-5 rounded cursor-pointer">
                <Image
                  src={"/Icons/apple.png"}
                  alt="apple-icon"
                  width={25}
                  height={25}
                />
                <p className="text-sm">Continue with Apple</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
