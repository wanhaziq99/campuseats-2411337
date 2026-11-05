import MenuItemCard from "./MenuItemCard.jsx";

// --- MENU LIST COMPONENT CHEAT SHEET ---
// Purpose: Renders a grid layout of food items by looping through an array using .map(),
// or displays a fallback message if the menu array is empty.
// Note: This is a presentational/structural component—it owns no state of its own;
// it receives data and event handlers via props and delegates them down to individual item cards[cite: 19, 28].

function MenuList({ items, onAdd }) {
  // 1. CONDITIONAL GUARD CLAUSE (Empty Menu Check)
  // If the items array length is 0, display a fallback message early
  // and stop execution so it doesn't try to map over nothing[cite: 4, 19].
  if (items.length === 0) {
    return <p className="muted">No items on this menu yet[cite: 4].</p>;
  }

  return (
    // CSS grid layout container styling the overall menu card grid
    <div className="grid">
      {/* 2. DYNAMIC LIST RENDERING WITH .map() */}
      {/* .map() iterates over every food object 'item' in the 'items' array, transforming data into JSX elements[cite: 19]. */}
      {items.map((item) => (
        // CRUCIAL REACT RULE: Every item in a list loop MUST have a unique, stable 'key' prop using item.id.
        // Never use the array index as a key because indexes shift when items are sorted, added, or removed[cite: 19, 58]!
        // We pass down the individual 'item' object and the 'onAdd' callback function as props[cite: 18, 19].
        <MenuItemCard key={item.id} item={item} onAdd={onAdd} />
      ))}
    </div>
  );
}

// EXPORT STATEMENT
// Allows this component to be imported in App.jsx, VendorPage.jsx, or other parent views using:
// import MenuList from './MenuList.jsx'[cite: 2, 28]
export default MenuList;
