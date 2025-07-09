"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Notification from "./ui/notification";
import { NotificationsData } from "@/constants/data/dashboard";
import { NotificationPagination } from "@/components/pagination/pagination";
import { Button } from "@/components/button";

const NotificationsTab = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const safeNotificationsData = Array.isArray(NotificationsData)
    ? NotificationsData
    : [];

  const [currentPage, setCurrentPage] = useState(1);
  const notificationsPerPage = 5;

  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification = Math.max(
    0,
    indexOfLastNotification - notificationsPerPage
  );
  const currentNotifications = safeNotificationsData.slice(
    indexOfFirstNotification,
    Math.min(indexOfLastNotification, safeNotificationsData.length)
  );
  const totalPages = Math.max(
    1,
    Math.ceil(safeNotificationsData.length / notificationsPerPage)
  );

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

      {currentNotifications.length > 0 ? (
        <div
          className="notifications-container flex flex-col gap-2 pt-3"
          ref={containerRef}
        >
          {currentNotifications.map((item, idx) => {
            if (!item) return null;
            return (
              <Notification
                tabIndex={idx}
                {...item}
                key={item.timestamp || idx}
              />
            );
          })}
        </div>
      ) : (
        <div className="p-4 h-[50vh] flex flex-col text-center justify-center gap-2">
          <Image
            src={"/Icons/no-notifictions.png"}
            alt="no notifications icon"
            width={60}
            height={60}
            className="mx-auto"
          />
          <p className="font-semibold text-gray-700 text-base sm:text-xl">
            You have no notifications
          </p>
          <span className="font-light sm:text-base text-sm text-gray-500">
            Select the button below to start transacting!
          </span>
          <Button
            className="w-10/12 sm:w-2/3 md:w-[200px] mx-auto"
            text="Apply for a loan"
            variant="primary"
          />
        </div>
      )}

      {safeNotificationsData.length > notificationsPerPage && (
        <NotificationPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default NotificationsTab;
