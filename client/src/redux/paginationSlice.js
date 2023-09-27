import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
    postPerPage: 15,
    lastPostIndex: 15,
    firstPostIndex: 0,
    count: 0,
    post: 0
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setpagination: (state, action) => {
            state.post = action.payload.slice(state.firstPostIndex, state.lastPostIndex)
            state.count = Math.ceil(action.payload.length / state.postPerPage)
        },
        updatepagination: (state, action) => {
            state.currentPage = action.payload.number
            state.lastPostIndex = state.currentPage * state.postPerPage
            state.firstPostIndex = state.lastPostIndex - state.postPerPage
            state.post = action.payload.articles.slice(state.firstPostIndex, state.lastPostIndex)
        }
    }
})

export default paginationSlice.reducer
export const { setpagination, updatepagination } = paginationSlice.actions