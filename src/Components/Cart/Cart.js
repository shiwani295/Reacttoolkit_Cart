import React from "react";
import "../Cart/Cart.css";

const Cart = () => {
  return (
    <div className="cartHeader">
      <div className="cartdata">
        <h5>Your Shopping Cart</h5>
        <div className="cartItem">
          <span>Text Item</span>
          <span style={{ marginLeft: "100px" }}>$18</span>
          <br></br>
          <span style={{ marginLeft: "10px" }}>3x</span>
          <button style={{ marginLeft: "150px" }}>-</button>
          <button style={{ marginLeft: "2px" }}>+</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
