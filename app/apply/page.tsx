import React from "react";
import LoanDocumentsModal from "@/components/popupCards/loanDocuments";
import ChooseLoan from "@/components/LoanApplication/choose-loan";
import NavMenu from "@/components/layout/nav";
import Footer from "@/components/Footer";

const ApplyForLoan = () => {
  return (
    <div>
      <NavMenu />
      <div className="pt-5 pb-16 md:px-12 px-4">
        <LoanDocumentsModal />
        <ChooseLoan />
      </div>
      <Footer />
    </div>
  );
};

export default ApplyForLoan;
