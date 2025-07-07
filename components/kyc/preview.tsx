"use client";
import { useState } from "react";
import { readLocalStorageValue } from "@mantine/hooks";
import { KYCFormData } from "@/types/dashboard";

const kycDefaultValues: KYCFormData = {
  email: "",
  firstName: "",
  lastName: "",
  nrc: "",
  dob: "",
  gender: "",
  town: "",
  province: "",
  address: "",
  phoneNumber: 0,
  kinAddress: "",
  kinFirstName: "",
  kinPhoneNumber: 0,
  kinLastName: "",
  hrmFirstName: "",
  hrmLastName: "",
  hrmPhoneNumber: 0,
  supervisorFirstName: "",
  supervisorLastName: "",
  supervisorPhoneNumber: 0,
  photo: undefined,
  proofOfIncome: undefined,
  preApprovalDoc: undefined,
  idCopy: undefined,
  bankStatement: undefined,
  tpin: undefined,
};

const tabClass = "px-4 py-2 cursor-pointer rounded-t-lg";
const activeTabClass =
  "bg-yellow-100 border-t border-l border-r border-gray-300 font-semibold";
const inactiveTabClass = "bg-purple-50 hover:bg-purple-100";

const KycPreview = () => {
  const safeJsonParse = (value: string | undefined) => {
    if (typeof value === "string") {
      return JSON.parse(value);
    }
    return undefined;
  };
  const kycDets = readLocalStorageValue({
    key: "checkout-form",
    defaultValue: {
      currentStepindex: "3",
      formValues: kycDefaultValues,
    },
    deserialize: safeJsonParse, // Converts string back to object
  });

  const { formValues } = kycDets;
  const formattedDate = formValues.dob.split("T")[0];
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="p-5">
      {kycDets !== null && (
        <div className="flex flex-col">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-100 self-center">
            <div
              className={`${tabClass} ${activeTab === "personal" ? activeTabClass : inactiveTabClass}`}
              onClick={() => setActiveTab("personal")}
            >
              Personal Details
            </div>
            <div
              className={`${tabClass} ${activeTab === "kin" ? activeTabClass : inactiveTabClass}`}
              onClick={() => setActiveTab("kin")}
            >
              Next of Kin
            </div>
            <div
              className={`${tabClass} ${activeTab === "documents" ? activeTabClass : inactiveTabClass}`}
              onClick={() => setActiveTab("documents")}
            >
              Documents
            </div>
            <div
              className={`${tabClass} ${activeTab === "employment" ? activeTabClass : inactiveTabClass}`}
              onClick={() => setActiveTab("employment")}
            >
              Employment Details
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white p-4">
            {/* Personal Details Tab */}
            {activeTab === "personal" && (
              <div className="flex flex-col gap-3">
                <span className="font-semibold text-xl text-purple-600">
                  Personal Details
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Name</span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formValues.firstName} {formValues.lastName}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Phone</span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formValues.phoneNumber}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Email</span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formValues.email}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">ID</span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formValues.nrc}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">DOB</span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formattedDate}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Gender</span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formValues.gender}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Town</span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formValues.town}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Province</span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formValues.province}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Full Address</span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formValues.address}
                  </span>
                </div>
              </div>
            )}

            {activeTab === "kin" && (
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-xl text-purple-600">
                  Next of Kin
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Name</span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formValues.kinFirstName} {formValues.kinLastName}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Phone</span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formValues.kinPhoneNumber}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Full Address</span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formValues.kinAddress}
                  </span>
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <div>
                <span className="font-semibold text-xl text-purple-600">
                  Personal Details
                </span>
                {formValues.photo && (
                  <div>
                    <span>Photo</span>
                    <a
                      href={URL.createObjectURL(formValues.photo)}
                      target="_blank"
                    >
                      View Photo
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

export default KycPreview;
