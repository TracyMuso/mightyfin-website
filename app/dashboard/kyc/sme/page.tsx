"use client";

import { readLocalStorageValue } from "@mantine/hooks";
import SmeLoanApplication from "@/components/SmeLoanApplication";
import DashboardLayout from "@/components/layout/dashboard/layout";
import KycPreview from "@/components/kyc/sme-preview";

const Kyc = () => {
  const kycDets = readLocalStorageValue({
    key: "sme-kyc-form",
    defaultValue: null,
  });

  return (
    <DashboardLayout>
      <div className="sm:p-5 p-2">
        {kycDets ? (
          <KycPreview />
        ) : (
          <div>
            <SmeLoanApplication />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Kyc;
