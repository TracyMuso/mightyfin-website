import React from "react";
import Step from "@/components/LoanSteps/step";
import { LoanTrackingData } from "@/constants/data/dashboard";

const TrackLoan = () => {
  return (
    <div className="bg-white shadow-md border rounded-md p-5">
      <h3>Track Loan Approval</h3>
      <div className="flex flex-col gap-3 pr-8">
        {LoanTrackingData.map((item, idx) => {
          return <Step key={idx} {...item} />;
        })}
      </div>
    </div>
  );
};

export default TrackLoan;
