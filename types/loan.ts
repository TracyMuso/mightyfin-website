import { ZodType } from "zod";
import { CombinedCheckoutType } from "@/validators/application-flow.validator";
import { LucideIcon } from "lucide-react";

type FieldKeys = keyof CombinedCheckoutType;

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

export type SavedFormState = {
  currentStepIndex: number;
  formValues: Record<string, unknown>;
};
