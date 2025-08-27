/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";

import { Button } from "../button";
import { useState, useEffect } from "react";
import ErrorMessage from "@/components/ui/error-message";
import { useForm } from "react-hook-form";
import { getNextRepaymentDate } from "@/hooks/calculate-loan-details";
import { useLocalStorage } from "@mantine/hooks";
import {
  LoanDetsType,
  LoanDetailsSchema,
} from "@/validators/application-flow.validator";

const ChooseLoan = () => {
  const {
    register,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LoanDetsType>({
    resolver: zodResolver(LoanDetailsSchema),
    defaultValues: {
      loanAmount: 10000,
      loanTermMonths: 1,
      loanType: "Civil Servant Loan",
    },
  });

  const productType = [];

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [loanApplication, setLoanApplication] = useLocalStorage<LoanDetsType>({
    key: "personal-loan-application",
    defaultValue: {
      loanType: "Civil Servant Loan",
      loanAmount: 0,
      loanTermMonths: 0,
    },
  });

  const router = useRouter();

  const handleStepSubmit = async () => {
    const loanType = getValues("loanType");
    const loanAmount = getValues("loanAmount");
    const loanTerm = getValues("loanTermMonths");

    setLoanApplication({
      loanType: loanType,
      loanAmount: loanAmount,
      loanTermMonths: loanTerm,
    });

    if (!loanType) {
      console.error("Please select a loan type");
      return;
    }
    router.push("https://app.mightyfinance.co.zm/");

    // if (loanType === "Civil Servant Loan") {
    //   router.push("/apply/personal-loan");
    // } else if (loanType === "Business Loan") {
    //   router.push("/apply/business-loan");
    // }
  };

  const [monthlyPayment, setMonthlyPayment] = useState<number>(11000);
  const [totalPayment, setTotalPayment] = useState<number>(11000);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [loanProducts, setLoanProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  useEffect(() => {
    const fetchLoanProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("/api/loan-products");
        const products = response.data.data || [];
        setLoanProducts(Array.isArray(products) ? products : []);

        const defaultType = getValues("loanType");
        const defaultProduct = products.find(
          (p: any) => p.name === defaultType
        );

        if (defaultProduct) {
          setSelectedProduct(defaultProduct);
        } else if (products.length > 0) {
          setSelectedProduct(products[0]);
        }
      } catch (err) {
        console.error("Error fetching loan products:", err);
        setError("Failed to load loan products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchLoanProducts();
  }, [getValues]);

  const watchAmount = watch("loanAmount");
  const watchTerm = watch("loanTermMonths");

  useEffect(() => {
    if (!selectedProduct || !watchAmount || !watchTerm) return;

    const interestRate =
      parseFloat(selectedProduct.default_interest_rate) / 100;
    const totalInterestAmount = watchAmount * interestRate;
    const payment = (watchAmount + totalInterestAmount) / watchTerm;

    setMonthlyPayment(parseFloat(payment.toFixed(2)));
    setTotalPayment(parseFloat((watchAmount + totalInterestAmount).toFixed(2)));
    setTotalInterest(parseFloat(totalInterestAmount.toFixed(2)));
  }, [selectedProduct, watchAmount, watchTerm]);

  useEffect(() => {
    if (!selectedProduct) return;

    const minAmount = parseFloat(selectedProduct.minimum_principal);
    const minTerm = parseFloat(selectedProduct.minimum_loan_term);

    if (watchAmount < minAmount) {
      setValue("loanAmount", minAmount);
    }
    if (watchTerm < minTerm) {
      setValue("loanTermMonths", minTerm);
    }
  }, [selectedProduct]);

  return (
    <div className="flex flex-col gap-1 px-12 py-8 mx-auto lg:w-[700px] w-full border rounded-xl shadow-md">
      {loading && <p className="text-gray-500">Loading loan products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-2">
        <fieldset>
          <legend className="font-semibold">Loan Type</legend>
          <div className="flex flex-col items-start gap-3 pt-2">
            {Array.isArray(loanProducts) && loanProducts.length > 0 ? (
              loanProducts.map((product) => (
                <div key={product.id} className="flex items-center">
                  <input
                    id={`loan-${product.id}`}
                    type="radio"
                    value={product.name}
                    {...register("loanType")}
                    onChange={() => setSelectedProduct(product)}
                    className="h-4 w-4 text-primary focus:ring-primary"
                  />
                  <label htmlFor={`loan-${product.id}`} className="pl-2">
                    {product.name}
                  </label>
                </div>
              ))
            ) : (
              <div className="text-gray-500">
                {loading ? "Loading loan types..." : "No loan products available"}
              </div>
            )}
          </div>
        </fieldset>

        <ErrorMessage message={errors.loanType?.message} />
      </div>
      <div>
        <label className="font-semibold">Amount</label>
        <Input
          type="number"
          min={
            selectedProduct
              ? parseFloat(selectedProduct.minimum_principal)
              : undefined
          }
          max={
            selectedProduct
              ? parseFloat(selectedProduct.maximum_principal)
              : undefined
          }
          {...register("loanAmount", {
            valueAsNumber: true,
            validate: (value) => {
              if (!selectedProduct) return "Please select a loan type";
              if (value < parseFloat(selectedProduct.minimum_principal))
                return `Minimum amount is ${selectedProduct.minimum_principal}`;
              if (value > parseFloat(selectedProduct.maximum_principal))
                return `Maximum amount is ${selectedProduct.maximum_principal}`;
              return true;
            },
          })}
        />
        <ErrorMessage message={errors.loanAmount?.message} />
      </div>

      <div>
        <label className="font-semibold">Duration (Months)</label>
        <Input
          type="number"
          min={
            selectedProduct
              ? parseFloat(selectedProduct.minimum_loan_term)
              : undefined
          }
          max={
            selectedProduct
              ? parseFloat(selectedProduct.maximum_loan_term)
              : undefined
          }
          {...register("loanTermMonths", {
            valueAsNumber: true,
            validate: (value) => {
              if (!selectedProduct) return "Please select a loan type";
              if (value < parseFloat(selectedProduct.minimum_loan_term))
                return `Minimum term is ${selectedProduct.minimum_loan_term} months`;
              if (value > parseFloat(selectedProduct.maximum_loan_term))
                return `Maximum term is ${selectedProduct.maximum_loan_term} months`;
              return true;
            },
          })}
        />
        <ErrorMessage message={errors.loanTermMonths?.message} />
      </div>

      <div className="flex sm:flex-row flex-col gap-2 sm:gap-0 items-start sm:items-center w-full justify-between pb-4">
        <div className="flex flex-row sm:flex-col justify-between w-full sm:w-auto">
          <span className="text-primary sm:text-[17px] text-sm">
            Payback amount
          </span>
          <p className="sm:text-[15px] text-[12px]">{totalPayment}</p>
        </div>
        <div className="flex flex-row sm:flex-col justify-between w-full sm:w-auto">
          <span className="text-primary sm:text-[17px] text-sm">
            Monthly deduction
          </span>
          <p className="sm:text-[15px] text-[12px]">{monthlyPayment}</p>
        </div>
        <div className="flex flex-row sm:flex-col justify-between w-full sm:w-auto">
          <span className="text-primary sm:text-[17px] text-sm">
            Next Payment date
          </span>
          <p className="sm:text-[15px] text-[12px]">{getNextRepaymentDate()}</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <Button variant="secondary" text="proceed" onClick={handleStepSubmit} />
      </div>
    </div>
  );
};

export default ChooseLoan;
