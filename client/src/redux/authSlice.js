import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'https://5120-36-85-109-69.ngrok-free.app/api/users'

const initialState = {
    loadingLogin: false,
    loadingFetch: false,
    isLogin: false,
    user: {},
    token: '',
    error: ''
}

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        const response = await axios({
            method: 'POST',
            url: `${URL}/login`,
            data
        })

        const access_token = response.data.access_token
        localStorage.setItem('access_token', access_token)
        thunkAPI.dispatch(fetchUser(access_token))
        return access_token
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const fetchUser = createAsyncThunk('auth/fetchUser', async (token, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${URL}/account`,
            headers: {
                access_token: token
            }
        })
        return response.data.user
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.clear()
            state.token = ''
            state.isLogin = false
            state.user = {}
        }
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(login.pending, (state) => {
            state.loadingLogin = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loadingLogin = false
            state.token = action.payload
            state.isLogin = true
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loadingLogin = false
            state.error = action.payload
        })
        // fetch
        builder.addCase(fetchUser.pending, (state) => {
            state.loadingFetch = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loadingFetch = false
            state.user = action.payload
            state.isLogin = true
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loadingFetch = false
            state.error = action.payload
        })
    }
})

export default authSlice.reducer
export const { logout } = authSlice.actions