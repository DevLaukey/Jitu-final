import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartReducer";
import toggleReducer from "./slices/ProductReducer";


export const store = configureStore({
  reducer: {
    modal: toggleReducer,
    cart: cartReducer
  },
});
