export default function CartItem({ line, onChangeQty, onRemove }) {
  const noteText = line.note || "";

  return (
    <li className="cart-item">
      <div>
        <strong>{line.item.name}</strong>
        <p className="muted">RM {line.item.price.toFixed(2)} each</p>
        {noteText && (
          <p
            style={{ fontStyle: "italic", fontSize: "0.85rem", color: "#666" }}
          >
            Note: "{noteText}"
          </p>
        )}
      </div>
      <div className="qty-controls">
        <button onClick={() => onChangeQty(line.item.id, -1, noteText)}>
          -
        </button>
        <span>{line.qty}</span>
        <button onClick={() => onChangeQty(line.item.id, 1, noteText)}>
          +
        </button>
        <button
          onClick={() => onRemove(line.item.id, noteText)}
          className="btn-danger"
        >
          &times;
        </button>
      </div>
    </li>
  );
}
