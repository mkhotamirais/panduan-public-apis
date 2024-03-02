import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "header",
  initialState: {
    isSidebarOpen: false,
    // tab: "posts",
    tab: JSON.parse(localStorage.getItem("activeTabName")),
  },
  reducers: {
    setSidebarOpen(state, action) {
      state.isSidebarOpen = action.payload;
    },
    setTab(state, action) {
      state.tab = action.payload;
      localStorage.setItem("activaTabName", JSON.stringify(action.payload));
      console.log(state.tab);
    },
  },
});

export const { setSidebarOpen, setTab } = layoutSlice.actions;

export default layoutSlice.reducer;
