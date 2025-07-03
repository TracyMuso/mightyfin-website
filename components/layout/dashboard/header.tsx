import React from "react";
import GuideButton from "@/components/onboardingGuide";
import Image from "next/image";

interface DashboardHeaderProps {
  name: string;
  initials: string;
}

const DashboardHeader = ({ name, initials }: DashboardHeaderProps) => {
  return (
    <div className="header flex justify-between md:px-6 px-3 py-3 items-center ">
      <h3 className="font-bold text-purple-500 pl-5">Welcome {name}</h3>
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
          />
        </span>
        <span className="cursor-pointer w-10 h-10 bg-purple-500 text-white font-bold rounded-[50%] p-2 flex justify-center">
          <p>{initials}</p>
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
