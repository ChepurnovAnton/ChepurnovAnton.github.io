// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.anilibria.tv/v3/' }),
  endpoints: (builder) => ({
    getAnime: builder.query({
      query: (page = '') => `title/updates?page=${page}&limit=30`,
    }),
    searchAnime: builder.query({
      query: (name = '') => `title/search?search=${name}`,
    }),
    getOneAnime : builder.query({
      query: (id) => `title?code=${id}&playlist_type=array`
    })
  }),
})

export const { useGetAnimeQuery, useSearchAnimeQuery, useGetOneAnimeQuery} = animeApi;