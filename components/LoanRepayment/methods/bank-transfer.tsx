import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  amount: number;
  onBack: () => void;
  onSubmit: () => void;
}

const BankTransfer = ({ amount, onBack, onSubmit }: Props) => {
  return (
    <div>
      <h4>{amount}</h4>
      <div>
        <Button onClick={onBack}>Previous</Button>
        <Button type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default BankTransfer;
