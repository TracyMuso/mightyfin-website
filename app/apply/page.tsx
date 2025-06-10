import React from "react";
// import LoanCalculator from '@/components/calculator';
import LoanDocuments from "@/components/popupCards/loanDocuments";
import LoanApplication from "@/components/LoanApplication";

const ApplyForLoan = () => {
  return (
    <div className="py-20 md:px-12 px-4">
      <LoanDocuments />
      <LoanApplication />
    </div>
  );
};

export default ApplyForLoan;
