import React from "react";
import DashboardLayout from "@/components/layout/dashboard/layout";
import TranactionTable from "@/components/layout/dashboard/ui/transactionTable";

const TransactionTab = () => {
  return (
    <DashboardLayout>
      <div className="w-full">
        <TranactionTable />
      </div>
    </DashboardLayout>
  );
};

export default TransactionTab;
