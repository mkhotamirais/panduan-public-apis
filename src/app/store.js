import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./features/layoutSlice";
import jpReducer from "./features/jsonplaceholder/jpSlice";
import omdbapiReducer from "./features/omdbapi/omdbapiSlice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    jp: jpReducer,
    omdbapi: omdbapiReducer,
  },
});
