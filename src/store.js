import { configureStore } from "@reduxjs/toolkit";
import post from "./Features/postSlicer";

export const store = configureStore({
  reducer: { postSlicer: post }
});