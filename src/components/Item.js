import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  //one of two choices use boolean or if else 
  const [cartChange, setcartChange] = useState(false);

  const inCart = cartChange ? "in-cart" : ""
  function cartAdded() {
    setcartChange((cartChange) => !cartChange)
  }


  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartAdded}>{cartChange ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
