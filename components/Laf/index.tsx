import React from "react";
import ChooseLoan from "../LoanApplication/choose-loan";

const Calculator = () => {
  return (
    <div className="bg-white md:py-16 py-5 flex flex-col md:gap-4 sm:px-12 px-5 gap-2">
      <h3 className="md:text-3xl text-xl text-primary text-center">
        Get Your Loan today
      </h3>
      <ChooseLoan />
    </div>
  );
};

export default Calculator;
