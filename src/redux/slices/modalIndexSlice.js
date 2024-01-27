import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
};

const modalIndexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    setIndex: (state, { payload: index }) => {
      state.index = index;
    },
  },
  extraReducers: () => {},
});

export const { setIndex } = modalIndexSlice.actions;

export default modalIndexSlice.reducer;
