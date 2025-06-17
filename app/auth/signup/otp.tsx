"use client";

import { useState } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import Image from "next/image";
import styles from "@/styles/userAuth.module.css";
import { Button } from "@/components/button";

const Otp = () => {
  const [value, setValue] = useState("");

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
        <div className="absolute top-[360px] left-72">
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
      <div className="flex justify-center w-[50%] px-5">
        <div>
          <h3>Validate OTP</h3>
          <span>Please eneter the otp sent to +260987654312</span>
          <span>Enter 5-digitcode</span>
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <span>
            Havent received the code yet?{" "}
            <Button text="resend code" variant="ghost" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Otp;
