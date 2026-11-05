// --- MENU ITEM CARD COMPONENT CHEAT SHEET ---
// Purpose: Renders an individual food/drink product card in the menu list.
// Note: This is a presentational component—it owns no state of its own;
// it receives data via props and reports click events upward via the 'onAdd' callback function.

// 1. COMPONENT DECLARATION & PROPS DESTRUCTURING
// - 'item': an object representing a single food dish (contains id, name, description, price, category, available).
// - 'onAdd': a callback function passed from the parent to add this item to the cart when clicked.
function MenuItemCard({ item, onAdd }) {
  return (
    // Semantic HTML5 <article> tag wrapped with card classes for layout styling
    <article className="card menu-card">
      {/* Thumbnail box displaying the first letter of the item name as an icon */}
      {/* item.name.charAt(0) grabs the very first letter (e.g., "N" for "Nasi Lemak") */}
      {/* aria-hidden="true" tells screen readers to ignore this decorative initial icon */}
      <div className="thumb" aria-hidden="true">
        {item.name.charAt(0)}
      </div>

      {/* Category tag label (e.g., "Rice", "Drinks", "Noodles") */}
      <p className="tag">{item.category}</p>

      {/* Item Name header */}
      <h3>{item.name}</h3>

      {/* Item descriptive text */}
      <p className="muted">{item.description}</p>

      {/* Price display formatted nicely to 2 decimal places using .toFixed(2) (e.g., 7.5 -> 7.50) */}
      <p className="price">RM {item.price.toFixed(2)}</p>

      {/* --- INTERACTIVE ACTION BUTTON --- */}
      <button
        className="btn"
        // disabled={!item.available}: Evaluates to true if item is NOT available, disabling the button so users can't click it
        disabled={!item.available}
        // onClick uses an arrow function so 'onAdd(item)' ONLY executes when clicked, not instantly on render
        onClick={() => onAdd(item)}
      >
        {/* Ternary Operator (condition ? ifTrue : ifFalse): */}
        {/* If available is true, show "Add to cart"; otherwise, show "Sold out" */}
        {item.available ? "Add to cart" : "Sold out"}
      </button>
    </article>
  );
}

// EXPORT STATEMENT
// Allows this component to be imported in MenuList.jsx or other parent views using:
// import MenuItemCard from './MenuItemCard.jsx'
export default MenuItemCard;
