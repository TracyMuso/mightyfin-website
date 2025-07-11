import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  amount: number;
  onBack: () => void;
}

const Card = ({ amount, onBack }: Props) => {
  return (
    <div>
      Card
      <h4>{amount}</h4>
      <div>
        <Button onClick={onBack}>Previous</Button>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default Card;
