import { configureStore } from "@reduxjs/toolkit";
import { auth } from "services/auth/auth";
import profile from "services/profile/profile";
// ...

export const store = configureStore({
  reducer: {
    [auth.name]: auth.reducer,
    [profile.name]: profile.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
