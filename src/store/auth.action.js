import { createAsyncThunk } from "@reduxjs/toolkit";

import { authTypes } from "./auth.types";
import { FIREBASE_AUTH_SIGN_IN_URL, FIREBASE_AUTH_SIGN_UP_URL } from "../utils/firebase";

const {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  CLEAR_ERROR,
} = authTypes;

export const signUp = createAsyncThunk("auth/signUp", async ({ email, password }) => {
  const response = await fetch(FIREBASE_AUTH_SIGN_UP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();

  return {
    token: data.idToken,
    userId: data.localId,
  };
});

export const signIn = createAsyncThunk("auth/signIn", async ({ email, password }) => {
  const response = await fetch(FIREBASE_AUTH_SIGN_IN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message);
  }

  return {
    token: data.idToken,
    userId: data.localId,
  };
});

export const clearError = () => {
  return { type: CLEAR_ERROR };
};
