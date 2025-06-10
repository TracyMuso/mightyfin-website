import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { Button } from "../../button";

const PrevButton = () => {
  const { isFirstStep, previousStep } = useMultiStepForm();

  return (
    <Button
      variant="tertiary"
      type="button"
      className="mt-5"
      onClick={previousStep}
      disabled={isFirstStep}
    >
      Previous
    </Button>
  );
};

export default PrevButton;
