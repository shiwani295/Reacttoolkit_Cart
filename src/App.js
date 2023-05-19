import { useSelector } from "react-redux";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header.js";
import Addcart from "./Components/Layout/Addcart";

function App() {
  const isCartShow = useSelector((state) => state.cart.cartIsVisuble);
  return (
    <>
      <Header />
      {isCartShow && <Cart />}
      {/* <Addcartitem /> */}
      <Addcart />
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default App;
