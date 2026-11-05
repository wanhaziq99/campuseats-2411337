import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { CartContext } from "./cart-context.js";

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("campuseats-cart", []);
  const [orders, setOrders] = useLocalStorage("campuseats-orders", []);

  const count = cart.reduce((sum, line) => sum + line.qty, 0);
  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0);

  function addToCart(item, note = "") {
    setCart((prevCart) => {
      // Find item with matching ID AND matching note content
      const existingIndex = prevCart.findIndex(
        (line) => line.item.id === item.id && (line.note || "") === note,
      );

      if (existingIndex > -1) {
        return prevCart.map((line, idx) =>
          idx === existingIndex ? { ...line, qty: line.qty + 1 } : line,
        );
      }
      return [...prevCart, { item, qty: 1, note }];
    });
  }

  function changeQty(itemId, delta, note = "") {
    setCart((prevCart) =>
      prevCart
        .map((line) => {
          if (line.item.id === itemId && (line.note || "") === note) {
            return { ...line, qty: line.qty + delta };
          }
          return line;
        })
        .filter((line) => line.qty > 0),
    );
  }

  function removeFromCart(itemId, note = "") {
    setCart((prevCart) =>
      prevCart.filter(
        (line) => !(line.item.id === itemId && (line.note || "") === note),
      ),
    );
  }

  function placeOrder(details) {
    const newOrder = {
      id: Date.now(),
      ...details,
      items: cart,
      total,
      date: new Date().toLocaleString(),
    };
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
  }

  const value = {
    cart,
    orders,
    count,
    total,
    addToCart,
    changeQty,
    removeFromCart,
    placeOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
