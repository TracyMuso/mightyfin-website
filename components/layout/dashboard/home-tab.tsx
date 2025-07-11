"use client";

import { useState } from "react";
import CenterBar from "./centerBar";
import RightSideBar from "./ui/rightSidebar";
import { LoanApplicationModal } from "@/components/kyc/modal";

const dummyUserData = {
  hasKYC: true,
  hasPendingLoan: false,
  hasPoorCredit: false,
  name: "Lute Chongo",
  id: "MF10923",
  borrowedAmount: "0",
  paybackDate: "",
  dueAmount: "0",
};

const DashboardHome = () => {
  const [showModal, setShowModal] = useState(false);
  const [userStatus, setUserStatus] = useState<
    "no-kyc" | "pending-loan" | "poor-credit" | "eligible"
  >("eligible");

  const handleApplyForLoan = () => {
    // Using dummy data instead of API calls
    if (!dummyUserData.hasKYC) {
      setUserStatus("no-kyc");
    } else if (dummyUserData.hasPendingLoan) {
      setUserStatus("pending-loan");
    } else if (dummyUserData.hasPoorCredit) {
      setUserStatus("poor-credit");
    } else {
      setUserStatus("eligible");
      // In a real scenario, you would proceed with loan application here
      console.log("User is eligible for loan");
    }
    setShowModal(true);
  };

  return (
    <div className={`flex gap-1 bg-gray-50`}>
      <CenterBar
        borrowedAmount={dummyUserData.borrowedAmount}
        paybackDate={dummyUserData.paybackDate}
        dueAmount={dummyUserData.dueAmount}
        handleApplyButtonClick={handleApplyForLoan}
      />
      <RightSideBar
        userName={dummyUserData.name}
        userID={dummyUserData.id}
        handleApplyButtonClick={handleApplyForLoan}
      />
      {showModal && (
        <LoanApplicationModal
          userStatus={userStatus}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default DashboardHome;
