import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import addtoSlice from "./AddItemSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    additemToCart: addtoSlice,
  },
});
export default store;
