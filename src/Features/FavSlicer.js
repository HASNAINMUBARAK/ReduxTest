import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const CartSlice = createSlice({
  name: "cart",
  initialState,
  //   pure function it change state , it take state and action
  reducers: {
    add(state, action) {
      state.push(action.payload);
      // here this is allow to directly mutate  state b/c it is inside createSlice, if it is outside it is not allow
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;