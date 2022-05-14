import { configureStore } from "@reduxjs/toolkit";
import post from "./Features/postSlicer";
import CartReducer from "./Features/FavSlicer";
export const store = configureStore({
  reducer: {
    postSlicer: post,
    cart: CartReducer,
  },
});
