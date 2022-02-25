import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppUser } from "types/types";

const initialState: { user: AppUser | null } = { user: null };
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, { payload }: PayloadAction<AppUser | null>) => {
      state.user = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = auth.actions;
export default auth;
