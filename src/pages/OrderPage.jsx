import { useCart } from "../hooks/useCart.js";

export default function OrdersPage() {
  const { orders } = useCart();

  if (!orders || orders.length === 0) {
    return <p className="muted">No orders placed yet.</p>;
  }

  return (
    <section>
      <h2 className="section-title">My Orders</h2>
      <div
        className="orders-list"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {orders.map((order) => (
          <div key={order.id} className="card">
            <h3>Order #{order.id}</h3>
            <p>
              <strong>Name:</strong> {order.name}
            </p>
            <p>
              <strong>Mahallah:</strong> {order.mahallah}
            </p>
            <p>
              <strong>Pickup Time:</strong> {order.pickupTime}
            </p>
            <p>
              <strong>Date:</strong> {order.date}
            </p>

            <div
              style={{
                margin: "1rem 0",
                padding: "0.5rem",
                background: "#f9f9f9",
                borderRadius: "4px",
              }}
            >
              <strong>Items Ordered:</strong>
              <ul>
                {order.items.map((line, idx) => (
                  <li key={idx}>
                    {line.qty}x {line.item.name} — RM{" "}
                    {(line.item.price * line.qty).toFixed(2)}
                    {line.note && (
                      <span
                        style={{
                          display: "block",
                          color: "#555",
                          fontStyle: "italic",
                          fontSize: "0.85rem",
                        }}
                      >
                        Note: {line.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <p className="cart-total">
              Total Paid: RM {order.total.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
