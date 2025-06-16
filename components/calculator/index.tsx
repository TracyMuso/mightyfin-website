"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/loanCalculator.module.css";
import { Button } from "../button";
import { format, addMonths } from "date-fns";

type LoanType = "Civil servant loan" | "Business loan";
type LoanTerm = 1 | 2 | 3 | 4 | 5 | 6;

const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [loanTerm, setLoanTerm] = useState<LoanTerm>(1);
  const [monthlyRepayment, setMonthlyRepayment] = useState<number>(0);
  const [totalRepayment, setTotalRepayment] = useState<number>(0);
  const [selectedLoanType, setSelectedLoanType] =
    useState<LoanType>("Civil servant loan");

  const getNextRepaymentDate = (): string => {
    return format(addMonths(new Date(), 1), "yyyy-MM-dd");
  };

  // Calculate interest rate based on loan term
  const calculateInterestRate = (term: LoanTerm): number => {
    return 10 + (term - 1) * 5; // 10% for 1 month, +5% for each additional month
  };

  // Calculate repayments whenever loan amount or term changes
  useEffect(() => {
    const interestRate = calculateInterestRate(loanTerm);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const monthlyInterestRate = interestRate / 100 / 12; // Convert annual rate to monthly

    // Calculate monthly payment using simple interest formula
    // For flat rate loans: (Principal + (Principal * Rate * Time)) / Time
    const interestAmount = loanAmount * (interestRate / 100) * (loanTerm / 12);
    const monthlyPayment = (loanAmount + interestAmount) / loanTerm;

    setMonthlyRepayment(monthlyPayment);
    setTotalRepayment(loanAmount + interestAmount);
  }, [loanAmount, loanTerm]);

  // Handle slider change - snap to multiples of 500
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value);
    const roundedValue = Math.round(value / 500) * 500;
    setLoanAmount(roundedValue);
  };

  // Handle direct input change
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value) || 0;
    const roundedValue = Math.round(value / 500) * 500;
    setLoanAmount(Math.min(20000, Math.max(500, roundedValue)));
  };

  // Handle loan type change
  const handleLoanTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedLoanType(e.target.value as LoanType);
  };

  // Handle loan term change
  const handleLoanTermChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setLoanTerm(parseInt(e.target.value) as LoanTerm);
  };

  return (
    <div className={`${styles.calculatorContainer} px-10`}>
      <h3 className="text-purple-700 font-semibold py-5 md:text-3xl text-xl">
        Pick your loan!
      </h3>
      <div className="flex justify-between gap-5 flex-wrap lg:flex-nowrap">
        <div className={`${styles.inputGroup} `}>
          <label htmlFor="loan-type">Product Type</label>
          <select
            name="loan-type"
            id="loan-type"
            className={styles.selectInput}
            value={selectedLoanType}
            onChange={handleLoanTypeChange}
          >
            <option value="Civil servant loan">GRZ Personal Loan</option>
            <option value="Business loan">Smart Biz loan</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="loan-term">Loan Term (months)</label>
          <select
            name="loan-term"
            id="loan-term"
            className={styles.selectInput}
            value={loanTerm}
            onChange={handleLoanTermChange}
          >
            {[1, 2, 3, 4, 5, 6].map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="loan-amount">Loan Amount (ZMW)</label>
          <div className={styles.amountDisplay}>
            {loanAmount.toLocaleString()}
          </div>
          <input
            type="range"
            min="500"
            max="20000"
            step="500"
            value={loanAmount}
            onChange={handleSliderChange}
            className={styles.slider}
            id="loan-amount-slider"
          />
          <input
            type="number"
            min="500"
            max="20000"
            step="500"
            value={loanAmount}
            onChange={handleAmountChange}
            className={styles.amountInput}
          />
        </div>
      </div>
      <div className={styles.results}>
        <div className={styles.resultItem}>
          <span className="text-sm sm:text-[16px]">Monthly Repayment:</span>
          <span className="text-sm sm:text-[16px]">
            K {monthlyRepayment.toFixed(2)}
          </span>
        </div>
        <div className={styles.resultItem}>
          <span className="text-sm sm:text-[16px]">Total Repayment:</span>
          <span className="text-sm sm:text-[16px]">
            K {totalRepayment.toFixed(2)}
          </span>
        </div>
        <div className={`${styles.resultItem}  pb-6`}>
          <span className="text-sm sm:text-[16px]">Next Repayment date:</span>
          <span className="text-sm sm:text-[16px]">
            {getNextRepaymentDate()}
          </span>
        </div>
        <Button variant="primary" text="Apply Now!" />
      </div>
    </div>
  );
};

export default LoanCalculator;
