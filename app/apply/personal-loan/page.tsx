import React from "react";
// import LoanCalculator from '@/components/calculator';
import PersonalLoanApplication from "@/components/LoanApplication";
import NavMenu from "@/components/layout/nav";
import Footer from "@/components/Footer";

const ApplyForLoan = () => {
  return (
    <div>
      <NavMenu />
      <div className="pt-5 pb-16 md:px-12 px-4">
        <PersonalLoanApplication />
      </div>
      <Footer />
    </div>
  );
};

export default ApplyForLoan;
