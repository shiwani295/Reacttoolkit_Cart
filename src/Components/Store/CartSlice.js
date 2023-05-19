import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartIsVisuble: false,
  notification: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    togglecart(state) {
      state.cartIsVisuble = !state.cartIsVisuble;
    },
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        status: action.payload.status,
        title: action.payload.title,
      };
    },
  },
});

export const toggelCartAction = cartSlice.actions;
export default cartSlice.reducer;
