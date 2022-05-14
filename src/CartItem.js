import React from "react";
import "./CartItem.css";
//Step 5: Create a CartItem component to remove the li from the cart component
function CartItem({ id, name, price, qty, updateQty }) {
  // Step 7: Destructuring of props in CartItem()
  // Step 16: Create a function to add and remove and the addOne function will call the Parent function
  const addOne = () => {
    updateQty(id, qty + 1);
  };
  const subtractOne = () => {
    updateQty(id, qty - 1);
  };
  return (
    <div className="CartItem">
      {/* Step 8 : Display the name, price , Quantity,Individual Total  */}
      <div>{name}</div>
      <div>$ {price}</div>
      {/* Step 12: Add and Increment and Decrement Button for the qty  */}
      <div>
        {/* Step 17: Add a disable attribute */}
        <button onClick={subtractOne} disabled={qty < 1}>
          -
        </button>
        {qty}
        <button onClick={addOne}>+</button>
      </div>
      <div>Total: $ {qty * price}</div>
    </div>
  );
}

export default CartItem;
