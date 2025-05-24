import { type User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  user: User | null;
  authLoading: boolean;
  isLogged: boolean;
};
const initailState: initialStateType = {
  user: null,
  authLoading: false,
  isLogged: false,
};
const userSlice = createSlice({
  name: "user",
  initialState: initailState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLogged = false;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(case, (state) => {});
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
