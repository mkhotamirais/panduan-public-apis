import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://fakestoreapi.com";

export const getProducts = createAsyncThunk("product/getProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${url}/products`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error?.response?.data?.message || error?.message);
  }
});

const fakestoreapiSlice = createSlice({
  name: "fakestoreapi",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default fakestoreapiSlice.reducer;
