import { useDispatch, useSelector } from "react-redux";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header.js";
import Addcart from "./Components/Layout/Addcart";
import { useEffect } from "react";
import { toggelCartAction } from "./Components/Store/CartSlice";
import Notification from "./Components/Layout/Notification";
import { AddtoCartAction } from "./Components/Store/AddItemSlice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isCartShow = useSelector((state) => state.cart.cartIsVisuble);
  const cartdata = useSelector((state) => state.additemToCart.cartitems);
  const notify = useSelector((state) => state.cart.notification);
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        toggelCartAction.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data to backend",
        })
      );
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
      // /const responseData = response.json();
      dispatch(
        toggelCartAction.showNotification({
          status: "Success",
          title: "Success...",
          message: "Data Send Sucessfully ",
        })
      );
    };
    //this is fot he error show if we are not send error
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        toggelCartAction.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending  Data Failded ",
        })
      );
    });
  }, [cartdata, dispatch]);

  return (
    <>
      {notify && (
        <Notification
          message={notify.message}
          status={notify.status}
          title={notify.title}
        />
      )}
      <Header />
      {isCartShow && <Cart />}
      <Addcart />
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default App;
