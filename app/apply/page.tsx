import React from "react";
// import LoanCalculator from '@/components/calculator';
import LoanDocumentsModal from "@/components/popupCards/loanDocuments";
import LoanApplication from "@/components/LoanApplication";

const ApplyForLoan = () => {
  return (
    <div className="pt-5 pb-16 md:px-12 px-4">
      <LoanDocumentsModal />
      <LoanApplication />
    </div>
  );
};

export default ApplyForLoan;
