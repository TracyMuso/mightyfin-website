"use client";

import { useState, useEffect } from "react";
import { readLocalStorageValue } from "@mantine/hooks";
import { CombinedKybType } from "@/validators/application-flow.validator";

export const kycDefaultValues: CombinedKybType = {
  email: "",
  firstName: "",
  lastName: "",
  nrc: "",
  dob: "",
  gender: "female",
  town: "",
  province: "Central",
  address: "",
  phoneNumber: 0,
  businessName: "",
  businessAddress: "",
  businessProvince: "Central",
  businessTown: "",
  businessType: "",
  pacra: null,
  taxClearance: null,
  bankStatement: null,
  idCopy: null,
  photo: null,
  tpin: null,
  consent: true,
};

const safeJsonParse = (value: string | undefined) => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.error("Failed to parse localStorage value:", error);
      return null;
    }
  }
  return null;
};

export interface KycData {
  formValues: CombinedKybType | null;
}

const tabClass =
  "md:px-4 px-2 py-2 md:text-base sm:text-sm text-[10px] cursor-pointer rounded-t-lg";
const activeTabClass =
  "bg-yellow-100 border-t border-l border-r border-yellow-500 text-purple-600 font-semibold";
const inactiveTabClass = " hover:bg-purple-100";

const SmeKycPreview = () => {
  const [activeTab, setActiveTab] = useState("director");
  const [kycDets, setKycDets] = useState<KycData | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const data = readLocalStorageValue<KycData>({
      key: "sme-kyc-form",
      defaultValue: {
        formValues: kycDefaultValues,
      },
      deserialize: safeJsonParse,
    });
    setKycDets(data);
  }, []);

  // Don't render anything during SSR or initial render
  if (!isClient) {
    return null;
  }

  const { formValues = kycDefaultValues } = kycDets || {};

  return (
    <div className="sm:p-5 p-2">
      {kycDets && (
        <div className="flex flex-col">
          <div className="flex border-b border-gray-100 self-center">
            <div
              className={`${tabClass} ${activeTab === "director" ? activeTabClass : inactiveTabClass}`}
              onClick={() => setActiveTab("director")}
            >
              Director Details
            </div>
            <div
              className={`${tabClass} ${activeTab === "documents" ? activeTabClass : inactiveTabClass}`}
              onClick={() => setActiveTab("documents")}
            >
              Documents
            </div>
            <div
              className={`${tabClass} ${activeTab === "company" ? activeTabClass : inactiveTabClass}`}
              onClick={() => setActiveTab("company")}
            >
              Company Details
            </div>
          </div>

          <div className="bg-white p-4">
            {activeTab === "director" && (
              <div className="grid grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-3 pt-5">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Name
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.firstName} {formValues?.lastName}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Phone
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.email}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">ID</span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.nrc}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    DOB
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.dob}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Gender
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.gender}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Town
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.town}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Province
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.province}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Full Address
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.address}
                  </span>
                </div>
              </div>
            )}

            {activeTab === "company" && (
              <div className="grid md:grid-cols-2 md:grid-rows-2 gap-3">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Business Name
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.businessName}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Business Type
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.businessType}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Business Town
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.businessTown}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Business Province
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.businessProvince}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Business Address
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.businessAddress}
                  </span>
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <div>
                <span className="font-semibold text-xl text-purple-600">
                  Documents
                </span>
                {formValues?.photo && (
                  <div>
                    <span>Photo</span>
                    <a
                      href={URL.createObjectURL(formValues?.photo)}
                      target="_blank"
                    >
                      View Photo
                    </a>
                  </div>
                )}
                {formValues?.idCopy && (
                  <div>
                    <span>ID</span>
                    <a
                      href={URL.createObjectURL(formValues?.idCopy)}
                      target="_blank"
                    >
                      View ID
                    </a>
                  </div>
                )}
                {formValues?.pacra && (
                  <div>
                    <span>Pacra Certificate</span>
                    <a
                      href={URL.createObjectURL(formValues?.pacra)}
                      target="_blank"
                    >
                      View Pacra cert
                    </a>
                  </div>
                )}
                {formValues?.taxClearance && (
                  <div>
                    <span>Tax clearance</span>
                    <a
                      href={URL.createObjectURL(formValues?.taxClearance)}
                      target="_blank"
                    >
                      View tax cleaarance
                    </a>
                  </div>
                )}
                {formValues?.bankStatement && (
                  <div>
                    <span>Bank Statement</span>
                    <a
                      href={URL.createObjectURL(formValues?.bankStatement)}
                      target="_blank"
                    >
                      View Bank Statement
                    </a>
                  </div>
                )}
                {formValues?.tpin && (
                  <div>
                    <span>Tpin</span>
                    <a
                      href={URL.createObjectURL(formValues?.tpin)}
                      target="_blank"
                    >
                      View Tpin
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmeKycPreview;
