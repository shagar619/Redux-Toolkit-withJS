import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counters/countersSlice";



export const store = configureStore({
     reducer: {
          counters: counterSlice
     }
});