import React from "react";
import { Button } from "../button";

const LoanDocuments = () => {
  return (
    <div className="px-6 py-8 flex flex-col items-center text-center gap-6 border shadow-md rounded-sm max-w-[800px] mx-auto">
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
      <Button text="Close" variant="secondary" className="w-10/12" />
    </div>
  );
};

export default LoanDocuments;
