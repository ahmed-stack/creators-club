import { createSlice } from "@reduxjs/toolkit";

// Local Imports
import { initialModState } from "client/store/states/modInitialState";

const modSlice = createSlice({
  name: "mod",
  initialState: initialModState,
  reducers: {
    setModsList: (state, { payload }) => {
      state.modsList = payload;
    },
    setModDetails: (state, { payload }) => {
      state.modDetails = payload;
    },
  },
});

export const { reducer } = modSlice;
export const { setModsList, setModDetails } = modSlice.actions;
