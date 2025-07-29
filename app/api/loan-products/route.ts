import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      "https://api.mightyfinance.co.zm/api/v1/loan-products"
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching loan products:", error);
    return NextResponse.json(
      { message: "Failed to fetch loan products" },
      { status: 500 }
    );
  }
}
