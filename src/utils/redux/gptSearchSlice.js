import { createSlice } from "@reduxjs/toolkit";



const gptSearchSlice = createSlice({
    name: 'gptPage',
    initialState: {
        movieList: null
    },
    reducers: {
        updateResult: (state, action) => {
            state.movieList = action.payload;
        },
        clearSearchResults: (state) => {
            state.movieList = null;
        }
    }

});

export const {updateResult, clearSearchResults} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;