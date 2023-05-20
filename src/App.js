import { useDispatch, useSelector } from "react-redux";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header.js";
import Addcart from "./Components/Layout/Addcart";
import { useEffect } from "react";
import Notification from "./Components/Layout/Notification";
import { sendCartData } from "./Components/Store/AddItemSlice";
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isCartShow = useSelector((state) => state.cart.cartIsVisuble);
  const cartdata = useSelector((state) => state.additemToCart.cartitems);
  const notify = useSelector((state) => state.cart.notification);
  useEffect(() => {
    //this is for nofication show or not
    if (isInitial) {
      isInitial = false;
      return;
    }
    //this dipatch funtion sendcartdata create inside additemSclice
    dispatch(sendCartData(cartdata));
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
