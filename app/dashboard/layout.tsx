"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/dashboard/app-sidebar";
import { type ReactNode } from "react";
import DashboardHeader from "@/components/layout/dashboard/header";

export interface AppLayoutProps {
  children: ReactNode;
  additionalClass?: string;
}

const DashboardLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <div className="w-full">
        <SidebarTrigger />
        <DashboardHeader name="Lute" initials="LC" />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
