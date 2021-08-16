import  { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    origin: null,
    destination: null,
    travelTimeInfos: null 
}

export const navSlice =  createSlice({
    name: 'nav',
    initialState,
    reducer: {
        // when I dispacth the action setOrigine I update the state of orgine with the action payload
        setOrigin: (state, action) => {
            state.origine = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInfos: (state,action) => {
            state.travelTimeInfos = action.payload;
        }
    },
});

// pushing the information resulting from the actions available for the app to be able to grab when needed
export const { 
    setOrigin,
    setDestination,
    setTravelTimeInfos
}  = navSlice.actions;


// Selctors: allowing the result from the action to get grabed by the app:
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfos = (state) => state.nav.travelTimeInfos;

export default navSlice.reducer