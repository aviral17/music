import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { shazamCoreApi } from "./services/shazamCore";

// https://redux-toolkit.js.org/rtk-query/overview
// using Middleware as we are using createApi for shazamCoreApi

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

// middleware is used in this code to handle asynchronous actions in a convenient way, specifically for handling the API requests and responses using the shazamCoreApi.
// This middleware allows the Redux store to handle asynchronous actions triggered by the createApi endpoints defined in shazamCoreApi.
