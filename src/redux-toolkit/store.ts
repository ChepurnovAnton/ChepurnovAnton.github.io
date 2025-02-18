import { configureStore } from "@reduxjs/toolkit";
import { animeApi } from "../API/animeApi";
import currentPage from './slices/currentPageSlice'
import currentEpisode from './slices/currentEpisodeSlice'

export const store = configureStore({
  reducer: {
    [animeApi.reducerPath]: animeApi.reducer,
    currentPage: currentPage,
    currentEpisode : currentEpisode
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

