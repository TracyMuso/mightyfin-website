import React from "react";
import { CheckCircle } from "lucide-react";

const OtpSuccessful = () => {
  return (
    <div className="bg-white px-6 py-4 rounded-md flex items-center flex-col">
      <CheckCircle />
      <p>Verification Successful</p>
      <span className="text-sm">
        Pleaase wait while you are redirected to the dashboard in 5 seconds
      </span>
    </div>
  );
};

export default OtpSuccessful;
