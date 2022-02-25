import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "types/types";

const initialState: { profile: Profile | null; isProfileLoading: boolean } = {
  profile: null,
  isProfileLoading: true,
};
export const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, { payload }: PayloadAction<Profile | null>) => {
      state.profile = payload;
    },
    setProfileLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isProfileLoading = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProfile, setProfileLoading } = profile.actions;
export default profile;
