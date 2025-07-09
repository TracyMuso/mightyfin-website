"use client";
import { useState } from "react";
import { readLocalStorageValue } from "@mantine/hooks";
import { KYCFormData } from "@/types/dashboard";

export const kycDefaultValues: KYCFormData = {
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
  jobTitle: "",
  ministry: "",
  department: "",
  employeeNumber: "",
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
  formValues: KYCFormData | null;
}

const tabClass =
  "md:px-4 px-2 py-2 md:text-base sm:text-sm text-[10px] cursor-pointer rounded-t-lg";
const activeTabClass =
  "bg-yellow-100 border-t border-l border-r border-yellow-500 text-purple-600 font-semibold";
const inactiveTabClass = " hover:bg-purple-100";

const KycPreview = () => {
  const kycDets = readLocalStorageValue<KycData>({
    key: "checkout-form",
    defaultValue: {
      formValues: kycDefaultValues,
    },
    deserialize: safeJsonParse,
  });

  const { formValues = kycDefaultValues } = kycDets || {};
  const formattedDate = formValues?.dob.split("T")[0];
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="sm:p-5 p-2">
      {kycDets && (
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
                    {formattedDate}
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
            {/* Employment details*/}
            {activeTab === "employment" && (
              <div className="grid md:grid-cols-2 md:grid-rows-2 gap-3">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Job Title
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.jobTitle}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Ministry
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.ministry}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Department
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.department}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Employee number
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.employeeNumber}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    HR Manager Name
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.hrmFirstName} {formValues?.hrmLastName}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    HR Manager Phone
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.hrmPhoneNumber}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Supervisor Name
                  </span>
                  <span className="border rounded-md shadow-sm p-2 italic">
                    {formValues?.supervisorFirstName}{" "}
                    {formValues?.supervisorLastName}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Supervisor Phone
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.supervisorPhoneNumber}
                  </span>
                </div>
              </div>
            )}
            {/*Next of kin*/}
            {activeTab === "kin" && (
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-xl text-purple-600">
                  Next of Kin
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Name
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.kinFirstName} {formValues?.kinLastName}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Phone
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.kinPhoneNumber}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold md:text-base text-sm">
                    Full Address
                  </span>
                  <span className="border rounded-md shadow-sm p-2 md:text-base text-sm italic">
                    {formValues?.kinAddress}
                  </span>
                </div>
              </div>
            )}
            {/*documents*/}
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
                {formValues?.proofOfIncome && (
                  <div>
                    <span>Proof of income</span>
                    <a
                      href={URL.createObjectURL(formValues?.proofOfIncome)}
                      target="_blank"
                    >
                      View Proof of income
                    </a>
                  </div>
                )}
                {formValues?.preApprovalDoc && (
                  <div>
                    <span>Pre-approval Doc</span>
                    <a
                      href={URL.createObjectURL(formValues?.preApprovalDoc)}
                      target="_blank"
                    >
                      View Pre-approval Doc
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

export default KycPreview;
