import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { omdbUrl } from "../../../../config/constants";

export const getMovies = createAsyncThunk("omdbapi/getFilms", async (param) => {
  const res = await axios.get(`${omdbUrl}${param}`);
  return res.data;
});

export const getMovieByImdb = createAsyncThunk("omdbapi/getMovieByImdb", async (i) => {
  const res = await axios.get(`${omdbUrl}i=${i}`);
  return res.data;
});

const omdbapiSlice = createSlice({
  name: "omdbapi",
  initialState: {
    data: null,
    dataImdb: null,
    status: "idle",
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getMovieByImdb.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dataImdb = action.payload;
      });
  },
});

export default omdbapiSlice.reducer;
