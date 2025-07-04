import React from "react";
import DashboardLayout from "@/components/layout/dashboard/layout";
import DashboardHome from "@/components/layout/dashboard/home-tab";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardHome />
    </DashboardLayout>
  );
};

export default Dashboard;
