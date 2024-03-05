import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "header",
  initialState: {
    isSidebarOpen: false,
  },
  reducers: {
    setSidebarOpen(state, action) {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setSidebarOpen } = layoutSlice.actions;

export default layoutSlice.reducer;
