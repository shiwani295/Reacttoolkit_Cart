import { useSelector } from "react-redux";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header.js";

function App() {
  const isCartShow = useSelector((state) => state.cart.cartIsVisuble);
  console.log(isCartShow);
  return (
    <>
      <Header />
      {isCartShow && <Cart />}
    </>
  );
}

export default App;
