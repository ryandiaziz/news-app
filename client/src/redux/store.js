import { configureStore } from "@reduxjs/toolkit";
import articleReducer from './articleSlice'
import paginationReducer from './paginationSlice'

const store = configureStore({
    reducer: {
        article: articleReducer,
        pagination: paginationReducer
    }
})

export default store