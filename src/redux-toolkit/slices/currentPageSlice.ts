import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  currentPage: ''
}

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload
    }
  }
})

export const {changeCurrentPage} =  currentPageSlice.actions
export default currentPageSlice.reducer