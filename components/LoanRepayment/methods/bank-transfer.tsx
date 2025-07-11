import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  amount: number;
  onBack: () => void;
}

const BankTransfer = ({ amount, onBack }: Props) => {
  return (
    <div>
      <h4>{amount}</h4>
      <div>
        <Button onClick={onBack}>Previous</Button>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default BankTransfer;
