import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  amount: number;
  onBack: () => void;
  onSubmit: () => void;
}

const Card = ({ amount, onBack, onSubmit }: Props) => {
  return (
    <div>
      Card
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

export default Card;
