"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { type ReactNode } from "react";
import DashboardHeader from "./header";

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
        <DashboardHeader />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
