import React, { useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
//Step 1: Create Cart component and pass the component to App.js
function Cart({ initialItems }) {
  //Step 13: Level up and create a useState to increment and decrement to get the grand total and set useState to initialItems and change the same in .reduce and .map method from initialItems to items.reduce and items.map
  const [items, setItems] = useState(initialItems);
  //Step 14: Pass down a function from Cart component to child component
  const updateQty = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };
  //Step 11: Create a GrandTotal function using the .reduce method
  const grandTotal = items
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);
  return (
    <div className="Cart">
      <h1 className="Cart-title">Shopping Cart</h1>
      <div className="Cart-items">
        {/* Step 3: Individually Map over the array object by li  */}
        {items.map((item) => (
          // Step 6 : Pass through each piece of item of the items array object
          //Step 15: Pass the updateQty function to child component
          <CartItem key={item.id} updateQty={updateQty} {...item} />
          // Step 9: Pass unique key value to items
          //One more method to pass thru each piece of item
          // <CartItem id={item.id}
          // name={item.name} so on & so forth else use spread operator like above/>
          // <li>
          //   Name:{item.name}
          //   Price:{item.price}
          //   Quantity:{item.qty}
          // </li>
        ))}
      </div>
      {/* Step 10: Add Grand Total of all the products */}
      <h2 className="Cart-total">Grand Total : $ {grandTotal}</h2>
    </div>
  );
}

export default Cart;
