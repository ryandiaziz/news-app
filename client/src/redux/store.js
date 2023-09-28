import { configureStore } from "@reduxjs/toolkit";
import articleReducer from './articleSlice'
import paginationReducer from './paginationSlice'
import authReducer from './authSlice'

const store = configureStore({
    reducer: {
        article: articleReducer,
        pagination: paginationReducer,
        auth: authReducer
    }
})

export default store