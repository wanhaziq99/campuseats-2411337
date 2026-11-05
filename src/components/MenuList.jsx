import { useState } from "react";

export default function MenuList({ items, onAdd }) {
  const [notes, setNotes] = useState({});

  function handleNoteChange(itemId, val) {
    setNotes((prev) => ({ ...prev, [itemId]: val }));
  }

  function handleAdd(item) {
    const itemNote = notes[item.id] || "";
    onAdd(item, itemNote);
    // Clear input field after adding item to cart
    setNotes((prev) => ({ ...prev, [item.id]: "" }));
  }

  return (
    <div className="menu-grid">
      {items.map((item) => (
        <div key={item.id} className="card menu-card">
          <h3>{item.name}</h3>
          <p className="muted">{item.description}</p>
          <p className="price">RM {item.price.toFixed(2)}</p>

          <input
            type="text"
            placeholder="Special instructions (e.g., Less spicy)"
            value={notes[item.id] || ""}
            onChange={(e) => handleNoteChange(item.id, e.target.value)}
            style={{ width: "100%", marginBottom: "0.5rem", padding: "0.4rem" }}
          />

          <button className="btn" onClick={() => handleAdd(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
