import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  loading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    updateLoadingState: (state, { payload }) => {
      state.loading = payload;
    }
  },
});

export const { reducer } = appSlice;
export const { updateLoadingState  } = appSlice.actions;
