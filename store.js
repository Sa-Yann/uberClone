import { configureStore } from '@reduxjs/toolkit';
import navReducer from './sliceReducer/navSliceRdcr';



export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});
