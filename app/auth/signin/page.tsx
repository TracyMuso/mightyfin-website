"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/validators/auth.validator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/button";
import ErrorMessage from "@/components/ui/error-message";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/userAuth.module.css";

type FormData = z.infer<typeof signInSchema>;

const Signin = () => {
  const router = useRouter();

  const {
    register,
    setError,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
  });

  const password = watch("password");
  const email = watch("email");

  const onSubmit = () => {
    if (email === "randomtest@test.com") {
      setError("email", {
        type: "manual",
        message: "Wrong email, please use the correct one",
      });
      return;
    }
    if (password === "***") {
      setError("password", {
        type: "manual",
        message: "Wrong password, please use the correct one",
      });
      return;
    }
    router.push("/dashboard");
  };

  return (
    <section className="flex p-0 h-[100vh] font-Montserrat">
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
            Log In
          </p>
          <p className="text-sm">Welcome Back!</p>
        </div>
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:gap-4">
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
                  Password
                </label>
                <Input {...register("password")} placeholder="" />
                <ErrorMessage message={errors.password?.message} />
              </div>
            </div>
            <div className="w-full flex justify-between items-center py-4">
              <label
                htmlFor="user-agreement"
                className="text-[13px] md:text-[15px] flex justify-center"
              >
                <input
                  className="w-5 h-5 text-yellow-400 
                          focus:ring-blue-500 focus:ring-2 mr-1"
                  type="checkbox"
                  {...register("sessionConsent")}
                  id="user-agreement"
                />
                Stay signed in
              </label>
              <Link
                className="text-yellow-400 text-[13px] md:text-[15px]"
                href={"/auth/reset-password"}
              >
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 mt-4 text-center bg-purple-800 hover:bg-purple-700 rounded text-white font-bold"
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </Button>
          </form>
          <div className="py-3">
            <div className="flex justify-between items-center pb-3">
              <span className={`${styles.gradDiv}`} />
              <p className="text-sm">or</p>
              <span className={`${styles.gradDiv}`} />
            </div>
            <div className="flex flex-col items-center justify-between gap-5 py-2">
              <div className="bg-[#FAF1FF] flex w-full justify-center items-center gap-3 py-3 px-5 rounded cursor-pointer">
                <Image
                  src={"/Icons/google.png"}
                  alt="google-icon"
                  width={25}
                  height={25}
                />
                <p className="text-sm">Continue with Google</p>
              </div>
              <div className="bg-[#FAF1FF] w-full flex justify-center items-center gap-3 py-3 px-5 cursor-pointer rounded">
                <Image
                  src={"/Icons/apple.png"}
                  alt="apple-icon"
                  width={25}
                  height={25}
                />
                <p className="text-sm">Continue with Apple</p>
              </div>
            </div>
            <div>
              <div className="pt-5 text-center text-sm">
                <span>Dont have an account? </span>
                <Link className="text-yellow-400" href={"/auth/signup"}>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
