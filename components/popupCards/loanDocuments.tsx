"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../button";

interface LoanDocumentsProps {
  onClose: () => void;
}

const LoanDocuments: React.FC<LoanDocumentsProps> = ({ onClose }) => {
  return (
    <div className="sm:px-6 sm:py-8 py-4 px-2 flex flex-col items-center text-center gap-6 border shadow-md rounded-sm w-full max-w-[800px] bg-white">
      <h4 className="font-bold text-purple-800 md:text-[20px]">
        Required Documents
      </h4>
      <div className="flex flex-col items-center text-center gap-1 md:text-[17px] text-sm">
        <strong>Civil Servant Loan</strong>
        <span>National Identity Card, Payslip, 3 Months Bank Statements</span>
      </div>
      <div className="flex flex-col items-center text-center gap-1 md:text-[17px] text-sm">
        <strong>Business Loan</strong>
        <span>Business Financial Books, Directors NRC, Letter</span>
      </div>
      <Button
        text="Close"
        variant="secondary"
        className="w-10/12"
        onClick={onClose}
      />
    </div>
  );
};

interface LoanDocumentsModalProps {
  autoShowDelay?: number;
}

const LoanDocumentsModal: React.FC<LoanDocumentsModalProps> = ({
  autoShowDelay = 3000,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [autoShow, setAutoShow] = useState<boolean>(true);

  useEffect(() => {
    if (autoShow) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setAutoShow(false);
      }, autoShowDelay);

      return () => clearTimeout(timer);
    }
  }, [autoShow, autoShowDelay]);

  const handleOpen = (): void => {
    setIsVisible(true);
    setAutoShow(false);
  };

  const handleClose = (): void => {
    setIsVisible(false);
    setAutoShow(false);
  };

  return (
    <div className="relative">
      <Button
        text="Show Required Documents"
        onClick={handleOpen}
        className="mb-4"
      />

      {isVisible && (
        <div className="fixed inset-0 bg-gray-400/50 backdrop-blur-sm z-100 overflow-y-auto overflow-x-hidden">
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-[800px]">
              <LoanDocuments onClose={handleClose} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanDocumentsModal;
