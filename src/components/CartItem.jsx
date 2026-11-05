// Purpose: Renders a single row in the cart (item details, quantity controls (+/-), line total, and remove button)[cite: 81].
// Note: This is a "presentational component"—it owns NO state of its own; it receives data via props and reports user actions up to the parent[cite: 81].

import React from "react";

// 1. COMPONENT DECLARATION & PROPS DESTRUCTURING
// - 'line': an object containing { item, qty } representing one row in the cart[cite: 81].
// - 'onChangeQty': callback function passed from parent (App/CartPage) to increase/decrease quantity[cite: 81].
// - 'onRemove': callback function passed from parent to delete this item line from state[cite: 81].
function CartItem({ line, onChangeQty, onRemove }) {
  // 2. OBJECT DESTRUCTURING
  // Extracts 'item' (the food object) and 'qty' (number) directly out of the 'line' prop object[cite: 81].
  const { item, qty } = line;

  return (
    // JSX RULE: Always use 'className' instead of 'class' in React[cite: 25, 28].
    <li className="cart-line">
      {/* SECTION 1: Item Name & Unit Price */}
      <div>
        {/* Single curly braces {} allow injecting JavaScript values into JSX text[cite: 24, 53]. */}
        <p className="cart-name">{item.name}</p>

        {/* .toFixed(2) forces the number to show exactly 2 decimal places (e.g. 7.5 -> 7.50)[cite: 24, 81]. */}
        <p className="muted">RM {item.price.toFixed(2)} each</p>
      </div>

      {/* SECTION 2: Quantity Adjustment Buttons (+ and -) */}
      <div className="qty">
        {/* DECREASE BUTTON (-) */}
        {/* 'type="button"' prevents accidental form submission if placed inside a <form>. */}
        {/* 'onClick={() => ...}' uses an arrow function so 'onChangeQty' ONLY executes on click, not during render[cite: 59, 60]. */}
        {/* Passes 'item.id' and delta '-1' back up to the parent state handler. */}
        <button type="button" onClick={() => onChangeQty(item.id, -1)}>
          -
        </button>

        {/* Display current quantity count stored in state */}
        <span>{qty}</span>

        {/* INCREASE BUTTON (+) */}
        {/* Passes 'item.id' and delta '+1' back up to the parent state handler[cite: 79, 81]. */}
        <button type="button" onClick={() => onChangeQty(item.id, 1)}>
          +
        </button>
      </div>

      {/* SECTION 3: Calculated Line Total */}
      {/* Calculates (unit price * quantity) on the fly and formats it to 2 decimal places[cite: 81]. */}
      <p className="line-total">RM {(item.price * qty).toFixed(2)}</p>

      {/* SECTION 4: Remove Button */}
      {/* Calls 'onRemove(item.id)' to filter this item out of the cart array in state[cite: 79, 81]. */}
      <button
        type="button"
        className="link danger"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </li>
  );
}

// EXPORT STATEMENT
// Allows this component to be imported in CartPage.jsx using: import CartItem from './CartItem.jsx'[cite: 25, 81]
export default CartItem;
