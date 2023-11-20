import { configureStore } from '@reduxjs/toolkit'
import countrySlice from './slice/countrySlice'
import sortSlice from './slice/sortSlice'

export const store = configureStore({
    reducer: {
        country: countrySlice,
        sort: sortSlice,
    },
})