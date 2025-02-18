import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  currentEpisode: ''
}

export const currentEpisodeSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    changeCurrentEpisode: (state, action) => {
      state.currentEpisode = action.payload
    }
  }
})

export const {changeCurrentEpisode} =  currentEpisodeSlice.actions
export default currentEpisodeSlice.reducer