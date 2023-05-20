// import { AddtoCartAction } from "./AddItemSlice";
import { AddtoCartAction } from "./AddItemSlice";
import { toggelCartAction } from "./CartSlice";
//retrive data

export const getCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ecomcart-919c1-default-rtdb.firebaseio.com/ecomcart.json"
      );
      if (!response.ok) {
        throw new Error("Error Fetching Data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartdata = await fetchData();
      console.log(cartdata);
      dispatch(AddtoCartAction.ReplaceCartData(cartdata));
    } catch {
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

//this is a thunk action creator
export const sendCartData = (cartdata, totalQuantity) => {
  return async (dispatch) => {
    dispatch(
      toggelCartAction.showNotification({
        status: "pending",
        title: "Pending...",
        message: "Sending data.. ",
      })
    );
    //create a funtion creator thunk action
    const SendingRequest = async () => {
      const response = await fetch(
        "https://ecomcart-919c1-default-rtdb.firebaseio.com/ecomcart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartdata),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //   const postdata = response.json();
      if (!response.ok) {
        throw new Error("Sending Cart Data Failed");
      }
    };
    try {
      await SendingRequest();
      dispatch(
        toggelCartAction.showNotification({
          status: "success",
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
