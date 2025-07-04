import type { NotificationsType } from "@/types/dashboard";
import Image from "next/image";
import React from "react";

const Notification = ({
  title,
  timestamp,
  message,
  username,
}: NotificationsType) => {
  return (
    <div className="flex items-start gap-2 w-full p-2 rounded-md bg-purple-100">
      <Image
        src={"/Images/message-mf-icon.png"}
        alt="logo"
        width={52}
        height={52}
      />
      <div className="flex flex-col flex-1 px-1">
        <div className="flex justify-between w-full items-baseline">
          <h4 className="font-semibold text-xl text-purple-500">{title}</h4>
          <span className="timestamp font-light text-gray-500">
            {timestamp}
          </span>
        </div>
        <p className="font-light text-gray-500 py-2">
          Dear {username}, <br />
          {message}
        </p>
      </div>
    </div>
  );
};

export default Notification;
