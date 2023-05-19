import React from "react";
import "../Cart/Cart.css";
import { useDispatch } from "react-redux";
import { AddtoCartAction } from "../Store/AddItemSlice";
const Addcartitem = (props) => {
  const dispatch = useDispatch();

  const AddtoCartHandler = (e) => {
    e.preventDefault();
    dispatch(
      AddtoCartAction.AddItemToCart({
        id: props.item.id,
        name: props.item.name,
        price: props.item.price,
        quantity: props.item.quantity,
      })
    );
  };

  return (
    <>
      <div className="cartHeader">
        <div className="AddToCart">
          <h5>Buy your Fav Product</h5>
          <div className="cartItem">
            <div>
              <span className="title">{props.item.name}</span>
              <span style={{ marginLeft: "100px" }}>
                ${props.item.price.toFixed(2)}
              </span>
              <br></br>
              <span style={{ marginLeft: "47px" }}>
                {props.item.description}
              </span>
              <button
                style={{ marginLeft: "157px" }}
                onClick={AddtoCartHandler}
              >
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcartitem;
