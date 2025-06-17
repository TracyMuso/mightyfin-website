"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { SignInDets } from "@/constants/data/authPages";
import styles from "@/styles/userAuth.module.css";

const Signin = () => {
  const router = useRouter();

  return (
    <section className="flex p-0 h-[100vh] font-Montserrat">
      <div className={`${styles.leftCont} relative`}>
        <div className="text-left absolute top-[34px] left-[35px]">
          <Image
            src={"/Icons/mf-logo.png"}
            width={89}
            height={59}
            alt="mighty finance logo"
          />
          <p className="text-white">Financial inclusion for all</p>
        </div>
      </div>
      <div className="flex flex-col justify-center mx-auto w-[50%] px-5">
        <div className="flex flex-col items-center py-3 gap-1">
          <p className="font-bold text-purple-300 text-center">Log In</p>
          <p className="text-m">Welcome Back!</p>
        </div>
        <div className="flex flex-col justify-center">
          <form>
            <div className="flex flex-col gap-4">
              {SignInDets.map((item, idx) => (
                <div key={idx} className="py-1">
                  <label htmlFor={item.htmlFor} className="font-bold text-m">
                    {item.label}
                  </label>
                  <Input type={item.inputType} placeholder="" id={item.id} />
                </div>
              ))}
            </div>
            <div className="w-full flex justify-between items-center py-4">
              <label
                htmlFor="user-agreement"
                className="text-m flex justify-center"
              >
                <input
                  className="w-5 h-5 text-yellow-400 
                          focus:ring-purple-200 focus:ring-2 mr-1"
                  type="checkbox"
                  id="user-agreement"
                />
                Stay signed in
              </label>
              <Link className="text-yellow-400" href={"/reset-password"}>
                Forgot password?
              </Link>
            </div>
            <button
              onClick={() => {
                void router.push("/dashboard");
              }}
              className="w-full py-2 text-center bg-purple-500 hover:bg-purple-primary rounded text-white font-bold"
            >
              Log in
            </button>
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
                <Link className="text-yellow-400" href={"/signup"}>
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
