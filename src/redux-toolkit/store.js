import { configureStore } from "@reduxjs/toolkit";
import { animeApi } from "../API/animeApi";
import currentPage from './slices/currentPageSlice'

export const store = configureStore({
  reducer: {
    [animeApi.reducerPath]: animeApi.reducer,
    currentPage: currentPage
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
})