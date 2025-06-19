import { useMultiStepForm } from "@/hooks/use-stepped-form";
import { Button } from "../../button";

const PrevButton = () => {
  const { isFirstStep, previousStep } = useMultiStepForm();

  return (
    <Button
      variant="tertiary"
      type="button"
      className="px-4 py-2 w-1/3"
      onClick={previousStep}
      disabled={isFirstStep}
    >
      Previous
    </Button>
  );
};

export default PrevButton;
