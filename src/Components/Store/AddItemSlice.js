import { createSlice } from "@reduxjs/toolkit";
import { toggelCartAction } from "./CartSlice";
const initialCartState = {
  cartitems: [],
  totalQuantity: 0,
};

const addtoSlice = createSlice({
  name: "Add to cart",
  initialState: initialCartState,
  reducers: {
    AddItemToCart(state, action) {
      console.log(action.payload);
      const newItem = action.payload;
      console.log(newItem);
      const existingItem = state.cartitems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
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
      if (existingItem.quantity === 1) {
        state.cartitems = state.cartitems.filter((item) => item.id !== id.id);
      } else {
        existingItem.quantity--;
        existingItem.totalAmount = existingItem.price * existingItem.quantity;
      }
    },
  },
});

//this is a thunk action creator

export const sendCartData = (cartdata) => {
  return async (dispatch) => {
    dispatch(
      toggelCartAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data to backend",
      })
    );

    //create a funtion creator thunk action

    const SendingRequest = async () => {
      const response = await fetch(
        "https://ecomcart-919c1-default-rtdb.firebaseio.com/ecomcart.json",
        {
          method: "POST",
          body: JSON.stringify(cartdata),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending Cart Data Failed");
      }
    };
    try {
      await SendingRequest();
      dispatch(
        toggelCartAction.showNotification({
          status: "Success",
          title: "Success...",
          message: "Data Send Sucessfully ",
        })
      );
    } catch (error) {
      dispatch(
        toggelCartAction.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending  Data Failded ",
        })
      );
    }
  };
};

//retrive data

export const AddtoCartAction = addtoSlice.actions;
export default addtoSlice.reducer;

// if (existingItem.quantity > 1) {
//   existingItem.quantity -= 1;
//   existingItem.totalAmount = existingItem.price * existingItem.quantity;
// } else {
//   // state.totalQuantity -= 1;
//   state.cartitems = state.cartitems.filter((item) => item.id !== id.id);
// }
