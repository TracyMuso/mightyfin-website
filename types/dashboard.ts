import { ZodType } from "zod";
import { CombinedCheckoutType } from "@/validators/application-flow.validator";
import { LucideIcon } from "lucide-react";

export interface OBGDashboard {
  element: string;
  popover: popoverType;
}

interface popoverType {
  title: string;
  description: string;
}

export interface NotificationsType {
  username: string;
  title: string;
  message: string;
  timestamp: string;
  tabIndex?: number;
}

type FieldKeys = keyof CombinedCheckoutType;

export type kycFormStep = {
  title: string;
  position: number;
  validationSchema: ZodType<unknown>;
  component: React.ReactElement;
  icon: LucideIcon;
  fields: FieldKeys[];
};

export interface MultiStepFormContextProps {
  currentStep: kycFormStep;
  currentStepIndex: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
  steps: kycFormStep[];
}

export type SavedFormState = {
  currentStepIndex: number;
  formValues: Record<string, unknown>;
};

export interface FileUploadProps {
  label: string;
  name: string;
  accept?: string;
  onChange: (file: File | null) => void;
}

export interface KYCFormData {
  // Personal Information
  email: string;
  firstName: string;
  lastName: string;
  nrc: string;
  dob: string;
  gender: string;
  town: string;
  province: string;
  address: string;
  phoneNumber: number;

  //employment
  jobTitle: string;
  ministry: string;
  department: string;
  employeeNumber: string;

  // Next of Kin
  kinAddress: string;
  kinFirstName: string;
  kinPhoneNumber: number;
  kinLastName: string;

  // HR Manager
  hrmFirstName: string;
  hrmLastName: string;
  hrmPhoneNumber: number;

  // Supervisor
  supervisorFirstName: string;
  supervisorLastName: string;
  supervisorPhoneNumber: number;

  // Documents
  photo?: File;
  proofOfIncome?: File;
  preApprovalDoc?: File;
  idCopy?: File;
  bankStatement?: File;
  tpin?: File;
}
