import React from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { OnboardingGuideSteps } from "../../constants/data/dashboard";

/**
 * guide element ids
 * 1. #apply-for-loan
 * 2. #track-loan
 * 3. #Notifications
 * 4. #current-loan
 * 5. #loan-deduction
 * 6. #repay-loan
 * 7. #payment-progress
 * 8. #withdraw-amount
 */

const driverObj = driver({
  showButtons: ["next", "close"],
  nextBtnText: "Next",
  doneBtnText: "Done",
  popoverClass: "onboarding-user-guide",
  steps: OnboardingGuideSteps,
});

function startTour() {
  driverObj.drive();
}

export default function GuideButton() {
  return (
    <div>
      <button className="border" onClick={startTour}>
        Start guide
      </button>
    </div>
  );
}
