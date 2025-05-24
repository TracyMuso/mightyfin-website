import Image from "next/image";
import { useState } from "react";
import { TransactionChart } from "./transactionChart";
import TranactionTable from "./transactionTable";

const CenterBar = () => {
  const [hasLoan, setHasLoan] = useState(true);

  return (
    <div className="flex flex-col gap-[10px] p-[10px]">
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
          className="flex gap-6 rounded-md items-center h-[160px] w-full py-7 px-8 bg-white"
        >
          <Image
            src={"/Icons/yellow-money-bag.png"}
            width={70}
            height={70}
            alt="money-bag icon"
          />
          <div className="flex flex-col text-left justify-between">
            <p className="text-purple-500">Current loan</p>
            <h4 className="text-3xl font-bold text-purple-500">K 0</h4>
            <p className="text-gray-100">Currency: ZMW</p>
          </div>
        </div>
        <div
          id="loan-deduction"
          className="flex gap-6 rounded-md items-center py-7 px-8 bg-white"
        >
          <Image
            src={"/Icons/hand-money.png"}
            width={70}
            height={70}
            alt="money-bag icon"
          />
          <div className="flex flex-col text-left justify-between">
            <p className="text-purple-500">Deduct</p>
            <h4 className="text-3xl font-bold text-purple-500">K 0</h4>
            <p className="text-gray-100">Repay by: </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center rounded-md py-[120px] px-[163px] w-full bg-white">
        {hasLoan && (
          <div>
            <TransactionChart />
            <TranactionTable />
          </div>
        )}
        {/* <div className="flex flex-col gap-3 items-center">
          <Image
            src={"/Icons/gray-money-bag.png"}
            width={100}
            height={100}
            alt="gray money bag"
          />
          <h5 className="text-2xl">No transactions yet?</h5>
          <p className="text-gray-100">
            Select the button below to make your first transaction.
          </p>
          <button className="px-10 py-4 w-[450px] text-center bg-purple-500 hover:bg-purple-primary rounded-md text-white">
            APPLY NOW
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CenterBar;
