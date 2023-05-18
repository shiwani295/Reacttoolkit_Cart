import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartIsVisuble: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    togglecart(state) {
      state.cartIsVisuble = !state.cartIsVisuble;
    },
  },
});

export const toggelCartAction = cartSlice.actions;
export default cartSlice.reducer;
