import React from "react";
import Image from "next/image";
import Notification from "./ui/notification";
import { NotificationsData } from "@/constants/data/dashboard";

const NotificationsTab = () => {
  return (
    <div className="w-full relative min-h-screen p-5">
      <div className="my-2 px-1 flex items-center justify-between">
        <h2 className="text-gray-100 text-m">Your Notifications</h2>
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

      <div className="notifications-container flex flex-col">
        <h3>Today</h3>
        {NotificationsData.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </div>

      <div className="py-5 absolute bottom-0 w-[96%] bg-white border-t border-purple-200 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="relative rounded-md">
            <select className="h-full rounded-md block appearance-none w-full bg-gray-50 text-gray-700 py-2 pl-2 text-xs pr-6 leading-tight focus:outline-none focus:bg-white">
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <span className="text-xs xs:text-sm text-gray-900 ml-2">
            Items per page
          </span>
        </div>
        <div className="flex gap-2 mb-4 md:mb-0">
          <button className="px-3 py-1 text-center text-black text-xs border rounded">
            &lt; Prev
          </button>
          <button className="px-3 py-1 text-center text-black text-xs border rounded">
            Next &gt;
          </button>
        </div>
        <div className="flex items-center">
          <div className="relative rounded-md">
            <select className="h-full rounded-md block appearance-none w-full bg-gray-50 text-gray-700 py-2 pl-2 text-xs pr-6 leading-tight focus:outline-none focus:bg-white">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <span className="text-xs ml-2">of 1 page</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationsTab;
