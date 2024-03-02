import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jpUrl } from "../../../../config/constants";

export const getPosts = createAsyncThunk("jp/getPosts", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${jpUrl}/posts`);
    return res.data;
  } catch (error) {
    return rejectWithValue(error?.response?.message || error?.message);
  }
});

export const postPost = createAsyncThunk("jp/postPost", async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${jpUrl}/posts`, data);
    return res.data;
  } catch (error) {
    return rejectWithValue(error?.response?.message || error?.message);
  }
});

export const updatePost = createAsyncThunk("jp/updatePost", async (data, { rejectWithValue }) => {
  try {
    const res = await axios.patch(`${jpUrl}/posts/${data.id}`, data);
    return res.data;
  } catch (error) {
    return rejectWithValue(error?.response?.message || error?.message);
  }
});

export const deletePosts = createAsyncThunk("jp/deletePosts", async (data, { rejectWithValue }) => {
  try {
    const res = await axios.delete(`${jpUrl}/posts/${data.id}`);
    return res.data;
  } catch (error) {
    return rejectWithValue(error?.response?.message || error?.message);
  }
});

export const getUsers = createAsyncThunk("jp/getUsers", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${jpUrl}/users`);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.message);
  }
});

const jpSlice = createSlice({
  name: "jp",
  initialState: {
    posts: null,
    users: null,
    isLoading: null,
    isSuccess: null,
    isError: null,
    error: null,
  },

  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(deletePosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePosts.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deletePosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(postPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postPost.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(postPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default jpSlice.reducer;
