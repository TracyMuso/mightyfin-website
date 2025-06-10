import { checkoutSteps } from "./application/loan-application-steps";
import MultiStepForm from "./steppedForm/steppedForm";

export default function LoanApplication() {
  return (
    <div className="max-w-[808px] shadow-md md:py-10 md:px-12">
      <MultiStepForm steps={checkoutSteps} localStorageKey="checkout-form" />
    </div>
  );
}
