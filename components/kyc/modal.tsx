"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function LoanApplicationModal({
  userStatus,
  onClose,
}: {
  userStatus: "no-kyc" | "pending-loan" | "poor-credit" | "eligible";
  onClose: () => void;
}) {
  const [countdown, setCountdown] = useState(5);

  // Auto-close after 5 seconds for non-KYC cases
  useEffect(() => {
    if (userStatus !== "no-kyc") {
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
              Please upload your kyc first
            </h4>
            <Link
              className="bg-yellow-500 hover:bg-yellow-400 px-5 py-3 flex justify-center"
              href={"/dashboard/kyc"}
            >
              Go to upload
            </Link>
          </div>
        );

      case "pending-loan":
        return (
          <div className="text-center space-y-4">
            <h3 className="text-lg font-medium text-red-600">
              Loan Application Blocked
            </h3>
            <p>
              You cannot apply for a new loan while you have a pending
              application.
            </p>
          </div>
        );

      case "poor-credit":
        return (
          <div className="text-center space-y-4">
            <h3 className="text-lg font-medium text-red-600">
              Application Not Eligible
            </h3>
            <p>
              Your credit score doesn`t meet our current requirements. Please
              improve it to qualify for a loan
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-400/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {renderContent()}
      </div>
    </div>
  );
}
