import CartItem from "./CartItem.jsx";
import CheckoutForm from "./CheckoutForm.jsx";

// --- CART PAGE COMPONENT CHEAT SHEET ---
// Purpose: Renders the full cart screen view, handles empty cart states,
// computes overall running totals dynamically using .reduce(), maps through cart lines,
// and embeds the checkout form.
function CartPage({ cart, onChangeQty, onRemove, onPlaceOrder }) {
  // 1. CONDITIONAL GUARD CLAUSE (Empty Cart Check)
  // If the cart array length is 0, display an empty notice message early
  // and stop executing the rest of the component[cite: 80].
  if (cart.length === 0) {
    return (
      <p className="muted">
        Your cart is empty. Pick something from a menu first.
      </p>
    );
  }

  // 2. DERIVED STATE (Calculating Overall Total Price)
  // .reduce() loops through every cart line.
  // - 'sum' is the accumulator keeping track of the running total (starts at 0).
  // - 'line' represents each item row object ({ item, qty }).
  // We multiply item price by quantity for each line and add it to the sum.
  // Rule reminder: Always derive totals on the fly instead of saving them in a separate useState.
  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0);

  return (
    // Main two-column CSS grid layout container holding the cart list and checkout form[cite: 81]
    <div className="cart-layout">
      <div className="card">
        {/* Unordered list container for cart item rows */}
        <ul className="cart-list">
          {/* 3. LIST RENDERING WITH .map() */}
          {cart.map((line) => (
            // CRUCIAL REACT RULE: Every mapped element must receive a unique, stable 'key' prop using item ID[cite: 58, 80].
            <CartItem
              key={line.item.id}
              line={line}
              onChangeQty={onChangeQty}
              onRemove={onRemove}
            />
          ))}
        </ul>

        {/* Displaying final calculated total formatted to 2 decimal places with .toFixed(2)[cite: 24, 81] */}
        <p className="cart-total">Total: RM {total.toFixed(2)}</p>
      </div>

      {/* 4. EMBEDDING THE CHECKOUT FORM COMPONENT */}
      {/* Passes the 'onPlaceOrder' callback function down to the form so it can submit data back up[cite: 80]. */}
      <CheckoutForm onPlaceOrder={onPlaceOrder} />
    </div>
  );
}

// Exporting component for use in App.jsx or router layouts[cite: 25, 80]
export default CartPage;
