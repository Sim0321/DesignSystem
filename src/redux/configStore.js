import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import componentSlice from "./slices/componentSlice";
import modalIndexSlice from "./slices/modalIndexSlice";

const reducer = combineReducers({
  componentSlice,
  modalIndexSlice,
});

const store = configureStore({
  reducer,
});

export default store;
