import { type LoanType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  loans: LoanType[] | null;
  activeLoan: LoanType | null;
};
const initailState: initialStateType = {
  loans: null,
  activeLoan: null,
};
const loanSlice = createSlice({
  name: "user",
  initialState: initailState,
  reducers: {
    getLoan: (state, { payload }: { payload: string }) => {
      const findLoanObject = state.loans?.find((loan) => loan.id === payload);
      state.activeLoan = findLoanObject ?? null;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(case, (state) => {});
  },
});

export const { getLoan } = loanSlice.actions;
export default loanSlice.reducer;
