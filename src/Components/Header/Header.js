import React from "react";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggelCartAction } from "../Store/CartSlice";
const Header = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(
    (state) => state.additemToCart.totalQuantity
  );
  console.log(totalQuantity);
  const toggelCartHandler = () => {
    dispatch(toggelCartAction.togglecart());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {/* {isauth && ( */}
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={toggelCartHandler}>Cart ({totalQuantity})</button>
          </li>
        </ul>
      </nav>
      {/* )} */}
    </header>
  );
};

export default Header;
