import React from "react";
import Image from "next/image";
import { Pie } from "./ui/progressBar";

const QuickActions = () => {
  return (
    <div className="block bg-gray-50 xl:hidden w-full md:px-6 px-4 py-8">
      <h4 className="py-2 text-purple-600">QUICK ACTIONS</h4>
      <div className="flex md:flex-row flex-col items-center">
        <div className="grid grid-cols-2 gap-2 grid-rows-2">
          <div className="flex flex-col items-center gap-1 rounded-md p-4 bg-white w-[140px]">
            <span className="p-3 rounded-[50px] bg-purple-50 flex w-10 justify-center">
              <Image
                src={"/Icons/Dollar.svg"}
                width={12}
                height={14}
                alt="dollar icon"
              />
            </span>
            <span className="pt-2">Repay loan</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-md p-4 bg-white w-[140px]">
            <span className="p-3 rounded-[50px] bg-purple-50 flex w-10 justify-center">
              <Image
                src={"/Icons/Hourglass.svg"}
                width={15}
                height={19}
                alt="dollar icon"
              />
            </span>
            <span className="pt-2">Track loan</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-md p-4 bg-white w-[140px]">
            <span className="p-3 rounded-[50px] bg-purple-50 flex w-10 justify-center">
              <Image
                src={"/icons/quill_mail.svg"}
                width={17}
                height={14}
                alt="dollar icon"
              />
            </span>
            <span className="pt-2">Apply for loan</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-md p-4 bg-white w-[140px]">
            <span className="p-3 rounded-[50px] bg-purple-50 flex w-10 justify-center">
              <Image
                src={"/icons/fluent_shield-checkmark-24-regular.png"}
                width={15}
                height={17}
                alt="dollar icon"
              />
            </span>
            <span className="pt-2">Withdraw</span>
          </div>
        </div>
        <div
          id="payment-progress"
          className="flex flex-col items-center mx-auto p-3 h-[300px] gap-0"
        >
          <Pie percentage={0} colour="purple" />
          <h4 className="text-center text-gray-200 font-bold text-xl">
            K 0 Left
          </h4>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
