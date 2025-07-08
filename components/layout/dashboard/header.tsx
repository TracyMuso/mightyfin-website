"use client";

import { readLocalStorageValue } from "@mantine/hooks";
import React from "react";
import GuideButton from "@/components/onboardingGuide";
import Image from "next/image";

// interface DashboardHeaderProps {
//   fullName: string;
//   initials: string;
// }

const defaultValue = {
  fullName: "Lute",
  initials: "LC",
};

const DashboardHeader = () => {
  const safeJsonParse = (value: string | undefined) => {
    if (typeof value === "string") {
      return JSON.parse(value);
    }
    return undefined;
  };

  const personalDets = readLocalStorageValue({
    key: "checkout-form",
    defaultValue: {
      currentStepindex: "3",
      formValues: defaultValue,
    },
    deserialize: safeJsonParse, // Converts string back to object
  });

  const { formValues } = personalDets;

  return (
    <div className="header flex justify-between md:px-6 px-3 py-3 items-center ">
      <h3 className="font-bold text-purple-500 pl-5">
        Welcome {formValues.firstName}
      </h3>
      <div>
        <GuideButton />
      </div>
      <div className="flex items-center md:gap-6 gap-4 pr-5">
        <span className="bg-yellow-300 p-2 rounded-[50%] cursor-pointer">
          <Image
            src={"/Icons/Notifications.png"}
            width={22}
            height={22}
            alt="notification bell"
            className="md:size-[22px] size-4"
          />
        </span>
        <span className="cursor-pointer w-8 h-8 md:w-10 md:h-10 bg-purple-500 text-[12px] md:text-base text-white md:font-bold font:semibold rounded-[50%] p-2 flex justify-center">
          <p>
            {formValues.firstName[0]}
            {formValues.lastName[0]}
          </p>
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
