import { useCart } from "../hooks/useCart.js";

export default function OrdersPage() {
  const { orders } = useCart();

  if (orders.length === 0) {
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
            <p className="cart-total">
              Total Paid: RM {order.total.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
