import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  component: "",
  subComponent: "",
};

const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setComponent: (state, { payload: component }) => {
      state.component = component;
    },
    setSubComponent: (state, { payload: subComponent }) => {
      state.subComponent = subComponent;
    },
  },
  extraReducers: () => {},
});

export const { setComponent, setSubComponent } = componentSlice.actions;

export default componentSlice.reducer;
