"use client";

import { readLocalStorageValue } from "@mantine/hooks";
import PersonalLoanApplication from "@/components/LoanApplication";
import DashboardLayout from "@/components/layout/dashboard/layout";
import KycPreview from "@/components/kyc/preview";

const Kyc = () => {
  const kycDets = readLocalStorageValue({
    key: "checkout-form",
    defaultValue: null,
  });

  return (
    <DashboardLayout>
      <div className="sm:p-5 p-2">
        {kycDets ? (
          <KycPreview />
        ) : (
          <div>
            <PersonalLoanApplication />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Kyc;
