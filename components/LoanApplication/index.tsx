import { checkoutSteps } from "./application/loan-application-steps";
import MultiStepForm from "./steppedForm/steppedForm";

export default function LoanApplication() {
  return (
    <div className="max-w-[808px] mx-auto shadow-md md:py-10 lg:px-12 sm:px-6 px-2">
      <MultiStepForm steps={checkoutSteps} localStorageKey="checkout-form" />
    </div>
  );
}
