import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  component: "",
};

const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setComponent: (state, { payload: component }) => {
      state.component = component;
    },
  },
  extraReducers: () => {},
});

export const { setComponent } = componentSlice.actions;

export default componentSlice.reducer;
