import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
    cartAdded: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartAdded = true;
    },
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { addToCart, increment, decrement} = cartSlice.actions;

export default cartSlice.reducer;
