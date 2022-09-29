import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {

    }
})

export default authSlice.reducer;