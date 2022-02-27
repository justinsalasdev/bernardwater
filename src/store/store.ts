import { configureStore } from "@reduxjs/toolkit";
import { auth } from "services/auth/auth";
import profile from "services/profile/profile";
import products from "services/products/products";
// ...

export const store = configureStore({
  reducer: {
    [auth.name]: auth.reducer,
    [profile.name]: profile.reducer,
    [products.name]: products.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
