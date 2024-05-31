import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from "./moviesSlice";
import gptSearchSlice from './gptSearchSlice';
import globalSlice from "./globalSlice";

const appStore = configureStore(
    {
        reducer: {
            global: globalSlice,
            user: userReducer,
            movies: moviesReducer,
            gptPage: gptSearchSlice,
        }
    }
)

export default appStore;