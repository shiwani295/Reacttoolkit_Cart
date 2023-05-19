import React from "react";
import Addcartitem from "./Addcartitem";
const DUMMYProduct = [
  {
    id: 1,
    name: "Product 1",
    price: 200,
    description: "I first  ",
    quantity: 4,
  },
  {
    id: 2,
    name: "Product 2",
    price: 300,
    description: "I second  ",
    quantity: 5,
  },
];
const Addcart = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add To Cart</h1>
      <div className="row">
        {DUMMYProduct.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Addcartitem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addcart;
