import { ZodType } from "zod";
import {
  CombinedCheckoutType,
  CombinedKybType,
} from "@/validators/application-flow.validator";
import { LucideIcon } from "lucide-react";

type FieldKeys = keyof CombinedCheckoutType;
type SmeFieldKeys = keyof CombinedKybType;

export type FormStep = {
  title: string;
  position: number;
  validationSchema: ZodType<unknown>;
  component: React.ReactElement;
  icon: LucideIcon;
  fields: FieldKeys[];
};

export interface MultiStepFormContextProps {
  currentStep: FormStep;
  currentStepIndex: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
  steps: FormStep[];
}

export type SmeFormStep = {
  title: string;
  position: number;
  validationSchema: ZodType<unknown>;
  component: React.ReactElement;
  icon: LucideIcon;
  fields: SmeFieldKeys[];
};

export interface SmeMultiStepFormContextProps {
  currentStep: SmeFormStep;
  currentStepIndex: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
  steps: SmeFormStep[];
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
