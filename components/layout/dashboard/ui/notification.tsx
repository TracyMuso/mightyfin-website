import type { NotificationsType } from "@/types/dashboard";
import Image from "next/image";
import React, { useState } from "react";

const Notification = ({
  title,
  timestamp,
  message,
  username,
}: NotificationsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const previewLength = 90;

  const truncatedMessage =
    message.length > previewLength
      ? `${message.substring(0, previewLength)}...`
      : message;

  return (
    <>
      <div
        className="flex items-start gap-2 w-full p-2 rounded-md bg-purple-100"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={"/Images/message-mf-icon.png"}
          alt="logo"
          width={52}
          height={52}
          className="hidden md:block"
        />
        <Image
          src={"/Images/logo-xtra-small.png"}
          alt="logo"
          width={28}
          height={28}
          className="block md:hidden"
        />
        <div className="flex flex-col flex-1 px-1">
          <div className="flex justify-between w-full items-baseline">
            <h4 className="font-semibold md:text-xl text-base text-purple-500">
              {title}
            </h4>
            <span className="timestamp font-light md:text-base text-sm text-gray-500">
              {timestamp}
            </span>
          </div>
          <p className="font-light md:text-base text-sm text-gray-500 py-2">
            Dear {username}, <br />
            {truncatedMessage}
          </p>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-purple-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:size-6 size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex justify-between w-full items-baseline">
              <h4 className="font-semibold md:text-xl text-base text-purple-500">
                {title}
              </h4>
              <span className="timestamp font-light md:text-base text-sm text-gray-500">
                {timestamp}
              </span>
            </div>
            <p className="font-light md:text-base text-sm text-gray-500 py-2">
              Dear {username}, <br />
              {message}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
