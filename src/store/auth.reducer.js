import { createSlice } from "@reduxjs/toolkit";

import { authTypes } from "./auth.types";

const {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CLEAR_ERROR,
} = authTypes;

const initialState = {
  isLoading: false,
  error: null,
  token: null,
  userId: null,
  hasError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SIGN_UP_REQUEST, (state) => {
        state.isLoading = true;
      })
      .addCase(SIGN_UP_SUCCESS, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.error = null;
        state.hasError = false;
      })
      .addCase(SIGN_UP_FAILURE, (state, action) => {
        state.isLoading = false;
        state.token = null;
        state.userId = null;
        state.error = action.payload;
        state.hasError = true;
      })
      .addCase(SIGN_IN_REQUEST, (state) => {
        state.isLoading = true;
      })
      .addCase(SIGN_IN_SUCCESS, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.error = null;
        state.hasError = false;
      })
      .addCase(SIGN_IN_FAILURE, (state, action) => {
        state.isLoading = false;
        state.token = null;
        state.userId = null;
        state.error = action.payload;
        state.hasError = true;
      })
      .addCase(CLEAR_ERROR, (state) => {
        state.error = null;
        state.hasError = false;
      });
  },
});

export default authSlice.reducer;
