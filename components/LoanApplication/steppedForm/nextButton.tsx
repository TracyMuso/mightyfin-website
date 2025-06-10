import { Button } from "@/components/button";
import { useMultiStepForm } from "@/hooks/use-stepped-form";

const NextButton = ({
  onClick,
  type,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { isLastStep } = useMultiStepForm();

  return (
    <Button
      className="text-white bg-yellow-500 border-none hover:bg-yellow-400 active:bg-yellow-300 transition-colors py-5"
      type={type ?? "button"}
      onClick={onClick}
      {...rest}
    >
      {isLastStep ? "Submit" : "Next"}
    </Button>
  );
};

export default NextButton;
