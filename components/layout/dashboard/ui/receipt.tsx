import React from "react";
import Image from "next/image";
import { Button } from "@/components/button";

const Receipt = () => {
  return (
    <div className="bg-white p-5 md:p-10 w-10/12 rounded-md shadow-md border mb-5 mx-auto">
      <div className="pb-4">
        <Image
          src={"/Images/Logo.png"}
          className="sm:w-[241px] sm:h-[54px] w-[150px] h-[30px]"
          alt="logo"
          width={241}
          height={54}
        />
        <span className="pt-3 md:text-base sm:text-sm text-[12px]">
          First Floor, Sunshare Tower,
          <br />
          Lusaka, zambia
        </span>
      </div>
      <div className="pb-3 md:text-base sm:text-sm text-[12px]">
        <h3 className="font-semibold text-purple-600 md:text-xl text-base">
          Payment Receipt
        </h3>
        <span className="pt-2 md:text-base sm:text-sm text-[12px]">
          12th July, 2025
        </span>
      </div>
      <div className="flex flex-col gap-2 pt-3 pb-5">
        <div className="flex justify-between">
          <span className="rt text-gray-700 font-semibold md:text-base sm:text-sm text-[12px]">
            Transaction ID
          </span>
          <span className="rd font-semibold md:text-base sm:text-sm text-[12px]">
            23456352321
          </span>
        </div>
        <div className="flex justify-between">
          <span className="rt text-gray-700 font-semibold md:text-base sm:text-sm text-[12px]">
            Amount
          </span>
          <span className="rd font-semibold md:text-base sm:text-sm text-[12px]">
            k1300
          </span>
        </div>
        <div className="flex justify-between">
          <span className="rt text-gray-700 font-semibold md:text-base sm:text-sm text-[12px]">
            Transfer method
          </span>
          <span className="rd font-semibold md:text-base sm:text-sm text-[12px]">
            Airtel money wallet
          </span>
        </div>
        <div className="flex justify-between">
          <span className="rt text-gray-700 font-semibold md:text-base sm:text-sm text-[12px]">
            Account number
          </span>
          <span className="rd font-semibold md:text-base sm:text-sm text-[12px]">
            0978826523
          </span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="rt text-gray-700 font-semibold md:text-base sm:text-sm text-[12px]">
            Status
          </span>
          <span className="rd font-semibold md:text-base sm:text-sm text-[12px]">
            Unsuccessful
          </span>
        </div>
        <div className="py-3">
          <h4 className="text-sm sm:text-base">DISCLAIMER</h4>
          <small className="font-light text-gray-400 text-[11px] sm:text-sm leading-5 sm:leading-7">
            The company disclaims liability for borrower losses or damages from
            the loan transaction. Borrowers should review the full terms and
            conditions for details. Interest rates and fees comply with
            regulations. Our privacy policy follows legal requirements.
            Procedures for dispute resolution and customer service contact
            information are available for borrower inquiries.
          </small>
        </div>
      </div>
      <Button className="mx-auto" text="Print Receipt" variant="primary" />
    </div>
  );
};

export default Receipt;
