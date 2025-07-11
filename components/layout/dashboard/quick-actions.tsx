"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Pie } from "./ui/progressBar";
import { LoanModal } from "./ui/modal";
import LoanRepayment from "@/components/LoanRepayment";
import TrackLoan from "./modals/track-loan";

const QuickActions = () => {
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
    <div className="block bg-gray-50 xl:hidden w-full md:px-6 px-4 py-8">
      <h4 className="py-2 text-purple-600">QUICK ACTIONS</h4>
      <div className="flex md:flex-row flex-col items-center">
        <div className="grid grid-cols-2 gap-2 grid-rows-2 ">
          <div
            className="flex flex-col items-center gap-1 rounded-md p-4 bg-white w-[140px] cursor-pointer"
            onClick={handleRepayLoan}
          >
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
          <div
            className="flex flex-col items-center gap-1 rounded-md p-4 bg-white w-[140px] cursor-pointer"
            onClick={handleTrackLoan}
          >
            <span className="p-3 rounded-[50px] bg-purple-50 flex w-10 justify-center">
              <Image
                src={"/Icons/Hourglass.svg"}
                width={15}
                height={19}
                alt="hourglass icon"
              />
            </span>
            <span className="pt-2">Track loan</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-md p-4 bg-white w-[140px] cursor-pointer">
            <span className="p-3 rounded-[50px] bg-purple-50 flex w-10 justify-center">
              <Image
                src={"/Icons/quill_mail.svg"}
                width={17}
                height={14}
                alt="mail icon"
              />
            </span>
            <span className="pt-2">Apply for loan</span>
          </div>
          <div
            className="flex flex-col items-center gap-1 rounded-md p-4 bg-white w-[140px] cursor-pointer"
            onClick={handleWithdrawal}
          >
            <span className="p-3 rounded-[50px] bg-purple-50 flex w-10 justify-center">
              <Image
                src={"/Icons/fluent_shield-checkmark-24-regular.png"}
                width={15}
                height={17}
                alt="shield icon"
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

export default QuickActions;
