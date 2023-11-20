import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ALL_COUNTRIES } from '../../config';

const initialState = {
    search: ''
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setSearch } = sortSlice.actions

export default sortSlice.reducer