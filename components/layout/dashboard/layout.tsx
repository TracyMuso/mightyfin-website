"use client";

import { type ReactNode } from "react";
import LeftSidebar from "./leftSidebar";
import DashboardHeader from "./header";

export interface AppLayoutProps {
  children: ReactNode;
  additionalClass?: string;
}

const DashboardLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <section className="h-[100vh] w-full font-Montserrat p-0 m-0 grid grid-cols-[250px_1fr] grid-rows-[60px_1fr]">
        <DashboardHeader name="Lute" initials="LC" />
        <LeftSidebar />
        <div className="col-[_2/_3] row-[_2/_3]">{children}</div>
      </section>
    </>
  );
};

export default DashboardLayout;
