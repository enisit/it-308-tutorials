import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isAuthenticated: boolean;
  userId: string;
  token: string;
};

const initialState: AuthState = {
  isAuthenticated: false,
  userId: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ userId: string; token: string }>
    ) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = "";
      state.userId = "";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
