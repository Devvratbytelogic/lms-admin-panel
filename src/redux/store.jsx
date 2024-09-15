import { configureStore } from "@reduxjs/toolkit";
import allModalSlice from "./slice/allModalSlice";

export const store = configureStore({
    reducer: {
        allCommonModal: allModalSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    devTools: true
})