import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        lang: 'en',
        loginLoader: false,
        searchLoader: false,
    },
    reducers: {
        SetLoginLoader: (state) => {
            state.loginLoader = !state.loginLoader;
        },
        setSearchLoader : (state) => {
            state.searchLoader = !state.searchLoader;
        },
        changeLanguage : (state, action) => {
            state.lang = action.payload;
        },
    }
});

export const{SetLoginLoader, setSearchLoader, changeLanguage} = globalSlice.actions
export default globalSlice.reducer;