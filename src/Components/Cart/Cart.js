import React from "react";
import "../Cart/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { AddtoCartAction } from "../Store/AddItemSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItemData = useSelector((state) => state.additemToCart.cartitems);
  console.log(cartItemData);
  const sum = cartItemData.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.totalAmount;
  }, 0);

  const removeCartItem = (item) => {
    dispatch(AddtoCartAction.RemoveItemToCart(item));
  };
  const AddCartItem = (item) => {
    dispatch(AddtoCartAction.AddItemToCart(item));
  };
  return (
    <div className="cartHeader">
      <div className="cartdata">
        <h5>Your Shopping Cart</h5>
        <div className="cartItem" key={cartItemData.id}>
          {cartItemData.map((itemscart) => {
            return (
              <div className="cartItem" key={itemscart.id}>
                <span className="name">{itemscart.name}</span>
                <span style={{ marginLeft: "227px" }} className="price">
                  {itemscart.price}
                </span>
                <br></br>
                <span style={{ marginRight: "76px" }} className="quanlity">
                  {itemscart.quantity}
                </span>

                <button
                  style={{ marginLeft: "198px" }}
                  onClick={() => removeCartItem(itemscart)}
                >
                  -
                </button>
                <button
                  style={{ marginLeft: "2px" }}
                  onClick={() => AddCartItem(itemscart)}
                >
                  +
                </button>
                <br></br>
                <br></br>
                <span style={{ marginLeft: "195px" }} className="quanlity">
                  Total Amount-{itemscart.totalAmount}
                </span>
                <hr></hr>
              </div>
            );
          })}
          {/* <hr></hr> */}
          <span style={{ marginLeft: "195px" }} className="quanlity">
            Total Sum - {sum.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Cart;
