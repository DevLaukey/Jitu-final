import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		count: 0,
		cartAdded: false,
		bookmarkCount: 0,
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
		addBookmark: (state) => {
			state.bookmarkCount++;
		},
		removeBookmark: (state) => {
			state.bookmarkCount--;
		},
	},
});

export const { addToCart, increment, decrement, addBookmark, removeBookmark } = cartSlice.actions;

export default cartSlice.reducer;
