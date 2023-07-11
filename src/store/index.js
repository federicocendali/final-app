import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import authReducer from "./auth.reducer";
import placeReducer from "./place.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    place: placeReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
