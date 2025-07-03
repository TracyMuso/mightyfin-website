import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Withdrawals", "Repayments", "Disbursements"],
  ["March", 0, 0, 20000],
  ["April", 11700, 0, 0],
  ["May", 8300, 0, 0],
  ["June", 0, 1400, 0],
  ["July", 0, 1000, 0],
  ["Aug", 0, 1600, 0],
  ["Sept", 0, 500, 0],
  ["Oct", 0, 1500, 0],
  ["Nov", 0, 2500, 0],
  ["Dec", 0, 3000, 0],
];

export const options = {
  chart: {
    title: "Loan history",
    subtitle: "Transactions: 2023-Present",
  },
};

export function TransactionChart() {
  return (
    <Chart
      chartType="Bar"
      width="680px"
      height="400px"
      data={data}
      options={options}
    />
  );
}
