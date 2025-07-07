"use client";

import Image from "next/image";
import { useState } from "react";
import { TransactionChart } from "./ui/transactionChart";
import TranactionTable from "./ui/transactionTable";
import QuickActions from "./quick-actions";

interface CenterBarType {
  borrowedAmount: string;
  paybackDate: string;
  dueAmount: string;
  handleApplyButtonClick: () => void;
}

const CenterBar = ({
  borrowedAmount,
  paybackDate,
  dueAmount,
  handleApplyButtonClick,
}: CenterBarType) => {
  const [hasLoan, setHasLoan] = useState(false);

  return (
    <div className="flex flex-col flex-1 gap-[10px] p-[10px] w-full">
      <div className="grid grid-cols-2 gap-[10px] ">
        <button
          className="hidden"
          onClick={() => {
            setHasLoan(true);
          }}
        >
          hi
        </button>
        <div
          id="current-loan"
          className="flex gap-6 rounded-md items-center md:h-[160px] w-full py-3 px-4 lg:py-7 lg:px-8 bg-white"
        >
          <Image
            src={"/Icons/yellow-money-bag.png"}
            width={70}
            height={70}
            alt="money-bag icon"
            className="hidden xl:block"
          />
          <div className="flex flex-col text-left justify-between">
            <p className="text-purple-500">Current loan</p>
            <h4 className="xl:text-3xl md:text-xl font-bold text-purple-500">
              K {borrowedAmount}
            </h4>
            <p className="text-gray-100 text-sm md:text-base">Currency: ZMW</p>
          </div>
        </div>
        <div
          id="loan-deduction"
          className="flex gap-6 rounded-md items-center md:h-[160px] py-3 px-4 lg:py-7 lg:px-8 bg-white"
        >
          <Image
            src={"/Icons/hand-money.png"}
            width={70}
            height={70}
            alt="money-bag icon"
            className="hidden xl:block"
          />
          <div className="flex flex-col text-left justify-between">
            <p className="text-purple-500">Amount Due</p>
            <h4 className="xl:text-3xl md:text-xl font-bold text-purple-500">
              K {dueAmount}
            </h4>
            <p className="text-gray-100 text-sm md:text-base">
              Repay by: {paybackDate}{" "}
            </p>
          </div>
        </div>
      </div>
      <QuickActions />
      <div className="flex justify-center rounded-md md:px-10 md:py-12 w-full bg-white">
        {hasLoan ? (
          <div className="w-full flex flex-col gap-10 py-12">
            <TransactionChart />
            <TranactionTable />
          </div>
        ) : (
          <div className="flex flex-col py-10 px-4 gap-3 items-center">
            <Image
              src={"/Icons/gray-money-bag.png"}
              width={100}
              height={100}
              alt="gray money bag"
            />
            <h5 className="text-2xl">No transactions yet?</h5>
            <p className="text-gray-100 text-center">
              Select the button below to make your first transaction.
            </p>
            <button
              onClick={handleApplyButtonClick}
              className="px-10 py-4 md:w-[450px] text-center bg-purple-500 hover:bg-purple-primary rounded-md text-white"
            >
              APPLY NOW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CenterBar;
