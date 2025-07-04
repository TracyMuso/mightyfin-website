"use client";
import React, { useState } from "react";
import Image from "next/image";
import Notification from "./ui/notification";
import { NotificationsData } from "@/constants/data/dashboard";
import { NotificationPagination } from "@/app/dashboard/pagination";

const NotificationsTab = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const notificationsPerPage = 5;

  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification =
    indexOfLastNotification - notificationsPerPage;
  const currentNotifications = NotificationsData.slice(
    indexOfFirstNotification,
    indexOfLastNotification
  );
  const totalPages = Math.ceil(NotificationsData.length / notificationsPerPage);

  return (
    <div className="w-full relative min-h-screen p-5">
      <div className="my-2 px-1 flex items-center justify-between">
        <h2 className="text-gray-100 text-sm md:text-base">
          Your Notifications
        </h2>
        <div className="relative border rounded-md p-1">
          <div className="pointer-events-none absolute top-[6px] left-8 flex items-center text-gray-700">
            <Image
              src={"/Icons/fi_filter.svg"}
              alt="filter icon"
              width={16}
              height={16}
            />
          </div>
          <select className="h-full rounded-r sm:rounded-r-none block appearance-none w-full bg-white text-gray-700 py-1 px-4 pl-12 text-xs leading-tight focus:outline-none focus:bg-white">
            <option>Filter</option>
            <option>Today</option>
            <option>Past week</option>
            <option>Last month</option>
          </select>
        </div>
      </div>

      <div className="notifications-container flex flex-col gap-2 pt-3">
        {currentNotifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </div>

      <NotificationPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default NotificationsTab;
