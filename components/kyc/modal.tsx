"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import LoanApplication from "../layout/dashboard/loan-application";

export function LoanApplicationModal({
  userStatus,
  onClose,
}: {
  userStatus: "no-kyc" | "pending-loan" | "poor-credit" | "eligible";
  onClose: () => void;
}) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Only set up auto-close for specific statuses
    if (userStatus === "pending-loan" || userStatus === "poor-credit") {
      const timer = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      const closeTimer = setTimeout(() => {
        if (countdown === 0) onClose();
      }, 5000);

      return () => {
        clearInterval(timer);
        clearTimeout(closeTimer);
      };
    }
  }, [countdown, onClose, userStatus]);

  const renderContent = () => {
    switch (userStatus) {
      case "no-kyc":
        return (
          <div className="sm:px-6 sm:py-8 py-4 px-2 flex flex-col items-center text-center gap-6 border shadow-md rounded-sm w-full max-w-[800px] bg-white">
            <h4 className="font-bold text-purple-800 md:text-[20px]">
              [DEMO] Please complete your KYC
            </h4>
            <p className="text-sm text-gray-500 mb-2">
              (In a real app, this would redirect to KYC upload)
            </p>
            <Link
              className="bg-yellow-500 hover:bg-yellow-400 px-5 py-3 flex justify-center"
              href={"/dashboard/kyc"}
            >
              Go to KYC Upload
            </Link>
          </div>
        );

      case "pending-loan":
        return (
          <div className="text-center space-y-4 p-4">
            <h3 className="text-lg font-medium text-red-600">
              [DEMO] Loan Application Blocked
            </h3>
            <p>You have a pending loan application in our demo system.</p>
            <p className="text-sm text-gray-500">
              Auto-closing in {countdown} seconds...
            </p>
          </div>
        );

      case "poor-credit":
        return (
          <div className="text-center space-y-4 p-4">
            <h3 className="text-lg font-medium text-red-600">
              [DEMO] Credit Score Too Low
            </h3>
            <p>Demo message: Your credit score doesn`t meet requirements.</p>
            <p className="text-sm text-gray-500">
              Auto-closing in {countdown} seconds...
            </p>
          </div>
        );

      case "eligible":
        return (
          <div className="text-center space-y-4 sm:p-4 p-2">
            <LoanApplication />
          </div>
        );

      default:
        return (
          <div className="w-2/3">
            <LoanApplication />
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-50/10 backdrop-blur-sm flex items-center justify-center md:p-4 p-2 z-50">
      <div className="bg-transparent rounded-lg w-full md:w-10/12 md:p-6 py-4 relative">
        <button
          onClick={onClose}
          className="absolute top-24 sm:top-20 right-8 md:right-2 z-100 text-gray-500 md:font-bold hover:text-gray-600"
          aria-label="Close modal"
        >
          ✕
        </button>
        {renderContent()}
      </div>
    </div>
  );
}
