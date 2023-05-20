import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  cartitems: [],
  totalQuantity: 0,
  change: false,
};

const addtoSlice = createSlice({
  name: "Add to cart",
  initialState: initialCartState,
  reducers: {
    ReplaceCartData(state, action) {
      state.cartitems = action.payload;
      console.log(state.cartitems);
      for (let key in action.payload) {
        state.totalQuantity += action.payload[key].quantity;
      }
    },
    AddItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartitems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      state.change = true; ////this is for notification show
      if (!existingItem) {
        state.cartitems.push({
          key: newItem.id,
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalAmount: newItem.price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalAmount = existingItem.price * existingItem.quantity;
      }
    },
    RemoveItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartitems.find((item) => item.id === id.id);
      state.totalQuantity--;
      state.change = false; //this is for notification hide
      if (existingItem.quantity === 1) {
        state.cartitems = state.cartitems.filter((item) => item.id !== id.id);
      } else {
        existingItem.quantity--;
        existingItem.totalAmount = existingItem.price * existingItem.quantity;
      }
    },
  },
});

export const AddtoCartAction = addtoSlice.actions;
export default addtoSlice.reducer;

// if (existingItem.quantity > 1) {
//   existingItem.quantity -= 1;
//   existingItem.totalAmount = existingItem.price * existingItem.quantity;
// } else {
//   // state.totalQuantity -= 1;
//   state.cartitems = state.cartitems.filter((item) => item.id !== id.id);
// }
