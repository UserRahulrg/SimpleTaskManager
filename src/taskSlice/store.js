import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./taskSlice";

export let myStore = configureStore({
    reducer : taskSlice.reducer
})