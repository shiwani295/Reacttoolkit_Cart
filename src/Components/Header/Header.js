import React from "react";
import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { toggelCartAction } from "../Store/CartSlice";
const Header = () => {
  const dispatch = useDispatch();

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
            <button onClick={toggelCartHandler}>Cart (1)</button>
          </li>
        </ul>
      </nav>
      {/* )} */}
    </header>
  );
};

export default Header;
