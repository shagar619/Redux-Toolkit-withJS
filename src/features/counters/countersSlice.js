import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
]


export const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action.payload);

      const counterIndex = state.findIndex((c) => c.id === action.payload);
      console.log(counterIndex);

      state[counterIndex].value++;
    },

    decrement: (state, action) => {

      const counterIndex = state.findIndex((c) => c.id === action.payload);

      state[counterIndex].value--;
    },
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
