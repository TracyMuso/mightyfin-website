"use client";

import { useState } from "react";
import Image from "next/image";
import LoanRepayment from "@/components/LoanRepayment";
import { LoanModal } from "./modal";
import TrackLoan from "../modals/track-loan";
import Link from "next/link";
import styles from "@/styles/Dashboard.module.css";
import { Pie } from "./progressBar";

interface RightSideBarType {
  userID: string;
  userName: string;
  handleApplyButtonClick: () => void;
}

const RightSideBar = ({
  userID,
  userName,
  handleApplyButtonClick,
}: RightSideBarType) => {
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [showRepayModal, setShowRepayModal] = useState(false);
  const [showWithdrawalModal, setShowWithdrawalModal] = useState(false);

  const handleTrackLoan = () => {
    setShowTrackModal(true);
  };

  const handleRepayLoan = () => {
    setShowRepayModal(true);
  };

  const handleWithdrawal = () => {
    setShowWithdrawalModal(true);
  };

  return (
    <div className="hidden xl:flex flex-col gap-[10px] pt-[10px] pr-[10px]">
      <Link
        href={"/"}
        className="bg-white py-5 px-7 flex justify-center w-full text-purple-500 rounded-md"
      >
        <span className="text-center">Go Back to website</span>
      </Link>
      <div className="flex flex-col gap-3 pl-5 pr-3 py-8 bg-white rounded-md w-full">
        <div className="flex flex-col gap-2">
          <p className="text-m">{userName}</p>
          <p className="text-m pb-2 text-yellow-400">User ID: {userID}</p>
          <div className={`${styles.gradDiv}`} />
        </div>
        <div className="flex flex-col items-start gap-5 w-[210px]">
          <div
            className={`${styles.main} flex w-full gap-6 items-center rounded-md py-3 px-4 cursor-pointer`}
            id="repay-loan"
            onClick={handleRepayLoan}
          >
            <Image
              src={"/Icons/Dollar.svg"}
              width={16}
              height={17}
              alt="dollar icon"
            />
            <span className="text-m">Repay Loan</span>
          </div>
          <div
            className={`${styles.main} flex w-full gap-6 items-center rounded-md py-3 px-4 cursor-pointer`}
            id="track-loan"
            onClick={handleTrackLoan}
          >
            <Image
              src={"/Icons/Hourglass.svg"}
              width={24}
              height={24}
              alt="hourglass icon"
            />
            <span className="text-m">Track Loan</span>
          </div>
          <Link
            href={"/dashboard/support"}
            className={`${styles.main} flex gap-3 justify-between items-center rounded-md py-3 px-4 cursor-pointer`}
          >
            <Image
              src={"/Icons/fi-rr-headset.png"}
              width={24}
              height={24}
              alt="headsets icon"
            />
            <span className="text-m">Customer Support</span>
          </Link>
          <button
            id="apply-for-loan"
            className="w-full py-3 text-center bg-purple-500 hover:bg-purple-primary rounded-md text-white"
            onClick={handleApplyButtonClick}
          >
            Apply for Loan
          </button>
          <button
            id="withdraw-amount"
            className="py-3 w-full text-center border border-purple-400 bg-white hover:bg-yellow-300 rounded-md text-black"
            onClick={handleWithdrawal}
          >
            Withdraw
          </button>
        </div>
      </div>
      <div
        id="payment-progress"
        className="flex flex-col items-center mx-auto h-[300px] gap-0"
      >
        <Pie percentage={0} colour="purple" />
        <h4 className="text-center text-gray-200 font-bold text-xl">
          K 0 Left
        </h4>
      </div>
      {/* Track Loan Modal */}
      <LoanModal
        isOpen={showTrackModal}
        onClose={() => setShowTrackModal(false)}
      >
        <TrackLoan />
      </LoanModal>

      {/* Repay Loan Modal */}
      <LoanModal
        isOpen={showRepayModal}
        onClose={() => setShowRepayModal(false)}
      >
        <LoanRepayment />
      </LoanModal>
      {/* Withdrawal Modal */}
      <LoanModal
        isOpen={showWithdrawalModal}
        onClose={() => setShowWithdrawalModal(false)}
      >
        <div className="space-y-4">
          <p>You are about to make a loan repayment.</p>
          <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
            <p className="font-medium">Amount Due: $500.00</p>
            <p className="text-sm">Due Date: 15th June 2023</p>
          </div>
          {/* Add repayment form or details here */}
        </div>
      </LoanModal>
    </div>
  );
};

export default RightSideBar;
