import { combineReducers } from "redux";
import { countReducer } from "./count";
import { configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({ count: countReducer });
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({ reducer: rootReducer });

export default store;
