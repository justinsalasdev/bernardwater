import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "types/types";

const initialState: Product[] = [];
export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (_, { payload }: PayloadAction<Product[]>) => payload,
  },
});

// Action creators are generated for each case reducer function
export const { updateProducts } = products.actions;
export default products;
