"use client";

import { readLocalStorageValue } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import GuideButton from "@/components/onboardingGuide";
import Image from "next/image";

interface FormValues {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  initials?: string;
}

interface LocalStorageData {
  formValues: FormValues;
}

const defaultValues: FormValues = {
  fullName: "Lute",
  initials: "LC",
  firstName: "Lute",
  lastName: "Chongo",
};

const DashboardHeader = () => {
  const [isClient, setIsClient] = useState(false);
  const [userData, setUserData] = useState<LocalStorageData>({
    formValues: defaultValues,
  });

  useEffect(() => {
    setIsClient(true);
    const safeJsonParse = (value: string | undefined) => {
      if (typeof value === "string") {
        try {
          return JSON.parse(value);
        } catch (error) {
          console.error("Failed to parse localStorage value:", error);
          return { formValues: defaultValues };
        }
      }
      return { formValues: defaultValues };
    };

    const data = readLocalStorageValue<LocalStorageData>({
      key: "checkout-form",
      defaultValue: { formValues: defaultValues },
      deserialize: safeJsonParse,
    });
    setUserData(data);
  }, []);

  if (!isClient) {
    // Return a simplified version during SSR or empty div
    return (
      <div className="header flex justify-between md:px-6 px-3 py-3 items-center">
        <h3 className="font-bold text-purple-500 pl-5">Welcome</h3>
        {/* Empty placeholders for layout consistency */}
        <div>
          <GuideButton />
        </div>
        <div className="flex items-center md:gap-6 gap-4 pr-5">
          <span className="bg-yellow-300 p-2 rounded-[50%]">
            <div className="md:size-[22px] size-4" />
          </span>
          <span className="w-8 h-8 md:w-10 md:h-10 bg-purple-500 rounded-[50%]" />
        </div>
      </div>
    );
  }

  // Safely extract values with fallbacks
  const firstName =
    userData.formValues.firstName ||
    userData.formValues.fullName?.split(" ")[0] ||
    "User";
  const lastName =
    userData.formValues.lastName ||
    userData.formValues.fullName?.split(" ")[1] ||
    "";

  const initials =
    userData.formValues.initials || `${firstName[0]}${lastName[0]}`;

  return (
    <div className="header flex justify-between md:px-6 px-3 py-3 items-center">
      <h3 className="font-bold text-purple-500 pl-5">Welcome {firstName}</h3>
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
          <p>{initials}</p>
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
