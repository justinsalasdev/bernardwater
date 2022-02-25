import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "types/types";

const initialState: Product[] = [];
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateProducts: (state, { payload }: PayloadAction<Product[]>) => {
      state = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProducts } = auth.actions;
export default auth;
