import { configureStore } from '@reduxjs/toolkit';
import navReducer from './sliceReducer/navSliceRdcr.js';



export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
})
