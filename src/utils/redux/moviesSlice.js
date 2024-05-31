import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: null,
        topRated: null,
        tailerID: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addTarilerInfo: (state, action) => {
            state.tailerID = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRated = action.payload
        }
    }
});

export const {addNowPlayingMovies, addTarilerInfo, addTopRatedMovies} = moviesSlice.actions;

export default moviesSlice.reducer;