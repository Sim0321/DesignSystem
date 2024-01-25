import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import componentSlice from "./slices/componentSlice";

const reducer = combineReducers({
  componentSlice,
});

const store = configureStore({
  reducer,
});

export default store;
