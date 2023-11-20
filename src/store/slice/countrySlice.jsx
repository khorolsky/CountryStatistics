import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ALL_COUNTRIES } from '../../config';

const initialState = {
    countres: [],
    status: ''
}

export const fetchCountry = createAsyncThunk(
    'countryData/fetch',
    async function () {
        const response = await fetch(ALL_COUNTRIES);

        const data = await response.json();

        return data;
    }
);

console.log(initialState.countres)

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountry.pending, (state) => {
                state.status = 'loading';
                state.countres = [];
            })
            .addCase(fetchCountry.fulfilled, (state, action) => {
                state.countres = action.payload;
                state.status = 'success';
            })
            .addCase(fetchCountry.rejected, (state) => {
                state.status = 'error';
                state.countres = [];
            });
    }
})

// Action creators are generated for each case reducer function
export const { } = countrySlice.actions

export default countrySlice.reducer