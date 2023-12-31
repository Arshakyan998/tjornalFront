import { configureStore } from "@reduxjs/toolkit";
// import getUser from "./GetUser";
import { setupListeners } from "@reduxjs/toolkit/query";
import userSlice from "./User/UserSlice";
import Posts from "./Posts";

export const store = configureStore({
  reducer: {
    // [getUser.reducerPath]: getUser.reducer,
    [userSlice.name]: userSlice.reducer,
    [Posts.reducerPath]: Posts.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Posts.middleware),
  //   getDefaultMiddleware().concat(getUser.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
