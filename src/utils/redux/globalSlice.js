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
        }
    }
});

export const{SetLoginLoader, setSearchLoader} = globalSlice.actions
export default globalSlice.reducer;