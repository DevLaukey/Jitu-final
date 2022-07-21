import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartReducer";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});
