// panelViewSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define the initial state
const initialState = {
  viewMode: "left", // Possible values: 'left', 'right', 'split'
};

// Create the slice
export const panelViewSlice = createSlice({
  name: "panelView",
  initialState,
  reducers: {
    setLeftPanelOnly: (state) => {
      state.viewMode = "left";
    },
    setRightPanelOnly: (state) => {
      state.viewMode = "right";
    },
    setSplitView: (state) => {
      state.viewMode = "split";
    },
    togglePanelView: (state) => {
      // Cycle through views: left -> split -> right -> left
      if (state.viewMode === "left") {
        state.viewMode = "split";
      } else if (state.viewMode === "split") {
        state.viewMode = "right";
      } else {
        state.viewMode = "left";
      }
    },
  },
});

// Export actions
export const {
  setLeftPanelOnly,
  setRightPanelOnly,
  setSplitView,
  togglePanelView,
} = panelViewSlice.actions;

// Selectors
export const selectViewMode = (state: RootState) => state.panelView.viewMode;

// Export reducer
export default panelViewSlice.reducer;
