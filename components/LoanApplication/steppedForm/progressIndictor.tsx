import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useMultiStepForm } from "@/hooks/use-kyc-stepped-form";
import { checkoutSteps } from "../application/loan-application-steps";

export default function ProgressIndicator() {
  const { currentStep, goToStep, currentStepIndex } = useMultiStepForm();

  return (
    <div className="flex items-center px-4 py-5">
      <div className="w-full space-y-8">
        <div className="relative flex justify-between">
          {/* Progress Line */}
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200">
            <motion.div
              className="h-full bg-white border-secondary border"
              initial={{ width: "0%" }}
              animate={{
                width: `${(currentStepIndex / (checkoutSteps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
          {/* Steps */}
          {checkoutSteps.map((step) => {
            const isCompleted = currentStepIndex > step.position - 1;
            const isCurrent = currentStepIndex === step.position - 1;

            return (
              <div key={step.position} className="relative z-10">
                <motion.button
                  onClick={() => goToStep(step.position)}
                  className={`flex sm:size-12 size-6 items-center justify-center rounded-full border-2 ${
                    isCompleted || isCurrent
                      ? "bg-secondary border border-secondary text-white"
                      : "border-gray-200 bg-white text-gray-400"
                  }`}
                  initial={false}
                  animate={{
                    scale: isCurrent ? 1.1 : 1,
                    transition: { type: "spring", stiffness: 500, damping: 30 },
                  }}
                >
                  {isCompleted ? (
                    <Check className="sm:size-6 size-4" />
                  ) : (
                    <div className="sm:size-6 size-4 text-[10px] sm:text-[16px]">
                      {step.position}
                    </div>
                  )}
                </motion.button>
              </div>
            );
          })}
        </div>

        {/* Screen reader progress */}
        <div className="sr-only" role="status" aria-live="polite">
          {`Step ${currentStep.position} of ${checkoutSteps.length}: ${currentStep.title}`}
        </div>
      </div>
    </div>
  );
}
