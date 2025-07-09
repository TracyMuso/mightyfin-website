import { Button } from "@/components/button";
import { useMultiStepForm } from "@/hooks/use-kyb-stepped-form";

const NextButton = ({
  onClick,
  type,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { isLastStep } = useMultiStepForm();

  return (
    <Button
      className="px-4 py-2 w-1/3"
      variant="secondary"
      type={type ?? "button"}
      onClick={onClick}
      {...rest}
    >
      {isLastStep ? "Submit" : "Next"}
    </Button>
  );
};

export default NextButton;
