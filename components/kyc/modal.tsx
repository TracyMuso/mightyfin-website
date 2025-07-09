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

  useEffect(() => {
    // For demo purposes, we'll show all modals for 5 seconds
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
  }, [countdown, onClose]);

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
          <div className="text-center space-y-4 p-4">
            <h3 className="text-lg font-medium text-green-600">
              [DEMO] Loan Application Would Start
            </h3>
            <p>In a real app, the loan application form would open now.</p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close Demo
            </button>
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
          aria-label="Close modal"
        >
          ✕
        </button>
        {renderContent()}
      </div>
    </div>
  );
}
