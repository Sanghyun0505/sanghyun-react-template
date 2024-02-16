import { PayloadAction } from "@reduxjs/toolkit";
import { CountState } from "./count.initial";

export const reducer = {
  COUNT_NUMBER: (state: CountState, actions: PayloadAction<CountState>) => {
    state.number += actions.payload.number;
  },
};
