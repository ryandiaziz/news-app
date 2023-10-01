import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { setpagination } from './paginationSlice'

const URL = 'https://yonews-api.vercel.app/api/articles'
// const URL = 'http://localhost:5000/api/articles'

const initialState = {
    loading: false,
    articles: [],
    error: ''
}

export const fetchArticles = createAsyncThunk('article/fetchArticles', async (data, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${URL}?country=${data.country}&category=${data.category}`
        })
        thunkAPI.dispatch(setpagination(response.data.articles))
        return response.data.articles
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const searchArticles = createAsyncThunk('article/searchArticles', async (data, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${URL}/search?country=${data.country}&category=${data.category}&q=${data.q}`
        })
        thunkAPI.dispatch(setpagination(response.data.articles))
        return response.data.articles
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const articleSlice = createSlice({
    name: 'article',
    initialState,
    extraReducers: (builder) => {
        // fetch
        builder.addCase(fetchArticles.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            state.loading = false
            state.articles = action.payload
        })
        builder.addCase(fetchArticles.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        // search
        builder.addCase(searchArticles.pending, (state) => {
            state.loading = true
        })
        builder.addCase(searchArticles.fulfilled, (state, action) => {
            state.loading = false
            state.articles = action.payload
        })
        builder.addCase(searchArticles.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default articleSlice.reducer