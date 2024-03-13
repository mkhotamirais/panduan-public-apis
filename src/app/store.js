import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./features/layoutSlice";
import jpReducer from "./features/jsonplaceholder/jpSlice";
import omdbapiReducer from "./features/omdbapi/omdbapiSlice";
import fakestoreapiReducer from "./features/fakestoreapi/fakestoreapiSlice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    jp: jpReducer,
    omdbapi: omdbapiReducer,
    fakestoreapi: fakestoreapiReducer,
  },
});
