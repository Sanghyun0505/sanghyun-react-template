import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./count.initial";
import { reducer } from "./count.reducer";

export const countSlice = createSlice({
  name: "countSlice",
  initialState: initialState,
  reducers: reducer,
});

export const { reducer: countReducer, actions: countActions } = countSlice;
