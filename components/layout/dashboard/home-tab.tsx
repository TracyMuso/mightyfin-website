"use client";

import { useState } from "react";
import CenterBar from "./centerBar";
import RightSideBar from "./ui/rightSidebar";
import { LoanApplicationModal } from "@/components/kyc/modal";

const DashboardHome = () => {
  const [showModal, setShowModal] = useState(false);
  const [userStatus, setUserStatus] = useState<
    "no-kyc" | "pending-loan" | "poor-credit" | "eligible"
  >("eligible");

  const handleApplyForLoan = () => {
    // Check user status (you would replace this with actual checks)
    if (!userHasKYC()) {
      setUserStatus("no-kyc");
    } else if (userHasPendingLoan()) {
      setUserStatus("pending-loan");
    } else if (userHasPoorCredit()) {
      setUserStatus("poor-credit");
    } else {
      setUserStatus("eligible");
      // Proceed with loan application
      return;
    }
    setShowModal(true);
  };

  const userHasKYC = () => false;
  const userHasPendingLoan = () => true;
  const userHasPoorCredit = () => false;

  return (
    <div className={`flex gap-1 bg-gray-50`}>
      <CenterBar
        borrowedAmount="0"
        paybackDate=""
        dueAmount="0"
        handleApplyButtonClick={handleApplyForLoan}
      />
      <RightSideBar
        userName="Lute Chongo"
        userID="MF10923"
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
